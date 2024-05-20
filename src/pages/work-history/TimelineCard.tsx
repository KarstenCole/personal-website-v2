import SubHeader from "../../components/ui/SubHeader.tsx";

interface Props {
  title?: string;
  img?: string;
  subTitle?: string;
  description?: string[];
}

const TimelineCard = ({ title, img, subTitle, description }: Props) => {
  return (
    <div className="p-7 w-[400px] bg-dark-background rounded-xl flex flex-col items-center">
      <div className="flex justify-between mb-3 w-full">
        <div className="flex flex-col">
          <SubHeader textStyle="text-secondary -mb-1">{title}</SubHeader>
          <div className="font-manrope text-secondary text-lg mb-4">
            {subTitle}
          </div>
        </div>
        <div className="flex p-[7px] bg-secondary-gradient rounded-lg">
          <img className="rounded-md" src={img} alt={title} />
        </div>
      </div>
      <div>
        {description?.map((item, index) => (
          <div key={index} className="font-manrope text-primary">
            {item}
          </div>
        ))}
      </div>
      {/* <svg
        width="57"
        height="63"
        viewBox="0 0 57 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M57 23.6735L29.3028 0L0 24.0816V40L29.7042 15.9184L57 39.1837V23.6735Z"
          fill="#C0C0C0"
        />
        <circle
          cx="28.9628"
          cy="36.9628"
          r="5.03723"
          transform="rotate(180 28.9628 36.9628)"
          fill="#C0C0C0"
        />
        <circle
          cx="28.9628"
          cy="57.9628"
          r="5.03723"
          transform="rotate(180 28.9628 57.9628)"
          fill="#C0C0C0"
        />
      </svg> */}
    </div>
  );
};

export default TimelineCard;
