import Title from "../../pages/home/Title.tsx";
import AboutMeArrow from "../../pages/home/AboutMeArrow.tsx";
import { useEffect } from "react";
import DownArrow from "./DownArrow.tsx";

interface Props {
  handleClick: () => void;
}

const Home = ({ handleClick }: Props) => {
  useEffect(() => {}, []);

  return (
    <>
      <div id="home-page">
        <Title></Title>
        <DownArrow id="down-arrow"></DownArrow>
        <AboutMeArrow handleClick={handleClick}></AboutMeArrow>
      </div>
    </>
  );
};

export default Home;
