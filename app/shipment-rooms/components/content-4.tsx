import type { ReactNode } from 'react'

type Content4Props = {
    title?: ReactNode
    body?: ReactNode
    rightExtra?: ReactNode
}

export default function ContentSection({ title, body, rightExtra }: Content4Props) {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium text-white">
                        {title}
                    </h2>
                    <div className="space-y-6 text-neutral-300">
                        {body}
                        {rightExtra}
                    </div>
                </div>
            </div>
        </section>
    )
}
