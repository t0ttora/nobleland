"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cardData, type ReviewCard } from '@/lib/utils';
import { EyeOff, Wrench, FileWarning, Flame, CircleDot } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface CardProps {
    id: number;
    title: string;
    description: string;
    index: number;
    totalCards: number;
    isInvisible?: boolean;
}

const Card: React.FC<CardProps> = ({ id, title, description, index, totalCards, isInvisible = false }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        const container = containerRef.current;
        if (!card || !container) return;

        const targetScale = 1 - (totalCards - index) * 0.05;

        gsap.set(card, {
            scale: 1,
            transformOrigin: 'center top',
        });

        const trigger = ScrollTrigger.create({
            trigger: container,
            start: 'top center',
            end: 'bottom center',
            scrub: 0.8,
            onUpdate: (self) => {
                const progress = self.progress;
                const scale = gsap.utils.interpolate(1, targetScale, progress);
                gsap.set(card, {
                    scale: Math.max(scale, targetScale),
                    transformOrigin: 'center top',
                });
            },
        });

        return () => {
            trigger.kill();
        };
    }, [index, totalCards]);

    return (
        <div
            ref={containerRef}
            style={{
                height: isInvisible ? '28vh' : '75vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'sticky',
                top: isInvisible ? 'calc((100vh - 28vh) / 2)' : 'calc((100vh - 75vh) / 2)',
            }}
        >
            <div
                ref={cardRef}
                style={{
                    position: 'relative',
                    width: 'min(920px, 92%)',
                    height: '450px',
                    borderRadius: '24px',
                    isolation: 'isolate',
                    top: `calc(-5vh + ${index * 25}px)`,
                    transformOrigin: 'top',
                    opacity: isInvisible ? 0 : 1,
                    pointerEvents: isInvisible ? 'none' as const : 'auto',
                }}
                className="card-content"
            >
                {/* Neutral electric border accent (non-colored) */}
                <div
                    style={{
                        position: 'absolute',
                        inset: '-2px',
                        borderRadius: '26px',
                        padding: '2px',
                        background: `conic-gradient(
                            from 0deg,
                            transparent 0deg,
                            rgba(255,255,255,0.22) 80deg,
                            transparent 140deg,
                            rgba(255,255,255,0.18) 200deg,
                            transparent 260deg,
                            rgba(255,255,255,0.14) 320deg,
                            transparent 360deg
                        )`,
                        filter: 'blur(0.2px)',
                        zIndex: -1,
                    }}
                />

                {/* Main Card Content - Glassy, black-tinted */}
                <div
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        borderRadius: '24px',
                        background: 'linear-gradient(145deg, rgba(15,15,15,0.85), rgba(8,8,8,0.6))',
                        backdropFilter: 'blur(20px) saturate(160%)',
                        WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                        border: '1px solid rgba(255,255,255,0.5)',
                        boxShadow:
                            '0 10px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.25)',
                        overflow: 'hidden',
                        padding: '1.25rem',
                    }}
                >
                    {/* Enhanced glass reflection overlay */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '58%',
                            background:
                                'linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.1) 45%, transparent 100%)',
                            pointerEvents: 'none',
                            borderRadius: '24px 24px 0 0',
                        }}
                    />

                    {/* Glass shine line */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '10px',
                            left: '12px',
                            right: '12px',
                            height: '2px',
                            background:
                                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 50%, transparent 100%)',
                            borderRadius: '1px',
                            pointerEvents: 'none',
                        }}
                    />

                    {/* Side glass reflection */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '2px',
                            height: '100%',
                            background:
                                'linear-gradient(180deg, rgba(255,255,255,0.28) 0%, transparent 60%)',
                            borderRadius: '24px 0 0 24px',
                            pointerEvents: 'none',
                        }}
                    />

                    {/* Frosted glass texture */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundImage: `
                                radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 1px, transparent 2px),
                                radial-gradient(circle at 80% 70%, rgba(255,255,255,0.08) 1px, transparent 2px),
                                radial-gradient(circle at 40% 80%, rgba(255,255,255,0.06) 1px, transparent 2px)
                            `,
                            backgroundSize: '30px 30px, 25px 25px, 35px 35px',
                            pointerEvents: 'none',
                            borderRadius: '24px',
                            opacity: 0.7,
                        }}
                    />

                    {/* Top-right icon (contextual) */}
                    <TopRightIcon id={id} isHidden={!!isInvisible} />

                    {/* Bottom-left text content */}
                    <div
                        style={{
                            position: 'absolute',
                            left: '1.25rem',
                            right: '1.25rem',
                            bottom: '1.25rem',
                            maxWidth: 'min(640px, 78%)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem',
                            color: '#ffffff',
                            textAlign: 'left',
                        }}
                    >
                        <h3
                            style={{
                                fontSize: 'clamp(1.25rem, 2.2vw, 1.9rem)',
                                lineHeight: 1.2,
                                fontWeight: 600,
                                letterSpacing: '-0.01em',
                            }}
                        >
                            {title}
                        </h3>
                        <p
                            style={{
                                color: 'rgba(255,255,255,0.85)',
                                fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
                                lineHeight: 1.55,
                            }}
                        >
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Map card id to an icon for the top-right badge
const iconMap: Record<number, React.ComponentType<{ size?: number; className?: string }>> = {
    1: EyeOff,
    2: Wrench,
    3: FileWarning,
    4: Flame,
};

const TopRightIcon: React.FC<{ id: number; isHidden: boolean }> = ({ id, isHidden }) => {
    if (isHidden) return null;
    const IconComp = iconMap[id] ?? CircleDot;
    return (
        <div
            style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                width: '56px',
                height: '56px',
                borderRadius: '9999px',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06))',
                border: '1px solid rgba(255,255,255,0.45)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px) saturate(140%)',
                WebkitBackdropFilter: 'blur(10px) saturate(140%)',
            }}
            aria-hidden
        >
            <IconComp size={26} className="text-white" />
        </div>
    );
};

export const StackedCards: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        gsap.fromTo(
            container,
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1.2,
                ease: 'power2.out',
            }
        );
    }, []);

    return (
        <main ref={containerRef}>
            {/* Cards Section only (embedded under content) */}
            <section
                style={{
                    color: '#ffffff',
                    width: '100%',
                }}
            >
                {(() => {
                    // Build list with an invisible first placeholder to make total 5 cards
                    const placeholder: ReviewCard = {
                        id: 0,
                        title: '',
                        description: '',
                    };
                    const cards: ReviewCard[] = [placeholder, ...cardData];
                    return cards.map((card: ReviewCard, index: number) => (
                        <Card
                            key={`${card.id}-${index}`}
                            id={card.id}
                            title={card.title}
                            description={card.description}
                            index={index}
                            totalCards={cards.length}
                            isInvisible={index === 0}
                        />
                    ));
                })()}
            </section>
        </main>
    );
};
