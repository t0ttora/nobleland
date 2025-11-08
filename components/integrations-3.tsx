// import { cn } from '@/lib/utils'
// import { Button } from '@/components/ui/button'
// import Link from 'next/link'
import { Component as AILoader } from '@/components/ai-loader'

export default function IntegrationsSection() {
    return (
        <section>
            <div className="bg-muted dark:bg-background py-24 md:py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="grid items-center sm:grid-cols-2">
                        <div className="relative mx-auto w-full max-w-md">
                            {/* Replace left graphic grid with AI loader */}
                            <div className="relative z-10 flex items-center justify-center">
                                <AILoader />
                            </div>
                        </div>
                        <div className="mx-auto mt-6 max-w-lg space-y-6 text-center sm:mt-0 sm:text-left">
                            <h2 className="text-balance text-3xl font-semibold md:text-4xl">Embedded in Your Workflow</h2>
                            <p className="text-muted-foreground">The AI is not a separate tool; it lives inside your workflow. It provides insights directly in your chat, on your dashboard, and in your documents—always respecting your user role and permissions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// IntegrationCard removed since the left grid is replaced by the AI loader per request.
