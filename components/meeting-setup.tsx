import { DeviceSettings, VideoPreview, useCall } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { Video } from "lucide-react";

interface MeetingSetupProps {
  setIsSetupComplete:(value:boolean) => void;
}

const MeetingSetup:React.FC<MeetingSetupProps> = ({setIsSetupComplete}) => {
    const [isMicCamToggledOn,setIsMicCamToggledOn] = useState(true);

    const call = useCall();


    useEffect(()=>{
      if(isMicCamToggledOn) {
        call?.camera.disable();
        call?.microphone.disable();
      } else {
        call?.camera.enable();
        call?.microphone.enable();
      }
    },[isMicCamToggledOn, call?.camera, call?.microphone])

    if(!call) throw new Error('useCall must be used within StreamCall Component!')


    const onStart = () => {
      call?.join();

      // it will render MeetingRoom component!
      setIsSetupComplete(true);
    }

    return (
      <div className="h-screen w-full flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Setup</h1>
        <VideoPreview />
        <div className="flex h-16 items-center justify-center gap-3">
          <Switch checked={isMicCamToggledOn} onCheckedChange={()=> setIsMicCamToggledOn(value=>!value)}/> 카메라 & 마이크 끄고 시작하기
          <DeviceSettings />
        </div>
        <Button variant='secondary' onClick={onStart}>미팅 시작하기 <Video className="ml-2 text-blue-1"/> </Button>
      </div>
    )
}

export default MeetingSetup