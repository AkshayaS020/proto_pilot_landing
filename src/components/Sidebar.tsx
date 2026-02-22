import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    PlusCircle,
    Settings,
    HelpCircle,
    ChevronLeft,
    ChevronRight,
    Home,
    Briefcase,
    Layers,
    ShieldAlert,
    Trello,
    X
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarProps {
    className?: string
    onClose?: () => void
}

export function Sidebar({ className, onClose }: SidebarProps) {
    const [collapsed, setCollapsed] = useState(false)
    const pathname = usePathname()

    const menuItems = [
        { icon: Home, label: "Home", path: "/" },
        { icon: PlusCircle, label: "New Project", path: "/new" },
        { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
        { icon: Briefcase, label: "All Projects", path: "/projects" },
        { icon: Layers, label: "Architecture", path: "/architecture" },
        { icon: ShieldAlert, label: "Risk Reports", path: "/risks" },
        { icon: Trello, label: "Kanban", path: "/kanban" },
    ]

    const bottomItems = [
        { icon: HelpCircle, label: "Help & Support", path: "/support" },
        { icon: Settings, label: "Settings", path: "/settings" },
    ]

    return (
        <aside
            className={cn(
                "fixed inset-y-0 left-0 z-[50] lg:relative flex flex-col border-r bg-white transition-all duration-300 ease-in-out",
                collapsed ? "w-20" : "w-64",
                className
            )}
        >
            <div className="flex h-16 items-center justify-between border-b px-6">
                <div className="flex items-center gap-2 overflow-hidden">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
                        <Layers className="h-5 w-5" />
                    </div>
                    <span className={cn(
                        "text-lg font-bold transition-opacity duration-300 whitespace-nowrap",
                        collapsed ? "opacity-0 invisible" : "opacity-100 visible"
                    )}>
                        PROTOPILOT AI
                    </span>
                </div>

                {/* Mobile Close Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden h-8 w-8 text-slate-400"
                    onClick={onClose}
                >
                    <X className="h-5 w-5" />
                </Button>
            </div>

            <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
                {menuItems.map((item) => {
                    const isActive = pathname === item.path
                    return (
                        <Link
                            key={item.label}
                            href={item.path}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-primary/10 text-primary shadow-sm"
                                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                            )}
                            title={collapsed ? item.label : ""}
                        >
                            <item.icon className="h-5 w-5 shrink-0" />
                            <span className={cn(
                                "transition-all duration-300 whitespace-nowrap",
                                collapsed ? "opacity-0 invisible" : "opacity-100 visible"
                            )}>
                                {item.label}
                            </span>
                        </Link>
                    )
                })}
            </nav>

            <div className="mt-auto border-t p-4 space-y-1">
                {bottomItems.map((item) => {
                    const isActive = pathname === item.path
                    return (
                        <Link
                            key={item.label}
                            href={item.path}
                            className={cn(
                                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                            )}
                            title={collapsed ? item.label : ""}
                        >
                            <item.icon className="h-5 w-5 shrink-0" />
                            <span className={cn(
                                "transition-all duration-300 whitespace-nowrap",
                                collapsed ? "opacity-0 invisible" : "opacity-100 visible"
                            )}>
                                {item.label}
                            </span>
                        </Link>
                    )
                })}
            </div>

            <Button
                variant="ghost"
                size="icon"
                className="hidden lg:flex absolute -right-3 top-20 z-10 h-6 w-6 rounded-full border bg-white shadow-sm transition-transform hover:scale-110"
                onClick={() => setCollapsed(!collapsed)}
            >
                {collapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
            </Button>
        </aside>
    )
}
