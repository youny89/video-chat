'use client';

import Image from "next/image"
import { useState } from "react"
import MeetingTypeCard from "./meeting-type-card";

type MeetingType = 'schedule'|'join'|'instant'|undefined

const MeetingTypeList = () => {
    const [meetingType, setMeetingType] = useState<MeetingType>()

    const createNewMeeting = () => {

    }

    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <MeetingTypeCard 
                icon="/icons/add-meeting.svg"
                title="새로운 미팅"
                subtitle="지금 미팅을 시작 해보세요"
                className="bg-sky-600"
                handleClick={createNewMeeting}
            />
            <MeetingTypeCard 
                icon="/icons/join-meeting.svg"
                title="미팅 참가"
                subtitle="미팅 링크주소를 입력하세요"
                className="bg-rose-600"
                handleClick={createNewMeeting}
            />
            <MeetingTypeCard 
                icon="/icons/schedule.svg"
                title="미팅 예약"
                subtitle="미팅을 계획 하세요"
                className="bg-purple-600"
                handleClick={createNewMeeting}
            />
            <MeetingTypeCard 
                icon="/icons/recordings.svg"
                title="미팅 기록"
                subtitle="저장된 미팅을 확인하세요"
                className="bg-emerald-600"
                handleClick={createNewMeeting}
            />
        </div>
    )
}

export default MeetingTypeList