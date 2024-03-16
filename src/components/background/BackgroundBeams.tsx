import BackgroundBeam from "./BackgroundBeam.tsx";
import { useState } from "react";
import { useEffect } from "react";

interface Props {
  Page: string;
}

const BackgroundBeams = ({ Page }: Props) => {
  const [Backgrounds] = useState({
    Home: {
      Angles: [25, 25, 25, 25, 25, 25],
      AllHoleAreas: [
        [
          "mt-[0px]",
          "h-[200px]",
          "mt-[20px]",
          "h-[40px]",
          "mt-[20px]",
          "h-[100px]",
          "mt-[60px]",
          "h-[250px]",
          "mt-[70px]",
          "h-[300px]",
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
      className="absolute top-0 left-0 h-screen overflow-hidden"
    >
      {Beams.map((item, index) => (
        <BackgroundBeam
          key={index}
          HoleAreas={CurrPage.AllHoleAreas[0]}
        ></BackgroundBeam>
      ))}
      {/* <BackgroundBeam HoleAreas={CurrPage.AllHoleAreas[0]}></BackgroundBeam> */}
    </div>
  );
};

export default BackgroundBeams;
