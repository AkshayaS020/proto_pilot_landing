"use client";

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
    ArrowLeft,
    Sparkles,
    Send,
    Plus,
    X,
    CheckCircle2,
    Clock,
    Users,
    Loader2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function ProjectInputPage() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [loadingStep, setLoadingStep] = useState(0)
    const [features, setFeatures] = useState<string[]>([])
    const [currentFeature, setCurrentFeature] = useState("")

    const loadingSteps = [
        "Spinning up AI Project Architects...",
        "Analyzing problem statement & market context...",
        "Defining system architecture & tech stack...",
        "Generating business insights & risk reports...",
        "Creating sprint-ready Kanban tasks...",
        "Finalizing your autonomous workspace..."
    ]

    const addFeature = () => {
        if (currentFeature.trim()) {
            setFeatures([...features, currentFeature.trim()])
            setCurrentFeature("")
        }
    }

    const removeFeature = (index: number) => {
        setFeatures(features.filter((_, i) => i !== index))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
    }

    useEffect(() => {
        if (isSubmitting && loadingStep < loadingSteps.length) {
            const timer = setTimeout(() => {
                if (loadingStep === loadingSteps.length - 1) {
                    router.push("/dashboard")
                } else {
                    setLoadingStep(prev => prev + 1)
                }
            }, 1500)
            return () => clearTimeout(timer)
        }
    }, [isSubmitting, loadingStep, router])

    return (
        <div className="min-h-screen bg-slate-50 pt-10 pb-20 px-6">
            <div className="max-w-3xl mx-auto">
                <Button
                    variant="ghost"
                    className="mb-8 hover:bg-white gap-2 text-slate-500"
                    onClick={() => router.push("/")}
                >
                    <ArrowLeft className="h-4 w-4" /> Back to Home
                </Button>

                <AnimatePresence mode="wait">
                    {!isSubmitting ? (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <div className="mb-10 text-center md:text-left">
                                <h1 className="text-3xl font-bold text-slate-900 mb-2">Configure Your Project</h1>
                                <p className="text-slate-500 text-lg">Tell PROTOPIOLET AI what you're building, and we'll handle the architectural heavy lifting.</p>
                            </div>

                            <Card className="border-slate-200">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Sparkles className="h-5 w-5 text-primary" />
                                        Project Details
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Project Name</label>
                                            <Input placeholder="e.g. EcoSwap Marketplace" className="h-12 border-slate-200 focus:ring-primary/20" required />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">The Problem Statement</label>
                                            <Textarea
                                                placeholder="What problem are you solving? Be descriptive to help AI understand the context."
                                                className="min-h-[120px] border-slate-200 focus:ring-primary/20"
                                                required
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Users className="h-4 w-4 text-slate-400" />
                                                    <label className="text-sm font-semibold text-slate-700">Target Audience</label>
                                                </div>
                                                <Input placeholder="e.g. Small business owners" className="border-slate-200 focus:ring-primary/20" required />
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Clock className="h-4 w-4 text-slate-400" />
                                                    <label className="text-sm font-semibold text-slate-700">Estimated Timeline</label>
                                                </div>
                                                <Input placeholder="e.g. 3 months" className="border-slate-200 focus:ring-primary/20" required />
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-sm font-semibold text-slate-700">Key Features</label>
                                            <div className="flex gap-2">
                                                <Input
                                                    placeholder="Add a feature (e.g. Real-time chat)"
                                                    value={currentFeature}
                                                    onChange={(e) => setCurrentFeature(e.target.value)}
                                                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                                                    className="border-slate-200 focus:ring-primary/20"
                                                />
                                                <Button type="button" onClick={addFeature} variant="secondary" size="icon">
                                                    <Plus className="h-5 w-5" />
                                                </Button>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {features.map((feature, idx) => (
                                                    <Badge key={idx} variant="secondary" className="px-3 py-1.5 gap-1.5 bg-slate-100 hover:bg-slate-200 transition-colors">
                                                        {feature}
                                                        <X className="h-3 w-3 cursor-pointer hover:text-destructive" onClick={() => removeFeature(idx)} />
                                                    </Badge>
                                                ))}
                                                {features.length === 0 && (
                                                    <span className="text-sm text-slate-400 italic">No features added yet.</span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <Button type="submit" size="lg" className="w-full h-14 text-lg gap-2 shadow-lg">
                                                Execute AI Planning <Send className="h-5 w-5" />
                                            </Button>
                                            <p className="text-center text-xs text-slate-400 mt-4">
                                                Pressing submit will activate multiple AI agents to analyze your project.
                                            </p>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center py-20"
                        >
                            <div className="relative mb-12">
                                <div className="w-24 h-24 border-4 border-slate-100 rounded-full" />
                                <motion.div
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border-t-4 border-primary rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Sparkles className="h-8 w-8 text-primary animate-pulse" />
                                </div>
                            </div>

                            <div className="text-center space-y-4 max-w-sm">
                                <h2 className="text-2xl font-bold text-slate-900">AI Agents at Work</h2>
                                <div className="h-12 flex items-center justify-center">
                                    <AnimatePresence mode="wait">
                                        <motion.p
                                            key={loadingStep}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="text-primary font-medium text-lg text-center"
                                        >
                                            {loadingSteps[loadingStep]}
                                        </motion.p>
                                    </AnimatePresence>
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-8">
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        animate={{ width: `${((loadingStep + 1) / loadingSteps.length) * 100}%` }}
                                        className="h-full bg-primary"
                                    />
                                </div>
                                <p className="text-xs text-slate-400">Step {loadingStep + 1} of {loadingSteps.length}</p>
                            </div>

                            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
                                {[0, 1, 2, 3].map(i => (
                                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                                        <div className={cn(
                                            "h-8 w-8 rounded-full flex items-center justify-center transition-colors shrink-0",
                                            loadingStep >= i + 1 ? "bg-emerald-500/10 text-emerald-600" : "bg-slate-100 text-slate-400"
                                        )}>
                                            {loadingStep >= i + 1 ? <CheckCircle2 className="h-5 w-5" /> : <Loader2 className="h-5 w-5 animate-spin" />}
                                        </div>
                                        <span className={cn(
                                            "text-sm font-medium",
                                            loadingStep >= i + 1 ? "text-slate-900" : "text-slate-400"
                                        )}>
                                            {i === 0 ? "BA Agent" : i === 1 ? "Cloud Architect" : i === 2 ? "UX Researcher" : "Scrum Master"}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
