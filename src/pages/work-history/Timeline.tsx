import TimelineCard from "./TimelineCard";
import SubHeader from "../../components/ui/SubHeader";

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
        className="absolute max-[1340px]:hidden"
      >
        <path
          d="M67 27.8163L34.4437 0L0 28.2959V47L34.9155 18.7041L67 46.0408V27.8163Z"
          fill="#EEEEEE"
        />
      </svg>
      <div className="relative flex flex-col items-center mt-2 max-[1340px]:-mt-[70px]">
        <div className="h-[1150px] w-[12px] bg-primary absolute top-0 max-[1340px]:hidden"></div>
        {cardProps?.map((item, index) => (
          <div
            key={index}
            className={
              index % 2 === 0
                ? "flex flex-row items-center ml-[170px] max-[1340px]:ml-0 mt-20 max-[720px]:flex-col max-[475px]:mt-5"
                : "flex flex-row-reverse max-[1340px]:flex-row max-[1340px]:mr-0  items-center mr-[170px] mt-20 max-[720px]:flex-col max-[475px]:mt-5"
            }
          >
            <SubHeader textStyle="text-secondary m-10 !text-[35px] max-[720px]:text-[45px] max-[720px]:mb-6">
              <div className="text-center max-[720px]:flex">
                <SubHeader textStyle="text-secondary">{item[3]}</SubHeader>
                <div className="max-[720px]:w-3 max-[475px]:w-1"></div>
                <SubHeader textStyle="text-secondary">{item[4]}</SubHeader>
                <div className="min-[720px]:hidden">
                  <SubHeader textStyle="text-secondary">:</SubHeader>
                </div>
              </div>
            </SubHeader>
            <div
              key={index}
              className="h-[7px] bg-primary w-[120px] max-[1340px]:hidden"
            ></div>
            <TimelineCard
              title={item[0]}
              img={item[1]}
              subTitle={item[2]}
              description={[item[5], item[6], item[7]]}
            ></TimelineCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
