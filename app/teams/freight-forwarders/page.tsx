"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Footer from "@/components/footer";
import CallToAction from "@/components/call-to-action";

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

export default function FreightForwardersPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ff5a26] selection:text-white">
      
      {/* Main Content Wrapper */}
      <main className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
        
        {/* Swiss Style Header Section - Slightly modified layout */}
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
                 <span className="text-[#ff5a26] font-mono uppercase tracking-widest text-sm">For Forwarders</span>
              </motion.div>
              <motion.h1 
                variants={fadeIn}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[0.9]"
              >
                Why is NobleVerse Perfect for Forwarders?
              </motion.h1>
            </div>
            
            <div className="lg:col-span-4 lg:pb-2">
              <motion.p 
                variants={fadeIn}
                className="text-xl text-zinc-400 leading-relaxed font-medium border-l border-zinc-800 pl-6"
              >
                While you get lost in emails in traditional shipping processes, are digital competitors taking your market share? 
              </motion.p>
              <motion.p 
                variants={fadeIn}
                className="mt-6 text-lg text-zinc-500 leading-relaxed pl-6"
              >
                NobleVerse transforms you from just a carrier into a technology-based logistics partner that offers transparency and speed to its customers.
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
              title="Don't Be 'Invisible': Open Your Showcase to the World"
              description="Compete not just with your price, but with your quality. NobleVerse is a smart marketplace that connects you with the right customers."
              points={[
                "Digital Identity and Reputation: Create a professional profile showcasing your services, certificates, and expertise. Let high scores be your strongest reference.",
                "Spot Market Opportunities: See requests opened by Shippers instantly. Bid on routes you are an expert in within seconds."
              ]}
            />

            {/* Feature 2 */}
            <SwissFeature 
              number="02"
              title="Leave Operational Drudgery to NobleIntelligence"
              description="Let your team deal with managing the customer, not entering data. NobleVerse increases your profitability by automating manual tasks."
              points={[
                "Automated Document Processing: Upload shipment documents; let AI (OCR/NLP) read the data and fill out B/L or customs forms for you.",
                "Smart Assistant: Ask 'What was the last offer from Atlas Forwarding?' or 'Where is the Hamburg cargo?' and get answers in seconds."
              ]}
            />

            {/* Feature 3 */}
            <SwissFeature 
              number="03"
              title="Save Your Customer from 'Where is This Cargo?' Calls"
              description="The greatest service you can give your customer is peace of mind."
              points={[
                "Live Tracking for Customer: Offer a professional experience where they can track their cargo live on the map. Automatic notifications when cargo moves.",
                "Crisis Management: Port strike? Weather opposition? AI predicts risks and suggests alternative routes. Call your customer with a solution."
              ]}
            />

            {/* Feature 4 */}
            <SwissFeature 
              number="04"
              title="Not Chaos, Collaboration: NobleSuite™"
              description="WhatsApp screenshots and lost email attachments are history."
              points={[
                "Centralized Communication: Talk to your customer, customs broker, and warehouse manager simultaneously in shipment-specific chat rooms.",
                "Secure Document Sharing: Store critical documents with blockchain assurance. Ensure the right document is with the right person."
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
                <div className="col-span-4 text-sm font-mono text-zinc-500 uppercase tracking-widest">Traditional Forwarder</div>
                <div className="col-span-4 text-sm font-mono text-[#ff5a26] uppercase tracking-widest">Forwarder Using NobleVerse</div>
              </div>

              {/* Rows */}
              <div className="space-y-16 md:space-y-0">
                {[
                  {
                    feature: "Customer Acquisition",
                    traditional: "Cold calls and emails",
                    noble: "Ready requests from the marketplace and high-rated profile"
                  },
                  {
                    feature: "Operational Speed",
                    traditional: "Manual data entry and Excel tracking",
                    noble: "AI-supported automatic form filling and workflow"
                  },
                  {
                    feature: "Visibility",
                    traditional: "Customer constantly calling by phone",
                    noble: "Customer-specific live tracking link and proactive notifications"
                  },
                  {
                    feature: "Competitiveness",
                    traditional: "Only price-focused competition",
                    noble: "Standing out with service quality and digital capabilities"
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
