'use client'
import { Activity, Map as MapIcon, MessageCircle, Lock, Navigation2, Clock } from 'lucide-react'
import DottedMap from 'dotted-map'
import { Area, AreaChart, CartesianGrid } from 'recharts'
import { type ChartConfig, ChartContainer } from '@/components/ui/chart'

export default function OperationalHighlightsSection() {
    return (
        <section className="px-4 pt-8 pb-16 md:pt-16 md:pb-32">
            <div className="mx-auto grid max-w-5xl border md:grid-cols-2">
                <div>
                    <div className="p-6 sm:p-12">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <MapIcon className="size-4" />
                            “Where is it now?”
                        </span>

                        <h3 className="mt-8 text-2xl font-semibold">Live, End-to-End Visibility</h3>
                        <p className="mt-3 text-sm leading-relaxed">Stop the “Where is it now?” calls. We provide a single source of truth with GPS-enabled, real-time tracking from origin to final-mile. This isn’t just a dot on a map; it’s a live, unified picture of all your assets, all the time.</p>
                    </div>

                    <div
                        aria-hidden
                        className="relative">
                        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 sm:top-6 sm:left-6">
                            <div className="rounded-(--radius) bg-background/90 backdrop-blur z-1 dark:bg-muted relative flex w-fit items-center gap-2 border px-3 py-1 text-xs font-medium shadow-md shadow-zinc-950/5">
                                <Navigation2 className="size-3.5" aria-hidden />
                                Your shipment is in transit
                            </div>
                            <div className="rounded-(--radius) bg-background/90 backdrop-blur flex w-fit items-center gap-2 border px-3 py-1.5 text-xs font-medium shadow-md shadow-zinc-950/5 dark:bg-zinc-900">
                                <Clock className="size-3" aria-hidden />
                                Updated 2m ago • SHA → RTM
                            </div>
                        </div>

                        <div className="relative overflow-hidden">
                            <div className="bg-radial z-1 to-background absolute inset-0 from-transparent to-75%"></div>
                            <Map />
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden border-t bg-zinc-50 p-6 sm:p-12 md:border-0 md:border-l dark:bg-transparent">
                    <div className="relative z-10">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <MessageCircle className="size-4" />
                            “Manual Breakdowns”
                        </span>

                        <h3 className="my-8 text-2xl font-semibold">Context-Aware Collaboration</h3>
                        <p className="text-sm leading-relaxed">Stop switching between email, WhatsApp, and your TMS. Every shipment gets its own “Shipment Room” with integrated, real-time chat. Bring shippers, forwarders, and brokers into one conversation to resolve exceptions instantly, not days later.</p>
                    </div>
                    <div
                        aria-hidden
                        className="mt-6 sm:mt-8 flex flex-col gap-8">
                        <div>
                            <div className="rounded-(--radius) bg-background w-4/5 border p-3 text-xs">Hey! Quick check on #MSKU8401 — saw a quick temp blip earlier. All good now, and are the docs updated?</div>
                        </div>

                        <div>
                            <div className="rounded-(--radius) ml-auto w-4/5 bg-[#ff5a26] p-3 text-xs text-white">All sorted — spike is resolved. I’ve uploaded the invoice + temp log. ETA nudged by 12m → 14:44 UTC.</div>
                        </div>
                    </div>
                </div>
                <div className="col-span-full border-y p-12">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mx-auto inline-flex items-center justify-center gap-2">
                            <Lock className="size-4 text-muted-foreground" aria-hidden />
                            <h3 className="text-2xl font-semibold">The Centralized Secure Vault</h3>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Stop the email chaos and compliance risk. NobleSuite provides a single, AES-256 encrypted repository for every file. With role-based access, version control, and a blockchain-verified audit trail, you are always compliant and in command.</p>
                    </div>
                </div>
                <div className="relative col-span-full">
                    <div className="absolute z-10 max-w-2xl px-6 pr-12 pt-6 md:px-12 md:pt-12">
                        <span className="text-muted-foreground flex items-center gap-2">
                            <Activity className="size-4" />
                            “Reactive Firefighting”
                        </span>

                        <h3 className="my-6 text-2xl font-semibold">AI-Interpreted KPI Insights</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">Stop just reporting on problems. Our platform provides instant, AI-interpreted insights for your core KPIs—like carrier performance, lane efficiency, or detention costs. We don’t just show you a data point; we tell you what it means and what to do next.</p>
                    </div>
                    <MonitoringChart />
                </div>
            </div>
        </section>
    )
}

const map = new DottedMap({ height: 55, grid: 'diagonal' })

const points = map.getPoints()

const svgOptions = {
    backgroundColor: 'var(--color-background)',
    color: 'currentColor',
    radius: 0.15,
}

const Map = () => {
    const viewBox = `0 0 120 60`
    return (
        <svg
            viewBox={viewBox}
            style={{ background: svgOptions.backgroundColor }}>
            {points.map((point, index) => (
                <circle
                    key={index}
                    cx={point.x}
                    cy={point.y}
                    r={svgOptions.radius}
                    fill={svgOptions.color}
                />
            ))}
        </svg>
    )
}

const chartConfig = {
    desktop: {
        label: 'Desktop',
        color: '#ff5a26',
    },
    mobile: {
        label: 'Performance',
        color: '#ff8a66',
    },
} satisfies ChartConfig

const chartData = [
    { month: 'May', desktop: 56, mobile: 224 },
    { month: 'June', desktop: 56, mobile: 224 },
    { month: 'January', desktop: 126, mobile: 252 },
    { month: 'February', desktop: 205, mobile: 410 },
    { month: 'March', desktop: 200, mobile: 126 },
    { month: 'April', desktop: 400, mobile: 800 },
]

const MonitoringChart = () => {
    return (
        <ChartContainer
            className="h-120 aspect-auto md:h-96"
            config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 0,
                    right: 0,
                }}>
                <defs>
                    <linearGradient
                        id="fillDesktop"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1">
                        <stop
                            offset="0%"
                            stopColor="var(--color-desktop)"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="55%"
                            stopColor="var(--color-desktop)"
                            stopOpacity={0.1}
                        />
                    </linearGradient>
                    <linearGradient
                        id="fillMobile"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1">
                        <stop
                            offset="0%"
                            stopColor="var(--color-mobile)"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="55%"
                            stopColor="var(--color-mobile)"
                            stopOpacity={0.1}
                        />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <Area
                    strokeWidth={2}
                    dataKey="mobile"
                    type="stepBefore"
                    fill="url(#fillMobile)"
                    fillOpacity={0.1}
                    stroke="var(--color-mobile)"
                    stackId="a"
                />
                <Area
                    strokeWidth={2}
                    dataKey="desktop"
                    type="stepBefore"
                    fill="url(#fillDesktop)"
                    fillOpacity={0.1}
                    stroke="var(--color-desktop)"
                    stackId="a"
                />
            </AreaChart>
        </ChartContainer>
    )
}
