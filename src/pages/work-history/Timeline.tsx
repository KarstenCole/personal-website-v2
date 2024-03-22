import TimelineCard from "./TimelineCard";

interface Props {
  style: string;
  cardProps?: string[][];
}

const Timeline = ({ style, cardProps }: Props) => {
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
      <div className="relative flex flex-col items-center mt-2">
        <div className="h-[1000px] w-[12px] bg-primary absolute top-0 left-[%]"></div>
        {cardProps?.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center ml-[80%] mt-40"
          >
            <div key={index} className="h-[7px] bg-primary w-52"></div>
            <TimelineCard
              title={item[0]}
              img={item[1]}
              subTitle={item[2]}
              description={[item[3], item[4], item[5]]}
            ></TimelineCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
