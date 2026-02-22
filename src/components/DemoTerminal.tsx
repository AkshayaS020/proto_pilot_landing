"use client";

import { motion } from "framer-motion"
import { Terminal, Code2, ShieldCheck, Activity, Database, Server, Globe } from "lucide-react"

export const DemoTerminal = () => {
    return (
        <div className="w-full h-full bg-[#020202] rounded-none border border-white/5 overflow-hidden font-['JetBrains_Mono',_monospace] relative">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-zinc-950/50">
                <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-zinc-800" />
                    <div className="h-2 w-2 rounded-full bg-zinc-800" />
                    <div className="h-2 w-2 rounded-full bg-zinc-800" />
                </div>
                <div className="flex items-center gap-2 text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-bold">
                    <Terminal className="h-3 w-3" />
                    ProtoPilot Engine v0.1.0-ALFA
                </div>
            </div>

            {/* Terminal Content */}
            <div className="p-8 space-y-8">
                {/* Initializing */}
                <div className="space-y-2">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-zinc-500 text-[11px] flex gap-3"
                    >
                        <span className="text-zinc-700">15:04:49</span>
                        <span className="text-white">$</span>
                        <span>initializing_architect --project="EcoSwap" --mode="aggressive"</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-emerald-500/80 text-[11px] pl-20"
                    >
                        ✓ Core logic synthesized [124ms]
                    </motion.div>
                </div>

                {/* Architecture Visualization */}
                <div className="relative py-12 border-y border-white/5 bg-zinc-950/20">
                    <div className="flex justify-around items-center max-w-2xl mx-auto">
                        <motion.div
                            animate={{
                                borderColor: ["rgba(255,255,255,0.05)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.05)"],
                                backgroundColor: ["rgba(255,255,255,0)", "rgba(255,255,255,0.02)", "rgba(255,255,255,0)"]
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="h-20 w-20 border border-white/5 flex flex-col items-center justify-center gap-2"
                        >
                            <Globe className="h-5 w-5 text-zinc-600" />
                            <span className="text-[8px] text-zinc-500 uppercase font-black tracking-widest">Edge</span>
                        </motion.div>

                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent relative">
                            <motion.div
                                animate={{ left: ["0%", "100%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute top-1/2 -translate-y-1/2 h-1 w-1 bg-white blur-[1px]"
                            />
                        </div>

                        <motion.div
                            animate={{
                                scale: [1, 1.02, 1],
                                borderColor: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.3)", "rgba(255,255,255,0.1)"]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="h-28 w-40 border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-3 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-blue-500/5 blur-3xl" />
                            <Activity className="h-6 w-6 text-white" />
                            <span className="text-[10px] text-white uppercase font-black tracking-[0.2em]">Logic Core</span>
                        </motion.div>

                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent relative">
                            <motion.div
                                animate={{ left: ["0%", "100%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                                className="absolute top-1/2 -translate-y-1/2 h-1 w-1 bg-white blur-[1px]"
                            />
                        </div>

                        <motion.div
                            animate={{
                                borderColor: ["rgba(255,255,255,0.05)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.05)"]
                            }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                            className="h-20 w-20 border border-white/5 flex flex-col items-center justify-center gap-2"
                        >
                            <Database className="h-5 w-5 text-zinc-600" />
                            <span className="text-[8px] text-zinc-500 uppercase font-black tracking-widest">Vault</span>
                        </motion.div>
                    </div>
                </div>

                {/* Code Snippets */}
                <div className="grid grid-cols-2 gap-12 text-[10px]">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2 text-zinc-600 font-bold uppercase tracking-widest text-[9px]">
                            <Code2 className="h-3 w-3" /> System Blueprints
                        </div>
                        <div className="space-y-1 font-mono">
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="text-zinc-500">{"class EcoSwapMarket {"}</motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} className="text-zinc-400 pl-4">{"define Protocol(CircularEconomy) {"}</motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }} className="text-zinc-300 pl-8">{"yield: 12.5bps;"}</motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }} className="text-zinc-300 pl-8">{"valdt: AI_AGENT_PROMPT;"}</motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8 }} className="text-zinc-400 pl-4">{"}"}</motion.div>
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="text-zinc-500">{"}"}</motion.div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-zinc-600 font-bold uppercase tracking-widest text-[9px]">
                                <ShieldCheck className="h-3 w-3" /> Security Protocol
                            </div>
                            <span className="text-[8px] bg-emerald-500/10 text-emerald-500 px-1.5 py-0.5 font-black uppercase tracking-widest">Optimal</span>
                        </div>
                        <div className="space-y-3">
                            <div className="h-1 w-full bg-zinc-900 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "94%" }}
                                    transition={{ duration: 2, delay: 1 }}
                                    className="h-full bg-white"
                                />
                            </div>
                            <div className="flex justify-between text-[9px] font-black uppercase tracking-[0.2em]">
                                <span className="text-zinc-700">Automation Ratio</span>
                                <span className="text-zinc-300">94.0%</span>
                            </div>
                        </div>
                        <div className="pt-4 flex gap-4">
                            <div className="flex-1 border-l border-white/5 pl-4">
                                <div className="text-[18px] font-black text-white tracking-tighter italic">400H</div>
                                <div className="text-[8px] text-zinc-700 uppercase font-black tracking-widest">Efficiency</div>
                            </div>
                            <div className="flex-1 border-l border-white/5 pl-4">
                                <div className="text-[18px] font-black text-white tracking-tighter italic">10K+</div>
                                <div className="text-[8px] text-zinc-700 uppercase font-black tracking-widest">Deployed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Grid */}
            <div className="absolute inset-0 z-[-1] opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />
        </div>
    )
}
