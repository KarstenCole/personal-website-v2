import { ReactNode } from "react";
import { useEffect } from "react";
import { useState } from "react";
import gsap from "gsap";

interface Props {
  children: ReactNode;
}

const Background = ({ children }: Props) => {
  const NoiseAndTexture: string = "src/assets/Noise&Texture.png";
  const [bgShuffleID, setBgShuffleID] = useState(0);

  //Fuzz effect
  useEffect(() => {
    if (!bgShuffleID) {
      setBgShuffleID(
        setInterval(() => {
          const ctx = gsap.context(() => {
            const bgShuffleTimeline = gsap.timeline();
            bgShuffleTimeline.from("#bg1", {});
          });
          return () => ctx.revert();
        }, 50)
      );
    }
  }, [bgShuffleID]);

  return (
    <div className="bg-background select-none">
      <div className="absolute top-0 left-0 z-0 h-screen w-full overflow-hidden">
        <img id="bg1" src={NoiseAndTexture} alt="Fuzz" className="block" />
      </div>
      <div className="z-10">{children}</div>
    </div>
  );
};

export default Background;
