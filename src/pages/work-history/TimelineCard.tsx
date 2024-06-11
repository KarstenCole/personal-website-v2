import SubHeader from "../../components/ui/SubHeader.tsx";

interface Props {
  title?: string;
  img?: string;
  subTitle?: string;
  description?: string[];
}

const TimelineCard = ({ title, img, subTitle, description }: Props) => {
  return (
    <div className="p-7 bg-dark-background rounded-xl flex flex-col items-left max-[475px]:w-[300px] w-[442px]">
      <div className="flex justify-between mb-3 w-full">
        <div className="flex flex-col">
          <SubHeader textStyle="text-secondary -mb-1 leading-[46px]">
            {title}
          </SubHeader>
          <div className="mt-1 font-manrope text-secondary text-lg mb-4 max-[475px]:text-[12px]">
            {subTitle}
          </div>
        </div>
        <div className="flex p-[7px] bg-secondary-gradient rounded-lg ">
          <img
            className="rounded-md max-[475px]:h-20 min-[476px]:h-28"
            src={img}
            alt={title}
            draggable="false"
          />
        </div>
      </div>
      <div className="flex flex-col justify-start ">
        {description?.map((item, index) => (
          <div
            key={index}
            className="font-manrope text-primary max-[475px]:text-[12px]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineCard;
