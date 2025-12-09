"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import CallToAction from "@/components/call-to-action";
import { 
  FileText, 
  ShieldCheck, 
  Zap, 
  MessageSquare, 
  ArrowRight,
  CheckCircle2,
  Scale,
  FileSearch
} from "lucide-react";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function CustomsCompliancePage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ff5a26] selection:text-white">
      
      {/* Main Content Wrapper */}
      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        
        {/* Swiss Style Header Section */}
        <section className="mb-32">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end"
          >
            <div className="lg:col-span-8">
              <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
                 <div className="h-[2px] w-12 bg-[#ff5a26]" />
                 <span className="text-[#ff5a26] font-mono uppercase tracking-widest text-sm">For Customs Brokers</span>
              </motion.div>
              <motion.h1 
                variants={fadeIn}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]"
              >
                Why is NobleVerse Perfect for Customs Brokers?
              </motion.h1>
            </div>
            
            <div className="lg:col-span-4 lg:pb-2">
              <motion.p 
                variants={fadeIn}
                className="text-xl text-zinc-400 leading-relaxed font-medium border-l border-zinc-800 pl-6"
              >
                Customs brokerage is a race against time where errors are costly.
              </motion.p>
              <motion.p 
                variants={fadeIn}
                className="mt-6 text-lg text-zinc-500 leading-relaxed pl-6"
              >
                NobleVerse eliminates "missing document" crises and manual data entry errors, transforming your operations from a reactive firefighting process into a proactive and digital flow.
              </motion.p>
            </div>
          </motion.div>
        </section>

        {/* Features Grid - Swiss Grid Layout */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            
            {/* Feature 1 */}
            <SwissFeature 
              number="01"
              title="End the Document Hunt: Single Source of Truth with NobleSuite™"
              description="Stop searching for revised invoices from customers in email attachments."
              points={[
                "Centralized Document Pool: Bill of Lading, packing list, certificate of origin, and invoices are collected in a single secure area (NobleFiles). It appears on your screen the moment your customer or forwarder uploads the document.",
                "Version Control: The 'Final_v3_last.pdf' chaos is over. The system always shows the most up-to-date version and archives old ones. Your risk of opening an incorrect declaration drops to zero.",
                "Blockchain Assurance: Critical documents are sealed with blockchain technology. You are always sure that documents have not been altered and are authentic."
              ]}
            />

            {/* Feature 2 */}
            <SwissFeature 
              number="02"
              title="Focus on Legislation, Not Declaration Writing"
              description="Let your team use their expertise, not do data drudgery."
              points={[
                "AI-Powered Data Extraction (IDP): Upload invoices in PDF or photo format to the system. NobleIntelligence (OCR/NLP) automatically reads HS Code (GTIP), amount, and weight information and prepares your draft declaration in seconds.",
                "Automatic Alerts: The system warns you before the process starts if it detects a missing certificate or an incompatible HS Code."
              ]}
            />

            {/* Feature 3 */}
            <SwissFeature 
              number="03"
              title="Full Automation in Tax and Deposit Processes"
              description="End the stress of manual tracking in financial processes and waiting for bank receipts."
              points={[
                "Tax Deposit Automation: Instead of manually creating instructions for customs duties and collateral payments, calculate automatically via the system and get approval from your customer with a single click.",
                "NobleFinance™ Integration: Instantly track tax deposits and customs fees deposited by your customer via the system. As soon as payment is made, the operation lock is automatically released, minimizing waiting times."
              ]}
            />

            {/* Feature 4 */}
            <SwissFeature 
              number="04"
              title="Communication at 'WhatsApp' Speed, with Corporate Security"
              description="Secure and contextual communication for every file."
              points={[
                "Contextual Communication: There is a private chat room (Inbox) for each file (declaration). When you ask the customer 'Is the amount correct on this invoice?', the conversation is recorded in that job's log. Everything is at your fingertips for retrospective audits.",
                "Time-Saving Transparency: Your customer tracks the customs status ('Red Line', 'Inspection', 'Free') live via NobleVerse. They don't constantly call you asking 'Is the goods out?'."
              ]}
            />

          </div>
        </section>

        {/* Comparison Table - Swiss Grid */}
        <section className="mb-32">
          <div className="border-t border-white/20 pt-20">
            <h3 className="text-4xl md:text-6xl font-bold mb-20 tracking-tighter">Features Designed For You</h3>
            
            <div className="w-full">
              {/* Headers - Desktop Only */}
              <div className="hidden md:grid grid-cols-12 gap-8 border-b border-white/20 pb-6 mb-6">
                <div className="col-span-4 text-sm font-mono text-zinc-500 uppercase tracking-widest">Feature</div>
                <div className="col-span-4 text-sm font-mono text-zinc-500 uppercase tracking-widest">Traditional Broker</div>
                <div className="col-span-4 text-sm font-mono text-[#ff5a26] uppercase tracking-widest">Broker Using NobleVerse</div>
              </div>

              {/* Rows */}
              <div className="space-y-16 md:space-y-0">
                {[
                  {
                    feature: "Data Entry",
                    traditional: "Manual handwriting and checking",
                    noble: "Automatic data transfer with OCR and AI check"
                  },
                  {
                    feature: "Document Collection",
                    traditional: "Email, phone, and courier traffic",
                    noble: "Instant, encrypted sharing via NobleFiles"
                  },
                  {
                    feature: "Financial Tracking",
                    traditional: "Manual receipt tracking and Excel",
                    noble: "Automatic tax calculation and deposit tracking"
                  },
                  {
                    feature: "Error Risk",
                    traditional: "High (Prone to human error)",
                    noble: "Minimum (AI-supported error and missing document detection)"
                  }
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 md:border-b border-white/10 md:py-10 group transition-all duration-500 hover:bg-white/5 -mx-4 px-4 rounded-xl md:rounded-none md:mx-0 md:px-0 md:hover:bg-transparent">
                    
                    {/* Feature Name */}
                    <div className="col-span-1 md:col-span-4">
                       <h4 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#ff5a26] transition-colors duration-300">{item.feature}</h4>
                    </div>

                    {/* Traditional */}
                    <div className="col-span-1 md:col-span-4">
                       <span className="md:hidden block text-xs font-mono text-zinc-500 mb-2 uppercase tracking-widest">Traditional</span>
                       <p className="text-zinc-500 text-lg leading-relaxed">{item.traditional}</p>
                    </div>

                    {/* NobleVerse */}
                    <div className="col-span-1 md:col-span-4 relative">
                       <span className="md:hidden block text-xs font-mono text-[#ff5a26] mb-2 uppercase tracking-widest">NobleVerse</span>
                       <div className="flex items-start gap-4">
                         <p className="text-white text-lg font-medium leading-relaxed md:pl-6 border-l-2 border-[#ff5a26] md:border-l-0 md:border-l-transparent group-hover:md:border-l-[#ff5a26] pl-4 md:pl-0 transition-all duration-300">
                            {item.noble}
                         </p>
                       </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <CallToAction />
      <Footer />
    </div>
  );
}

function SwissFeature({ number, title, description, points }: { number: string, title: string, description: string, points: string[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="flex items-baseline gap-4 mb-8">
        <div className="text-6xl md:text-8xl font-bold text-zinc-800 select-none group-hover:text-[#ff5a26] transition-colors duration-500">
            {number}
        </div>
        <div className="h-[1px] flex-1 bg-zinc-800 group-hover:bg-[#ff5a26]/30 transition-colors duration-500" />
      </div>
      
      <h3 className="text-3xl font-bold mb-6 tracking-tight leading-tight">{title}</h3>
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
        {description}
      </p>
      <ul className="space-y-4">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-4 text-zinc-300">
            <div className="mt-2 w-1.5 h-1.5 bg-[#ff5a26] rounded-full shrink-0" />
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
