import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  textStyle?: string;
}

const Header = ({ children, textStyle }: Props) => {
  return (
    <div className={"font-outfit text-[75px] " + textStyle}>{children}</div>
  );
};

export default Header;
