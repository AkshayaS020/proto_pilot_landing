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
            <Card className="overflow-hidden border-slate-200">
                <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 pb-4 bg-slate-50/50">
                    <div className="flex items-center gap-3">
                        <div className="bg-white p-2 rounded-lg border shadow-sm shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-xl font-bold">{title}</CardTitle>
                    </div>
                    <div className="flex items-center gap-2 self-end sm:self-auto">
                        {badge && <Badge variant={badgeVariant} className="text-[10px]">{badge}</Badge>}
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400">
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
