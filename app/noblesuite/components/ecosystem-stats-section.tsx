"use client";
import React from "react";
// import StatsSection from "@/components/stats-4";
import Image from "next/image";

export default function EcosystemStatsSection() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="ecosystem-heading">
      <div className="mx-auto max-w-5xl px-6 space-y-10">
        <div className="max-w-3xl space-y-6">
          <h2 id="ecosystem-heading" className="text-4xl font-semibold lg:text-5xl text-white">
            The NobleSuite ecosystem transforms logistics.
          </h2>
          <p className="text-neutral-300">
            NobleSuite is more than just a platform — it’s a complete ecosystem that connects intelligence, security, and collaboration across every workflow.
          </p>
          <p className="text-neutral-300">
            It empowers modern logistics teams — from global operations to startups — with unified tools, APIs, and intelligent systems that drive precision and trust in every shipment.
          </p>
        </div>
        {/* Stats grid (updated per request) */}
        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          <div className="space-y-10">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-zinc-800">+45</div>
                <p className="text-sm text-neutral-400">Supported File Types
                  <span className="mt-1 block text-xs text-neutral-500 dark:text-neutral-400">Natively handles PDF, DOCX, XLSX, CSV & critical image formats.</span>
                </p>
              </div>
              <div className="space-y-2">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-zinc-800">~$216<span className="text-base font-medium">/user/year</span></div>
                <p className="text-sm text-neutral-400">Saved in Software Costs
                  <span className="mt-1 block text-xs text-neutral-500 dark:text-neutral-400">Integrated Files, Notes & Cells engine reduces external suite licenses.</span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <blockquote className="border-l-4 pl-4">
              <p className="text-neutral-300">
                “Switching to NobleSuite was like stepping from chaos into clarity. It gives us control, insight, and confidence — all in one secure, beautifully engineered workspace.”
              </p>
              <div className="mt-6 space-y-3">
                <cite className="block font-medium text-white">Elena Ruiz, COO</cite>
                <Image src="/maersk.png" alt="Maersk Logo" width={120} height={32} className="h-8 w-auto dark:invert" />
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
