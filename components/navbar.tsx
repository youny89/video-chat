import Image from "next/image"
import Link from "next/link"
import MobileNav from "./mobile-nav"
import { SignedIn, UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <nav className="bg-black/90 fixed w-full flex justify-between items-center z-50 px-6 py-8 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image src='/icons/logo.svg' width={32} height={32} alt="logo"/>
        <p className="font-extrabold text-[22px] text-white">VideoChat</p>
      </Link>

      <div className="flex justify-between items-center gap-2">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar