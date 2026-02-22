import { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import {
    Plus,
    MoreHorizontal,
    User,
    MessageSquare,
    Paperclip,
    GripVertical
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Task {
    id: string
    title: string
    priority: "High" | "Medium" | "Low"
    points: number
    assignee: string
    comments: number
}

interface Column {
    id: string
    title: string
}

const initialTasks: Record<string, Task[]> = {
    "backlog": [
        { id: "task-1", title: "API Documentation generation", priority: "Low", points: 3, assignee: "JD", comments: 2 },
        { id: "task-2", title: "Setup PostgreSQL database migration", priority: "High", points: 8, assignee: "AM", comments: 5 },
        { id: "task-3", title: "Define security protocols for OAuth2", priority: "Medium", points: 5, assignee: "RK", comments: 1 },
    ],
    "todo": [
        { id: "task-4", title: "Design homepage wireframes", priority: "Medium", points: 5, assignee: "JD", comments: 8 },
        { id: "task-5", title: "Implement Stripe integration", priority: "High", points: 13, assignee: "AM", comments: 12 },
    ],
    "in-progress": [
        { id: "task-6", title: "User authentication flow", priority: "High", points: 8, assignee: "JD", comments: 4 },
    ],
    "done": [
        { id: "task-7", title: "Project initialization", priority: "Low", points: 2, assignee: "AM", comments: 0 },
        { id: "task-8", title: "Setup CI/CD pipeline", priority: "Medium", points: 5, assignee: "RK", comments: 3 },
    ]
}

const columns: Column[] = [
    { id: "backlog", title: "Backlog" },
    { id: "todo", title: "To Do" },
    { id: "in-progress", title: "In Progress" },
    { id: "done", title: "Done" }
]

export function KanbanBoard() {
    const [data, setData] = useState(initialTasks)

    const onDragEnd = (result: any) => {
        const { source, destination } = result
        if (!destination) return

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return
        }

        const sourceCol = [...data[source.droppableId]]
        const destCol = source.droppableId === destination.droppableId
            ? sourceCol
            : [...data[destination.droppableId]]

        const [movedTask] = sourceCol.splice(source.index, 1)
        destCol.splice(destination.index, 0, movedTask)

        setData({
            ...data,
            [source.droppableId]: sourceCol,
            [destination.droppableId]: destCol
        })
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide min-h-[600px]">
                {columns.map((column) => (
                    <div key={column.id} className="w-[300px] shrink-0">
                        <div className="flex items-center justify-between mb-5 px-1">
                            <div className="flex items-center gap-3">
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">{column.title}</h3>
                                <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded-sm border border-slate-200/50">
                                    {data[column.id].length}
                                </span>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-600">
                                <Plus className="h-4 w-4" />
                            </Button>
                        </div>

                        <Droppable droppableId={column.id}>
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className={cn(
                                        "min-h-[500px] p-3 rounded-lg border border-dashed transition-colors duration-200",
                                        snapshot.isDraggingOver ? "bg-slate-50 border-slate-300" : "bg-transparent border-slate-200"
                                    )}
                                >
                                    {data[column.id].map((task, index) => (
                                        <Draggable key={task.id} draggableId={task.id} index={index}>
                                            {(provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className={cn(
                                                        "bg-white p-5 rounded-md border border-slate-200/60 shadow-sm mb-4 transition-all duration-300 select-none group",
                                                        snapshot.isDragging ? "shadow-xl border-slate-400 scale-[1.02] cursor-grabbing" : "hover:border-slate-300 hover:shadow-md"
                                                    )}
                                                >
                                                    <div className="flex justify-between items-start mb-4">
                                                        <Badge
                                                            variant="outline"
                                                            className={cn(
                                                                "text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm bg-white",
                                                                task.priority === "High" ? "border-red-100 text-red-600" :
                                                                    task.priority === "Medium" ? "border-amber-100 text-amber-600" :
                                                                        "border-blue-100 text-blue-600"
                                                            )}
                                                        >
                                                            {task.priority}
                                                        </Badge>
                                                        <GripVertical className="h-3 w-3 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    </div>
                                                    <h4 className="text-[13px] font-bold text-slate-800 mb-6 leading-relaxed tracking-tight">
                                                        {task.title}
                                                    </h4>
                                                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                                                        <div className="flex items-center gap-2">
                                                            <div className="h-6 w-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[9px] font-bold text-slate-600">
                                                                {task.assignee}
                                                            </div>
                                                            <span className="text-[10px] font-semibold text-slate-400">{task.assignee}</span>
                                                        </div>
                                                        <div className="flex items-center gap-4 text-slate-400">
                                                            <div className="flex items-center gap-1.5 text-[10px] font-bold">
                                                                <MessageSquare className="h-3 w-3" />
                                                                {task.comments}
                                                            </div>
                                                            <div className="flex items-center gap-1.5 text-[10px] font-bold bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                                                                <span className="text-slate-500">{task.points} SP</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                ))}
            </div>
        </DragDropContext>
    )
}
