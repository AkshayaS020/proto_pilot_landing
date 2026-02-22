import { Bell, Search, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface HeaderProps {
    onMenuClick: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
    return (
        <header className="flex h-16 items-center justify-between border-b bg-white/80 px-4 sm:px-8 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-4 flex-1">
                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden h-10 w-10 shrink-0"
                    onClick={onMenuClick}
                >
                    <Menu className="h-6 w-6 text-slate-600" />
                </Button>

                <div className="hidden sm:flex w-full max-w-sm items-center gap-2">
                    <div className="relative w-full">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                        <Input
                            type="search"
                            placeholder="Search projects..."
                            className="w-full bg-slate-50 pl-9 transition-all focus:bg-white"
                        />
                    </div>
                </div>

                {/* Mobile Search Icon Only */}
                <Button variant="ghost" size="icon" className="sm:hidden h-10 w-10">
                    <Search className="h-5 w-5 text-slate-500" />
                </Button>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                <Button variant="ghost" size="icon" className="relative h-10 w-10">
                    <Bell className="h-5 w-5 text-slate-500" />
                    <span className="absolute right-2.5 top-2.5 flex h-2 w-2 rounded-full bg-primary ring-2 ring-white" />
                </Button>
                <div className="flex items-center gap-3 border-l pl-2 sm:pl-4">
                    <div className="hidden sm:flex flex-col items-end">
                        <span className="text-sm font-semibold">Akshaya</span>
                        <span className="text-xs text-slate-400">Pro Architect</span>
                    </div>
                    <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-slate-100 border shadow-sm shrink-0">
                        <User className="h-5 w-5 sm:h-6 sm:w-6 text-slate-400" />
                    </div>
                </div>
            </div>
        </header>
    )
}
