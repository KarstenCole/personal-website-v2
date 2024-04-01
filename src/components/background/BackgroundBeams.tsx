import BackgroundBeam from "./BackgroundBeam.tsx";
import gsap from "gsap";
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
  const [CurrPage, setCurrPage] = useState(Backgrounds.Home);

  //Setting up the Background for the current page
  useEffect(() => {
    switch (Page) {
      case "Home":
        setCurrPage(Backgrounds.Home);
        break;
    }
  }, [Page, Backgrounds.Home]);

  //Animating the beams
  useEffect(() => {
    const ctx = gsap.context(() => {
      for (let i = 0; i < 6; i++) {
        const beamName = "#beam" + (i + 1).toString();
        const delay = Math.random() + i * 0.5;
        const rand = Math.random() * 10 + 7;
        const beamMove = "+=" + rand.toString();
        const beamMoveBack = "-=" + (rand * 2).toString();
        const beams = gsap.timeline({ repeat: -1, yoyo: true, delay: delay });
        if (CurrPage == Backgrounds.Home) {
          beams
            .to(beamName, {
              duration: 1.5,
              x: beamMove,
              ease: "power1.inOut",
            })
            .to(beamName, {
              duration: 3,
              x: beamMoveBack,
              ease: "power1.inOut",
            })
            .to(beamName, {
              duration: 1.5,
              x: beamMove,
              ease: "power1.inOut",
            });
        } else {
          beams.pause();
        }
      }
    });
    return () => {
      ctx.revert();
    };
  }, [CurrPage, Backgrounds]);

  return (
    <div
      id="beam-wrapper"
      className={"fixed left-0 h-[125vh] w-full overflow-hidden flex"}
    >
      <BackgroundBeam
        id="beam1"
        HoleAreas={CurrPage.AllHoleAreas[0]}
        Offset={CurrPage.Offsets[0]}
        Mask="bg-primary-gradient"
        Angle={CurrPage.Angle}
      ></BackgroundBeam>
      <BackgroundBeam
        id="beam2"
        HoleAreas={CurrPage.AllHoleAreas[1]}
        Offset={CurrPage.Offsets[1]}
        Mask="bg-primary-gradient"
        Angle={CurrPage.Angle}
      ></BackgroundBeam>
      <BackgroundBeam
        id="beam3"
        HoleAreas={CurrPage.AllHoleAreas[2]}
        Offset={CurrPage.Offsets[2]}
        Mask="bg-primary-gradient"
        Angle={CurrPage.Angle}
      ></BackgroundBeam>
      <BackgroundBeam
        id="beam4"
        HoleAreas={CurrPage.AllHoleAreas[3]}
        Offset={CurrPage.Offsets[3]}
        Mask="bg-primary-gradient"
        Angle={CurrPage.Angle}
      ></BackgroundBeam>
      <BackgroundBeam
        id="beam5"
        HoleAreas={CurrPage.AllHoleAreas[4]}
        Offset={CurrPage.Offsets[4]}
        Mask="bg-primary-gradient"
        Angle={CurrPage.Angle}
      ></BackgroundBeam>
      <BackgroundBeam
        id="beam6"
        HoleAreas={CurrPage.AllHoleAreas[5]}
        Offset={CurrPage.Offsets[5]}
        Mask="bg-primary-gradient"
        Angle={CurrPage.Angle}
      ></BackgroundBeam>
    </div>
  );
};

export default BackgroundBeams;
