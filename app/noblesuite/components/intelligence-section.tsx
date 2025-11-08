"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
// Replacing GoCopilot icon import (react-icons not installed) with inline SVG icon.
import { motion, animate } from "motion/react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { Lock } from "lucide-react";

export default function IntelligenceSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24" aria-labelledby="intelligence-heading">
      {/* Mobile-first heading above cards */}
      <div className="mb-6 text-left md:mb-8 md:text-right">
        <h2 id="intelligence-heading" className="text-3xl font-bold sm:text-4xl">
          This Isn’t Just Storage. It’s Intelligence.
        </h2>
        <p className="mt-2 max-w-xl text-neutral-600 dark:text-neutral-400 md:ml-auto">
          NobleSuite turns your static files into active, intelligent assets.
        </p>
      </div>
      <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
        {/* Left column: AI block */}
        <AIPoweredBlock />
        {/* Right column: blockchain fills remaining with its own label */}
        <div className="grid h-full grid-rows-1">
          <BlockchainBlock />
        </div>
      </div>
    </section>
  );
}

function AIPoweredBlock() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 dark:bg-neutral-900/60">
      {/* In-card label (badge) at top-left matching other card style */}
      <div className="absolute left-4 top-4 z-30 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 ring-1 ring-emerald-500/30 dark:text-emerald-300">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
        AI‑Powered Document Processing
      </div>
      {/* Graphic above the title spanning full width */}
      <CardSkeletonContainer className="mb-4">
        <Skeleton />
      </CardSkeletonContainer>
      <h3 className="text-xl font-semibold">AI-Powered Document Processing</h3>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        Stop manual data entry. OCR and NLP read invoices, BOLs, and IDs—extract keys and flag inconsistencies.
      </p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-400">
        <li>Auto‑parse invoice numbers, container IDs, totals</li>
        <li>Inline anomaly alerts and missing field checks</li>
        <li>Structured payloads synced to shipment objects</li>
      </ul>
    </div>
  );
}

function BlockchainBlock() {
  return <DottedGlowBackgroundDemo />;
}

// ---- Provided animated card demo (adapted) ----
function Skeleton() {
  React.useEffect(() => {
    const scale = [1, 1.1, 1];
    const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
    const sequence: [string, { scale: number[]; transform: string[] }, { duration: number }][] = [
      [
        ".circle-1",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-2",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-3",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-4",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
      [
        ".circle-5",
        {
          scale,
          transform,
        },
        { duration: 0.8 },
      ],
    ];
    animate(sequence, {
      repeat: Infinity as unknown as number,
      repeatDelay: 1,
    });
  }, []);
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden p-8">
      <div className="flex shrink-0 flex-row items-center justify-center gap-2">
        <Container className="circle-1 h-8 w-8">
          <ClaudeLogo className="h-4 w-4" />
        </Container>
        <Container className="circle-2 h-12 w-12">
          <CopilotInlineIcon className="h-6 w-6 text-neutral-800 dark:text-white" />
        </Container>
        <Container className="circle-3">
          <Image src="/logomark.svg" alt="NobleSuite" width={32} height={32} className="h-8 w-8 dark:invert" />
        </Container>
        <Container className="circle-4 h-12 w-12">
          <MetaIconOutline className="h-6 w-6" />
        </Container>
        <Container className="circle-5 h-8 w-8">
          <GeminiLogo className="h-4 w-4" />
        </Container>
      </div>

      <div className="animate-move absolute top-20 z-40 m-auto h-40 w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent">
        <div className="absolute top-1/2 -left-10 h-32 w-10 -translate-y-1/2">
          <Sparkles />
        </div>
      </div>
    </div>
  );
}

function Sparkles() {
  // Deterministic positions to avoid SSR hydration mismatch
  const stars = React.useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        top: (i * 83) % 100,
        left: (i * 47) % 100,
        duration: 4 + ((i * 29) % 100) / 100 * 2,
        delay: ((i * 13) % 10) / 10,
      })),
    [],
  );
  return (
    <div className="absolute inset-0">
      {stars.map((s, i) => (
        <motion.span
          key={`star-${i}`}
          initial={{ opacity: 0.6 }}
          animate={{
            opacity: [0.6, 1, 0.4],
            x: [0, (i % 2 === 0 ? 1 : -1) * 3, 0],
            y: [0, (i % 3 === 0 ? -1 : 1) * 3, 0],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        />
      ))}
    </div>
  );
}

// Removed unused Card, CardTitle, CardDescription components to reduce bundle size & silence lint warnings.

function CardSkeletonContainer({ className, children, showGradient = true }: { className?: string; children: React.ReactNode; showGradient?: boolean; }) {
  return (
    <div
      className={cn(
        "z-40 h-[15rem] rounded-xl md:h-[20rem]",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]",
      )}
    >
      {children}
    </div>
  );
}

function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

function ClaudeLogo({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 512" className={className}>
      <rect fill="#CC9B7A" width="512" height="512" rx="104.187" ry="105.042" />
      <path fill="#1F1F1E" fillRule="nonzero" d="M318.663 149.787h-43.368l78.952 212.423 43.368.004-78.952-212.427zm-125.326 0l-78.952 212.427h44.255l15.932-44.608 82.846-.004 16.107 44.612h44.255l-79.126-212.427h-45.317zm-4.251 128.341l26.91-74.701 27.083 74.701h-53.993z" />
    </svg>
  );
}

// Removed unused OpenAILogo component (not currently rendered).

function GeminiLogo({ className }: { className?: string }) {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={className}>
      <path d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z" fill="url(#prefix__paint0_radial_980_20147)" />
      <defs>
        <radialGradient id="prefix__paint0_radial_980_20147" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)">
          <stop offset=".067" stopColor="#9168C0" />
          <stop offset=".343" stopColor="#5684D1" />
          <stop offset=".672" stopColor="#1BA1E3" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function MetaIconOutline({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 287.56 191" className={className}>
      <defs>
        <linearGradient id="linear-gradient" x1="62.34" y1="101.45" x2="260.34" y2="91.45" gradientTransform="matrix(1, 0, 0, -1, 0, 192)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0064e1" />
          <stop offset="0.4" stopColor="#0064e1" />
          <stop offset="0.83" stopColor="#0073ee" />
          <stop offset="1" stopColor="#0082fb" />
        </linearGradient>
        <linearGradient id="linear-gradient-2" x1="41.42" y1="53" x2="41.42" y2="126" gradientTransform="matrix(1, 0, 0, -1, 0, 192)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0082fb" />
          <stop offset="1" stopColor="#0064e0" />
        </linearGradient>
      </defs>
      <path fill="#0081fb" d="M31.06,126c0,11,2.41,19.41,5.56,24.51A19,19,0,0,0,53.19,160c8.1,0,15.51-2,29.79-21.76,11.44-15.83,24.92-38,34-52l15.36-23.6c10.67-16.39,23-34.61,37.18-47C181.07,5.6,193.54,0,206.09,0c21.07,0,41.14,12.21,56.5,35.11,16.81,25.08,25,56.67,25,89.27,0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191V160c17.63,0,22-16.2,22-34.74,0-26.42-6.16-55.74-19.73-76.69-9.63-14.86-22.11-23.94-35.84-23.94-14.85,0-26.8,11.2-40.23,31.17-7.14,10.61-14.47,23.54-22.7,38.13l-9.06,16c-18.2,32.27-22.81,39.62-31.91,51.75C84.74,183,71.12,191,53.19,191c-21.27,0-34.72-9.21-43-23.09C3.34,156.6,0,141.76,0,124.85Z" />
      <path fill="url(#linear-gradient)" d="M24.49,37.3C38.73,15.35,59.28,0,82.85,0c13.65,0,27.22,4,41.39,15.61,15.5,12.65,32,33.48,52.63,67.81l7.39,12.32c17.84,29.72,28,45,33.93,52.22,7.64,9.26,13,12,19.94,12,17.63,0,22-16.2,22-34.74l27.4-.86c0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191c-12.8,0-24.14-2.78-36.68-14.61-9.64-9.08-20.91-25.21-29.58-39.71L146.08,93.6c-12.94-21.62-24.81-37.74-31.68-45C107,40.71,97.51,31.23,82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78Z" />
      <path fill="url(#linear-gradient-2)" d="M82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78C38.61,71.62,31.06,99.34,31.06,126c0,11,2.41,19.41,5.56,24.51L10.14,167.91C3.34,156.6,0,141.76,0,124.85,0,94.1,8.44,62.05,24.49,37.3,38.73,15.35,59.28,0,82.85,0Z" />
    </svg>
  );
}

function CopilotInlineIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2c2.805 0 5.217 1.636 6.42 4.016A6.002 6.002 0 0 1 22 12c0 3.314-2.686 6-6 6h-1.586l1.293 1.293a1 1 0 1 1-1.414 1.414L12 19.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L9.586 18H8c-3.314 0-6-2.686-6-6 0-2.54 1.588-4.828 3.58-5.984C6.783 3.636 9.195 2 12 2Zm0 2c-2.094 0-3.94 1.106-4.973 2.902A1 1 0 0 1 6.17 7.4 3.997 3.997 0 0 0 4 11.999C4 14.206 5.794 16 8 16h8c2.206 0 4-1.794 4-4 0-1.465-.8-2.758-1.998-3.45a1 1 0 0 1-.413-1.379C15.94 5.106 14.094 4 12 4Z" />
    </svg>
  );
}

// ---- DottedGlow demo adapted with green dots ----
function DottedGlowBackgroundDemo() {
  return (
    <div className="relative h-full min-h-[28rem] md:min-h-[34rem] overflow-hidden rounded-2xl border border-transparent p-6 ring-1 ring-black/5 dark:ring-white/5">
      {/* In-card label */}
      <div className="absolute left-4 top-4 z-30 inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-600 ring-1 ring-sky-500/30 dark:text-sky-300">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-500" />
        Blockchain‑Enhanced Integrity
      </div>
      {/* Center lock with radial animation */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-xl"
          animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
  <Lock className="relative z-20 mx-auto h-12 w-12 text-emerald-500 md:h-14 md:w-14" />
      </div>

      {/* Text anchored to bottom-left */}
      <div className="relative z-20 flex h-full items-end">
        <div className="max-w-prose pb-1 pl-1 text-left">
          <h3 className="text-lg font-semibold text-neutral-800 md:text-xl dark:text-neutral-100">Immutable audit trail</h3>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
            We anchor a cryptographic hash of critical documents to a blockchain, creating verifiable proof of integrity.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-400">
            <li>Tamper‑evident history with public verification</li>
            <li>Trust across shippers, brokers, and carriers</li>
            <li>Hash anchoring pipeline, privacy‑preserving by design</li>
          </ul>
        </div>
      </div>
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
        opacity={1}
        gap={10}
        radius={1.6}
        color="rgba(34,197,94,0.85)"
        glowColor="rgba(16,185,129,0.9)"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
    </div>
  );
}
