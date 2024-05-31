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
      <div className="mt-48 ml-48 mb-48 items-center flex flex-col">
        <Header textStyle="text-primary z-0 text-center mb-10">About Me</Header>
        <SubHeader textStyle="text-secondary !text-[30px] leading-10 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae odio
          veritatis nisi libero ipsum, non enim repellat quasi est consequuntur
          quis quisquam perspiciatis deserunt.
        </SubHeader>
        <div className="flex z-[1] w-64 justify-between m-8 mt-0 mt-auto">
          <img
            draggable="false"
            className="scale-[.65]"
            src="/assets/linkedin.png"
            alt=""
          />
          <img
            draggable="false"
            className="scale-[.65]"
            src="/assets/github.png"
          />
        </div>
      </div>
      <img
        draggable="false"
        src="/assets/PrimaryGradient.png"
        className="w-[45%] p-[10%] h-[90%] mt-auto mb-auto "
      />
    </div>
  );
};

export default AboutMe;
