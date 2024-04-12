
// max-sm:hidden lg:w-[264px] -> screen 사이즈가 640px 보다 작으면 sidebar 사라짐, screen 사이즈가 1024px 이상이면 sidebar width는 264px임.

const Sidebar = () => {
    return (
      <div className="max-sm:hidden lg:w-[264px] sticky left-0 top-0 h-screen flex flex-col justify-between bg-black/90 p-6 pt-28">
        <div>
          SIDEBAR LINKS
        </div>
        <div className="h-10 w-10 rounded-full bg-slate-400"/>
      </div>
    )
}

export default Sidebar