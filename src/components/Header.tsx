import { Bell, Search, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface HeaderProps {
    onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
    return (
        <header className="flex h-16 items-center justify-between border-b border-slate-100 bg-white/90 px-4 sm:px-8 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-4 flex-1">
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden h-10 w-10 shrink-0 text-slate-500"
                    onClick={onMenuClick}
                >
                    <Menu className="h-5 w-5" />
                </Button>

                <div className="hidden sm:flex w-full max-w-sm items-center gap-2">
                    <div className="relative w-full group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
                        <Input
                            type="search"
                            placeholder="Find Intelligence..."
                            className="w-full bg-slate-50/50 border-slate-100 pl-10 h-10 text-xs font-medium transition-all focus:bg-white focus:ring-1 focus:ring-slate-200"
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-6">
                <Button variant="ghost" size="icon" className="relative h-9 w-9 text-slate-500 hover:text-slate-900 transition-colors">
                    <Bell className="h-4 w-4" />
                    <span className="absolute right-2 top-2 flex h-1.5 w-1.5 rounded-full bg-slate-900 ring-2 ring-white" />
                </Button>
                <div className="flex items-center gap-3 border-l border-slate-100 pl-4 sm:pl-6 leading-none">
                    <div className="hidden sm:flex flex-col items-end gap-0.5">
                        <span className="text-[13px] font-bold text-slate-900 tracking-tight">Akshaya</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lead Architect</span>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 border border-slate-200 shadow-sm shrink-0 group hover:border-slate-400 transition-all cursor-pointer">
                        <User className="h-4 w-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
                    </div>
                </div>
            </div>
        </header>
    )
}
