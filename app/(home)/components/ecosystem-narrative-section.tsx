import { Cpu, Link2 } from 'lucide-react'
import Image from 'next/image'

export default function EcosystemNarrativeSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-3xl text-4xl font-medium lg:text-5xl">
                    NobleVerse: Beyond Software. Beyond Logistics.
                </h2>
                <div className="relative">
                    <div className="relative z-10 space-y-4 md:w-3/5">
                        <p className="text-muted-foreground">
                            It’s not just an operating system. It’s the emerging intelligence network for global trade. We are building the foundational layer where shipments aren&apos;t just tracked, they are understood and autonomously managed. It supports an entire, self-optimizing ecosystem—from predictive insights to autonomous execution, creating value for every partner involved.
                        </p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 p-1">
                                        <Link2 className="size-4" />
                                    </span>
                                    <h3 className="text-sm font-medium">The Connective Layer.</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">It supports an entire ecosystem—uniting every node, every partner, and every data point into a single, in-sync reality.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 p-1">
                                        <Cpu className="size-4" />
                                    </span>
                                    <h3 className="text-sm font-medium">The Intelligence Engine.</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">It supports an entire ecosystem—turning real-time information into foresight, proactive solutions, and autonomous decisions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="pointer-events-none absolute inset-0">
                        <div className="relative h-full w-full overflow-hidden rounded-2xl mask-l-from-20% mask-l-to-70% md:mask-l-from-25% md:mask-l-to-65%">
                            <Image
                                src="/container.png"
                                alt="Container terminals illustration"
                                fill
                                priority
                                className="object-cover opacity-35"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
