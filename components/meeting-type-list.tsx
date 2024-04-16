'use client';

import { useState } from "react"
import MeetingTypeCard from "./meeting-type-card";
import MeetingModal from "./meeting-modal";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { toast } from "sonner"


type MeetingType = 'schedule'|'join'|'instant'|undefined

const MeetingTypeList = () => {
    const router = useRouter();
    const { user } = useUser();
    const client = useStreamVideoClient();
    const [meetingType, setMeetingType] = useState<MeetingType>()
    const [callDetails, setCallDetails] = useState<Call>()
    const [values, setValues] = useState({
        dateTime: new Date(),
        description:'',
        link:''
    })

    const createNewMeeting = async () => {
        if(!user || !client) return;
        try {
            if(!values.dateTime) {
                toast('미팅 날짜를 선택해주세요')
                return;
            }

            // create random id for this call.
            const id = crypto.randomUUID();
            const call = client.call('default', id);

            if(!call) throw new Error('Failed to create a call.')

            const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
            const description = values.description || 'Instant'
            await call.getOrCreate({
                data: {
                    starts_at:startsAt,
                    custom: {
                        description
                    }
                }
            })

            setCallDetails(call);
            if(!values.description) {
                router.push(`/meeting/${call.id}`)
            }

            toast('미팅이 생성 되었습니다!');
        } catch (error) {
            console.log(error);
        } 
    }

    return (
        <>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                <MeetingTypeCard 
                    icon="/icons/add-meeting.svg"
                    title="새로운 미팅"
                    subtitle="지금 미팅을 시작 해보세요"
                    className="bg-sky-600"
                    handleClick={()=> setMeetingType('instant')}
                />
                <MeetingTypeCard 
                    icon="/icons/join-meeting.svg"
                    title="미팅 참가"
                    subtitle="미팅 링크주소를 입력하세요"
                    className="bg-rose-600"
                    handleClick={()=> setMeetingType("join")}
                />
                <MeetingTypeCard 
                    icon="/icons/schedule.svg"
                    title="미팅 예약"
                    subtitle="미팅을 계획 하세요"
                    className="bg-purple-600"
                    handleClick={()=>setMeetingType('schedule')}
                />
                <MeetingTypeCard 
                    icon="/icons/recordings.svg"
                    title="미팅 기록"
                    subtitle="저장된 미팅을 확인하세요"
                    className="bg-emerald-600"
                    handleClick={()=>router.push("/recordings")}
                />
            </div>
            <MeetingModal
                isOpen={meetingType === 'instant'}
                onClose={()=> setMeetingType(undefined)}
                title="새로운 미팅을 시작하세요"    
                handleClick={createNewMeeting}
                image="/icons/video.svg"
                buttonText="미팅 시작하기"
            />
            <MeetingModal
                isOpen={meetingType === 'join'}
                onClose={()=> setMeetingType(undefined)}
                title="미팅 링크를 입력하세요"    
                handleClick={()=>router.push(values.link)}
                buttonText="미팅 참가하기"
            >
                <input
                    onChange={e=> setValues({...values, link: e.target.value})}
                    placeholder="미팅 링크"    
                    className="rounded-md px-2 py-4 outline-none  border-2 focus-visible:ring-1 focus-visible:ring-offset-blue-1 focus:border-blue-1"
                />
            </MeetingModal>

            {callDetails ? 
                (
                <MeetingModal 
                    isOpen={meetingType === 'schedule'}
                    onClose={()=> setMeetingType(undefined)}
                    title="미팅 예약을 완료했습니다"
                    handleClick={()=>{
                        navigator.clipboard.writeText('meeting link!!')
                        alert('링크 복사 완료!')
                    }}
                    buttonText="링크 복사하기"
                    image="/icons/checked.svg"
                    buttonIcon="/icons/copy.svg"
                />
    
                ) : 
                (
                    <MeetingModal
                        isOpen={meetingType === 'schedule'}
                        onClose={()=> setMeetingType(undefined)}
                        title="미팅 날짜를 선택하세요"
                        handleClick={createNewMeeting}
                        buttonText="예약 만들기"
                    >
                        <h1>TODO: 미팅 예약 폼</h1>
                    </MeetingModal>
                )
            }

        </>
    )
}

export default MeetingTypeList