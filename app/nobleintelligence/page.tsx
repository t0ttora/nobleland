import React from 'react';
import type { Metadata } from 'next';
import GoogleGeminiEffectDemo from '@/components/ui/google-gemini-effect-demo';
import { FeaturesSectionWithHoverEffects } from './components/feature-section-with-hover-effects';
import IntegrationsSection from '@/components/integrations-3';
import TestimonialsSection from '@/components/testimonials';
import CallToAction from '@/components/call-to-action';
import FooterSection from '@/components/footer';

export const generateMetadata = async (): Promise<Metadata> => {
  const title = 'NobleIntelligence – Predictive, Embedded AI';
  const description = 'NobleIntelligence powers proactive logistics with embedded insights, anomaly detection, and decision support.';
  const url = 'https://nobleverse.co/nobleintelligence';
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'NobleVerse',
      images: [{ url: '/nobleintelligence/opengraph-image', width: 1200, height: 630, alt: 'NobleIntelligence' }],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/twitter-image'],
    },
    robots: { index: true, follow: true },
    keywords: [
      'NobleIntelligence',
      'logistics AI',
      'predictive analytics',
      'anomaly detection',
      'supply chain insights',
    ],
  };
};

export default function NobleIntelligencePage() {
  // We'll rely on each component's internal structure; hero text will be injected by editing its component file.
  // GoogleGeminiEffect requires pathLengths MotionValues; for now we can pass an empty array placeholder.
  // If pathLengths are normally provided by a scroll animation parent, we may need to wrap; assumption: component can accept empty.
  return (
    <main className="flex flex-col gap-24">
      {/* Structured Data: SoftwareApplication (AI) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'NobleIntelligence',
            applicationCategory: 'BusinessApplication',
            description: 'Embedded AI providing proactive insights and decision support for logistics.',
            url: 'https://nobleverse.co/nobleintelligence',
            publisher: { '@type': 'Organization', name: 'NobleVerse' },
          }),
        }}
      />
      <section className="pt-32">
        <GoogleGeminiEffectDemo />
      </section>

      <section className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-5xl font-semibold">Where Data Becomes Decision.</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm md:text-base">NobleIntelligence is more than an assistant. It’s your embedded operations analyst—automating work, predicting outcomes, and empowering your team to command.</p>
        </div>
        <FeaturesSectionWithHoverEffects />
      </section>

      <IntegrationsSection />

      <TestimonialsSection />

      <CallToAction />

      <FooterSection />
    </main>
  );
}
