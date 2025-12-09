"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/footer";
import CallToAction from "@/components/call-to-action";
import Image from "next/image";
import { ArrowUpRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const founders = [
  {
    id: "mukremin",
    name: "Mükremin Sarıbaş",
    role: "Co-Founder & CEO",
    image: "/cofounder/mukremin.jpeg",
    initials: "MS",
    specialty: "Strategy & Growth",
    bio: "The strategic engine behind NobleVerse. Mükremin transforms the chaotic landscape of logistics into a structured, scalable business model. He ensures that every line of code serves a greater financial and operational purpose.",
    quote: "We are not building software; we are building the discipline of the future."
  },
  {
    id: "emircan",
    name: "Emircan Teymur",
    role: "Co-Founder & CTO",
    image: "/cofounder/emircan.jpeg",
    initials: "ET",
    specialty: "Infrastructure & Security",
    bio: "The architect of the invisible. Emircan builds the real-time nervous system that powers NobleVerse. His obsession with security and speed ensures that the platform is not just a tool, but a living, breathing extension of the user.",
    quote: "Speed is a feature. Security is a necessity. We compromise on neither."
  },
  {
    id: "olus",
    name: "Oluş Emre Demir",
    role: "Co-Founder & CPO",
    image: "/cofounder/olus.jpeg",
    initials: "OD",
    specialty: "Product & Experience",
    bio: "The visionary of interaction. Oluş believes that complex logistics problems require elegant, almost invisible solutions. He designs the 'Shipment Room' not as a dashboard, but as a command center for the modern age.",
    quote: "Complexity should be handled by the machine, not the human."
  }
];

const principles = [
  {
    number: "01",
    title: "Radical Transparency",
    description: "No black boxes. Every piece of data, every movement, every document is visible and accessible in real-time."
  },
  {
    number: "02",
    title: "Automation First",
    description: "If a human has to do it twice, it should be automated. We build systems that learn and adapt."
  },
  {
    number: "03",
    title: "Design as Function",
    description: "Beauty is not decoration. It is clarity. Our interface is designed to reduce cognitive load and increase decision speed."
  },
  {
    number: "04",
    title: "Global Compliance",
    description: "Borders are for maps, not for business. We build for a world where trade flows without friction."
  }
];

export default function AboutPage() {
  const [activeFounder, setActiveFounder] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ff5a26] selection:text-white">
      
      {/* Hero Section - Architectural Typography */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-white/90 mb-12">
              NOBLE<br />VERSE
            </h1>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <p className="text-2xl md:text-3xl font-light leading-tight text-zinc-400">
                We are the architects of the <span className="text-white">Autonomous Supply Chain</span>. 
                We exist to replace the chaos of global trade with the precision of code.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-4 text-sm text-zinc-500 font-mono uppercase tracking-widest">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Established</span>
                <span className="text-white">2024</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>HQ</span>
                <span className="text-white">Istanbul, TR</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span>Mission</span>
                <span className="text-white">Global Unification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Grid */}
      <section className="border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {principles.map((item, index) => (
            <div key={index} className="p-8 lg:p-12 group hover:bg-white/5 transition-colors duration-500">
              <span className="block text-xs font-mono text-[#ff5a26] mb-6">{item.number}</span>
              <h3 className="text-xl font-bold mb-4 group-hover:text-[#ff5a26] transition-colors">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* The Narrative - Swiss Layout */}
      <section className="py-32 px-6 md:px-12 lg:px-24 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-sm font-mono uppercase tracking-widest text-[#ff5a26] mb-4">The Origin</h2>
            <h3 className="text-4xl font-bold tracking-tight mb-8">From Chaos to Clarity.</h3>
          </div>
          <div className="lg:col-span-8 space-y-8 text-lg text-zinc-400 font-light leading-relaxed">
            <p>
              The logistics industry was running on an operating system designed in the 1990s. 
              Email chains, phone calls, and fragmented spreadsheets were the standard. 
              The world was moving fast, but the information controlling it was stuck in traffic.
            </p>
            <p>
              We asked a simple question: <span className="text-white">What if logistics felt like magic?</span>
            </p>
            <p>
              What if you could see every shipment, every document, and every dollar in a single, 
              unified interface? What if the software didn't just record what happened, but predicted 
              what would happen next?
            </p>
            <p>
              NobleVerse is the answer. We are not just building software; we are building the 
              infrastructure for the next century of global trade.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership - Interactive List */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-900 uppercase">
              Leader<br/>ship
            </h2>
            <p className="text-zinc-500 max-w-md text-right mt-8 md:mt-0">
              The minds engineering the future of logistics.
            </p>
          </div>

          <div className="space-y-0 border-t border-white/10">
            {founders.map((founder) => (
              <div 
                key={founder.id}
                className="group border-b border-white/10 cursor-pointer"
                onMouseEnter={() => setActiveFounder(founder.id)}
                onClick={() => setActiveFounder(activeFounder === founder.id ? null : founder.id)}
              >
                <div className="py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 transition-all duration-500 group-hover:px-8 group-hover:bg-white/5">
                  <div className="flex items-center gap-8">
                    <span className="text-4xl font-light text-zinc-700 group-hover:text-[#ff5a26] transition-colors">
                      {founder.initials}
                    </span>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-1">{founder.name}</h3>
                      <p className="text-zinc-500 font-mono text-sm uppercase tracking-wider">{founder.role}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:block text-right opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[#ff5a26] text-sm font-mono flex items-center gap-2 justify-end">
                      View Profile <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Expandable Content */}
                <motion.div
                  initial={false}
                  animate={{ 
                    height: activeFounder === founder.id ? "auto" : 0,
                    opacity: activeFounder === founder.id ? 1 : 0
                  }}
                  className="overflow-hidden bg-zinc-900/30"
                >
                  <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4 lg:col-span-3">
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
                        <Image 
                          src={founder.image} 
                          alt={founder.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4">{founder.specialty}</h4>
                        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-8">
                          {founder.bio}
                        </p>
                      </div>
                      <blockquote className="border-l-2 border-[#ff5a26] pl-6 py-2">
                        <p className="text-2xl font-light italic text-white/80">"{founder.quote}"</p>
                      </blockquote>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
}