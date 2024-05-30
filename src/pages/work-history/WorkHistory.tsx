import Header from "../../components/ui/Header.tsx";
import Timeline from "./Timeline.tsx";

const WorkHistory = () => {
  return (
    <div className="flex justify-center flex-col items-center mt-24">
      <Header textStyle="text-primary ">Journey</Header>
      <Timeline
        cardProps={[
          [
            "Comik Ink",
            "public/assets/ComikInk.png",
            "GRAPHIC DESIGNER",
            "Summer",
            "2023",
            " - Worked as a man and did stuff with stuff in the thing",
            " - Worked mf",
            " - did stuff",
          ],
          [
            "Comik Ink",
            "public/assets/ComikInk.png",
            "GRAPHIC DESIGNER",
            "Summer",
            "2023",
            " - Worked as a man and did stuff with stuff in the thing",
            " - Worked mf",
            " - did stuff",
          ],
          [
            "Comik Ink",
            "public/assets/ComikInk.png",
            "GRAPHIC DESIGNER",
            "Summer",
            "2023",
            " - Worked as a man and did stuff with stuff in the thing",
            " - Worked mf",
            " - did stuff",
          ],
        ]}
        style="mt-24"
      ></Timeline>
    </div>
  );
};

export default WorkHistory;
