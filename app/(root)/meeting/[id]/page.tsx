
interface MeetingIdPageProps {
    params: { id: string; }
}

const MeetingIdPage:React.FC<MeetingIdPageProps> = ({ params }) => {
  return (
    <div>MeetingIdPage id: {params?.id}</div>
  )
}

export default MeetingIdPage