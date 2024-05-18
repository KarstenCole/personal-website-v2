import Header from "../../components/ui/Header.tsx";
import SubHeader from "../../components/ui/SubHeader.tsx";
import LeftArrow from "./LeftArrow.tsx";

interface Props {
  handleClick: () => void;
}

const AboutMe = ({ handleClick }: Props) => {
  return (
    <div id="about-me" className="flex fixed h-screen">
      <div className="w-[10%] justify-center h-full flex flex-col pl-10">
        <LeftArrow onClick={handleClick}></LeftArrow>
      </div>
      <div className="mt-48 ml-48">
        <Header textStyle="text-primary z-0 text-center mb-10">About Me</Header>
        <SubHeader textStyle="text-secondary text-2xl leading-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae odio
          veritatis nisi libero ipsum, non enim repellat quasi est consequuntur
          quis quisquam perspiciatis deserunt.
        </SubHeader>
      </div>
      <img
        src="src/assets/PrimaryGradient.png"
        className="w-[45%] p-[10%] h-[90%] mt-auto mb-auto "
      />
    </div>
  );
};

export default AboutMe;
