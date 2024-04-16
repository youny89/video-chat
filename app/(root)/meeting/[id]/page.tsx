'use client';

import Loader from "@/components/loader";
import MeetingRoom from "@/components/meeting-room";
import MeetingSetup from "@/components/meeting-setup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useState } from "react";

interface MeetingIdPageProps {
    params: { id: string; }
}

const MeetingIdPage:React.FC<MeetingIdPageProps> = ({ params }) => {
    // we already are grabbing our params to know which meeting room we are in.

    const [isSetupComplete, setIsSetupComplete] = useState(false)
    const { call,isCallLoading } = useGetCallById(params?.id);
    const { isLoaded, user } = useUser()
    if(isCallLoading || !isLoaded) return <Loader />

    return (
      <main className="h-screen w-full">
        {/* whenever we're within this StreamCall,we will know exactly which call we're in.
            this stream call provider ensure that. */}
         <StreamCall call={call}>{/* we need to know which call we're currently in  */}
          <StreamTheme>
            {!isSetupComplete ? (
              <MeetingSetup setIsSetupComplete={setIsSetupComplete}/>
            ): (
              <MeetingRoom />
            )}
          </StreamTheme>
        </StreamCall>
      </main>
    )
}

export default MeetingIdPage