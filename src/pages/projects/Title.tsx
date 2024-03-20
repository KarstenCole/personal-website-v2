import Header from "../../components/ui/Header.tsx";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  textStyle: string;
}

const Title = ({ children, textStyle }: Props) => {
  return (
    <Header textStyle={"text-primary z-10 " + textStyle}>{children}</Header>
  );
};

export default Title;
