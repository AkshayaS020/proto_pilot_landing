"use client";

import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Navbar() {
    const router = useRouter()
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const links = [
        { name: "Features", href: "#features" },
        { name: "Infrastructure", href: "#infra" },
        { name: "Network", href: "#network" },
        { name: "Protocol", href: "#protocol" },
    ]

    return (
        <header suppressHydrationWarning className={cn(
            "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
            isScrolled || isOpen ? "bg-black/90 backdrop-blur-xl border-b border-white/10 p-4" : "bg-transparent p-6"
        )}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Brand */}
                <div className="flex items-center gap-3 cursor-pointer group" onClick={() => router.push("/")}>
                    <div className="h-8 w-8 sm:h-10 sm:w-10 bg-white text-black flex items-center justify-center font-black text-xl">P</div>
                    <span className="text-white font-black text-xl sm:text-2xl tracking-tighter uppercase">PROTOPILOT AI</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {links.map(link => (
                        <a key={link.name} href={link.href} className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <Button
                        onClick={() => router.push("/dashboard")}
                        className="rounded-none bg-white text-black hover:bg-zinc-200 uppercase font-black text-[11px] tracking-widest px-8 h-12"
                    >
                        Access Core
                    </Button>
                </nav>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden p-2 text-white hover:text-zinc-400 transition-colors"
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden overflow-hidden bg-black border-t border-white/10 mt-4"
                    >
                        <div className="flex flex-col p-8 gap-6">
                            {links.map(link => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-3xl font-black uppercase text-white hover:text-zinc-500 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button
                                onClick={() => {
                                    setIsOpen(false)
                                    router.push("/dashboard")
                                }}
                                className="w-full rounded-none bg-white text-black hover:bg-zinc-200 h-16 uppercase font-black text-sm tracking-widest mt-4"
                            >
                                Access Core
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
