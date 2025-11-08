import React from "react";
import type { Metadata } from "next";
import Features from "./components/features-4";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";
import { BrainCircuit } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight-new";
import Image from "next/image";

export const generateMetadata = async (): Promise<Metadata> => {
  const title = "NobleAutomate – Autonomous Workflow Execution";
  const description = "NobleAutomate observes patterns and turns repetitive logistics tasks into autonomous, reliable actions.";
  const url = "https://nobleverse.co/nobleautomate";
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "NobleVerse",
      images: [{ url: "/nobleautomate/opengraph-image", width: 1200, height: 630, alt: "NobleAutomate" }],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/twitter-image"],
    },
    robots: { index: true, follow: true },
    keywords: [
      "NobleAutomate",
      "logistics automation",
      "workflow automation",
      "supply chain AI",
      "operations assistant",
      "process automation",
    ],
  };
};

export default function NobleAutomatePage() {
  return (
    <div className="min-h-[100dvh] bg-black text-zinc-100 overflow-x-hidden">
      {/* Structured Data: SoftwareApplication */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'NobleAutomate',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Any',
            description: 'Workflow-learning automation layer turning repetitive logistics tasks into autonomous actions.',
            url: 'https://nobleverse.co/nobleautomate',
            publisher: { '@type': 'Organization', name: 'NobleVerse' },
          }),
        }}
      />
  {/* HERO (full-bleed, independent of main container width) */}
  <section className="relative overflow-hidden min-h-[100dvh] flex items-start bg-[#0a0a0a] w-full pt-8 sm:pt-12 md:pt-16">
          {/* dotted grid background like flow editors */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              backgroundImage:
                "radial-gradient(rgba(63,63,70,0.35) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
              backgroundPosition: "center top",
            }}
          />
          {/* spotlight animated background */}
          <Spotlight />

          <div className="relative z-10 mx-auto max-w-3xl text-center pb-12">
            {/* hero image with faded edges */}
            <div className="mx-auto mb-8 w-full max-w-2xl">
              <div
                className="relative w-full overflow-hidden rounded-2xl"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(160% 100% at 50% 0%, black 60%, transparent 100%)",
                  maskImage:
                    "radial-gradient(160% 100% at 50% 0%, black 60%, transparent 100%)",
                }}
              >
                <Image
                  src="/automate.png"
                  alt="NobleAutomate workflow mockup"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
            <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl leading-tight">
              From Repetitive Clicks to Autonomous Action.
            </h1>
            <p className="mt-4 text-sm sm:text-base text-zinc-300">
              NobleAutomate is a “workflow‑learning layer” that observes user patterns to automate the manual work that slows you down.
            </p>
          </div>
        </section>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-0 pb-24">

        {/* FEATURES */}
        <section aria-labelledby="features-heading" className="mb-8">
          <Features />
        </section>

  {/* WHERE INSIGHT BECOMES ACTION */}
        <section aria-labelledby="where-heading" className="mb-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 id="where-heading" className="text-2xl sm:text-3xl font-semibold">Where Insight Becomes Action</h2>
            <p className="mt-3 text-sm text-zinc-400 max-w-2xl mx-auto">Two complementary views that show why NobleAutomate matters and how it integrates with the NobleVerse AI stack.</p>
          </div>

          <div className="relative mx-auto mt-8 grid w-full max-w-4xl gap-6 px-2 grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-stretch">
            {/* Card 1 */}
            <CardSpotlight className="h-full" accentColor="#ff5a26">
              <div className="relative z-10 h-full flex flex-col space-y-4">
                <h3 className="text-lg font-semibold">The Smart Assistant, Not the Chef.</h3>
                <div className="text-sm text-zinc-300">
                  <p>
                    Think of a master chef. They don’t spend their day chopping vegetables or filling out prep forms. They have smart assistants for that.
                  </p>
                  <p className="mt-3">
                    NobleAutomate is your smart assistant. It handles all the high‑volume, repetitive “prep work” (like invoicing and document chasing). This frees your team—the chefs—to focus on high‑value, complex tasks: designing the menu and managing the critical exceptions.
                  </p>
                </div>

                <div className="mt-4">
                  <div className="rounded-md border border-neutral-800 bg-neutral-950 p-3 text-xs text-zinc-200">
                    <strong className="block text-sm">Example flow</strong>
                    <ol className="mt-2 list-inside list-decimal space-y-1 text-zinc-400">
                      <li>Shipment Delivered</li>
                      <li>NobleAutomate: Generate Invoice</li>
                      <li>NobleAutomate: Send to Client</li>
                      <li>Task Complete</li>
                    </ol>
                  </div>
                </div>
              </div>
            </CardSpotlight>

            {/* Connector (reverted to dotted straight arrow) */}
            <div className="md:col-[2] hidden md:flex items-center justify-center">
              <svg width="64" height="24" viewBox="0 0 64 24" fill="none" aria-hidden>
                <path d="M2 12h56" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="6 4" strokeLinecap="round" />
                <path d="M50 6l12 6-12 6" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="md:hidden flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 4v12" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round" />
                <path d="M8 12l4 4 4-4" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Card 2 */}
            <CardSpotlight className="h-full" accentColor="#ff5a26">
              <div className="relative z-10 h-full flex flex-col">
                {/* top-right icon */}
                <div className="absolute right-3 top-3 opacity-90">
                  <div className="h-10 w-10 rounded-md bg-zinc-900/60 border border-neutral-800 flex items-center justify-center">
                    <BrainCircuit className="h-5 w-5 text-zinc-300" />
                  </div>
                </div>

                {/* Bottom anchored content with title above the text at bottom-left */}
                <div className="mt-auto">
                  <h3 className="text-lg font-semibold pr-16 text-left">The “How” to the AI’s “What.”</h3>
                  <div className="mt-3 text-sm text-zinc-300 text-left">
                    <p>
                      NobleAutomate is the “hands” of the NobleVerse AI stack. While NobleIntelligence (the “brain”) provides the insight (“This shipment is at risk”), NobleAutomate executes the routine action (“Flagging shipment & requesting new documents”).
                    </p>
                  </div>
                  <div className="mt-3 text-xs text-zinc-400 text-left">Integrates with NobleIntelligence, NobleSuite, and external systems via reliable connectors.</div>
                </div>
              </div>
            </CardSpotlight>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <CallToAction />
        </section>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
