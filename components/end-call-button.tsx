'use client'

import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const EndCallButton = () => {
    const router= useRouter()
    const call = useCall();
    const { useLocalParticipant } = useCallStateHooks();
    const localParticipant = useLocalParticipant();

    const isMeetingOwner = localParticipant && call?.state.createdBy && localParticipant.userId === call.state.createdBy.id;
    if(!isMeetingOwner) return null;

    const onEndMeeting = async () => {
        await call.endCall();
        router.push("/");
    }

    return (
        <Button onClick={onEndMeeting} className="bg-red-500 text-white rounded-2xl hover:bg-rose-300/50" >
            미팅 종료 하기
        </Button>
    )
}

export default EndCallButton