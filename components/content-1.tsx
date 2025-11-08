import Image from 'next/image'
import type { ComponentType } from 'react'

type Column = {
    icon?: ComponentType<{ className?: string }>
    title: string
    description: string
}

type Content1Props = {
    title?: React.ReactNode
    body?: string | React.ReactNode
    columns?: Column[]
    images?: { dark: string; light: string }
    hideImage?: boolean
    headerExtra?: React.ReactNode
}

export default function ContentSection(props: Content1Props) {
    const title = props.title ?? 'The Lyra ecosystem brings together our models.'
    const body =
        props.body ?? (
            <>
                <p className="text-muted-foreground">
                    Gemini is evolving to be more than just the models.{' '}
                    <span className="text-accent-foreground font-bold">It supports an entire ecosystem</span> — from products innovate.
                </p>
                <p className="text-muted-foreground">It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate</p>
            </>
        )
    const images = props.images ?? { dark: '/payments.png', light: '/payments-light.png' }
    const columns = props.columns
    const hideImage = props.hideImage ?? false

    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                {props.headerExtra}
                <h2 className="relative z-10 max-w-3xl text-4xl font-medium lg:text-5xl text-white">{title}</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    {!hideImage && (
                        <div className="relative mb-6 sm:mb-0">
                            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                                <Image src={images.dark} className="hidden rounded-[15px] dark:block" alt="illustration dark" width={1207} height={929} />
                                <Image src={images.light} className="rounded-[15px] shadow dark:hidden" alt="illustration light" width={1207} height={929} />
                            </div>
                        </div>
                    )}

                    <div className="relative space-y-6">
                        {body ? (
                            <div className="space-y-3 text-neutral-300">{body}</div>
                        ) : null}
                        {columns && columns.length > 0 && (
                            <div className="grid grid-cols-1 gap-6 pt-2 sm:grid-cols-2">
                                {columns.map((c, idx) => (
                                    <div key={idx} className="rounded-xl border border-white/10 bg-[#141414] p-5 shadow-lg shadow-black/20">
                                        {c.icon && <c.icon className="mb-3 size-7 text-white" />}
                                        <p className="font-semibold text-white">{c.title}</p>
                                        <p className="mt-2 text-sm text-neutral-400">{c.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {!columns && (
                            <div className="pt-6">
                                <blockquote className="border-l-4 pl-4">
                                    <p>
                                        Using TailsUI has been like unlocking a secret design superpower. It&apos;s the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.
                                    </p>

                                    <div className="mt-6 space-y-3">
                                        <cite className="block font-medium">John Doe, CEO</cite>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto" />
                                    </div>
                                </blockquote>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
