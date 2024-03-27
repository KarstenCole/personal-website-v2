import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
  textStyle?: string;
}

const SubHeader = ({ children, textStyle, id }: Props) => {
  return (
    <div id={id} className={"font-outfit text-[45px] " + textStyle}>
      {children}
    </div>
  );
};

export default SubHeader;
