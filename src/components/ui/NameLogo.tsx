interface Props {
  id?: string;
  className?: string;
  color?: boolean;
  onClick?: () => void;
}

const NameLogo = ({ id, className, color, onClick }: Props) => {
  return (
    <div
      id={id}
      onClick={onClick}
      className={
        className
          ? className
          : "fixed mt-[85px] ml-[85px] z-[60] max-[965px]:absolute max-[666px]:ml-[40px] max-[515px]:ml-[20px]"
      }
    >
      {color ? (
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
      ) : (
        <svg
          width="130"
          height="92"
          viewBox="0 0 130 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.748 90.6701V40.8654V0H0V90.6701H21.748Z"
            fill="url(#paint0_linear_56_71)"
          />
          <path
            d="M53.5171 0.373108L16.4175 44.4311L54.1567 91.0432H79.103L41.3638 43.7926L77.8237 0.373108H53.5171Z"
            fill="url(#paint1_linear_56_71)"
          />
          <path
            d="M103.89 0.373108L66.79 44.4311L104.529 91.0432H129.476L91.7363 43.7926L128.196 0.373108H103.89Z"
            fill="url(#paint2_linear_56_71)"
          />
          <circle
            cx="55.7826"
            cy="44.2157"
            r="5.03723"
            fill="url(#paint3_linear_56_71)"
          />
          <circle
            cx="112.498"
            cy="44.2157"
            r="5.03723"
            fill="url(#paint4_linear_56_71)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_56_71"
              x1="10.874"
              y1="0"
              x2="10.874"
              y2="90.6701"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF2E00" />
              <stop offset="0.03" stop-color="#FF4B1D" />
              <stop offset="0.505" stop-color="#E09400" />
              <stop offset="1" stop-color="#FFD600" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_56_71"
              x1="47.7602"
              y1="0.373108"
              x2="47.7602"
              y2="91.0432"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF2E00" />
              <stop offset="0.03" stop-color="#FF4B1D" />
              <stop offset="0.505" stop-color="#E09400" />
              <stop offset="1" stop-color="#FFD600" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_56_71"
              x1="98.1328"
              y1="0.373108"
              x2="98.1328"
              y2="91.0432"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF2E00" />
              <stop offset="0.03" stop-color="#FF4B1D" />
              <stop offset="0.505" stop-color="#E09400" />
              <stop offset="1" stop-color="#FFD600" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_56_71"
              x1="55.7826"
              y1="39.1785"
              x2="55.7826"
              y2="49.2529"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF2E00" />
              <stop offset="0.03" stop-color="#FF4B1D" />
              <stop offset="0.505" stop-color="#E09400" />
              <stop offset="1" stop-color="#FFD600" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_56_71"
              x1="112.498"
              y1="39.1785"
              x2="112.498"
              y2="49.2529"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF2E00" />
              <stop offset="0.03" stop-color="#FF4B1D" />
              <stop offset="0.505" stop-color="#E09400" />
              <stop offset="1" stop-color="#FFD600" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default NameLogo;
