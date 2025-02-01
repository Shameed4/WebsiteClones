import { PanelLeftOpen, SquarePen, Image, PenLine } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";


export default function Home() {
  return (
    <div className="h-screen flex flex-col m-0 p-0 justify-between">
      <header className="flex p-2">
        <Button variant="ghost" size="icon"><PanelLeftOpen /></Button>
        <Button variant="ghost" size="icon"><SquarePen /></Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild><Button variant="ghost">ChatGPT</Button></DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>ChatGPT Plus</DropdownMenuItem>
            <DropdownMenuItem>ChatGPT</DropdownMenuItem>
            Temporary chat
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost" className="ml-auto">User</Button>
      </header>
      <div className="w-full max-w-3xl m-auto">
        <h1 className="text-2xl text-center font-medium">What can I help with?</h1>
        <div className="mt-5 mb-5">
          <Textarea placeholder="Message ChatGPT" className="resize-none"></Textarea>
        </div>
        <div className="flex gap-2 justify-center">
          <Button variant="outline" className="font-normal text-gray-700 rounded-full"><Image />Create image</Button>
          <Button variant="outline" className="font-normal text-gray-700 rounded-full">Code</Button>
          <Button variant="outline" className="font-normal text-gray-700 rounded-full">Brainstorm</Button>
          <Button variant="outline" className="font-normal text-gray-700 rounded-full"><ChartColumnBig />Analyze data</Button>
          <Button variant="outline" className="font-normal text-gray-700 rounded-full"><PenLine />Help me write</Button>
          <Button variant="outline" className="font-normal text-gray-700 rounded-full">More</Button>
        </div>
      </div>
      <p className="text-center text-xs m-8 text-gray-700">ChatGPT can make mistakes. Check important info.</p>
    </div>
  );
}
