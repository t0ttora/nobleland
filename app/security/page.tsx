"use client";

import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/footer";
import CallToAction from "@/components/call-to-action";
import { Lock, FileCheck, Eye, Globe, Server } from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ff5a26] selection:text-white">
      
      {/* Hero - Refined & Architectural */}
      <section className="relative h-[90vh] flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto border-x border-white/5">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        
        {/* Top Status Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-between items-center border-b border-white/10 pb-6"
        >
           <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#ff5a26] rounded-full animate-pulse" />
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">System Secure</span>
           </div>
           <div className="hidden md:flex gap-8 font-mono text-xs text-zinc-600 uppercase tracking-widest">
              <span>Encrypted</span>
              <span>Immutable</span>
              <span>Verified</span>
           </div>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-8xl md:text-[10rem] font-medium tracking-tighter leading-[0.85] mb-16"
          >
            Invisible <br />
            <span className="text-zinc-800">Fortress.</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/10 pt-12"
          >
            <div className="md:col-span-5">
               <p className="text-xl text-zinc-400 font-light leading-relaxed">
                Security at NobleVerse isn&apos;t a feature—it&apos;s the foundation. We protect the currency of global trade with Swiss-grade privacy and military-grade encryption.
              </p>
            </div>
            <div className="md:col-span-7 flex flex-col md:flex-row gap-12 md:items-end md:justify-end">
               <div className="space-y-2">
                  <div className="text-xs text-zinc-600 uppercase tracking-widest font-mono">Encryption</div>
                  <div className="text-2xl text-white font-medium">AES-256</div>
               </div>
               <div className="space-y-2">
                  <div className="text-xs text-zinc-600 uppercase tracking-widest font-mono">Compliance</div>
                  <div className="text-2xl text-white font-medium">SOC2 Type II</div>
               </div>
               <div className="space-y-2">
                  <div className="text-xs text-zinc-600 uppercase tracking-widest font-mono">Architecture</div>
                  <div className="text-2xl text-white font-medium">Zero Trust</div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 1: The Vault (Encryption) */}
      <section className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto border-x border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            {/* Left: Content */}
            <div className="p-12 lg:p-24 flex flex-col justify-center border-r border-white/10">
              <span className="text-[#ff5a26] font-mono text-sm mb-8 block">01 — ENCRYPTION</span>
              <h2 className="text-4xl md:text-6xl font-medium mb-8 tracking-tight">The Digital Vault</h2>
              <p className="text-xl text-zinc-500 font-light leading-relaxed mb-12">
                We don&apos;t just store data; we seal it. Every invoice, contract, and customs document is locked behind AES-256 encryption. Your data remains yours, opaque to us and invisible to the world.
              </p>
              <ul className="space-y-6">
                <ListItem title="At Rest & In Transit" desc="End-to-end TLS protection against interception." />
                <ListItem title="Row Level Security" desc="Database isolation ensures strict data segregation." />
                <ListItem title="Zero Knowledge" desc="Architecture designed so we can&apos;t see your raw data." />
              </ul>
            </div>

            {/* Right: Visual Abstract */}
            <div className="relative bg-zinc-950 overflow-hidden flex items-center justify-center border-b lg:border-b-0">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
              <div className="w-64 h-64 border border-white/10 rounded-full flex items-center justify-center relative">
                <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <Lock className="w-12 h-12 text-zinc-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Ledger (Blockchain) */}
      <section className="border-t border-white/10 bg-zinc-950">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-24 py-32 border-x border-white/5">
          <div className="mb-24">
            <span className="text-[#ff5a26] font-mono text-sm mb-8 block">02 — INTEGRITY</span>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight max-w-4xl">
              Trust is good. <br />
              <span className="text-zinc-600">Mathematical proof is better.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            <GridCard 
              icon={<FileCheck />}
              title="Cryptographic Seals"
              desc="Documents get a digital fingerprint (hash) anchored to the blockchain. It's impossible to alter a document without breaking the seal."
            />
            <GridCard 
              icon={<Eye />}
              title="Immutable Audit"
              desc="An undeletable history of every action. Who, what, when? The answer is permanently etched into the system ledger."
            />
            <GridCard 
              icon={<Server />}
              title="Smart Verification"
              desc="Automated verification of document integrity. The system validates authenticity instantly, removing human error."
            />
          </div>
        </div>
      </section>

      {/* Section 3: Compliance & Access */}
      <section className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto border-x border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Access Control */}
            <div className="p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-white/10">
              <span className="text-[#ff5a26] font-mono text-sm mb-8 block">03 — ACCESS</span>
              <h3 className="text-3xl font-medium mb-6">Role-Based Precision</h3>
              <p className="text-zinc-500 leading-relaxed mb-12">
                In complex supply chains, information leakage is a risk. We use strict Role-Based Access Control (RBAC). A customs broker sees only customs data; a warehouse manager sees only inventory.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-zinc-900/50 rounded-sm border border-white/5">
                  <div className="text-white font-medium mb-1">Least Privilege</div>
                  <div className="text-xs text-zinc-500">Default Policy</div>
                </div>
                <div className="p-6 bg-zinc-900/50 rounded-sm border border-white/5">
                  <div className="text-white font-medium mb-1">MFA Enforced</div>
                  <div className="text-xs text-zinc-500">Identity Security</div>
                </div>
              </div>
            </div>

            {/* Compliance Standards */}
            <div className="p-12 lg:p-24 bg-zinc-900/20">
              <span className="text-[#ff5a26] font-mono text-sm mb-8 block">04 — COMPLIANCE</span>
              <h3 className="text-3xl font-medium mb-6">Global Standards</h3>
              <p className="text-zinc-500 leading-relaxed mb-12">
                Built to navigate the regulatory landscape of international trade. From GDPR in Europe to C-TPAT in the US.
              </p>
              <div className="flex flex-wrap gap-3">
                {["GDPR", "KVKK", "ISO 27001", "SOC2 Type II", "e-Invoice", "UBL 2.1"].map((tag) => (
                  <span key={tag} className="px-4 py-2 border border-white/10 rounded-full text-sm text-zinc-400 hover:border-[#ff5a26] hover:text-white transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: AI Safety */}
      <section className="py-32 px-6 md:px-12 lg:px-24 max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-medium mb-8">AI with a Conscience</h2>
        <p className="text-xl text-zinc-500 max-w-3xl mx-auto leading-relaxed mb-16">
          We use Artificial Intelligence to optimize your logistics, not to mine your data. NobleIntelligence™ runs on isolated instances, ensuring your trade secrets never train a public model.
        </p>
        <div className="inline-flex items-center gap-2 text-[#ff5a26] border-b border-[#ff5a26] pb-1 hover:opacity-80 transition-opacity cursor-pointer">
          <span>Read our AI Ethics Statement</span>
          <Globe className="w-4 h-4" />
        </div>
      </section>

      <CallToAction />
      <Footer />
    </div>
  );
}

function ListItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex items-baseline gap-4 group">
      <div className="w-2 h-2 bg-zinc-800 rounded-full group-hover:bg-[#ff5a26] transition-colors" />
      <div>
        <h4 className="text-white font-medium text-lg">{title}</h4>
        <p className="text-zinc-500 text-sm mt-1">{desc}</p>
      </div>
    </div>
  );
}

function GridCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-black p-12 hover:bg-zinc-900/50 transition-colors duration-500 group">
      <div className="text-zinc-600 mb-6 group-hover:text-[#ff5a26] transition-colors">
  {/* @ts-expect-error: icon may not be a ReactElement, we annotate expected error for cloneElement */}
        {React.cloneElement(icon as React.ReactElement, { size: 32 })}
      </div>
      <h3 className="text-xl font-medium text-white mb-4">{title}</h3>
      <p className="text-zinc-500 leading-relaxed text-sm">
        {desc}
      </p>
    </div>
  );
}