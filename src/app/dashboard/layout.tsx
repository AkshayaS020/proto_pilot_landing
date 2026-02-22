"use client";

import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <div className="flex bg-slate-50 min-h-screen relative overflow-hidden">
            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsSidebarOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[40] lg:hidden"
                    />
                )}
            </AnimatePresence>

            <Sidebar
                className={isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
                onClose={() => setIsSidebarOpen(false)}
            />

            <div className="flex-1 flex flex-col min-w-0">
                <Header onMenuClick={() => setIsSidebarOpen(true)} />
                <main className="flex-1 p-4 sm:p-8 overflow-y-auto max-w-[1600px] mx-auto w-full">
                    {children}
                </main>
            </div>
        </div>
    );
}
