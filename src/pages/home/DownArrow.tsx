interface Props {
  id?: string;
}

const DownArrow = ({ id }: Props) => {
  const handleClick = () => {
    console.log("DownArrow");
  };

  return (
    <div className="absolute bottom-[-10px] w-full flex justify-center">
      <div onClick={handleClick}>
        <svg
          id={id}
          width="91"
          height="300"
          viewBox="0 0 91 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-[700px]:w-[75%] max-[700px]:m-auto down-arrow-visibility"
        >
          <path
            id={id + "-head"}
            d="M0 61.5859L44.058 98.6855L90.6701 60.9463V36L43.4195 73.7392L0 37.2793L0 61.5859Z"
            fill="#EEEEEE"
          />
          <circle
            id={id + "-dot1"}
            cx="45.0372"
            cy="31.0372"
            r="5.03723"
            fill="#EEEEEE"
          />
          <circle
            id={id + "-dot2"}
            cx="45.0372"
            cy="5.03723"
            r="5.03723"
            fill="#EEEEEE"
          />
        </svg>
      </div>
    </div>
  );
};

export default DownArrow;
