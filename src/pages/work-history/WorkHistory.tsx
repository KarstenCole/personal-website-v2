import Header from "../../components/ui/Header.tsx";
import Timeline from "./Timeline.tsx";

const WorkHistory = () => {
  return (
    <div className="flex justify-center flex-col items-center mt-24">
      <Header textStyle="text-primary ">Journey</Header>
      <Timeline style="mt-24">
        <div className="h-10 w-10 bg-blue-800"></div>
      </Timeline>
    </div>
  );
};

export default WorkHistory;
