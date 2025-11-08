import { Inter } from "next/font/google";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
// Removed ssr:false (not allowed in Server Components); default dynamic split only.
const RotatingEarth = dynamic(() => import("./(home)/components/wireframe-dotted-globe"));
import { HeroWaitlistInline } from "./(home)/components/hero-waitlist-inline";
import OperationalNarrativeSection from "./(home)/components/operational-narrative-section";
import EcosystemNarrativeSection from "./(home)/components/ecosystem-narrative-section";
const StackedCards = dynamic(() => import("./(home)/components/glass-cards").then(m => m.StackedCards));
import MarketplaceAudienceFeatures from "./(home)/components/marketplace-audience-features";
const OperationalHighlightsSection = dynamic(() => import("./(home)/components/operational-highlights-section"));
import PlatformPillarsSection from "./(home)/components/platform-pillars-section";
// Static waitlist label (reverted to a stable starting value)
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="w-full pt-0 px-6 pb-8 sm:px-10 sm:pb-12 lg:px-20 lg:pb-20 flex items-center justify-center">
  <div data-hero-root className={`relative w-full h-[calc(100dvh-80px-32px)] sm:h-[calc(100dvh-80px-48px)] lg:h-[calc(100dvh-80px-80px)] rounded-3xl overflow-hidden bg-[#0a0a0a] text-foreground flex items-center justify-center ${inter.className}`}>
        {/* Corner gradient glows */}
        <span
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 w-[28rem] h-[28rem] glow blur-[120px]"
          style={{
            background: "radial-gradient(closest-side at 0% 0%, #ff5a26 30%, transparent 85%)",
            filter: "saturate(1.4) brightness(1.25)",
          }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[28rem] h-[28rem] glow blur-[120px]"
          style={{
            background: "radial-gradient(closest-side at 100% 0%, #ff5a26 30%, transparent 85%)",
            filter: "saturate(1.4) brightness(1.25)",
          }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 z-[19] w-[40rem] h-[40rem] glow blur-[140px] mix-blend-screen"
          style={{
            background: "radial-gradient(closest-side at 0% 100%, #ff5a26 45%, transparent 88%)",
            filter: "saturate(1.8) brightness(1.4)",
            opacity: 0.95,
          }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-0 right-0 z-[19] w-[40rem] h-[40rem] glow blur-[140px] mix-blend-screen"
          style={{
            background: "radial-gradient(closest-side at 100% 100%, #ff5a26 45%, transparent 88%)",
            filter: "saturate(1.8) brightness(1.4)",
            opacity: 0.95,
          }}
        />
        {/* Centered background globe behind text */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
          style={{
            opacity: 0.75,
          }}
        >
          <RotatingEarth
            width={4000}
            height={4000}
            interactive={false}
            scrollZoom={false}
            rotateSpeed={0.1}
          />
        </div>

        {/* Circular edge fade around the globe (above globe, below text) */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            // Stronger circular fade using the same color as the container (#0a0a0a)
            background:
              "radial-gradient(circle at 50% 50%, rgba(10,10,10,0) 0%, rgba(10,10,10,0) 52%, rgba(10,10,10,0.5) 68%, rgba(10,10,10,0.85) 86%, rgba(10,10,10,1) 100%)",
          }}
        />

        {/* Centered content */}
        <div className="relative z-20 max-w-3xl px-6 text-center mx-auto soft-text-shadow">
          {/* Badge with avatar stack and waitlist count */}
          <div className="mx-auto mb-5 inline-flex items-center gap-3 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 backdrop-blur supports-[backdrop-filter]:bg-black/30">
            <div className="flex -space-x-2">
              <Avatar className="size-7 ring-2 ring-black/50">
                <AvatarImage src="/avatars/1.jpg" alt="Community member" />
                <AvatarFallback>N1</AvatarFallback>
              </Avatar>
              <Avatar className="size-7 ring-2 ring-black/50">
                <AvatarImage src="/avatars/2.jpg" alt="Community member" />
                <AvatarFallback>N2</AvatarFallback>
              </Avatar>
              <Avatar className="size-7 ring-2 ring-black/50">
                <AvatarImage src="/avatars/3.jpg" alt="Community member" />
                <AvatarFallback>N3</AvatarFallback>
              </Avatar>
            </div>
            <span className="text-xs text-neutral-200">2.1k Currently on Waitlist.</span>
          </div>

          <h1 className="text-4xl sm:text-6xl leading-tight">
            <span className="font-medium">The Backbone of</span>
            <br />
            <span className="font-bold italic">Modern Logistics.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            Unifying every player in the supply chain into a single, connected ecosystem.
            <br />
            <span className="font-bold">Smarter</span>, <span className="font-bold">Faster</span>, and built for the <span className="font-bold">Future of Logistics</span>.
          </p>
          {/* Inline email form that opens dialog with prefilled email */}
          <HeroWaitlistInline />

          {/* Social icons under form */}
          <div className="mt-4 flex items-center justify-center gap-5 text-muted-foreground">
            {/* YouTube */}
            <a href="#" aria-label="YouTube" className="hover:text-primary">
              <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
                <path fill="currentColor" d="M21.8 8.001a3 3 0 0 0-2.11-2.12C18.37 5.5 12 5.5 12 5.5s-6.37 0-7.69.381A3 3 0 0 0 2.2 8.001C1.818 9.322 1.818 12 1.818 12s0 2.678.381 3.999a3 3 0 0 0 2.11 2.12c1.32.381 7.69.381 7.69.381s6.37 0 7.69-.381a3 3 0 0 0 2.11-2.12C22.182 14.678 22.182 12 22.182 12s0-2.678-.381-3.999M9.955 14.955v-5.91L15 12z"/>
              </svg>
            </a>
            {/* X/Twitter */}
            <a href="#" aria-label="X/Twitter" className="hover:text-primary">
              <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
                <path fill="currentColor" d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="hover:text-primary">
              <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
                <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/>
              </svg>
            </a>
          </div>
        </div>
        </div>
      </div>

  {/* Operational narrative pinned under the hero */}
  <OperationalNarrativeSection />

      {/* Stacked cards rendered as a separate component that overlays the pinned content */}
      <section id="stacked-cards-stage" className="relative z-20">
        <StackedCards />
      </section>

  {/* Ecosystem narrative section */}
  <EcosystemNarrativeSection />

  {/* Operational highlights (visibility, collaboration, insights) */}
  <OperationalHighlightsSection />

  {/* Marketplace audience features */}
  <MarketplaceAudienceFeatures />
  
  {/* Platform pillars section */}
  <PlatformPillarsSection />

  {/* Call to Action at page end */}
  <div className="mt-16 mb-24 px-6 sm:px-10 lg:px-20">
    <CallToAction />
  </div>

  {/* Footer */}
  <Footer />
    </main>
  );
}

export const generateMetadata = async (): Promise<Metadata> => {
  const title = "NobleVerse – The Backbone of Modern Logistics";
  const description = "Unifying every player in the supply chain into a single, connected ecosystem.";
  const url = "https://nobleverse.co/";
  return {
    title,
    description,
    alternates: { canonical: url },
  icons: [{ rel: "icon", url: "/favico.ico" }],
    openGraph: {
      title,
      description,
      url,
      siteName: "NobleVerse",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "NobleVerse" }],
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
      "logistics",
      "supply chain",
      "visibility",
      "automation",
      "collaboration",
      "NobleVerse",
    ],
  };
};
