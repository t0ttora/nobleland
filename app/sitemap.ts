import type { MetadataRoute } from 'next'
import { modules } from '@/lib/modules'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://nobleverse.co'
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/nobleautomate`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/nobleintelligence`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/noblesuite`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/shipment-rooms`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ]

  const toolkitRoutes: MetadataRoute.Sitemap = modules.map((m) => ({
    url: `${base}/noblesuite/toolkit/${m.id}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...toolkitRoutes]
}
