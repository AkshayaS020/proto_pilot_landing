import { LucideIcon, MoreVertical } from "lucide-react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface SectionProps {
    title: string
    icon: LucideIcon
    children: React.ReactNode
    badge?: string
    badgeVariant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning" | "info"
}

export function DashboardSection({ title, icon: Icon, children, badge, badgeVariant = "info" }: SectionProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="overflow-hidden border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white">
                <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 pb-4 border-b border-slate-100 bg-slate-50/30">
                    <div className="flex items-center gap-3">
                        <div className="bg-white p-2 rounded-md border border-slate-200/60 shadow-sm shrink-0">
                            <Icon className="h-4 w-4 text-slate-700" />
                        </div>
                        <CardTitle className="text-lg font-semibold tracking-tight text-slate-900">{title}</CardTitle>
                    </div>
                    <div className="flex items-center gap-2 self-end sm:self-auto">
                        {badge && (
                            <Badge
                                variant={badgeVariant}
                                className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm border-none shadow-none"
                            >
                                {badge}
                            </Badge>
                        )}
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-600 transition-colors">
                            <MoreVertical className="h-4 w-4" />
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="pt-6">
                    {children}
                </CardContent>
            </Card>
        </motion.div>
    )
}
