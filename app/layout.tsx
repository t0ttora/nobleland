import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NobleNav } from "@/components/ui/header";
import { Toaster } from "sonner";
import GlobalLoader from "@/components/ui/global-loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NobleVerse - The Backbone of Modern Logistics",
    template: "%s | NobleVerse",
  },
  description:
    "NobleVerse unifies every player in the supply chain into a single, intelligent platform—delivering visibility, collaboration, and automation.",
  keywords: [
    "logistics",
    "supply chain",
    "freight",
    "visibility",
    "automation",
    "collaboration",
    "NobleVerse",
  ],
  icons: {
    icon: "/favico.ico",
  },
  // Resolve absolute URLs against live domain
  metadataBase: new URL("https://nobleverse.co"),
  openGraph: {
    title: "NobleVerse - The Backbone of Modern Logistics",
    description:
      "Unifying every player in the supply chain into a single, intelligent platform.",
    url: "/",
    siteName: "NobleVerse",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "NobleVerse" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NobleVerse - The Backbone of Modern Logistics",
    description:
      "Unifying every player in the supply chain into a single, intelligent platform.",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalLoader />
        <NobleNav />
        <div className="pt-20">{children}</div>
        <Toaster theme="dark" position="bottom-right" />
        {/* Structured data for Organization */}
        <script
          type="application/ld+json"
          // Using JSON.stringify inline is fine for static metadata
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'NobleVerse',
              url: 'https://nobleverse.co/',
              logo: 'https://nobleverse.co/favico.ico',
              sameAs: [
                'https://twitter.com/',
                'https://www.linkedin.com/',
                'https://www.youtube.com/',
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
