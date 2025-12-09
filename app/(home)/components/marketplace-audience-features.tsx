import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import { Ship, Route, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
// import { ReactNode } from 'react'

export default function MarketplaceAudienceFeatures() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="@container mx-auto max-w-6xl px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">More Than a Platform. An Ecosystem of Opportunity.</h2>
                    <p className="mt-4 text-muted-foreground">NobleVerse isn&#39;t just software; it&#39;s an ecosystem designed so everyone wins. We create value for our users, not just from them.</p>
                </div>
                <Card className="@min-4xl:max-w-full @min-4xl:grid-cols-3 @min-4xl:divide-x @min-4xl:divide-y-0 mx-auto mt-8 grid auto-rows-fr max-w-sm divide-y overflow-hidden shadow-zinc-950/5 *:text-center md:mt-16">
                    <div className="group flex h-full flex-col">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Ship
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">For Shippers</h3>
                        </CardHeader>

                        <CardContent className="pb-2">
                            <p className="text-sm">Stop being locked in. Access a global marketplace of vetted forwarders. Compare real-time quotes, transit times, and reliability ratings to find the perfect partner for every shipment—not just the ones you already know.</p>
                        </CardContent>

                        <CardFooter className="mt-auto pt-4 pb-6">
                            <div className="mx-auto">
                                <Button asChild variant="outline" size="sm">
                                    <Link href="/teams/shippers-manufacturers">Learn more</Link>
                                </Button>
                            </div>
                        </CardFooter>
                    </div>

                    <div className="group flex h-full flex-col">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Route
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">For Forwarders</h3>
                        </CardHeader>

                        <CardContent className="pb-2">
                            <p className="mt-3 text-sm">Stop cold-calling. This is where the work is. Gain direct access to qualified, open shipment requests. Build your reputation, submit competitive offers, and win more business in a transparent ecosystem.</p>
                        </CardContent>

                        <CardFooter className="mt-auto pt-4 pb-6">
                            <div className="mx-auto">
                                <Button asChild variant="outline" size="sm">
                                    <Link href="/teams/freight-forwarders">Learn more</Link>
                                </Button>
                            </div>
                        </CardFooter>
                    </div>

                    <div className="group flex h-full flex-col">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <ShieldCheck
                                    className="size-6"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">For Brokers & Agents</h3>
                        </CardHeader>

                        <CardContent className="pb-2">
                            <p className="mt-3 text-sm">Stop chasing paperwork. Instantly access every critical document—AES-256 encrypted, time-stamped, and blockchain-verified—from a single, secure vault. Controlled, error-free processing at the speed of light.</p>
                        </CardContent>

                        <CardFooter className="mt-auto pt-4 pb-6">
                            <div className="mx-auto">
                                <Button asChild variant="outline" size="sm">
                                    <Link href="/teams/customs-compliance">Learn more</Link>
                                </Button>
                            </div>
                        </CardFooter>
                    </div>
                </Card>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: React.ReactNode }) => (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
        />

        <div className="bg-card absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
