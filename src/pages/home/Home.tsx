import Title from "../../pages/home/Title.tsx";
import DownArrow from "../../pages/home/DownArrow.tsx";
import AboutMeArrow from "../../pages/home/AboutMeArrow.tsx";
import { useEffect } from "react";

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
