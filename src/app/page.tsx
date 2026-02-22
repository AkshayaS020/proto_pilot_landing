"use client";

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useRouter } from "next/navigation"
import {
    Target,
    ShieldCheck,
    ChevronRight,
    Globe,
    Lock,
    Terminal,
    Code2,
    Activity,
    Component
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/Navbar"
import { DemoDashboard } from "@/components/DemoDashboard"

export default function LandingPage() {
    const router = useRouter()
    const demoRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: demoRef,
        offset: ["start end", "end start"]
    })

    const scrollOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
    const scrollScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
    const scrollRotateX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [15, 0, 0, -15])
    const scrollYTranslate = useTransform(scrollYProgress, [0, 1], [0, -50])

    const features = [
        {
            title: "Autonomous Architect",
            description: "Advanced agents that synthesize system blueprints from high-level logic.",
            icon: Code2,
            color: "bg-white/5 text-white"
        },
        {
            title: "Logic Core",
            description: "Deep analysis of business protocols and competitive landscape mapping.",
            icon: Target,
            color: "bg-white/5 text-white"
        },
        {
            title: "Threat Vectoring",
            description: "Proactive identification of architectural vulnerabilities and bottlenecks.",
            icon: ShieldCheck,
            color: "bg-white/5 text-white"
        },
        {
            title: "Sprint Automation",
            description: "Real-time task synchronization across global development nodes.",
            icon: Activity,
            color: "bg-white/5 text-white"
        }
    ]

    const stats = [
        { label: "Systems Deployed", value: "10K+" },
        { label: "Automation Ratio", value: "94%" },
        { label: "Efficiency Gain", value: "400H" },
        { label: "Uptime Protocol", value: "99.9%" }
    ]

    return (
        <div className="min-h-screen bg-[#000] text-white overflow-x-hidden selection:bg-white selection:text-black font-['Inter']">
            <Navbar />

            {/* Background Atmosphere */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        opacity: [0.1, 0.2, 0.1],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-zinc-900 rounded-full blur-[200px]"
                />
            </div>

            {/* Hero Section */}
            <section className="relative pt-48 pb-32 px-6 z-10">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            borderColor: [
                                "rgba(255,255,255,0.1)",
                                "rgba(255,255,255,0.4)",
                                "rgba(255,255,255,0.1)"
                            ]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-none border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.4em] font-black mb-12 relative"
                    >
                        <ShieldCheck className="h-3 w-3" />
                        <span>Security: Enterprise Grade</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
                        className="text-4xl sm:text-7xl lg:text-[11rem] font-black tracking-tighter leading-[0.8] mb-12"
                    >
                        BLUEPRINT <br />
                        <span className="text-zinc-600">THE FUTURE.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg sm:text-xl lg:text-2xl text-zinc-500 max-w-3xl mb-16 leading-relaxed font-light px-4 sm:px-0"
                    >
                        Intelligence-driven decision infrastructure for corporate venture building. Transform ambiguity into strategic roadmaps and verified MVPs.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-24 w-full sm:w-auto px-6 sm:px-0"
                    >
                        <Button size="lg" className="rounded-none bg-white text-black hover:bg-zinc-200 px-8 sm:px-16 h-16 sm:h-20 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] transition-all duration-500" onClick={() => router.push("/new")}>
                            Launch Analysis <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-none border-white/10 text-white hover:bg-white hover:text-black px-8 sm:px-16 h-16 sm:h-20 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] transition-all">
                            Executive Overview
                        </Button>
                    </motion.div>

                    {/* Floating Dashboard Preview / Demo Video Replacement */}
                    <motion.div
                        ref={demoRef}
                        style={{
                            opacity: scrollOpacity,
                            scale: scrollScale,
                            rotateX: scrollRotateX,
                            y: scrollYTranslate
                        }}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
                        className="w-full max-w-6xl border border-white/10 bg-white aspect-[16/9] relative group overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.05)] perspective-1000"
                    >
                        <DemoDashboard />
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section id="infra" className="relative py-40 z-10 border-y border-white/5 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col items-center"
                            >
                                <span className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 md:mb-6 italic tracking-tight">{stat.value}</span>
                                <span className="text-[8px] sm:text-[10px] font-black text-zinc-600 uppercase tracking-[0.5em] text-center">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-48 px-6 max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-6xl md:text-[6rem] font-black uppercase tracking-tighter leading-none mb-4"
                        >
                            ENGINEERED <br />
                            <span className="text-zinc-700 font-light">PRECISION.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-zinc-500 text-lg max-w-sm mb-6 leading-relaxed font-light"
                    >
                        Strategic decision support powered by institutional intelligence. Every insight is vetted for executive reliability.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="bg-black p-8 sm:p-12 group hover:bg-zinc-900/40 transition-all duration-700 h-full">
                                <div className="mb-6 sm:mb-10 p-5 inline-block border border-white/5 bg-white/5 grayscale group-hover:grayscale-0 transition-all">
                                    <feature.icon className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-sm font-black mb-4 uppercase tracking-[0.2em] text-white/90">{feature.title}</h3>
                                <p className="text-zinc-500 leading-relaxed font-light text-sm">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Network Section */}
            <section id="network" className="mb-48 px-4 sm:px-6 max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-white p-2 py-10 sm:p-20 lg:p-32 text-center text-black relative overflow-hidden"
                >
                    <div className="relative z-10">
                        <h2 className="text-3xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black mb-8 sm:mb-16 tracking-tighter leading-tight sm:leading-[0.85] uppercase break-words px-2">
                            READY FOR <br /> DEPLOYMENT?
                        </h2>
                        <p className="text-zinc-500 text-sm sm:text-xl mb-12 sm:mb-20 max-w-2xl mx-auto font-medium uppercase tracking-[0.1em] px-2 sm:px-0 leading-relaxed">
                            Access the most sophisticated feasibility analytics portal in the market.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                            <Button size="lg" className="w-full sm:w-auto bg-black text-white hover:bg-zinc-800 rounded-none px-8 sm:px-16 h-14 sm:h-20 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] transition-all" onClick={() => router.push("/new")}>
                                Start Analysis
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto border-black text-black bg-white hover:bg-black hover:text-white rounded-none px-8 sm:px-16 h-14 sm:h-20 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] transition-all">
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Footer / Protocol Section */}
            <footer id="protocol" className="py-32 px-6 border-t border-white/5 bg-black relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-24">
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-3 cursor-pointer group mb-8" onClick={() => router.push("/")}>
                                <div className="h-10 w-10 flex items-center justify-center transition-all duration-300">
                                    <Component className="h-8 w-8 text-white transition-transform duration-500 group-hover:rotate-90 group-hover:scale-110" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <span className="text-white font-black text-xl tracking-[0.3em] uppercase leading-none">PROTOPILOT</span>
                                    <div className="h-[2px] w-0 bg-white group-hover:w-full transition-all duration-500 mt-2" />
                                </div>
                            </div>
                            <p className="text-zinc-600 text-sm leading-relaxed max-w-sm font-light uppercase tracking-widest">
                                Intelligence-driven decision infrastructure. <br /> Precision for global enterprises.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-black mb-8 uppercase tracking-[0.4em] text-[10px] text-zinc-700">Protocol</h4>
                            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                                <li><a href="#" className="hover:text-white transition-colors">Infrastructure</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terminal</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Network</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Kernel</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-black mb-8 uppercase tracking-[0.4em] text-[10px] text-zinc-700">Network</h4>
                            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-8">
                        <p className="text-[10px] font-black text-zinc-800 uppercase tracking-[0.5em]">© 2026 PROTOPILOT AI v0.1.0-ALFA</p>
                        <div className="flex gap-12">
                            <motion.a whileHover={{ scale: 1.2, color: "#fff" }} href="#" className="text-zinc-800 transition-all"><Globe className="h-4 w-4" /></motion.a>
                            <motion.a whileHover={{ scale: 1.2, color: "#fff" }} href="#" className="text-zinc-800 transition-all"><Lock className="h-4 w-4" /></motion.a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
