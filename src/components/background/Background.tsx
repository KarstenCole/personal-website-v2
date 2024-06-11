import { ReactNode } from "react";
import { useEffect } from "react";
import { useState } from "react";
import BackgroundBeams from "./BackgroundBeams";

interface Props {
  children: ReactNode;
  page: string;
}

const Background = ({ children, page }: Props) => {
  const [BackgroundTextures] = useState([
    "assets/Noise/Noise&Texture4.png",
    "assets/Noise/Noise&Texture2.png",
    "assets/Noise/Noise&Texture5.png",
    "assets/Noise/Noise&Texture3.png",
    "assets/Noise/Noise&Texture.png",
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

  //TODO make the background texture cycle
  return (
    <div id="page-wrapper" className="select-none -z-50">
      <div
        id="background-wrapper"
        className="fixed top-0 z-10 left-0 h-screen w-screen overflow-hidden"
      >
        <img
          id="bg1"
          src="assets/Noise/Noise&Texture.png"
          alt="Fuzz"
          className="h-screen w-screen"
        />
      </div>
      <BackgroundBeams Page={page}></BackgroundBeams>
      <div id="body" className="z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;
