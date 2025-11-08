"use client";
import React from "react";
import { Carousel, Card as CarouselCard } from "@/components/ui/apple-cards-carousel";
import { modules } from "@/lib/modules";
import { Shield, Scan, BadgeCheck, Link2, Users, MessageSquare, Clock, Table, Brain } from "lucide-react";

export default function NobleSuiteToolkitCarousel() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 sm:py-12" aria-labelledby="toolkit-heading">
      <div className="mb-4 text-left">
        <h2 id="toolkit-heading" className="text-3xl font-bold sm:text-4xl">
          Your Complete In-App Toolkit
        </h2>
        <p className="mt-1 max-w-xl text-left text-sm text-neutral-500 dark:text-neutral-400">
          Three core modules. One seamless, logistics‑native workspace layer.
        </p>
      </div>
      <Carousel
        mode="focus"
        items={modules.map((m, i) => {
          // Structured dialog content based on module id
          let dialogContent: React.ReactNode = null;
          if (m.id === "noblefiles") {
            dialogContent = (
              <div className="space-y-10">
                <header className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">It’s Not a Folder. It’s a Data Engine.</h3>
                  <p className="text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-3xl">
                    NobleFiles transforms your static documents from a passive liability into an active, intelligent, and secure part of your workflow.
                  </p>
                </header>
                <div className="grid gap-8 md:gap-10">
                  <FeatureBlock icon={Shield} pillar="Control" title="Centralized Control & Versioning">
                    End the chaos. This is your single, AES-256 encrypted source of truth. It replaces insecure emails and scattered folders. Granular, role-based access (RBAC) combined with automatic version control ensures the right people see the right file, every single time.
                  </FeatureBlock>
                  <FeatureBlock icon={Scan} pillar="Automation" title="AI-Powered Data Extraction">
                    Stop manual data entry. Our AI uses OCR and NLP to read your uploaded documents (PDFs, images), automatically extract key data (like invoice numbers or container IDs), and flag inconsistencies, turning your paperwork into structured, actionable data.
                  </FeatureBlock>
                  <FeatureBlock icon={BadgeCheck} pillar="Trust" title="Immutable & Verifiable Integrity">
                    This is your ultimate, non‑repudiable proof. We record a cryptographic hash of your most critical documents (like BOLs or contracts) on a blockchain, creating a tamper‑proof, immutable audit trail for ultimate legal and compliance security.
                  </FeatureBlock>
                  <FeatureBlock icon={Link2} pillar="Context" title="Intelligent Workflow Context">
                    This isn’t a standalone Dropbox. Every file is intelligently and automatically linked to its specific Shipment and Shipment Room. Never hunt for a document again—it’s always exactly where your team expects it to be, connected to the live operation.
                  </FeatureBlock>
                </div>
              </div>
            );
          } else if (m.id === "nobledocs") {
            dialogContent = (
              <div className="space-y-10">
                <header className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Where Your Team Thinks in Sync.</h3>
                  <p className="text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-3xl">
                    NobleDocs is the real-time, Word-like editor embedded directly into your workflow, designed to capture, draft, and collaborate on all text-based logistics intelligence.
                  </p>
                </header>
                <div className="grid gap-8 md:gap-10">
                  <FeatureBlock icon={Users} pillar="Collaboration" title="True Real-Time Collaboration">
                    Stop emailing Word documents back and forth. This is a live, Google Docs‑style collaborative engine. See your team’s presence indicators, follow their live cursors, and co‑author shipment briefs or meeting minutes simultaneously.
                  </FeatureBlock>
                  <FeatureBlock icon={Link2} pillar="Context" title="Embedded in Your Workflow">
                    NobleDocs eliminates context-switching. Create, edit, and access all your notes, briefs, and SOPs directly inside your Shipment Room or workspace, keeping every piece of text contextually tied to the operation it supports.
                  </FeatureBlock>
                  <FeatureBlock icon={MessageSquare} pillar="Integration" title="Chat-Embeddable Doc_Cards">
                    Turn notes into action. Instantly embed a NobleDoc into any chat conversation. The system generates a clean “doc_card” with a title and preview, allowing stakeholders to reference key information without ever leaving the conversation.
                  </FeatureBlock>
                  <FeatureBlock icon={Clock} pillar="Audit" title="Automatic & Immutable Version History">
                    Never lose a critical detail. NobleDocs automatically saves periodic snapshots of every document. This provides a complete, auditable version history, ending all confusion about “which version is the correct one” and ensuring you have a perfect record.
                  </FeatureBlock>
                </div>
              </div>
            );
          } else if (m.id === "noblecells") {
            dialogContent = (
              <div className="space-y-10">
                <header className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Where Your Data Fuels Decisions.</h3>
                  <p className="text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-3xl">
                    NobleCells is the real-time, Excel-like engine embedded in your workflow, built to manage, calculate, and secure all your structured logistics data.
                  </p>
                </header>
                <div className="grid gap-8 md:gap-10">
                  <FeatureBlock icon={Table} pillar="Live Data" title="Eliminate the Export. Manipulate Data Live.">
                    Stop the endless cycle of exporting data to external Excel files. NobleCells is your live, in‑platform engine for inventory management, cost calculations, and budgets. It’s fully integrated, ending context‑switching for good.
                  </FeatureBlock>
                  <FeatureBlock icon={Users} pillar="Collaboration" title="Real-Time Collaborative Calculations">
                    This is a live, multi-user workspace. Just like NobleDocs, you can co-edit spreadsheets with your team in real-time. See live cursors and cell changes as your team works together on a single, centralized financial or inventory document.
                  </FeatureBlock>
                  <FeatureBlock icon={BadgeCheck} pillar="Trust" title="Blockchain-Verified Financials">
                    This is trust, built-in. For critical documents like final cost calculations or inventory lists, we record a cryptographic hash of the file on a blockchain. This creates an immutable, tamper-proof audit trail, ensuring your numbers are verifiable.
                  </FeatureBlock>
                  <FeatureBlock icon={Brain} pillar="Intelligence" title="The AI Training Ground">
                    NobleCells is more than a spreadsheet; it’s a data source. The structured data you manage here—costs, transit times, carrier performance—directly feeds and trains our NoblePilot AI, building the foundation for a truly autonomous freight system.
                  </FeatureBlock>
                </div>
              </div>
            );
          }
          return (
            <CarouselCard
              key={m.id}
              index={i}
              layout
              card={{
                id: m.id,
                src: m.image,
                title: m.title,
                category: m.category,
                subtitle: m.subtitle,
                content: dialogContent,
              }}
            />
          );
        })}
      />
    </section>
  );
}

function FeatureBlock({ icon: Icon, pillar, title, children }: { icon: React.ComponentType<{ className?: string }>; pillar: string; title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3 rounded-xl bg-white/80 p-4 shadow-sm ring-1 ring-neutral-200 dark:bg-neutral-800/70 dark:ring-neutral-700">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-neutral-100 text-sm dark:bg-neutral-700">
          <Icon className="h-4 w-4 text-neutral-700 dark:text-neutral-200" />
        </span>
  The “{pillar}” Pillar
      </div>
      <h4 className="text-base md:text-lg font-semibold text-neutral-800 dark:text-neutral-100">{title}</h4>
      <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">{children}</p>
    </div>
  );
}
