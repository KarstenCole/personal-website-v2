import { ReactNode } from "react";
import { useEffect } from "react";
import { useState } from "react";
//import gsap from "gsap";

interface Props {
  children: ReactNode;
}

const Background = ({ children }: Props) => {
  const [BackgroundTextures] = useState([
    "src/assets/Noise/Noise&Texture4.png",
    "src/assets/Noise/Noise&Texture2.png",
    "src/assets/Noise/Noise&Texture5.png",
    "src/assets/Noise/Noise&Texture3.png",
    "src/assets/Noise/Noise&Texture.png",
  ]);
  const [BackgroundTexture, setBackgroundTexture] = useState(
    BackgroundTextures[0]
  );
  const [bgShuffleID, setBgShuffleID] = useState(0);

  //Fuzz effect
  useEffect(() => {
    if (!bgShuffleID) {
      let BackgroundCounter: number = 0;
      setBgShuffleID(
        setInterval(() => {
          setBackgroundTexture(BackgroundTextures[BackgroundCounter]);
          BackgroundCounter++;
          BackgroundCounter == 4 ? (BackgroundCounter = 0) : null;
        }, 75)
      );
    }
  }, [bgShuffleID, BackgroundTexture, BackgroundTextures]);

  return (
    <div className="bg-background select-none">
      <div className="absolute top-0 left-0 z-0 h-screen w-full overflow-hidden">
        <img
          id="bg1"
          src={BackgroundTexture}
          alt="Fuzz"
          className="block"
          draggable="false"
        />
      </div>
      <div className="z-10">{children}</div>
    </div>
  );
};

export default Background;
