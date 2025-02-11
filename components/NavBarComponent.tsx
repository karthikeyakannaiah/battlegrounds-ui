"use client";
import { AuthContext } from "../app/AuthContext";
import { useContext } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAvatarFallbackLetters, formatDisplayName } from "@/lib/utils";
import Link from "next/link";
import LogOutButton from "@/components/LogOutButton";

export default function NavBarComponent() {
  const context = useContext(AuthContext);
  const user = context?.user;
  return (
    <div className="box-border m-3 flex justify-between items-center">
        <div className="bg-slate-100 inline-block p-3 text-3xl my-3">Battle<span className="text-red-600">Grounds</span></div>
        {
          user && (
            <>
            <div className="links font-mono flex-row">
                <Link href="/Tournaments"><span className="text-sm font-semibold hover:text-red-600 hover:border-b-2 hover:border-black">Tournaments</span></Link>
            </div>
            <div className="flex items-center space-x-4 p-4">
              {/* Avatar */}
              <Avatar className="w-12 h-12 border-2 border-slate-300 rounded-full overflow-hidden">
                <AvatarImage src={user.photoURL || ""} alt="User Avatar" />
                <AvatarFallback>{getAvatarFallbackLetters(user.displayName || "")}</AvatarFallback>
              </Avatar>

              {/* Welcome Text & Name */}
              <div className="flex flex-col">
                <span className="text-sm text-red-500">Welcome</span>
                <span className="text-lg font-semibold">{formatDisplayName(user.displayName)}</span>
              </div>

              <LogOutButton/>
            </div>
            </>
          )
        }
      </div>
  )
}