import { useEffect } from "react";
import gsap from "gsap";

interface Props {
  HoleAreas: string[];
  Offset: string;
  Mask?: string;
  Angle?: string;
}

const BackgroundBeam = ({ HoleAreas, Offset, Mask, Angle }: Props) => {
  const initializeHoles = () => {
    const Holes: string[] = [];
    for (let i = 0; i < HoleAreas.length; i += 2) {
      Holes[i / 2] = HoleAreas[i];
    }
    return Holes;
  };
  const Holes: string[] = initializeHoles();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const wiggleTimeline = gsap.timeline();
      console.log();
      wiggleTimeline
        .to("#beam", {
          duration: 1,
          x: "+=10",
        })
        .to("#beam", {
          duration: 2,
          x: "-=20",
        })
        .to("#beam", {
          duration: 1,
          x: "+=10",
        });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div
      id="beam"
      className={
        "w-[7px] origin-top-right " + Mask + " " + Offset + " " + Angle
      }
    >
      <div id={"wrapper h-full w-full"}>
        {Holes.map((item, index) => (
          <div
            className={
              "w-[20px] -translate-x-1 " +
              item +
              " " +
              HoleAreas[index * 2 + 1] +
              " " +
              "bg-background"
            }
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundBeam;
