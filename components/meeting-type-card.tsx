import { cn } from "@/lib/utils";
import Image from "next/image"

interface MeetingTypeCardProps {
    icon:string;
    title:string;
    subtitle:string;
    className?:string;
    handleClick:()=>void;
}

const MeetingTypeCard:React.FC<MeetingTypeCardProps> = ({
    icon,
    title,
    subtitle,
    className,
    handleClick
}) => {
    return (
        <div onClick={handleClick} className={cn(
            "px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-xl cursor-pointer hover:opacity-85", 
            className
        )}>
            <div className="size-12 flex items-center justify-center glassmorphism rounded-xl">
                <Image src={icon} width={27} height={27} alt="icon"/>
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-semibold">{title}</h1>
                <p className="text-sm text-gray-200">{subtitle}</p>
            </div>
            </div>
    )
}

export default MeetingTypeCard