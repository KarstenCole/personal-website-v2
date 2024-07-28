import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  textStyle?: string;
}

const Header = ({ children, textStyle }: Props) => {
  return (
    <div
      className={
        "font-outfit text-[75px] z-[1] max-[475px]:text-[50px] header-textsize " +
        textStyle
      }
    >
      {children}
    </div>
  );
};

export default Header;
