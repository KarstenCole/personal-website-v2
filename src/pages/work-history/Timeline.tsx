import { ReactNode } from "react";

interface Props {
  style: string;
  children?: ReactNode;
}

const Timeline = ({ style, children }: Props) => {
  return (
    <div className={"flex flex-col items-center z-[1] " + style}>
      <svg
        width="67"
        height="47"
        viewBox="0 0 67 47"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
      >
        <path
          d="M67 27.8163L34.4437 0L0 28.2959V47L34.9155 18.7041L67 46.0408V27.8163Z"
          fill="#EEEEEE"
        />
      </svg>
      <div className="flex flex-col items-center mt-2">
        <div className="h-40 w-[12px] bg-primary relative top-0 left-0"></div>
        <div className="flex flex-row items-center ml-32">
          <div className="h-[7px] bg-primary w-64"></div>
          {children}
        </div>
      </div>
      <div className="flex flex-col items-center mt-2">
        <div className="h-40 w-[12px] bg-primary relative top-0 left-0"></div>
        <div className="flex flex-row items-center mr-32">
          {children}
          <div className="h-[7px] bg-primary w-64"></div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
