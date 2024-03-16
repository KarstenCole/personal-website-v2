import Header from "../../components/ui/Header.tsx";
import SubHeader from "../../components/ui/SubHeader.tsx";

const Title = () => {
  return (
    <div
      className={"h-screen w-full flex justify-center items-center flex-col"}
    >
      <div id="header" className="flex">
        <Header textStyle="text-transparent text-stroke-primary z-0">
          Hey I'm
        </Header>{" "}
        <div className="m-[8px]"></div>
        <Header textStyle="text-primary z-0">Karsten Cole</Header> <br />
      </div>
      <div id="subheader" className="flex">
        <SubHeader textStyle="text-secondary z-0">
          Fullstack Developer & Designer
        </SubHeader>
      </div>
    </div>
  );
};

export default Title;
