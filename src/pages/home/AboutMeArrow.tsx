import SubHeader from "../../components/ui/SubHeader.tsx";

const AboutMeArrow = () => {
  return (
    <div className="absolute top-[91px] right-[91px]">
      <div className="flex justify-center">
        <SubHeader textStyle="text-primary mr-6">About me</SubHeader>
        <svg
          className="relative top-2"
          width="75"
          height="57"
          viewBox="0 0 75 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M51.9184 57L75 29.3028L51.5204 0L36 0L59.4796 29.7042L36.7959 57L51.9184 57Z"
            fill="#EEEEEE"
          />
          <circle
            cx="31.0294"
            cy="27.6405"
            r="5.03723"
            transform="rotate(-90 31.0294 27.6405)"
            fill="#EEEEEE"
          />
          <circle
            cx="5.02942"
            cy="27.6405"
            r="5.03723"
            transform="rotate(-90 5.02942 27.6405)"
            fill="#EEEEEE"
          />
        </svg>
      </div>
    </div>
  );
};

export default AboutMeArrow;
