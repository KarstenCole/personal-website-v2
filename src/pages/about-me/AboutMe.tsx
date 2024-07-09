import Header from "../../components/ui/Header.tsx";
import SubHeader from "../../components/ui/SubHeader.tsx";
import LeftArrow from "./LeftArrow.tsx";

interface Props {
  handleClick: () => void;
}

const AboutMe = ({ handleClick }: Props) => {
  return (
    <>
      <div className="pt-[85px] flex justify-end mr-[85px] max-[666px]:mr-[40px] max-[515px]:mr-[20px]">
        <LeftArrow onClick={handleClick} />
      </div>
      <div className="flex justify-center items-center flex-col mt-10">
        <Header textStyle="text-primary text-center">About Me</Header>
        <div className="flex flex-col md:flex-row max-md:items-center max-w-[1160px] md:mt-14">
          <div className="m-10 min-w-[200px] lg:min-w-[300px]">
            <img
              src="assets/IMG 3754.jpg"
              alt="personal img"
              width={400}
              height={400}
              className="object-cover max-md:max-w-[200px]"
            />
          </div>
          <div className="flex flex-col items-center">
            <SubHeader textStyle="text-secondary text-center mt-5 mb-5 px-10 !text-[30px]">
              I'm a Virginia Tech student with a major in Computer Science and a
              minor in Finance.
              <br />
              <br />I enjoy developing and designing innovative applications
              that make software more accesible to the people who actually want
              it.
            </SubHeader>
            <div className="flex z-[1] w-64 justify-between m-8 mt-0">
              <a
                href="https://www.linkedin.com/in/karsten-cole/"
                target="_blank"
              >
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
        </div>
      </div>
    </>
  );
};

export default AboutMe;
