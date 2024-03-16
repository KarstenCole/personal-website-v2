interface Props {
  HoleAreas: string[];
  Offset: string;
  Mask?: string;
}

const BackgroundBeams = ({ HoleAreas, Offset, Mask }: Props) => {
  const initializeHoles = () => {
    const Holes: string[] = [];
    for (let i = 0; i < HoleAreas.length; i += 2) {
      Holes[i / 2] = HoleAreas[i];
    }
    return Holes;
  };
  const Holes: string[] = initializeHoles();

  return (
    <div id="beam" className={"w-[8px] h-screen bg-transparent " + Offset}>
      <div id="wrapper">
        {Holes.map((item, index) => (
          <div
            className={
              "relative w-full bg-primary-gradient bg-cover " +
              item +
              " " +
              HoleAreas[index * 2 + 1] +
              " " +
              Mask
            }
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundBeams;
