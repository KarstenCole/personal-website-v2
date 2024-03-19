import BackgroundBeam from "./BackgroundBeam.tsx";
import { useState } from "react";
import { useEffect } from "react";

interface Props {
  Page: string;
}

const BackgroundBeams = ({ Page }: Props) => {
  const [Backgrounds] = useState({
    Home: {
      Background: "bg-primary-gradient",
      Angle: "rotate-[25deg]",
      Offsets: [
        "ml-[25%]",
        "ml-[12%]",
        "ml-[25%]",
        "ml-[5%]",
        "ml-[20%]",
        "ml-[20%]",
      ],
      AllHoleAreas: [
        [
          "h-[0px]",
          "mt-[200px]",
          "h-[20px]",
          "mt-[40px]",
          "h-[20px]",
          "mt-[100px]",
          "h-[140px]",
          "mt-[300px]",
        ],
        [
          "h-[0px]",
          "mt-[120px]",
          "h-[120px]",
          "mt-[100px]",
          "h-[30px]",
          "mt-[30px]",
          "h-[30px]",
          "mt-[90px]",
          "h-[30px]",
          "mt-[250px]",
          "h-[60px]",
          "mt-[70px]",
          "h-[60px]",
          "mt-[190px]",
        ],
        [
          "h-[0px]",
          "mt-[50px]",
          "h-[20px]",
          "mt-[30px]",
          "h-[80px]",
          "mt-[150px]",
          "h-[20px]",
          "mt-[40px]",
          "h-[90px]",
          "mt-[140px]",
          "h-[20px]",
          "mt-[150px]",
          "h-[20px]",
          "mt-[30px]",
          "h-[20px]",
          "mt-[30px]",
        ],
        [
          "h-[0px]",
          "mt-[70px]",
          "h-[160px]",
          "mt-[40px]",
          "h-[20px]",
          "mt-[100px]",
          "h-[130px]",
          "mt-[185px]",
          "h-[70px]",
          "mt-[300px]",
        ],
        [
          "h-[0px]",
          "mt-[110px]",
          "h-[65px]",
          "mt-[60px]",
          "h-[20px]",
          "mt-[400px]",
          "h-[60px]",
          "mt-[40px]",
          "h-[40px]",
          "mt-[350px]",
          "h-[30px]",
          "mt-[100px]",
        ],
        [
          "h-[0px]",
          "mt-[200px]",
          "h-[30px]",
          "mt-[60px]",
          "h-[30px]",
          "mt-[300px]",
          "h-[30px]",
          "mt-[60px]",
          "h-[90px]",
          "mt-[200px]",
        ],
      ],
    },
  });
  const [Beams] = useState<number[]>([0, 0, 0, 0, 0, 0]);
  const [CurrPage, setCurrPage] = useState(Backgrounds.Home);

  //Setting up the Background for the current page
  useEffect(() => {
    switch (Page) {
      case "Home":
        setCurrPage(Backgrounds.Home);
        break;
    }
  }, [Page, Backgrounds.Home]);

  return (
    <div
      id="beam-wrapper"
      className={"fixed left-0 h-[125vh] w-full overflow-hidden flex"}
    >
      {Beams.map((item, index) => (
        <BackgroundBeam
          key={index}
          HoleAreas={CurrPage.AllHoleAreas[index]}
          Offset={CurrPage.Offsets[index]}
          Mask="bg-primary-gradient"
          Angle={CurrPage.Angle}
        ></BackgroundBeam>
      ))}
    </div>
  );
};

export default BackgroundBeams;
