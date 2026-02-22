"use client";

import { motion } from "framer-motion"
import {
    BarChart3,
    Layers,
    ShieldAlert,
    FileText,
    CheckCircle2,
    AlertTriangle,
    Zap,
    Server,
    Globe,
    ArrowUpRight,
    Sparkles
} from "lucide-react"
import { DashboardSection } from "@/components/dashboard/DashboardSection"
import { KanbanBoard } from "@/components/kanban/KanbanBoard"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function DashboardPage() {
    return (
        <div className="space-y-8 pb-12 antialiased">
            {/* Header Info */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 px-1">
                <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                        <Badge variant="success" className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">LIVE PROJECT</Badge>
                        <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-widest">Modified 120s ago</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">EcoSwap Marketplace</h1>
                    <p className="text-base text-slate-500 max-w-2xl leading-relaxed">Sophisticated circular economy protocol for sustainable fashion leveraging real-time AI asset validation.</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <Button variant="outline" className="flex-1 sm:flex-none gap-2 text-xs font-bold uppercase tracking-wider h-11 border-slate-200 hover:bg-slate-50 transition-all">
                        <FileText className="h-4 w-4" /> Export Assets
                    </Button>
                    <Button className="flex-1 sm:flex-none gap-2 shadow-sm bg-slate-900 text-white hover:bg-slate-800 text-xs font-bold uppercase tracking-wider h-11 transition-all">
                        <Sparkles className="h-4 w-4" /> Synchronize AI
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Doc Column */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Executive Summary */}
                    <DashboardSection title="Executive Summary" icon={FileText} badge="Business Analyst Certified" badgeVariant="info" delay={0.1}>
                        <div className="space-y-6">
                            <p className="text-slate-600 leading-relaxed text-[15px]">
                                EcoSwap Marketplace is engineered to institutionalize the circular fashion economy. By integrating automated asset condition diagnostics and longitudinal carbon footprint telemetry, the protocol establishes high-trust liquidity for sustainable trade.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                                {[
                                    { label: "Focus Demographic", value: "High-Intent Eco-Conscious Cohorts" },
                                    { label: "Addressable Market", value: "Projected $77.4B Secondary Market" },
                                    { label: "Monetization Core", value: "12.5% Basis Point Transaction Yield" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.2 + (i * 0.1) }}
                                        className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm transition-all hover:border-slate-300"
                                    >
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5">{item.label}</span>
                                        <span className="text-[13px] font-bold text-slate-800">{item.value}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </DashboardSection>

                    {/* Architecture Protocol */}
                    <DashboardSection title="Architecture Protocol" icon={Layers} badge="Architect Verified" badgeVariant="success" delay={0.2}>
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <Server className="h-3.5 w-3.5" /> Backend Infrastructure
                                    </h4>
                                    <ul className="space-y-3">
                                        {[
                                            "Node.js Ecosystem / TypeScript 5.0",
                                            "PostgreSQL / Prisma ORM Layer",
                                            "Redis In-Memory Data Lattice"
                                        ].map((item, i) => (
                                            <motion.li
                                                key={item}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
                                                className="flex items-center gap-3 text-sm text-slate-700 font-medium"
                                            >
                                                <CheckCircle2 className="h-4 w-4 text-slate-900" /> {item}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <Globe className="h-3.5 w-3.5" /> Global Network
                                    </h4>
                                    <ul className="space-y-3">
                                        {[
                                            "AWS Managed Fargate (Serverless)",
                                            "CloudFront Edge Optimization",
                                            "S3 Object Storage (Asset Pipeline)"
                                        ].map((item, i) => (
                                            <motion.li
                                                key={item}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: 0.3 + (i * 0.1) }}
                                                className="flex items-center gap-3 text-sm text-slate-700 font-medium"
                                            >
                                                <CheckCircle2 className="h-4 w-4 text-slate-900" /> {item}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="pt-2"
                            >
                                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Traffic Inversion Map</h4>
                                <div className="bg-slate-950 rounded border border-slate-800 p-8 font-mono text-[11px] text-slate-400 leading-relaxed shadow-inner overflow-hidden group">
                                    <motion.pre
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        whileInView={{ opacity: 0.8, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.6 }}
                                    >
                                        {`[USER] ----(HTTPS)----> [EDGE GATEWAY] ----(LB)----> [API CORE]
                                                            |
                                        |-----------------------------------|
                                        v                                   v
                                [REDIS CACHE] <---(I/O)---> [POSTGRES DB] <---(SYNC)---> [AI WORKER]`}
                                    </motion.pre>
                                </div>
                            </motion.div>
                        </div>
                    </DashboardSection>

                    {/* Task Integration Protocol */}
                    <div className="pt-4">
                        <DashboardSection
                            title="Sprint Operational Flow"
                            icon={Zap}
                            badge="8 Active Tasks"
                            badgeVariant="info"
                            delay={0.3}
                        >
                            <div className="-mx-6 -mb-6">
                                <div className="px-6 pb-6">
                                    <KanbanBoard />
                                </div>
                            </div>
                        </DashboardSection>
                    </div>
                </div>

                {/* Sidebar Column */}
                <div className="space-y-8">

                    {/* Business Insights */}
                    <DashboardSection title="Strategic Metrics" icon={BarChart3} badge="High Efficiency" badgeVariant="success" delay={0.4}>
                        <div className="space-y-6">
                            <div className="p-5 rounded-lg bg-slate-50/50 border border-slate-100">
                                <div className="flex justify-between items-end mb-4">
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Market Viability Score</span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-3xl font-extrabold text-slate-900 tracking-tight">92.4</span>
                                            <span className="text-xs font-bold text-slate-400 uppercase">/ 100</span>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="bg-white border-slate-200 text-emerald-600 text-[10px] font-bold h-6">+4.2% QoQ</Badge>
                                </div>
                                <div className="w-full bg-slate-200/60 h-1.5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "92.4%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                                        className="bg-slate-900 h-full rounded-full"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Performance Vectors</h4>
                                <ul className="space-y-2">
                                    {[
                                        { label: "Acquisition Capacity", value: "Optimal" },
                                        { label: "Liquidity Retention", value: "94.2%" },
                                        { label: "Transaction Velocity", value: "Accelerated" }
                                    ].map((item, i) => (
                                        <motion.li
                                            key={item.label}
                                            initial={{ opacity: 0, y: 5 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.6 + (i * 0.1) }}
                                            className="bg-white border border-slate-100 rounded-md p-3 shadow-none hover:border-slate-300 transition-all cursor-pointer group flex justify-between items-center"
                                        >
                                            <span className="text-xs font-semibold text-slate-600 tracking-tight">{item.label}</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-slate-900">{item.value}</span>
                                                <ArrowUpRight className="h-3 w-3 text-slate-300 group-hover:text-slate-900 transition-colors" />
                                            </div>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </DashboardSection>

                    {/* Risk Management */}
                    <DashboardSection title="Risk Assessment" icon={ShieldAlert} badge="Active Monitoring" badgeVariant="warning" delay={0.5}>
                        <div className="space-y-3">
                            {[
                                { title: "Regulatory Framework (EU/GDPR)", desc: "Mandatory requirement for decentralized data retention policies.", variant: "Critical", color: "bg-red-500" },
                                { title: "Throughput Constraints", desc: "Concurrent image classification may necessitate asynchronous clusters.", variant: "Moderate", color: "bg-amber-500" },
                                { title: "Payment Latency Spectrum", desc: "Cross-border settlement windows identified at 4-7 business days.", variant: "Operational", color: "bg-blue-500" }
                            ].map((risk, i) => (
                                <motion.div
                                    key={risk.title}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.7 + (i * 0.1) }}
                                    className="flex items-center gap-4 p-4 rounded-lg bg-white border border-slate-100 hover:border-slate-200 transition-colors group"
                                >
                                    <div className={cn("h-2 w-2 rounded-full animate-pulse", risk.color)} />
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-0.5">
                                            <h4 className="text-[13px] font-bold text-slate-900">{risk.title}</h4>
                                            <Badge variant="outline" className={cn("text-[9px] font-bold uppercase",
                                                risk.variant === "Critical" ? "border-red-100 text-red-600" :
                                                    risk.variant === "Moderate" ? "border-amber-100 text-amber-600" :
                                                        "border-blue-100 text-blue-600"
                                            )}>{risk.variant}</Badge>
                                        </div>
                                        <p className="text-[11px] text-slate-500 font-medium">{risk.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                            <Button variant="outline" className="w-full text-[11px] font-bold text-slate-500 hover:text-slate-900 hover:bg-slate-50 mt-2 uppercase tracking-widest h-10 border-slate-100 transition-all">Audit Detailed Risk Vector</Button>
                        </div>
                    </DashboardSection>
                </div>
            </div>
        </div>
    )
}
