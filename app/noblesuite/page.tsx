import HeroNobleSuite from "./components/hero-noblesuite";
import NobleSuiteToolkitCarousel from "./components/noblesuite-toolkit-carousel";
import IntelligenceSection from "./components/intelligence-section";
// Replaced command center section with ecosystem stats
import EcosystemStatsSection from "./components/ecosystem-stats-section";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const title = "NobleSuite – Unified Operational Toolkit";
  const description = "NobleSuite consolidates vault, documents, live data, and intelligence into a single operational surface for modern logistics.";
  const url = "https://nobleverse.co/noblesuite";
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "NobleVerse",
      images: [{ url: "/noblesuite/opengraph-image", width: 1200, height: 630, alt: "NobleSuite" }],
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
      "NobleSuite",
      "logistics platform",
      "operational toolkit",
      "supply chain visibility",
      "document management",
      "analytics",
    ],
  };
};

export default function NobleSuiteLanding() {
  return (
    <main className="relative flex flex-col">
      {/* Structured Data: WebApplication grouping toolkit modules */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'NobleSuite',
            applicationCategory: 'BusinessApplication',
            description: 'Unified operational toolkit combining secure vault, collaborative docs, live data grid and intelligence.',
            url: 'https://nobleverse.co/noblesuite',
            publisher: { '@type': 'Organization', name: 'NobleVerse' },
          }),
        }}
      />
      <HeroNobleSuite />
      <NobleSuiteToolkitCarousel />
      <IntelligenceSection />
  <EcosystemStatsSection />
      <div className="mt-8 mb-24 px-6 sm:px-10 lg:px-20">
        <CallToAction />
      </div>
      <Footer />
    </main>
  );
}
