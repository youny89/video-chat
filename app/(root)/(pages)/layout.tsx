import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"

interface PageLayoutProps {
    children: React.ReactNode
}

const PageLayout:React.FC<PageLayoutProps> = ({children}) => {
    return (
        <main className="relative">
            <Navbar />
            <div className="flex">
                <Sidebar />
                <section className=" flex-1 min-h-screen flex flex-col px-6 pb-6 pt-28  sm:px-14 sm:border-green-500">
                    <div className="w-full">
                        {children}
                    </div>
                </section>
            </div>
        </main>        
    )
}

export default PageLayout