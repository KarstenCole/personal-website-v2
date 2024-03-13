const NameLogo = () => {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div onClick={handleClick} className="fixed mt-[85px] ml-[85px]">
      <svg
        width="130"
        height="91"
        viewBox="0 0 347 244"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M58.2857 243V109.521V0H0V243H58.2857Z"
          fill="url(#paint0_linear_9_111)"
        />
        <path
          d="M143.429 1L44 119.077L145.143 244H212L110.857 117.366L208.571 1H143.429Z"
          fill="url(#paint1_linear_9_111)"
        />
        <path
          d="M278.429 1L179 119.077L280.143 244H347L245.857 117.366L343.571 1H278.429Z"
          fill="url(#paint2_linear_9_111)"
        />
        <circle
          cx="149.5"
          cy="118.5"
          r="13.5"
          fill="url(#paint3_linear_9_111)"
        />
        <circle
          cx="301.5"
          cy="118.5"
          r="13.5"
          fill="url(#paint4_linear_9_111)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_9_111"
            x1="29.1429"
            y1="0"
            x2="29.1429"
            y2="243"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#202DB8" />
            <stop offset="0.455" stop-color="#00ADB5" />
            <stop offset="1" stop-color="#00FF66" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_9_111"
            x1="128"
            y1="1"
            x2="128"
            y2="244"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#202DB8" />
            <stop offset="0.455" stop-color="#00ADB5" />
            <stop offset="1" stop-color="#00FF66" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_9_111"
            x1="263"
            y1="1"
            x2="263"
            y2="244"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#202DB8" />
            <stop offset="0.455" stop-color="#00ADB5" />
            <stop offset="1" stop-color="#00FF66" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_9_111"
            x1="149.5"
            y1="105"
            x2="149.5"
            y2="132"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#202DB8" />
            <stop offset="0.455" stop-color="#00ADB5" />
            <stop offset="1" stop-color="#00FF66" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_9_111"
            x1="301.5"
            y1="105"
            x2="301.5"
            y2="132"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#202DB8" />
            <stop offset="0.455" stop-color="#00ADB5" />
            <stop offset="1" stop-color="#00FF66" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default NameLogo;
