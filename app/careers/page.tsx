"use client";

import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/footer";
import CallToAction from "@/components/call-to-action";
import { Rocket, Globe, Zap, ArrowUpRight, Code, TrendingUp } from "lucide-react";
import { toast } from "sonner";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ff5a26] selection:text-white">
      
      {/* Hero - Architectural */}
      <section className="relative h-[85vh] flex flex-col justify-end pb-32 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto border-x border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 bg-[#ff5a26] rounded-full animate-pulse" />
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">We are hiring</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-medium tracking-tighter leading-[0.9] mb-12">
            Build the <br />
            <span className="text-zinc-700">Nervous System.</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-xl">
              Logistics is a $4 trillion industry managed by yesterday&apos;s tools. We aren&apos;t just writing code; we are rebuilding the nervous system of global trade. Are you ready to join a revolution that connects continents?
            </p>
            <div className="flex gap-4 md:justify-end">
               <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-[#ff5a26] hover:text-white transition-colors duration-300">
                 View Open Positions
               </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why NobleVerse? - Grid Layout */}
      <section className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto border-x border-white/5">
          <div className="p-12 lg:p-24 border-b border-white/10">
             <span className="text-[#ff5a26] font-mono text-sm mb-8 block">01 — WHY NOBLEVERSE?</span>
             <h2 className="text-4xl md:text-6xl font-medium tracking-tight max-w-4xl">
               Your impact will be <span className="text-zinc-600">Global.</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Card 1 */}
            <div className="p-12 group hover:bg-zinc-900/30 transition-colors duration-500">
              <div className="mb-8 p-4 bg-zinc-900 w-fit rounded-full group-hover:bg-[#ff5a26] group-hover:text-white transition-colors duration-500 text-zinc-400">
                <Rocket size={24} />
              </div>
              <h3 className="text-2xl font-medium mb-4">Growth Engine for Forwarders</h3>
              <p className="text-zinc-500 leading-relaxed mb-6">
                We are breaking down walls. With our &quot;Mini Marketplace&quot;, forwarders don&apos;t just move cargo; they bid on thousands of new loads. Your code opens new revenue streams for businesses.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-12 group hover:bg-zinc-900/30 transition-colors duration-500">
              <div className="mb-8 p-4 bg-zinc-900 w-fit rounded-full group-hover:bg-[#ff5a26] group-hover:text-white transition-colors duration-500 text-zinc-400">
                <Globe size={24} />
              </div>
              <h3 className="text-2xl font-medium mb-4">Human-Centric Network</h3>
              <p className="text-zinc-500 leading-relaxed mb-6">
                Technology doesn&apos;t have to be cold. Our Unified Communication Platform lets shippers talk to suppliers globally as if they were in the same room. You build the bridge.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-12 group hover:bg-zinc-900/30 transition-colors duration-500">
              <div className="mb-8 p-4 bg-zinc-900 w-fit rounded-full group-hover:bg-[#ff5a26] group-hover:text-white transition-colors duration-500 text-zinc-400">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-medium mb-4">Learn Fast, Ship Faster</h3>
              <p className="text-zinc-500 leading-relaxed mb-6">
                Startup spirit meets enterprise scale. With our ESOP program, you are an owner. AI isn&apos;t just a feature here; with NoblePilot, it&apos;s your teammate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section className="border-t border-white/10 bg-zinc-950">
        <div className="max-w-[1400px] mx-auto border-x border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Code className="text-[#ff5a26]" size={32} />
                <h3 className="text-3xl font-medium">Engineering & Product</h3>
              </div>
              <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                Architects transforming complex logistics equations into elegant user experiences. From automating workflows with NobleAutomate to securing data with NobleShield.
              </p>
              <div className="flex gap-3 flex-wrap">
                {["Next.js", "Supabase", "AI Agents", "Real-time"].map(tag => (
                  <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-xs text-zinc-400 font-mono">{tag}</span>
                ))}
              </div>
            </div>

            <div className="p-12 lg:p-24">
              <div className="flex items-center gap-4 mb-6">
                <TrendingUp className="text-[#ff5a26]" size={32} />
                <h3 className="text-3xl font-medium">Growth & Ops</h3>
              </div>
              <p className="text-zinc-500 text-lg leading-relaxed mb-8">
                The force bringing technology to the field. We soothe &quot;digitalization pains&quot; and perfect product-market fit through pilot programs.
              </p>
              <div className="flex gap-3 flex-wrap">
                {["Sales", "Customer Success", "Strategy", "Expansion"].map(tag => (
                  <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-xs text-zinc-400 font-mono">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions - Swiss Table */}
      <section className="border-t border-white/10 py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 border-x border-white/5 border-y-0">
          <div className="mb-16">
            <span className="text-[#ff5a26] font-mono text-sm mb-8 block">03 — OPEN POSITIONS</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight">Join the Mission</h2>
          </div>

          <div className="flex flex-col">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-white/10 text-xs font-mono text-zinc-500 uppercase tracking-widest">
              <div className="col-span-5">Position</div>
              <div className="col-span-3">Department</div>
              <div className="col-span-2">Location</div>
              <div className="col-span-2 text-right">Type</div>
            </div>

            {/* Job Rows */}
            <JobRow 
              title="Senior Full-Stack Engineer" 
              dept="Engineering" 
              loc="Remote / Istanbul" 
              type="Full Time" 
            />
            <JobRow 
              title="AI/ML Engineer (NobleIntelligence)" 
              dept="Engineering" 
              loc="Remote" 
              type="Full Time" 
            />
            <JobRow 
              title="Growth Manager (EU Focus)" 
              dept="Marketing" 
              loc="Hybrid" 
              type="Full Time" 
            />
            <JobRow 
              title="Customer Success Specialist" 
              dept="Operations" 
              loc="Istanbul" 
              type="Full Time" 
            />
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
}

function JobRow({ title, dept, loc, type }: { title: string, dept: string, loc: string, type: string }) {
  const handleClick = () => {
    toast.info("Position Currently Filled", {
      description: "Thank you for your interest. This position has reached its application cap. Please check back later or follow us for updates.",
      duration: 4000,
    });
  };

  return (
    <div onClick={handleClick} className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-white/10 items-center hover:bg-zinc-900/30 transition-colors cursor-pointer">
      <div className="col-span-5">
        <h4 className="text-xl md:text-2xl font-medium text-white group-hover:text-[#ff5a26] transition-colors flex items-center gap-2">
          {title}
          <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity w-5 h-5" />
        </h4>
      </div>
      <div className="col-span-3 text-zinc-400 font-light">{dept}</div>
      <div className="col-span-2 text-zinc-500 text-sm">{loc}</div>
      <div className="col-span-2 text-right text-zinc-500 text-sm font-mono">{type}</div>
    </div>
  );
}