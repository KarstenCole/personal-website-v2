import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  textStyle?: string;
}

const Header = ({ children, textStyle }: Props) => {
  return (
    <div className={"font-outfit text-[75px] z-[1] " + textStyle}>
      {children}
    </div>
  );
};

export default Header;
