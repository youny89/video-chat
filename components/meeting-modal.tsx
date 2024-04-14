import Image from "next/image";
import { Button } from "./ui/button"
import { Dialog, DialogContent } from "./ui/dialog"

interface MeetingModalProps {
    isOpen:boolean;
    onClose:()=>void;
    title:string;
    buttonText:string;
    handleClick:()=>void;
    children?:React.ReactNode
    image?:string;
    buttonIcon?:string
}

const MeetingModal:React.FC<MeetingModalProps> = ({
    isOpen,
    onClose,
    title,
    buttonText,
    handleClick,
    children,
    image,
    buttonIcon
}) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="flex w-full max-w-[520px] gap-6 text-black px-6 py-8">
                <div className="flex flex-col gap-6 w-full">
                    {image && (
                        <Image className="m-auto" src={image} width={72} height={72} alt="icon"/>
                    )}
                    <h1 className="leading-[42px] text-3xl text-center">{title}</h1>
                    {children}
                    <Button onClick={handleClick} className="flex items-center gap-3 bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0">
                        {buttonIcon && (
                            <Image src={buttonIcon} width={22} height={22} alt="icon"/>
                        )}
                        {buttonText}
                    </Button>

                </div>
            </DialogContent>
        </Dialog>
    )
}

export default MeetingModal