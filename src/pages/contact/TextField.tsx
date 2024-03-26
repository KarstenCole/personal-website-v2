import { ReactNode } from "react";
import SubHeader from "../../components/ui/SubHeader.tsx";

interface Props {
  children: ReactNode;
  body?: boolean;
}

const TextField = ({ children, body }: Props) => {
  return (
    <div
      className={
        "flex bg-dark-background z-[1] p-4 rounded-lg w-full" +
        (body ? " flex-col mb-5" : " flex-row mb-10")
      }
    >
      <SubHeader
        textStyle={body ? "text-secondary mb-3" : "text-secondary mr-5"}
      >
        {children}
      </SubHeader>
      <div className="bg-primary-gradient p-[7px] rounded-lg w-full">
        {!body && (
          <input
            className={
              "h-full rounded-md bg-dark-background text-primary font-manrope text-xl p-3 w-full"
            }
          ></input>
        )}
        {body && (
          <textarea
            className={
              "h-[150px] rounded-md bg-dark-background text-primary font-manrope text-xl p-3 w-full min-h-[60px]"
            }
          ></textarea>
        )}
      </div>
    </div>
  );
};

export default TextField;
