
const Banner = () => {
    const now = new Date();
    const time = now.toLocaleTimeString('kr',{ hour:'2-digit', minute:'2-digit'})
    const date = (new Intl.DateTimeFormat('kr',{ dateStyle: 'full'})).format(now)
  return (
    <div className="h-[300px] w-full rounded-2xl bg-cover bg-right p-4 bg-hero">
        <div className="h-full flex flex-col justify-between">
            <h1 className="glassmorphism max-w-md rounded py-2 text-center text-base font-normal text-white">12:30 PM 미팅이 있어요</h1>
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-extrabold lg:text-5xl">{time}</h2>
                <p className="text-lg font-medium text-blue-1">{date}</p>
            </div>
        </div>       
    </div>
  )
}

export default Banner