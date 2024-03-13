import Header from "../../components/ui/Header.tsx";
import SubHeader from "../../components/ui/SubHeader.tsx";

interface Props {
  z?: string;
}

const Title = ({ z }: Props) => {
  return (
    <div
      className={
        "h-screen w-full flex justify-center items-center flex-col " + z
      }
    >
      <div id="header" className="flex">
        <Header textStyle="text-transparent text-stroke-primary">
          Hey I'm
        </Header>{" "}
        <div className="m-[8px]"></div>
        <Header textStyle="text-primary">Karsten Cole</Header> <br />
      </div>
      <div id="subheader" className="flex">
        <SubHeader textStyle="text-secondary">
          Fullstack Developer & Designer
        </SubHeader>
      </div>
    </div>
  );
};

export default Title;
