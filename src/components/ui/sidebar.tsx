import { Button } from "./button"
import { PanelLeftClose, Search, SquarePen } from "lucide-react"

type sidebarProps = {
    sidebar: boolean,
    setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ sidebar, setSidebar }: sidebarProps) {
    return (
        <div className={`${sidebar ? "w-[19.1rem] p-3" : "w-0 p-0"} ease-linear duration-200 transition-[width] overflow-clip h-screen flex flex-col bg-neutral-50 m-0`}>
            <div className="flex">
                <Button variant="ghost" size="icon" onClick={() => setSidebar(false)}><PanelLeftClose color="#555555" style={{ width: 20, height: 20 }} /></Button>
                <Button variant="ghost" size="icon" className="ml-auto"><Search color="#555555" style={{ width: 20, height: 20 }} /></Button>
                <Button variant="ghost" size="icon"><SquarePen color="#555555" style={{ width: 20, height: 20 }} /></Button>
            </div>
        </div>
    )
}