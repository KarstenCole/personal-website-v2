import Header from "../../components/ui/Header.tsx";
import Timeline from "./Timeline.tsx";

const WorkHistory = () => {
  return (
    <div className="flex justify-center flex-col items-center mt-24">
      <Header textStyle="text-primary ">Journey</Header>
      <Timeline
        cardProps={[
          [
            "InspireFly",
            "assets/inspirefly.png",
            "RESEARCHER",
            "2024 - ",
            "Present",
            " - Collaborated with the research and development team to create a satellite for NASA’s CubeSat Launch initiative.",
          ],
          [
            "Comik Ink",
            "assets/ComikInk.png",
            "GRAPHIC DESIGNER",
            "Summer",
            "2023",
            " - Used Photoshop to design and update marketing collateral for businesses.",
            " - Designed marketing material and website for Mii Jamaica.",
            " - Trained other interns on Adobe Photoshop.",
          ],
          [
            "ASA College",
            "assets/ASACollege.png",
            "PUBLISHING AIDE",
            "Summer",
            "2022",
            " - Facilitated course registration for students",
            " - Navigated and edited a large SQL database containing student information.",
            " - Updated social media sites as directed.",
          ],
          [
            "Steel City Codes",
            "assets/SteelCityCodes.png",
            "TUTOR",
            "2021 -",
            "2022",
            " - Taught middle school students Python",
            " - Mentored students to ensure they were on track.",
            " - Created daily lesson plans so that each student could develop their own project.",
          ],
        ]}
        style="mt-24"
      ></Timeline>
    </div>
  );
};

export default WorkHistory;
