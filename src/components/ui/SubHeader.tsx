import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  textStyle?: string;
}

const SubHeader = ({ children, textStyle }: Props) => {
  return (
    <div className={"font-outfit text-[45px] " + textStyle}>{children}</div>
  );
};

export default SubHeader;
