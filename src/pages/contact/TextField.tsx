import { ReactNode } from "react";
import SubHeader from "../../components/ui/SubHeader.tsx";

interface Props {
  name?: string;
  children: ReactNode;
  body?: boolean;
}

const TextField = ({ children, body, name }: Props) => {
  return (
    <div
      className={
        "flex bg-dark-background z-[1] p-4 rounded-lg w-full" +
        (body ? " flex-col mb-5" : " flex-row mb-5")
      }
    >
      <SubHeader
        textStyle={
          body
            ? "text-secondary !text-[30px] mb-3"
            : "text-secondary !text-[30px] mr-5"
        }
      >
        {children}
      </SubHeader>
      <div className="bg-secondary-gradient p-[6px] rounded-lg w-full">
        {!body && (
          <input
            required
            name={name}
            className={
              "h-full rounded-md bg-dark-background text-primary font-manrope text-md p-2 w-full"
            }
          ></input>
        )}
        {body && (
          <textarea
            required
            name="body"
            className={
              "h-[150px] rounded-md bg-dark-background text-primary font-manrope text-lg p-3 w-full min-h-[60px]"
            }
          ></textarea>
        )}
      </div>
    </div>
  );
};

export default TextField;
