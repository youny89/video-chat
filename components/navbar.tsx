import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-black/90 fixed w-full flex justify-between items-center z-50 px-6 py-8 lg:px-10">
      <Link href="/" className="flex items-center gap-1">VideoChat</Link>

      <div className="flex justify-between items-center">
        <div className="h-10 w-10 rounded-full bg-gray-500"/>
        MOBILENAV
      </div>
    </nav>
  )
}

export default Navbar