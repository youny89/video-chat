import Banner from "@/components/banner";
import MeetingTypeList from "@/components/meeting-type-list";

export default function Home() {
  return (
    <div className="flex flex-col size-full gap-10 text-white ">
      <Banner />

      <MeetingTypeList />
    </div>
  );
}
