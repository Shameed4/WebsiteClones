"use client"

import { PanelLeftOpen, SquarePen, Image, PenLine, ChartColumnBig, GraduationCap, ChevronDown, ArrowUp } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import OptionButton from "@/components/ui/optionButton";
import { useState } from "react";
import Sidebar from "@/components/ui/sidebar";

const optionButtons = [
  { text: "Create image", icon: Image, color: "green" },
  { text: "Get advice", icon: GraduationCap, color: "orange" },
  { text: "Analyze data", icon: ChartColumnBig, color: "turquoise" },
  { text: "Help me write", icon: PenLine, color: "gold" },
  { text: "More" },
]

export default function Home() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div className="flex">
      {<Sidebar sidebar={sidebar} setSidebar={setSidebar} />}
      <div className="h-screen flex flex-col m-0 p-0 w-full justify-between">
        <header className="flex p-3 text-xl">
          {
            !sidebar && (
              <>
                <Button variant="ghost" size="icon" onClick={() => setSidebar(true)}><PanelLeftOpen color="#555555" style={{ width: 20, height: 20 }} /></Button>
                <Button variant="ghost" size="icon"><SquarePen color="#555555" style={{ width: 20, height: 20 }} /></Button>
              </>
            )
          }
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" style={{ color: "#555555" }} className="text-lg">ChatGPT <ChevronDown /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>ChatGPT Plus</DropdownMenuItem>
              <DropdownMenuItem>ChatGPT</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Temporary chat</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" className="ml-auto text-xl">User</Button>
        </header>

        <div className="w-full max-w-3xl m-auto">
          <h1 className="text-3xl text-center font-medium">What can I help with?</h1>
          <div className="mt-9 mb-9 p-3 border border-neutral-200 h-28 rounded-3xl shadow-md">
            <Textarea placeholder="Message ChatGPT" className="placeholder:text-neutral-600 md:text-md placeholder:text-md ml-1 resize-none ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0 shadow-none"></Textarea>
            <div className="flex">
              <Button size="icon" className="ml-auto rounded-full"><ArrowUp strokeWidth={2.25} style={{ width: 20, height: 20 }} /></Button>
            </div>
          </div>
          <div className="flex gap-2 justify-center">
            {
              optionButtons.map(({ text, icon, color }) => <OptionButton key={text} Icon={icon} color={color}>{text}</OptionButton>)
            }
          </div>
        </div>
        <p className="text-center text-xs mb-6 text-gray-600">ChatGPT can make mistakes. Check important info.</p>
      </div>
    </div>
  );
}
