interface Props {
  onClick: () => void;
}

const LeftArrow = ({ onClick }: Props) => {
  return (
    <svg
      onClick={onClick}
      width="99"
      height="91"
      viewBox="0 0 99 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.0996 0L0 44.058L37.7392 90.6701H62.6855L24.9463 43.4195L61.4062 0L37.0996 0Z"
        fill="#EEEEEE"
      />
      <circle
        cx="67.6483"
        cy="45.0372"
        r="5.03723"
        transform="rotate(90 67.6483 45.0372)"
        fill="#EEEEEE"
      />
      <circle
        cx="93.6483"
        cy="45.0372"
        r="5.03723"
        transform="rotate(90 93.6483 45.0372)"
        fill="#EEEEEE"
      />
    </svg>
  );
};

export default LeftArrow;
