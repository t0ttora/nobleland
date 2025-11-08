import { notFound } from "next/navigation";
import { modules } from "@/lib/modules";
import Image from "next/image";
import type { Metadata } from "next";

export default function ModulePage({ params }: { params: { id: string } }) {
  const mod = modules.find(m => m.id === params.id);
  if (!mod) return notFound();
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{mod.dialogTitle}</h1>
        <p className="mt-4 max-w-2xl text-neutral-500 dark:text-neutral-400">{mod.subtitle}</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            {mod.points.map(p => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-neutral-100 dark:bg-neutral-900">
          <Image src={mod.image} alt={mod.title} fill className="object-cover" />
        </div>
      </div>
      {/* Structured Data: Individual module feature */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: mod.dialogTitle,
            description: mod.subtitle,
            url: `https://nobleverse.co/noblesuite/toolkit/${mod.id}`,
            about: mod.points,
            publisher: { '@type': 'Organization', name: 'NobleVerse' },
          }),
        }}
      />
    </main>
  );
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const mod = modules.find(m => m.id === params.id);
  if (!mod) {
    return {
      title: 'Module Not Found | NobleSuite',
      description: 'Requested module does not exist.',
      robots: { index: false },
    };
  }
  const title = `${mod.dialogTitle}`;
  const description = mod.subtitle;
  const url = `https://nobleverse.co/noblesuite/toolkit/${mod.id}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: 'NobleVerse',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: mod.title }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/twitter-image'],
    },
    robots: { index: true, follow: true },
    keywords: [mod.title, mod.category, 'NobleSuite toolkit', 'logistics software'],
  };
}
