import { CallList } from "@/components/call-list";

const UpcomingPage = () => {
  return (
    <div className="text-white px-12 lg:px-16">
      <h1 className="font-bold text-3xl pb-8">Upcoming Meetings</h1>
      <CallList type="upcoming" />
    </div>
  );
};

export default UpcomingPage;
