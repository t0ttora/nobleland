import { Bell, Brain, Database, FileText } from 'lucide-react'

export default function Features() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-2xl space-y-4 text-center md:space-y-6">
                    <h2 id="features-heading" className="text-balance text-3xl font-semibold sm:text-4xl lg:text-5xl">Capabilities designed for real operations</h2>
                    <p className="text-zinc-400">From learning how your team works to executing routine documents and follow-ups—NobleAutomate turns patterns into action.</p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border border-neutral-900 *:p-6 sm:*:p-8 sm:grid-cols-2">
                    {/* Feature 1 */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Brain className="size-4" />
                            <h3 className="text-sm font-medium">The Workflow‑Learning Layer</h3>
                        </div>
                        <p className="text-sm text-zinc-400">This isn’t just a simple “if‑then” rule engine. NobleAutomate observes your team’s behavior to identify and suggest new processes it can automate, learning directly from your operations.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <FileText className="size-4" />
                            <h3 className="text-sm font-medium">Automated Document Generation</h3>
                        </div>
                        <p className="text-sm text-zinc-400">Stop manually creating invoices. Based on shipment milestones (like “Proof of Delivery”), NobleAutomate automatically generates and sends the correct invoice or packing list.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Bell className="size-4" />
                            <h3 className="text-sm font-medium">Smart Document Chasing</h3>
                        </div>
                        <p className="text-sm text-zinc-400">Stop chasing partners for paperwork. The system knows a shipment needs a customs doc 3 days before sailing. It automatically flags the missing file and sends reminders until it’s received.</p>
                    </div>

                    {/* Feature 4 */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Database className="size-4" />
                            <h3 className="text-sm font-medium">Data-Driven Triggers</h3>
                        </div>
                        <p className="text-sm text-zinc-400">It connects to your data. It can monitor a NobleCells inventory sheet and automatically trigger a new shipment request when stock levels hit a pre‑set threshold.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
