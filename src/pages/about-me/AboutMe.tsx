import Header from "../../components/ui/Header.tsx";
import SubHeader from "../../components/ui/SubHeader.tsx";
import LeftArrow from "./LeftArrow.tsx";

interface Props {
  handleClick: () => void;
}

const AboutMe = ({ handleClick }: Props) => {
  return (
    <div id="about-me" className="flex fixed max-[600px]:flex-col">
      <div className="h-screen flex flex-col pl-10 max-[600px]:mb-38 max-[600px]:mt-[85px] justify-center max-[600px]:flex-row max-[600px]:justify-end max-[600px]:pr-10">
        <LeftArrow onClick={handleClick}></LeftArrow>
      </div>
      <div className="mt-48 ml-48 mb-48 items-center flex flex-col max-[1290px]:ml-16 max-[840px]:mr-16 max-[600px]:mt-10 max-[600px]:ml-4 max-[600px]:mr-4">
        <Header textStyle="text-primary z-0 text-center mb-10">About Me</Header>
        <SubHeader textStyle="text-secondary !text-[30px] leading-10 text-center max-[475px]:text-[25px]">
          I'm a Virginia Tech student with a major in Computer Science and a
          minor in Finance.
          <br />
          <br />I enjoy developing and designing innovative applications that
          make software more accesible to the people who actually want it.
        </SubHeader>
        <div className="flex z-[1] w-64 justify-between m-8 mt-6">
          <a href="https://www.linkedin.com/in/karsten-cole/" target="_blank">
            <img
              draggable="false"
              className="scale-[.65]"
              src="assets/linkedin.png"
              alt=""
            />
          </a>
          <a href="https://github.com/KarstenCole" target="_blank">
            <img
              draggable="false"
              className="scale-[.65]"
              src="assets/github.png"
            />
          </a>
        </div>
      </div>
      <img
        draggable="false"
        src="assets/IMG 3754.jpg"
        className="h-[500px] mt-auto mb-auto mr-[10%] ml-[10%] max-[1290px]:ml-10 max-[1290px]:mr-10 max-[995px]:h-[300px] max-[840px]:hidden"
      />
    </div>
  );
};

export default AboutMe;
