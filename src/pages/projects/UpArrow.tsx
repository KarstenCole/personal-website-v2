interface Props {
  style: string;
  id?: string;
}

const UpArrow = ({ style, id }: Props) => {
  return (
    <svg
      id={id}
      width="91"
      height="99"
      viewBox="0 0 91 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"z-10 " + style}
    >
      <path
        id="up-arrow-head"
        d="M90.6702 37.0996L46.6122 0L5.34058e-05 37.7392V62.6855L47.2507 24.9463L90.6702 61.4062V37.0996Z"
        fill="#EEEEEE"
      />
      <circle
        id="up-arrow-dot1"
        cx="45.6329"
        cy="67.6483"
        r="5.03723"
        transform="rotate(-180 45.6329 67.6483)"
        fill="#EEEEEE"
      />
      <circle
        id="up-arrow-dot2"
        cx="45.6329"
        cy="93.6483"
        r="5.03723"
        transform="rotate(-180 45.6329 93.6483)"
        fill="#EEEEEE"
      />
    </svg>
  );
};

export default UpArrow;
