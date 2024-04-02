import Title from "../../pages/home/Title.tsx";
import DownArrow from "../../pages/home/DownArrow.tsx";
import AboutMeArrow from "../../pages/home/AboutMeArrow.tsx";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div id="home-page">
        <Title></Title>
        <DownArrow id="down-arrow"></DownArrow>
        <AboutMeArrow></AboutMeArrow>
      </div>
    </>
  );
};

export default Home;
