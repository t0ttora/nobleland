"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Component as AILoader } from "@/components/ai-loader";

// Global overlay loader with fade animation during initial mount and route changes
export default function GlobalLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = React.useState(true);

  // Hide after first paint to cover SSR/initial hydration
  React.useEffect(() => {
    const t = setTimeout(() => setVisible(false), 600); // brief fade
    return () => clearTimeout(t);
  }, []);

  // Show on route change, hide after a short delay
  const lastPathRef = React.useRef(pathname);
  React.useEffect(() => {
    if (lastPathRef.current !== pathname) {
      setVisible(true);
      const t = setTimeout(() => setVisible(false), 700);
      lastPathRef.current = pathname;
      return () => clearTimeout(t);
    }
  }, [pathname]);

  return (
    <div
      aria-hidden={!visible}
      className={`pointer-events-none fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-400 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Soft backdrop that fades with loader */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/40" />
      <div className="relative">
        <AILoader size={160} />
      </div>
    </div>
  );
}
