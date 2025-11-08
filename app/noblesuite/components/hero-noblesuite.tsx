"use client";
import React, { useMemo, useState } from "react";
import { NobleSuiteQuickActions } from "./noblesuite-quick-actions";
import { AnimatePresence, motion } from "motion/react";
// import { Button } from "@/components/ui/button";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
// import { SparklesIcon } from 'lucide-react' // unused, commented to silence lint warning

export default function HeroNobleSuite() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#0a0a0a] text-foreground">
      <BackgroundRippleEffect rows={20} cols={40} cellSize={48} />
      {/* Layout: push toolbar + text slightly lower for final positioning */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-start px-6 pt-36 sm:pt-40 pb-12 lg:px-8">
        {/* Toolbar immediately above heading (shifted with mt to follow request) */}
        <div className="mb-3 mt-1 flex w-full justify-center pointer-events-auto z-20">
          <TopToolbar />
        </div>
        <div className="mx-auto mt-1 max-w-4xl text-center sm:mt-3">
          <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-6xl">
            The Logistics-Native
            <br className="hidden sm:block" />
            <span className="relative inline-block px-2">
              {/* orange highlight background (stronger fade) */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 -inset-y-1 -z-10 rounded-lg bg-[#ff5a26]/15 ring-1 ring-[#ff5a26]/30 backdrop-blur-[1px]"
              />
              <WorkspaceEditable />
            </span>
            <span className="font-extrabold">.</span>
          </h1>
          <p className="text-pretty mx-auto mt-3 max-w-3xl text-base text-neutral-300 sm:text-lg">
            NobleSuite™: The integrated document and data powerhouse that replaces scattered files, insecure emails, and operational chaos.
          </p>
          {/* Quick actions directly under hero copy */}
          <div className="mx-auto mt-10 max-w-5xl">
            <NobleSuiteQuickActions />
          </div>
        </div>
      </div>

      {/* subtle corner glows */}
      <span aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-[28rem] w-[28rem] blur-[120px]" style={{background: "radial-gradient(closest-side at 0% 0%, #ff5a26 30%, transparent 85%)", filter: "saturate(1.4) brightness(1.1)"}} />
      <span aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-[32rem] w-[32rem] blur-[140px]" style={{background: "radial-gradient(closest-side at 100% 100%, #ff5a26 38%, transparent 88%)", filter: "saturate(1.6) brightness(1.2)"}} />
    </section>
  );
}

// Formatting state + word switchers via module-level singletons for simplicity
let setFormatting: React.Dispatch<React.SetStateAction<{b:boolean;i:boolean;s:boolean;}>> | null = null;
let nextWord: (() => void) | null = null;

function WorkspaceEditable() {
  const [fmt, setFmt] = useState({ b: true, i: false, s: false });
  const words = ["Workspace", "Console", "Command Center", "Hub"];
  const [idx, setIdx] = useState(0);
  setFormatting = setFmt;
  nextWord = () => setIdx((i) => (i + 1) % words.length);
  const cls = useMemo(() => {
    return [
      fmt.b ? "font-extrabold" : "font-normal",
      fmt.i ? "italic" : "",
      fmt.s ? "line-through" : "",
    ].join(" ");
  }, [fmt]);
  return (
    <span className={cls}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[idx]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="inline-block"
        >
          {words[idx]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// Toolbar below word variant now repurposed as top toolbar
function TopToolbar() {
  const [active, setActive] = useState(false);
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-1 rounded-md border border-neutral-200/70 bg-neutral-50/80 px-3 py-1.5 text-[11px] font-medium text-neutral-600 shadow-sm backdrop-blur dark:border-neutral-700/70 dark:bg-neutral-800/70 dark:text-neutral-300 pointer-events-auto">
        <FormatButton label="B" activeKey="b" defaultActive />
        <FormatButton label="I" activeKey="i" italic />
        <FormatButton label="S" activeKey="s" strike />
        <button
          onClick={() => { nextWord?.(); setActive(true); setTimeout(()=>setActive(false), 950); }}
          className="relative flex items-center gap-1 rounded-sm px-2 py-0.5 transition-colors hover:bg-neutral-200/70 dark:hover:bg-neutral-700/70"
          aria-label="Improve (cycle word)"
        >
          <WandIcon className="h-3.5 w-3.5 text-neutral-500 dark:text-neutral-300 transition-transform duration-500 ease-out" style={{ transform: active ? 'rotate(20deg) scale(1.12)' : 'rotate(0deg) scale(1)' }} />
          <span className="text-neutral-600 dark:text-neutral-300">Improve</span>
        </button>
      </div>
    </div>
  );
}

function FormatButton({ label, activeKey, italic = false, strike = false, defaultActive = false }: { label: string; activeKey: 'b' | 'i' | 's'; italic?: boolean; strike?: boolean; defaultActive?: boolean }) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState<boolean>(defaultActive);
  return (
    <button
      onClick={() => {
        setActive(a => !a);
        setFormatting?.(p => ({ ...p, [activeKey]: !p[activeKey] }));
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={[
        'relative rounded-sm px-2 py-0.5 transition-colors',
        active ? 'bg-neutral-200/80 dark:bg-neutral-700/70 ring-1 ring-neutral-300 dark:ring-neutral-600' : 'hover:bg-neutral-200/60 dark:hover:bg-neutral-700/60',
      ].join(' ')}
      aria-pressed={undefined}
    >
      <span
        className={[
          'text-xs font-semibold',
          italic ? 'italic' : '',
          strike ? 'line-through' : '',
          active ? 'text-neutral-900 dark:text-neutral-50' : 'text-neutral-600 dark:text-neutral-300',
        ].join(' ')}
        style={{
          opacity: 1,
        }}
      >
        {label}
      </span>
      {/* Active glow */}
      <span
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(120,120,120,${(hover || active) ? 0.15 : 0}), transparent 70%)`,
          opacity: 1,
        }}
      />
    </button>
  );
}

function WandIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M8.5 2a.75.75 0 01.75.75V4h1.25a.75.75 0 010 1.5H9.25v1.25a.75.75 0 01-1.5 0V5.5H6.5a.75.75 0 010-1.5h1.25V2.75A.75.75 0 018.5 2zm9 3a.75.75 0 01.75.75V7h1.25a.75.75 0 010 1.5H18.25v1.25a.75.75 0 01-1.5 0V8.5H15.5a.75.75 0 010-1.5h1.25V5.75a.75.75 0 01.75-.75zM3.22 14.97a2.75 2.75 0 013.89 0l2.92 2.92a2.75 2.75 0 010 3.89l-.91.91a2.75 2.75 0 01-3.89 0l-2.92-2.92a2.75 2.75 0 010-3.89l.91-.91zm1.06 1.06l-.91.91a1.25 1.25 0 000 1.77l2.92 2.92a1.25 1.25 0 001.77 0l.91-.91a1.25 1.25 0 000-1.77l-2.92-2.92a1.25 1.25 0 00-1.77 0zM11.47 6.97a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06z" />
    </svg>
  );
}

// Removed unused SparklesIcon component to silence lint warning.
