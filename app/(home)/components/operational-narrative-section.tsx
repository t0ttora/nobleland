"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function OperationalNarrativeSection() {
  const pinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = pinRef.current;
    if (!el) return;

    const getEnd = () => {
      const stage = document.getElementById("stacked-cards-stage");
      if (stage) {
        return `+=${stage.offsetHeight}`;
      }
      return "+=1000";
    };

    const st = ScrollTrigger.create({
      trigger: el,
      start: "center center",
      end: getEnd,
      pin: true,
      pinSpacing: false,
      invalidateOnRefresh: true,
    });

    const onResize = () => st.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      st.kill();
    };
  }, []);
  return (
    <section className="py-16 md:py-32">
      <div ref={pinRef} className="mx-auto max-w-3xl px-6 text-center space-y-6 md:space-y-8 relative z-10">
        <h2 className="text-balance text-4xl font-medium lg:text-5xl">
          The Operational Black Box.
        </h2>
        <p className="text-muted-foreground">
          Global logistics is a $3.8 trillion industry built on a foundation of disconnected systems. It&apos;s a high-stakes game of email chains, siloed data, and constant firefighting. This operational friction isn&apos;t just a headache—it&apos;s a massive, hidden cost.
        </p>
        <p className="text-muted-foreground">
          Legacy systems are rigid, and modern tools only show you the <em>problem</em>. They don&apos;t help you <em>solve it</em>.
        </p>
      </div>
    </section>
  );
}
