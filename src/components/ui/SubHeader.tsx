import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
  textStyle?: string;
}

const SubHeader = ({ children, textStyle, id }: Props) => {
  return (
    <div
      id={id}
      className={
        "font-outfit text-[45px] max-[475px]:text-[25px] subheader-textsize " +
        textStyle
      }
    >
      {children}
    </div>
  );
};

export default SubHeader;
