import { ReactNode } from "react";
import SubHeader from "../../components/ui/SubHeader.tsx";

interface Props {
  children: ReactNode;
  width?: string;
}

const TextField = ({ children, width }: Props) => {
  return (
    <div className="flex bg-dark-background mb-40 z-[1] p-5 rounded-lg">
      <div className="flex flex-row">
        <SubHeader textStyle="text-secondary mr-5">{children}</SubHeader>
        <div className="bg-primary-gradient p-[7px] rounded-lg">
          <input className={"h-full rounded-md" + " " + width}></input>
        </div>
      </div>
    </div>
  );
};

export default TextField;
