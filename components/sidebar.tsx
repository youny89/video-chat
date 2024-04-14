'use client';
// max-sm:hidden lg:w-[264px] -> screen 사이즈가 640px 보다 작으면 sidebar 사라짐, screen 사이즈가 1024px 이상이면 sidebar width는 264px임.

import { sidebarLinks } from "@/consts"
import { cn } from "@/lib/utils";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"

const Sidebar = () => {
    const pathname = usePathname();
    return (
      <div className="max-sm:hidden lg:w-[264px] sticky left-0 top-0 h-screen flex flex-col justify-between bg-black/90 p-6 pt-28">
        <div className="flex flex-col gap-8">
          {sidebarLinks.map(link=>{
            const isActive = link.route === pathname || pathname.startsWith(`${link.route}/`)

            return (
              <Link key={link.label} href={link.route} className={cn("flex items-center gap-8 p-4 rounded-full lg:rounded-lg hover:opacity-85",isActive && "bg-blue-1")}>
                <Image 
                  src={link.imageUrl}
                  alt="icon"
                  width={32}
                  height={32}
                />
                <span className="hidden lg:block text-[16px] font-semibold">{link.label}</span>
              </Link>
            )
          })}
        </div>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    )
}

export default Sidebar