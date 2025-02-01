import { CSSProperties, ReactNode } from "react"
import { Button } from "./button"
import { LucideIcon } from "lucide-react"

type ButtonProps = {
    Icon?: LucideIcon,
    color?: CSSProperties["color"],
    children: ReactNode
}

export default function OptionButton({ Icon, color = "currentColor", children } : ButtonProps) {
    return <Button variant="outline" className="font-normal text-gray-700 rounded-full">{Icon && <Icon color={color}/>}{children}</Button>
}