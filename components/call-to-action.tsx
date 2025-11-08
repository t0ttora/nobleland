import { Button } from '@/components/ui/button'
import { WaitlistDialog } from '@/components/ui/waitlist-dialog'
export default function CallToAction() {
    return (
        <section className="py-16">
            <div className="relative mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32 bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-foreground/.08),transparent)]">
                {/* Vertical accent lines */}
                {/* side lines removed per request */}
                <div className="-z-10 absolute top-0 left-1/2 h-full border-l border-dashed" />

                <div className="text-center">
                    <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl leading-tight">
                        <span className="font-medium">Stop Chasing.</span>
                        <br />
                        <span className="font-bold italic">Start Commanding.</span>
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground">
                        The future of logistics isn&rsquo;t just about being connected—it&rsquo;s about being intelligent. We are now onboarding early enterprise clients and pilot partners.
                    </p>

                    <div className="mt-10 flex justify-center">
                        <WaitlistDialog trigger={<Button size="lg">Join Waitlist</Button>} />
                    </div>
                </div>
            </div>
        </section>
    )
}
