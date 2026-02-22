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
                        <div className="flex items-center justify-between mb-4 px-1">
                            <div className="flex items-center gap-2">
                                <h3 className="font-bold text-slate-700">{column.title}</h3>
                                <span className="bg-slate-200 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                    {data[column.id].length}
                                </span>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Plus className="h-4 w-4 text-slate-400" />
                            </Button>
                        </div>

                        <Droppable droppableId={column.id}>
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className={cn(
                                        "kanban-column transition-colors duration-200",
                                        snapshot.isDraggingOver ? "bg-primary/5 border-primary/20" : ""
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
                                                        "task-card bg-white select-none",
                                                        snapshot.isDragging ? "shadow-2xl ring-2 ring-primary border-transparent scale-[1.02] cursor-grabbing" : ""
                                                    )}
                                                >
                                                    <div className="flex justify-between items-start mb-3">
                                                        <Badge
                                                            variant={
                                                                task.priority === "High" ? "destructive" :
                                                                    task.priority === "Medium" ? "warning" : "info"
                                                            }
                                                            className="text-[10px] uppercase font-bold px-2"
                                                        >
                                                            {task.priority}
                                                        </Badge>
                                                        <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100">
                                                            <GripVertical className="h-3 w-3 text-slate-300" />
                                                        </Button>
                                                    </div>
                                                    <h4 className="text-sm font-semibold text-slate-800 mb-4 leading-tight">
                                                        {task.title}
                                                    </h4>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex -space-x-2">
                                                            <div className="h-7 w-7 rounded-full bg-indigo-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-indigo-600">
                                                                {task.assignee}
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-3 text-slate-400">
                                                            <div className="flex items-center gap-1 text-[11px]">
                                                                <MessageSquare className="h-3 w-3" />
                                                                {task.comments}
                                                            </div>
                                                            <div className="flex items-center gap-1 text-[11px] bg-slate-100 px-1.5 py-0.5 rounded">
                                                                <span className="font-bold text-slate-600">{task.points}</span>
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
