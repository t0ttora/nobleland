import Intelligence from "@/components/ui/intelligence";
import { Cpu, Lock, Sparkles, Zap } from "lucide-react";

export default function PlatformPillarsSection() {
    return (
        <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-5xl space-y-12 px-6">
                <div className="px-3 pt-3 md:-mx-8">
                    <div className="aspect-88/36 mask-b-from-75% mask-b-to-95% relative">
                        <div className="absolute inset-0 z-10 flex items-center justify-center">
                            <Intelligence
                                        className="w-full max-w-[680px] h-[420px] sm:h-[460px]"
                                circleLogoSrc="/logomark.svg"
                                circleLogoWhite
                                hideTitleIcon
                                ambientPulse
                                badgeTexts={{
                                    first: "Intelligence",
                                    second: "Suite",
                                    third: "Automation",
                                    fourth: "Integrity",
                                }}
                                buttonTexts={{ first: "invoice", second: "#MSKU8401" }}
                                buttonIcons={{ first: "cells", second: "folder" }}
                                title="Unified, secure logistics data exchange"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-semibold">
                        Where intelligence, automation, and trust come together.
                    </h2>
                    <p className="max-w-sm sm:ml-auto">
                        NobleVerse unifies your logistics data, workflows, and decisions into a single platform—built for real-time visibility, resilient operations, and measurable outcomes.
                    </p>
                </div>

                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />
                            <h3 className="text-sm font-medium">NobleIntelligence™</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">AI-powered predictions, anomaly detection, and decision support built on real shipment data.</p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">NobleSuite™</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">A unified toolkit for planning, tracking, and collaboration across teams and partners.</p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">NobleAutomate™</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Workflow automation for rate checks, document matching, and status updates—no busywork.</p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">Blockchain-Verified Integrity</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Cryptographically signed records for tamper-proof documents, events, and milestones.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
