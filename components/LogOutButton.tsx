import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function LogOutButton() {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className="text-center rounded-full bg-slate-100 hover:bg-slate-100 text-white p-3">
            <Image src="/logout-icon-dark.svg" alt="Logout Icon" width={30} height={30} className="w-6 h-6" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="bg-slate-100 font-mono text-black p-2 rounded-lg">
          <p>Logout</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
  // return (
  //   <Button className="text-center rounded-full bg-slate-100 hover:bg-slate-100 text-white p-3">
  //     <Image src="/logout-icon-dark.svg" alt="Logout Icon" width={30} height={30} className="w-6 h-6" />
  //   </Button>
  // )
}