"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Folder, Table, Cpu, Lock, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface IntelligenceProps {
  className?: string;
  circleText?: string;
  circleLogoSrc?: string;
  circleLogoWhite?: boolean;
  hideTitleIcon?: boolean;
  badgeTexts?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  buttonTexts?: {
    first: string;
    second: string;
  };
  buttonIcons?: {
    first?: "cells" | "folder" | "heart" | "sparkles";
    second?: "cells" | "folder" | "heart" | "sparkles";
  };
  title?: string;
  lightColor?: string;
  ambientPulse?: boolean;
}

const Intelligence = ({
  className,
  circleText,
  circleLogoSrc,
  circleLogoWhite,
  hideTitleIcon,
  badgeTexts,
  buttonTexts,
  buttonIcons,
  title,
  lightColor,
  ambientPulse,
}: IntelligenceProps) => {
  const renderIcon = (name?: "cells" | "folder" | "heart" | "sparkles") => {
    switch (name) {
      case "cells":
        return <Table className="size-4" />;
      case "folder":
        return <Folder className="size-4" />;
      case "heart":
        // Use sparkles as a friendly default for heart-handshake
        return <Sparkles className="size-4" />;
      case "sparkles":
        return <Sparkles className="size-4" />;
      default:
        return <Folder className="size-4" />;
    }
  };
  return (
    <div
      className={cn(
        "relative flex h-[330px] w-full max-w-[500px] flex-col items-center",
        className
      )}
    >
      {/* HTML chips positioned at the beam start points (responsive, auto-width) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Start (31,12) -> 15.5% / 12% */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 h-6 rounded-full border bg-[#18181B] px-2.5 text-[10px] font-medium flex items-center gap-1.5 whitespace-nowrap"
          style={{ left: `${(31 / 200) * 100}%`, top: `calc(${(12 / 100) * 100}% - 2px)` }}
        >
          <Sparkles className="size-3.5" />
          <span>{badgeTexts?.first || "Intelligence"}</span>
        </div>
        {/* Start (77,12) -> 38.5% / 12% */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 h-6 rounded-full border bg-[#18181B] px-2.5 text-[10px] font-medium flex items-center gap-1.5 whitespace-nowrap"
          style={{ left: `${(77 / 200) * 100}%`, top: `calc(${(12 / 100) * 100}% - 2px)` }}
        >
          <Cpu className="size-3.5" />
          <span>{badgeTexts?.second || "Suite"}</span>
        </div>
        {/* Start (124,12) -> 62% / 12% */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 h-6 rounded-full border bg-[#18181B] px-2.5 text-[10px] font-medium flex items-center gap-1.5 whitespace-nowrap"
          style={{ left: `${(124 / 200) * 100}%`, top: `calc(${(12 / 100) * 100}% - 2px)` }}
        >
          <Zap className="size-3.5" />
          <span>{badgeTexts?.third || "Automation"}</span>
        </div>
        {/* Start (170,12) -> 85% / 12% */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 h-6 rounded-full border bg-[#18181B] px-2.5 text-[10px] font-medium flex items-center gap-1.5 whitespace-nowrap"
          style={{ left: `${(170 / 200) * 100}%`, top: `calc(${(12 / 100) * 100}% - 2px)` }}
        >
          <Lock className="size-3.5" />
          <span>{badgeTexts?.fourth || "Integrity"}</span>
        </div>
      </div>
      {/* SVG Paths  */}
      <svg
        className="h-full sm:w-full text-muted"
        width="100%"
        height="100%"
        viewBox="0 0 200 100"
      >
        <g stroke="currentColor" fill="none" strokeWidth="0.4" strokeDasharray="100 100" pathLength="100">
          {/* Paths kept but with minor y-shift to sit a touch lower */}
          <path d="M 31 12 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" />
          <path d="M 77 12 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" />
          <path d="M 124 12 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" />
          <path d="M 170 12 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" />
          <animate attributeName="stroke-dashoffset" from="100" to="0" dur="1s" fill="freeze" calcMode="spline" keySplines="0.25,0.1,0.5,1" keyTimes="0; 1" />
        </g>
        {/* Orange Lights */}
        <g mask="url(#db-mask-1)">
          <circle className="database db-light-1" cx="0" cy="0" r="10" fill="url(#db-orange-grad)">
            <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" calcMode="spline" keyTimes="0;1" keySplines="0.25,0.1,0.25,1">
              <mpath xlinkHref="#db-path-1" />
            </animateMotion>
          </circle>
        </g>
        <g mask="url(#db-mask-2)">
          <circle className="database db-light-2" cx="0" cy="0" r="10" fill="url(#db-orange-grad)">
            <animateMotion dur="5.5s" repeatCount="indefinite" rotate="auto" calcMode="spline" keyTimes="0;1" keySplines="0.25,0.1,0.25,1">
              <mpath xlinkHref="#db-path-2" />
            </animateMotion>
          </circle>
        </g>
        <g mask="url(#db-mask-3)">
          <circle className="database db-light-3" cx="0" cy="0" r="10" fill="url(#db-orange-grad)">
            <animateMotion dur="6.8s" repeatCount="indefinite" rotate="auto" calcMode="spline" keyTimes="0;1" keySplines="0.25,0.1,0.25,1">
              <mpath xlinkHref="#db-path-3" />
            </animateMotion>
          </circle>
        </g>
        <g mask="url(#db-mask-4)">
          <circle className="database db-light-4" cx="0" cy="0" r="10" fill="url(#db-orange-grad)">
            <animateMotion dur="6.2s" repeatCount="indefinite" rotate="auto" calcMode="spline" keyTimes="0;1" keySplines="0.25,0.1,0.25,1">
              <mpath xlinkHref="#db-path-4" />
            </animateMotion>
          </circle>
        </g>
        {/* Former SVG chips removed in favor of responsive HTML chips above */}
        <defs>
          {/* Motion paths for beams */}
          <path id="db-path-1" d="M 31 12 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" />
          <path id="db-path-2" d="M 77 12 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" />
          <path id="db-path-3" d="M 124 12 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" />
          <path id="db-path-4" d="M 170 12 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" />
          {/* 1 -  user list */}
          <mask id="db-mask-1">
            <path
              d="M 31 12 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10"
              strokeWidth="1.0"
              stroke="white"
            />
          </mask>
          {/* 2 - task list */}
          <mask id="db-mask-2">
            <path
              d="M 77 12 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10"
              strokeWidth="1.0"
              stroke="white"
            />
          </mask>
          {/* 3 - backlogs */}
          <mask id="db-mask-3">
            <path
              d="M 124 12 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10"
              strokeWidth="1.0"
              stroke="white"
            />
          </mask>
          {/* 4 - misc */}
          <mask id="db-mask-4">
            <path
              d="M 170 12 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10"
              strokeWidth="1.0"
              stroke="white"
            />
          </mask>
          {/* Orange Grad */}
          <radialGradient id="db-orange-grad" fx="1">
            <stop offset="0%" stopColor={lightColor || "#ff5a26"} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>
      {/* Main Box */}
      <div className="absolute bottom-24 flex w-full flex-col items-center">
        {/* bottom shadow */}
        <div className="absolute -bottom-4 h-[100px] w-[62%] rounded-lg bg-accent/30" />
        {/* box title */}
        <div className="absolute -top-5 z-20 flex items-center justify-center rounded-lg border bg-[#101112] px-2 py-1 sm:-top-6 sm:py-1.5">
          {!hideTitleIcon && <Sparkles className="size-3" />}
          <span className="ml-2 text-[10px]">
            {title ? title : "Data exchange using a customized REST API"}
          </span>
        </div>
        {/* box outter circle */}
        <div className="absolute -bottom-8 z-30 grid h-[60px] w-[60px] place-items-center rounded-full border-t bg-[#141516]">
          {circleLogoSrc ? (
            <Image
              src={circleLogoSrc}
              alt="logo"
              width={24}
              height={24}
              unoptimized
              className={cn(
                "h-6 w-6 object-contain",
                circleLogoWhite ? "invert brightness-200" : undefined
              )}
            />
          ) : (
            <span className="font-semibold text-xs">{circleText ? circleText : "SVG"}</span>
          )}
        </div>
        {/* box content */}
        <div className="relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background shadow-md">
          {ambientPulse && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-lg mix-blend-screen"
              style={{
                background:
                  "radial-gradient(80% 60% at 50% 100%, rgba(255,90,38,0.22) 0%, rgba(255,90,38,0) 60%), radial-gradient(60% 40% at 10% 80%, rgba(255,90,38,0.18) 0%, rgba(255,90,38,0) 55%)",
              }}
              animate={{ opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          {/* Badges */}
          <div className="absolute bottom-8 left-12 z-10 h-7 rounded-full bg-[#101112] px-3 text-xs border flex items-center gap-2 ">
            {renderIcon(buttonIcons?.first)}
            <span>{buttonTexts?.first || "LegionDev"}</span>
          </div>
          <div className="absolute right-16 z-10 hidden h-7 rounded-full bg-[#101112] px-3 text-xs sm:flex border items-center gap-2">
            {renderIcon(buttonIcons?.second)}
            <span>{buttonTexts?.second || "v2_updates"}</span>
          </div>
          {/* Circles (reduced count for smoother performance) */}
          <motion.div
            className="absolute -bottom-16 h-[140px] w-[140px] rounded-full border-t bg-accent/5"
            animate={{ scale: [0.99, 1.01, 0.99] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-[108px] h-[220px] w-[220px] rounded-full border-t bg-accent/5"
            animate={{ scale: [1.0, 1.015, 1.0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Intelligence;
