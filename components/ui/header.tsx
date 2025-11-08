"use client";

import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "@/components/ui/waitlist-dialog";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

function NobleNav() {
    const navigationItems = [
        {
            title: "Platform",
            description: "Tools for predictive logistics, visibility, and automation.",
            items: [
                { title: "Shipment Rooms", href: "/platform/shipment-rooms" },
                { title: "NobleSuite™", href: "/noblesuite" },
                { title: "NobleIntelligence", href: "/nobleintelligence" },
                { title: "NobleAutomate", href: "/nobleautomate" },
            ],
        },
        {
            title: "For Teams",
            description: "Purpose-built experiences for every stakeholder.",
            items: [
                {
                    title: "Shippers & Manufacturers",
                    href: "/teams/shippers-manufacturers",
                },
                {
                    title: "Freight Forwarders",
                    href: "/teams/freight-forwarders",
                },
                {
                    title: "Customs & Compliance Agents",
                    href: "/teams/customs-compliance",
                },
            ],
        },
        {
            title: "Company",
            description: "Learn about our mission, team, and commitments.",
            items: [
                {
                    title: "Pricing",
                    href: "/pricing",
                },
                {
                    title: "About & Team",
                    href: "/about",
                },
                {
                    title: "Security & Compliance",
                    href: "/security",
                },
                {
                    title: "Careers",
                    href: "/careers",
                },
            ],
        },
        {
            title: "Resources",
            description: "Guides, integrations, and help to get the most out of NobleVerse.",
            items: [
                { title: "Blog", href: "/blog" },
                {
                    title: "Insights",
                    href: "/insights",
                },
                {
                    title: "Integrations",
                    href: "/integrations",
                },
                {
                    title: "Help Center",
                    href: "/help",
                },
            ],
        },
    ];

    const [isOpen, setOpen] = useState(false);

    // Mobile dropdown motion variants
    const dropdownVariants = {
        hidden: { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
        visible: {
            opacity: 1,
            clipPath: "inset(0% 0% 0% 0%)",
            transition: {
                duration: 0.24,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.035,
            },
        },
        exit: { opacity: 0, clipPath: "inset(0% 0% 100% 0%)", transition: { duration: 0.18, ease: "easeIn" } },
    } as const

    const itemVariants = {
        hidden: { opacity: 0, y: -6 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
    } as const
    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-background">
            <div className="container relative mx-auto min-h-20 grid grid-cols-3 items-center px-4 py-2">
                {/* Left: Menus (desktop) / Menu button (mobile) */}
                <div className="flex items-center">
                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <Button variant="ghost" onClick={() => setOpen(!isOpen)} aria-label="Toggle menu">
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </Button>
                    </div>
                    {/* Desktop menu */}
                    <div className="hidden lg:flex items-center gap-2">
                    <NavigationMenu className="flex items-center">
                        <NavigationMenuList className="flex gap-2">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuTrigger className="font-medium text-sm">
                                        {item.title}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="!w-[520px] p-4">
                                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                            <div className="flex flex-col h-full justify-between">
                                                <div className="flex flex-col">
                                                    <p className="text-base font-medium">{item.title}</p>
                                                    {item.description && (
                                                        <p className="text-muted-foreground text-sm">
                                                            {item.description}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="mt-8 flex gap-2">
                                                   <WaitlistDialog trigger={<Button size="sm" variant="outline">Join Waitlist</Button>} />
                                                   <WaitlistDialog trigger={<Button size="sm">Join Waitlist</Button>} />
                                                </div>
                                            </div>
                                            <div className="flex flex-col text-sm h-full justify-end">
                                                {item.items?.map((subItem) => (
                                                    <NavigationMenuLink
                                                        href={subItem.href}
                                                        key={subItem.title}
                                                        className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span>{subItem.title}</span>
                                                        <MoveRight className="w-4 h-4 text-muted-foreground" />
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    </div>
                </div>

                {/* Center: Logo */}
                <div className="flex justify-center">
                    <Link href="/" aria-label="Home" className="flex items-center">
                        {/* Static alt text to avoid hydration mismatch; previously '/' */}
                        <Image
                          src="/logomark.svg"
                          alt="NobleVerse Logo"
                          width={28}
                          height={28}
                          className="brightness-0 invert"
                          priority
                        />
                    </Link>
                </div>

                {/* Right: CTAs (desktop and mobile) */}
                <div className="flex justify-end gap-3">
                    {/* Mobile single CTA */}
                    <div className="lg:hidden">
                        <Button size="sm">Get Started</Button>
                    </div>
                    {/* Desktop CTAs */}
                    <div className="hidden lg:flex gap-3">
                        <WaitlistDialog trigger={<Button variant="outline">Join Waitlist</Button>} />
                        <Button>Watch Demo</Button>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div className="fixed inset-0 z-40 lg:hidden pointer-events-none">
                            {/* Backdrop covering full screen */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-x-0 top-20 bottom-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
                                onClick={() => setOpen(false)}
                            />
                            {/* Drawer panel under header */}
                            <motion.div
                                variants={dropdownVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                style={{ willChange: "opacity, clip-path, transform" }}
                                className="absolute top-20 left-6 right-6 flex flex-col bg-background shadow-lg py-4 rounded-xl gap-4 overflow-hidden pointer-events-auto"
                            >
                            {navigationItems.map((item) => (
                                <motion.div key={item.title} variants={itemVariants} className="flex flex-col gap-2">
                                    <motion.p variants={itemVariants} className="text-lg font-medium">
                                        {item.title}
                                    </motion.p>
                                    {item.items &&
                                            item.items.map((subItem) => (
                                                <motion.div key={subItem.title} variants={itemVariants}>
                                                    <Link
                                                        href={subItem.href}
                                                        className="flex justify-between items-center"
                                                        onClick={() => setOpen(false)}
                                                    >
                                                        <span className="text-muted-foreground">{subItem.title}</span>
                                                        <MoveRight className="w-4 h-4 stroke-1" />
                                                    </Link>
                                                </motion.div>
                                            ))}
                                </motion.div>
                            ))}
                            <motion.div variants={itemVariants} className="flex gap-3 pt-2">
                                <WaitlistDialog trigger={<Button variant="outline" className="flex-1">Join Waitlist</Button>} />
                                <WaitlistDialog trigger={<Button variant="outline" className="flex-1">Join Waitlist</Button>} />
                                <WaitlistDialog trigger={<Button className="flex-1">Join Waitlist</Button>} />
                            </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}

export { NobleNav };