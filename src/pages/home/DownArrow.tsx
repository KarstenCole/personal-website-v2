const DownArrow = () => {
  const handleClick = () => {
    console.log("DownArrow");
  };

  return (
    <div className="absolute bottom-[73px] w-full flex justify-center">
      <div onClick={handleClick}>
        <svg
          width="91"
          height="99"
          viewBox="0 0 91 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 61.5859L44.058 98.6855L90.6701 60.9463V36L43.4195 73.7392L0 37.2793L0 61.5859Z"
            fill="#EEEEEE"
          />
          <circle cx="45.0372" cy="31.0372" r="5.03723" fill="#EEEEEE" />
          <circle cx="45.0372" cy="5.03723" r="5.03723" fill="#EEEEEE" />
        </svg>
      </div>
    </div>
  );
};

export default DownArrow;
