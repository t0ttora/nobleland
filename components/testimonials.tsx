import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function TestimonialsSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <blockquote>
                        <p className="text-lg font-medium sm:text-xl md:text-3xl">Think of NobleIntelligence as a senior operations analyst working for you 24/7 in a complex, volatile environment.

It doesn’t just show you the data; it interprets it and tells you what to do next. It frees your team to focus on solving high-level problems, not just finding them.</p>

                        <div className="mt-12 flex items-center justify-center gap-6">
                            <Avatar className="size-12">
                                <AvatarImage
                                    src="https://tailus.io/images/reviews/shekinah.webp"
                                    alt="Shekinah Tshiokufila"
                                    height="400"
                                    width="400"
                                    loading="lazy"
                                />
                                <AvatarFallback>OED</AvatarFallback>
                            </Avatar>

                            <div className="space-y-1 border-l pl-6">
                                <cite className="font-medium">Oluş Emre Demir</cite>
                                <span className="text-muted-foreground block text-sm">CTPO, NobleVerse</span>
                            </div>
                        </div>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}