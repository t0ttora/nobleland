import { ContainerScroll } from '@/components/ui/container-scroll-animation'
import type { Metadata } from 'next'
import Image from 'next/image'
import { FeatureCard } from './components/grid-feature-cards'
import ContentSection from './components/content-4'
import { CpuArchitecture } from '@/components/ui/cpu-architecture'
import CallToAction from '@/components/call-to-action'
import Footer from '@/components/footer'
import dynamic from 'next/dynamic'
// Removed ssr:false (not permitted in Server Components) for WorldMap
const DynamicWorldMap = dynamic(() => import('@/components/ui/world-map').then(m => m.WorldMap))
import { MessageSquare, Map, Vault, Wallet } from 'lucide-react'
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background'

export default function ShipmentRoomsPage() {
	return (
		<main className="relative bg-[#0a0a0a] text-neutral-200">
			{/* Hero with container scroll animation */}
					<section className="relative pt-2 md:pt-4">
						{/* Hero edge fades to blend hero into page */}
						<span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-28 z-10" style={{ background: 'linear-gradient(to bottom, #0a0a0a 0%, rgba(10,10,10,0) 100%)' }} />
						<span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-28 z-10" style={{ background: 'linear-gradient(to top, #0a0a0a 0%, rgba(10,10,10,0) 100%)' }} />
						<span aria-hidden className="pointer-events-none absolute left-0 inset-y-0 w-20 z-10" style={{ background: 'linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0) 100%)' }} />
						<span aria-hidden className="pointer-events-none absolute right-0 inset-y-0 w-20 z-10" style={{ background: 'linear-gradient(to left, #0a0a0a 0%, rgba(10,10,10,0) 100%)' }} />
						{/* Background dotted glow layer */}
								<DottedGlowBackground
									className="pointer-events-none"
									gap={16}
									radius={1.6}
									color="rgba(255,255,255,0.13)"
									darkColor="rgba(255,255,255,0.18)"
									glowColor="rgba(0, 180, 255, 0.55)"
									darkGlowColor="rgba(56, 189, 248, 0.65)"
									opacity={0.55}
									backgroundOpacity={0.10}
									speedMin={0.25}
									speedMax={0.9}
									speedScale={0.85}
									performanceMode="medium"
									fps={40}
									maxDpr={1.25}
								/>
				<ContainerScroll
					titleComponent={
												<div className="mx-auto max-w-3xl px-6 text-center -mt-24 md:-mt-32 mb-6 md:mb-10">
							<h1 className="text-4xl sm:text-6xl leading-tight">
								<span className="font-medium">Every Shipment.</span>
								<br />
								<span className="font-bold italic">One Room.</span>
							</h1>
									<p className="mt-4 text-base sm:text-lg text-neutral-300">
								The Shipment Room is the unified, real-time command center where execution, communication, and finance converge.
							</p>
						</div>
					}
				>
					{/* Only the image, with no extra bottom space */}
					<Image src="/shipment.png" alt="Shipment overview" width={1200} height={675} className="h-auto w-full" />
				</ContainerScroll>
			</section>

					{/* Grid Feature Cards section */}
					<section className="py-16 md:py-28">
						<div className="mx-auto max-w-5xl px-6">
							<h2 className="mb-10 text-center text-3xl font-semibold sm:text-4xl text-white">
								Your 360° <span className="font-bold">Operational Hub</span>.
							</h2>
							<div className="grid gap-4 sm:grid-cols-2">
								<FeatureCard
									className="rounded-xl border border-white/10 bg-[#141414]"
									feature={{
										title: 'Unified Collaboration',
										icon: MessageSquare,
										description:
											'Stop the email chaos. Bring all stakeholders—shippers, forwarders, and brokers—into one context-aware, auditable chat thread and "Negotiation Card" system.',
									}}
								/>
								<FeatureCard
									className="rounded-xl border border-white/10 bg-[#141414]"
									feature={{
										title: 'Proactive Execution',
										icon: Map,
										description:
											'Move beyond tracking. A live map, auto-updating Milestone Timeline, and embedded NobleIntelligence alerts turn reactive firefighting into proactive control.',
									}}
								/>
								<FeatureCard
									className="rounded-xl border border-white/10 bg-[#141414]"
									feature={{
										title: 'Centralized Document Control',
										icon: Vault,
										description:
											'The secure NobleSuite vault, built-in. Manage versions, get approvals, and give customs brokers granular, role-based access to only the files they need.',
									}}
								/>
								<FeatureCard
									className="rounded-xl border border-white/10 bg-[#141414]"
									feature={{
										title: 'Transparent Financials',
										icon: Wallet,
										description:
											'Manage risk with a built-in Escrow. A live Payment Dashboard shows all fund statuses, with payments released automatically based on configurable, real-world milestones.',
									}}
								/>
							</div>
						</div>
					</section>

			{/* Trust and precision content section */}
					{/* CPU model above the section to keep content-4 layout intact */}
					<div className="w-full h-72 md:h-96 px-6 mx-auto max-w-5xl">
						<CpuArchitecture className="h-full w-full" animateText={false} />
					</div>
					<ContentSection
						title={
							<>
								Engineered for <span className="font-bold">Trust</span> and <span className="font-bold">Precision</span>.
							</>
						}
						body={
							<div className="space-y-6">
								<div>
									<p className="font-semibold text-white">Immutable Audit Log</p>
									<p className="mt-2 text-muted-foreground">This is your single source of truth. Every action, every message, and every document approval is time-stamped and cryptographically logged, creating a single, verifiable record for legal and compliance.</p>
								</div>
								<div>
									<p className="font-semibold text-white">Granular Role-Based Access</p>
									<p className="mt-2 text-muted-foreground">Control exactly who sees what. Our powerful RBAC system ensures a customs agent or warehouse manager can access their required tasks without ever seeing sensitive financial or commercial details.</p>
								</div>
							</div>
						}
					/>

			{/* CTA and Footer */}
				{/* World Map section inserted before CTA */}
				<section className="px-6 sm:px-10 lg:px-20 mt-20 md:mt-28">
					<div className="mx-auto max-w-5xl">
						<h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-white text-center">This Isn&apos;t a Tracking Link. It&apos;s a <span className="font-bold italic">Live Command View</span>.</h2>
						<p className="mx-auto max-w-3xl text-sm sm:text-base text-neutral-300 leading-relaxed text-center">
							Stop refreshing static portals. The Shipment Room features a live, GPS-enabled 3D map showing the precise, real-time location of your asset.
						</p>
						<div className="mt-10">
							<DynamicWorldMap
								lineColor="#ff5a26"
								dots={[
									{ start: { lat: 64.2008, lng: -149.4937, label: 'Alaska (Fairbanks)' }, end: { lat: 34.0522, lng: -118.2437, label: 'Los Angeles' } },
									{ start: { lat: 64.2008, lng: -149.4937, label: 'Alaska (Fairbanks)' }, end: { lat: -15.7975, lng: -47.8919, label: 'Brasília' } },
									{ start: { lat: -15.7975, lng: -47.8919, label: 'Brasília' }, end: { lat: 38.7223, lng: -9.1393, label: 'Lisbon' } },
									{ start: { lat: 51.5074, lng: -0.1278, label: 'London' }, end: { lat: 28.6139, lng: 77.209, label: 'New Delhi' } },
									{ start: { lat: 28.6139, lng: 77.209, label: 'New Delhi' }, end: { lat: 43.1332, lng: 131.9113, label: 'Vladivostok' } },
									{ start: { lat: 28.6139, lng: 77.209, label: 'New Delhi' }, end: { lat: -1.2921, lng: 36.8219, label: 'Nairobi' } },
								]}
							/>
						</div>
						<p className="mx-auto max-w-3xl text-sm sm:text-base text-neutral-300 leading-relaxed mt-6 text-center">
							We fuse data from carrier APIs, GPS feeds, and external webhooks directly into your room&apos;s Milestone Timeline. You don&apos;t just see the dot; you see its exact context against your plan. This allows you to anticipate delays and manage exceptions the moment they happen, not hours later.
						</p>
					</div>
				</section>
				<div className="px-6 sm:px-10 lg:px-20 mt-24">
				<CallToAction />
			</div>
			<Footer />
		</main>
	)
}

export const generateMetadata = async (): Promise<Metadata> => {
	const title = 'Shipment Rooms – Live Command View for Every Shipment';
	const description = 'A unified, real-time command center where execution, communication, and finance converge for each shipment.';
	const url = 'https://nobleverse.co/shipment-rooms';
	return {
		title,
		description,
		alternates: { canonical: url },
			openGraph: {
				title,
				description,
				url,
				siteName: 'NobleVerse',
				images: [{ url: '/shipment-rooms/opengraph-image', width: 1200, height: 630, alt: 'Shipment Rooms' }],
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
			'shipment room',
			'command center',
			'logistics collaboration',
			'supply chain visibility',
			'escrow payments',
		],
	};
};

