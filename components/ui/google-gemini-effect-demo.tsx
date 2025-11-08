"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";
// Removed unused Image import

export function GoogleGeminiEffectDemo() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div ref={ref} className="relative w-full">
      {/* Full-screen hero container mimicking homepage style */}
      <div className="relative w-full min-h-screen flex items-start justify-center px-0 pb-0">
        <div className="relative w-screen h-[100dvh] overflow-hidden bg-[#0a0a0a] flex items-start justify-center pt-10 sm:pt-14 lg:pt-16">
          {/* Corner gradient glows */}
          <span aria-hidden className="pointer-events-none absolute top-0 left-0 w-[28rem] h-[28rem] glow blur-[120px]" style={{background:"radial-gradient(closest-side at 0% 0%, #ff5a26 30%, transparent 85%)",filter:"saturate(1.4) brightness(1.25)"}} />
          <span aria-hidden className="pointer-events-none absolute top-0 right-0 w-[28rem] h-[28rem] glow blur-[120px]" style={{background:"radial-gradient(closest-side at 100% 0%, #ff5a26 30%, transparent 85%)",filter:"saturate(1.4) brightness(1.25)"}} />
          <span aria-hidden className="pointer-events-none absolute bottom-0 left-0 z-[19] w-[40rem] h-[40rem] glow blur-[140px] mix-blend-screen" style={{background:"radial-gradient(closest-side at 0% 100%, #ff5a26 45%, transparent 88%)",filter:"saturate(1.8) brightness(1.4)",opacity:0.95}} />
          <span aria-hidden className="pointer-events-none absolute bottom-0 right-0 z-[19] w-[40rem] h-[40rem] glow blur-[140px] mix-blend-screen" style={{background:"radial-gradient(closest-side at 100% 100%, #ff5a26 45%, transparent 88%)",filter:"saturate(1.8) brightness(1.4)",opacity:0.95}} />

          {/* Center content */}
          {/* Heading positioned higher; Gemini effect directly behind */}
          <div className="relative z-30 max-w-4xl px-6 text-center mx-auto soft-text-shadow pt-0">
            <h1 className="text-4xl sm:text-6xl leading-tight">
              <span className="font-medium">The Smartest Member of</span>
              <br />
              <span className="font-bold italic">Your Ops Team</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
              NobleIntelligence™ monitors every shipment, predicts risks, and suggests your next best action—embedded directly in your workflow.
            </p>
          </div>
          <div className="absolute inset-0 z-20 flex items-start justify-center pt-10 sm:pt-14 lg:pt-16">
            <GoogleGeminiEffect hideText className="w-full" pathLengths={[pathLengthFirst,pathLengthSecond,pathLengthThird,pathLengthFourth,pathLengthFifth]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoogleGeminiEffectDemo;
