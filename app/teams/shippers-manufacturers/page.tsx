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

export default function ShippersManufacturersPage() {
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            <div className="lg:col-span-8">
              <motion.h1 
                variants={fadeIn}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-12 leading-[0.9]"
              >
                Why is NobleVerse Perfect for Manufacturers and Shippers?
              </motion.h1>
            </div>
            
            <div className="lg:col-span-4 lg:pt-4">
              <motion.div variants={fadeIn} className="h-1 w-24 bg-[#ff5a26] mb-8" />
              <motion.p 
                variants={fadeIn}
                className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-medium"
              >
                As global trade gets more complex, are you still managing your logistics processes with emails, Excel spreadsheets, and phone traffic? 
              </motion.p>
              <motion.p 
                variants={fadeIn}
                className="mt-8 text-lg text-zinc-500 leading-relaxed"
              >
                NobleVerse unifies fragmented processes on a single smart screen, providing end-to-end visibility and control to manufacturers (Shippers).
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
              title="Find the Best Freight Quote in Seconds"
              description="No more relying on a single forwarder or waiting days for quotes."
              points={[
                "Smart Marketplace: Create your shipment request and see quotes from approved forwarders on a single panel.",
                "Easy Comparison: Transparently compare quotes based on price, transit time, and forwarder ratings.",
                "AI-Powered Data Entry: Upload invoices/packing lists; AI automatically fills request forms."
              ]}
            />

            {/* Feature 2 */}
            <SwissFeature 
              number="02"
              title="End the 'Where is my Cargo?' Question"
              description="Know instantly where your product is from the production line to the customer."
              points={[
                "Real-Time GPS Tracking: Track your shipment live on the map. Get notified of route deviations.",
                "3D Visibility: Manage operations with a browser-based 3D control tower offering a continuous 'live picture'."
              ]}
            />

            {/* Feature 3 */}
            <SwissFeature 
              number="03"
              title="Proactive Management, Not Reactive"
              description="Predict risks before they happen instead of firefighting issues."
              points={[
                "Smart Alerts: AI predicts risks (e.g., weather delays) and suggests alternative routes.",
                "Natural Language Management: Ask 'Status of Hamburg shipment?' or 'Show latest quotes' and get instant answers."
              ]}
            />

            {/* Feature 4 */}
            <SwissFeature 
              number="04"
              title="Say Goodbye to Document Chaos"
              description="Lost invoices, wrong versions, and insecure email attachments are history."
              points={[
                "One Hub with NobleSuite™: Store everything in a single, encrypted (AES256) secure hub.",
                "Blockchain Assurance: Critical documents are sealed with blockchain technology for authenticity.",
                "Integrated Communication: Dedicated chat rooms for each shipment to communicate with forwarders."
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
                <div className="col-span-4 text-sm font-mono text-zinc-500 uppercase tracking-widest">Traditional Method</div>
                <div className="col-span-4 text-sm font-mono text-[#ff5a26] uppercase tracking-widest">NobleVerse Experience</div>
              </div>

              {/* Rows */}
              <div className="space-y-16 md:space-y-0">
                {[
                  {
                    feature: "Quote Collection",
                    traditional: "Days of email traffic",
                    noble: "One-click marketplace access and instant comparison"
                  },
                  {
                    feature: "Visibility",
                    traditional: "Manual updates and phone calls",
                    noble: "GPS-backed live tracking and 3D map"
                  },
                  {
                    feature: "Budget Management",
                    traditional: "Estimates based on historical data",
                    noble: "AI-backed budget optimization and instant KPI tracking"
                  },
                  {
                    feature: "Data Security",
                    traditional: "Insecure email attachments",
                    noble: "Blockchain-backed, encrypted document management"
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
      <div className="text-8xl font-bold text-zinc-800 mb-8 -ml-2 select-none group-hover:text-[#ff5a26] transition-colors duration-500">
        {number}
      </div>
      <h3 className="text-3xl font-bold mb-6 tracking-tight leading-tight">{title}</h3>
      <p className="text-zinc-400 text-lg mb-8 leading-relaxed border-l-2 border-[#ff5a26] pl-6">
        {description}
      </p>
      <ul className="space-y-4">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-4 text-zinc-300">
            <div className="mt-1.5 w-1.5 h-1.5 bg-[#ff5a26] rounded-full shrink-0" />
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
