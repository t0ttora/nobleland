"use client";

import * as React from "react";
import Image from "next/image";

interface LoaderProps {
  size?: number; // diameter of the circular animation area
  className?: string; // optional wrapper class
}

// Local-scoped AI loader: shows only where placed, orange (#ff5a26) palette, logo instead of text.
export const Component: React.FC<LoaderProps> = ({ size = 180, className }) => {
  return (
    <div
      className={"relative inline-flex items-center justify-center " + (className || "")}
      style={{ width: size, height: size }}
    >
      {/* Center logo mark BELOW gradient (z-index lower) */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ width: size, height: size }}>
        <div
          className="relative before:absolute before:inset-[-10%] before:rounded-full before:bg-[radial-gradient(closest-side,rgba(255,90,38,0.45),rgba(255,90,38,0)_65%)] before:blur-md before:content-['']"
          style={{ width: size * 0.55, height: size * 0.55 }}
        >
          <Image
            src="/logomark.svg"
            alt="Logo mark"
            fill
            priority
            className="object-contain opacity-95 drop-shadow-[0_0_18px_rgba(255,90,38,0.35)]"
          />
        </div>
      </div>

      {/* Animated circular glow OVER logo */}
      <div className="absolute inset-0 rounded-full animate-loaderCircle z-10" />

      <style jsx>{`
        @keyframes loaderCircle {
          0% {
            transform: rotate(90deg);
            box-shadow:
              0 6px 12px 0 #ff7a52 inset,
              0 12px 18px 0 #ff5a26 inset,
              0 36px 36px 0 #ff9b7e inset,
              0 0 3px 1.2px rgba(255, 90, 38, 0.35),
              0 0 6px 1.8px rgba(255, 160, 130, 0.25);
          }
          50% {
            transform: rotate(270deg);
            box-shadow:
              0 6px 12px 0 #ff9b7e inset,
              0 12px 6px 0 #ff5a26 inset,
              0 24px 36px 0 #ff7a52 inset,
              0 0 3px 1.2px rgba(255, 90, 38, 0.30),
              0 0 6px 1.8px rgba(255, 160, 130, 0.22);
          }
          100% {
            transform: rotate(450deg);
            box-shadow:
              0 6px 12px 0 #ff7a52 inset,
              0 12px 18px 0 #ff5a26 inset,
              0 36px 36px 0 #ffc2a8 inset,
              0 0 3px 1.2px rgba(255, 90, 38, 0.35),
              0 0 6px 1.8px rgba(255, 160, 130, 0.25);
          }
        }

        .animate-loaderCircle {
          animation: loaderCircle 5s linear infinite;
          mix-blend-mode: screen;
        }

        /* Dark mode slight shift to avoid wash-out */
        @media (prefers-color-scheme: dark) {
          .animate-loaderCircle {
            box-shadow:
              0 6px 12px 0 #ff9b7e inset,
              0 12px 18px 0 #ff5a26 inset,
              0 36px 36px 0 #ff7a52 inset,
              0 0 3px 1.2px rgba(255, 140, 90, 0.35),
              0 0 6px 1.8px rgba(255, 160, 130, 0.25);
          }
        }
      `}</style>
    </div>
  );
};
