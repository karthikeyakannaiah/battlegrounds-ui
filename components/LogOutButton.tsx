'use client';
import Image from 'next/image';
// import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { signOutUser } from '@/firebase';
import { useRouter } from 'next/navigation';

async function handleLogout(router: ReturnType<typeof useRouter>) {
  const status = await signOutUser();

  if (status) {
    router.push('/');
  } else {
    console.error('Error during sign-out');
  }
}

export default function LogOutButton() {
  const router = useRouter();
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="text-center rounded-sm hover:bg-slate-200 text-white p-3"
            onClick={() => handleLogout(router)}
          >
            <Image
              src="/logout-icon-dark.svg"
              alt="Logout Icon"
              width={30}
              height={30}
              className="w-6 h-6"
            />
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-black font-inter p-2 rounded-lg">
          <p className="text-white font-bold">Logout</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
  // return (
  //   <Button className="text-center rounded-full bg-slate-100 hover:bg-slate-100 text-white p-3">
  //     <Image src="/logout-icon-dark.svg" alt="Logout Icon" width={30} height={30} className="w-6 h-6" />
  //   </Button>
  // )
}
