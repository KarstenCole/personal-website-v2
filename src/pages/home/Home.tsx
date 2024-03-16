import Title from "../../pages/home/Title.tsx";
import DownArrow from "../../pages/home/DownArrow.tsx";
import AboutMeArrow from "../../pages/home/AboutMeArrow.tsx";
import Background from "../../components/background/Background.tsx";

const Home = () => {
  return (
    <Background>
      <Title></Title>
      <DownArrow></DownArrow>
      <AboutMeArrow></AboutMeArrow>
    </Background>
  );
};

export default Home;
