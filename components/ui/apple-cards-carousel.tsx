"use client";
import React, { useEffect, useRef, useState, createContext, useContext, useMemo } from "react";
import { IconArrowUpRight, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
// next/image not used here; cards are simple grey surfaces
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps { items: React.ReactElement[]; mode?: "scroll" | "focus" }
interface CardData { id?: string; src: string; title: string; category: string; content: React.ReactNode; subtitle?: string }
interface CardProps { card: CardData; index: number; layout?: boolean }

// context moved below imports for clarity
export const CarouselContext = createContext<{ onCardClose: (index: number) => void; currentIndex: number }>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, mode = "focus" }: CarouselProps) => {
  const desktopRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // desktop scroll support (kept for future)
  useEffect(() => {
    if (mode !== "scroll") return;
    const el = desktopRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLDivElement>("[data-carousel-card]");
    cards[currentIndex]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [currentIndex, mode]);

  return (
    <CarouselContext.Provider value={{ onCardClose: setCurrentIndex, currentIndex }}>
      <div className="relative w-full py-6 md:py-12">
        {/* mobile: vertical stacked cards */}
        <div className="sm:hidden flex flex-col gap-4 px-4">
          {items.map((item, i) => (
            <div key={"m-stack-" + i} className="w-full">
              {item}
            </div>
          ))}
        </div>
        {/* desktop/tablet: restore horizontal card row (no native scroll) */}
        <div
          ref={desktopRef}
          className={cn(
            "hidden sm:block",
            mode === "scroll" ? "overflow-x-scroll no-scrollbar" : "overflow-hidden",
          )}
        >
          <div className="mx-auto flex max-w-7xl flex-row justify-start gap-4 pl-4 pr-4">
            {items.map((item, i) => (
              <motion.div
                key={"d-slide-" + i}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.12 * i } }}
                className="shrink-0 rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};
// --- Card component ---
export const Card: React.FC<CardProps> = ({ card, index, layout }) => {
  const { onCardClose, currentIndex } = useContext(CarouselContext);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  // Narrow the ref type for hook (ensure non-null assertion inside hook or here)
  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setOpen(false));

  const bgSrc = useMemo(() => {
    switch (card.id) {
      case "noblefiles":
        return "/files.png";
      case "nobledocs":
        return "/docs.png";
      case "noblecells":
        return "/cells.png";
      default:
        return undefined;
    }
  }, [card.id]);

  const focusCard = () => onCardClose(index);
  const openModal = (e: React.MouseEvent) => { e.stopPropagation(); setOpen(true); };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen w-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="relative mx-auto my-16 w-full max-w-5xl rounded-3xl p-2"
            >
              <div className="relative rounded-3xl bg-[#F5F5F7] p-6 md:p-10 shadow-xl dark:bg-neutral-900/90 border border-neutral-200/60 dark:border-neutral-700/50">
                <button
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-md bg-neutral-200/80 text-neutral-700 hover:bg-neutral-300 dark:bg-neutral-800/70 dark:text-neutral-200 dark:hover:bg-neutral-700"
                  aria-label="Close"
                >
                  <IconX className="h-5 w-5" />
                </button>
                <h2 className="text-xl md:text-3xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-100 mb-6">{card.title}</h2>
                {card.content && <div className="space-y-6">{card.content}</div>}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.div
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={focusCard}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            focusCard();
          }
        }}
        data-carousel-card
        className={cn(
          "relative z-10 flex flex-col items-start justify-start overflow-hidden rounded-3xl transition-[width,background,filter] duration-500 h-[22rem] sm:h-80 md:h-[40rem]",
          index === currentIndex
            ? "w-full sm:w-80 md:w-[32rem] bg-[#262626] text-white"
            : "w-full sm:w-64 md:w-72 bg-black text-white",
          "group hover:brightness-110 hover:shadow-lg hover:ring-1 hover:ring-white/10",
        )}
      >
        {bgSrc && (
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={bgSrc}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
              style={{
                opacity: index === currentIndex ? 0.24 : 0.14,
                filter:
                  card.id === "nobledocs" || card.id === "noblecells"
                    ? "invert(1) grayscale(0.2) contrast(0.9) brightness(0.95)"
                    : "grayscale(0.1) contrast(1) brightness(0.95)",
                maskImage:
                  "radial-gradient(140% 100% at 80% 50%, white 45%, rgba(255,255,255,0.6) 70%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(140% 100% at 80% 50%, white 45%, rgba(255,255,255,0.6) 70%, transparent 100%)",
              }}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 z-40 p-6 md:p-8">
          <motion.p
            layoutId={layout ? `category-${card.category}` : undefined}
            className="text-left font-sans text-sm font-medium text-white/90 md:text-base"
          >
            {card.category}
          </motion.p>
          <motion.p
            layoutId={layout ? `title-${card.title}` : undefined}
            className="mt-1 max-w-xs text-left font-sans text-xl font-semibold text-white [text-wrap:balance] md:text-3xl"
          >
            {card.title}
          </motion.p>
          {card.subtitle && (
            <p className="mt-1 max-w-xs text-left text-xs font-normal text-white/80 md:text-sm">{card.subtitle}</p>
          )}
          {index === currentIndex && (
            <button
              onClick={openModal}
              aria-label={`Open details for ${card.title}`}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow backdrop-blur transition-colors hover:bg-white"
              title="Open modal"
            >
              <IconArrowUpRight className="h-5 w-5" />
            </button>
          )}
        </div>
      </motion.div>
    </>
  );
};

