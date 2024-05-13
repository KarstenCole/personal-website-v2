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
    AboutMe: {},
    Main: {
      Background: "bg-secondary-gradient",
      Angle: "",
      Offsets: [],
      AllHoleAreas: [[]],
    },
  });
  const [CurrPage, setCurrPage] = useState(Backgrounds.Home);

  //Setting up the Background for the current page
  useEffect(() => {
    switch (Page) {
      case "Home":
        setCurrPage(Backgrounds.Home);
        break;
      case "Main":
        setCurrPage(Backgrounds.Main);
        break;
    }
  }, [Page, Backgrounds]);

  //Animating the beams
  useEffect(() => {
    const ctx = gsap.context(() => {
      for (let i = 0; i < 6; i++) {
        const beamName = "#beam" + (i + 1).toString();
        const beamid = document.querySelector(beamName);
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
          if (beamid) {
            beamid.classList.remove("bg-secondary-gradient");
            beamid.classList.add("bg-primary-gradient");
          }
        } else {
          beams.pause();
          if (beamid) {
            beamid.classList.remove("bg-primary-gradient");
            beamid.classList.add("bg-secondary-gradient");
          }
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
        HoleAreas={Backgrounds.Home.AllHoleAreas[0]}
        Offset={Backgrounds.Home.Offsets[0]}
        Mask="bg-primary-gradient"
        Angle={Backgrounds.Home.Angle}
      ></BackgroundBeam>
      <BackgroundBeam
        id="beam2"
        HoleAreas={Backgrounds.Home.AllHoleAreas[1]}
        Offset={Backgrounds.Home.Offsets[1]}
        Mask="bg-primary-gradient"
        Angle={Backgrounds.Home.Angle}
      ></BackgroundBeam>
      <BackgroundBeam
        id="beam3"
        HoleAreas={Backgrounds.Home.AllHoleAreas[2]}
        Offset={Backgrounds.Home.Offsets[2]}
        Mask="bg-primary-gradient"
        Angle={Backgrounds.Home.Angle}
      ></BackgroundBeam>
      <BackgroundBeam
        id="beam4"
        HoleAreas={Backgrounds.Home.AllHoleAreas[3]}
        Offset={Backgrounds.Home.Offsets[3]}
        Mask="bg-primary-gradient"
        Angle={Backgrounds.Home.Angle}
      ></BackgroundBeam>
      <BackgroundBeam
        id="beam5"
        HoleAreas={Backgrounds.Home.AllHoleAreas[4]}
        Offset={Backgrounds.Home.Offsets[4]}
        Mask="bg-primary-gradient"
        Angle={Backgrounds.Home.Angle}
      ></BackgroundBeam>
      <BackgroundBeam
        id="beam6"
        HoleAreas={Backgrounds.Home.AllHoleAreas[5]}
        Offset={Backgrounds.Home.Offsets[5]}
        Mask="bg-primary-gradient"
        Angle={Backgrounds.Home.Angle}
      ></BackgroundBeam>
    </div>
  );
};

export default BackgroundBeams;
