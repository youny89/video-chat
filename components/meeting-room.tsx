'use client';

import { CallControls, CallParticipantsList, PaginatedGridLayout, SpeakerLayout } from "@stream-io/video-react-sdk";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { LayoutListIcon, Users2Icon } from "lucide-react";
import { dropdownItems } from "@/consts";
import { cn } from "@/lib/utils";
import EndCallButton from "./end-call-button";

type CallLayoutType = 'grid'|'speaker-left'|'speaker-right';


const MeetingRoom = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [layout, setLayout] = useState<CallLayoutType>('speaker-left')
    const [showJoinedPeople, setShowJoinedPeople] = useState(false);
    const isPersonalRoom = !!searchParams.get('personal');

    const CallLayout = () => {
      switch(layout) {
        case 'grid':
            return <PaginatedGridLayout />
        case 'speaker-left':
            return <SpeakerLayout participantsBarPosition='left' />
        case 'speaker-right':
            return <SpeakerLayout participantsBarPosition='right' />
        default :
          return <SpeakerLayout participantsBarPosition='right' />
      }
    }

    return (
      <section className="relative h-screen w-full overflow-hidden ">
        <div className="relative flex size-full items-center justify-center">
          <div className="flex size-full max-w-[1000px] items-center">
            <CallLayout />
          </div>

          <div className={cn(
            "hidden ml-2 h-screen bg-black px-4 pt-4",
            showJoinedPeople && 'block'
          )}>
            <CallParticipantsList onClose={()=>setShowJoinedPeople(false)}/>
          </div>

        </div>
        <div className="fixed w-full items-center bottom-0 justify-center gap-5 flex-wrap flex">
          <CallControls onLeave={()=> router.push('/')}/>

          <DropdownMenu>
            <div className="flex items-center">
              <DropdownMenuTrigger>
                <LayoutListIcon size={20} className="text-white"/>
              </DropdownMenuTrigger>
            </div>

            <DropdownMenuContent className="bg-dark-1 border-none outline-none text-white">
              {dropdownItems.map((item, index)=> (
                <div key={index}>
                    <DropdownMenuItem className="">
                      {item.label}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className=" bg-neutral-600"/>
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <button onClick={()=> setShowJoinedPeople(true)}>
            <div className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
                <Users2Icon size={20} className="text-white"/>
              </div>
          </button>

          {!isPersonalRoom && <EndCallButton />}
        </div>
      </section>
    )
}

export default MeetingRoom