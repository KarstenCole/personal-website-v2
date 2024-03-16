interface Props {
  HoleAreas: string[];
}

const BackgroundBeams = ({ HoleAreas }: Props) => {
  const initializeHoles = () => {
    const Holes: string[] = [];
    for (let i = 0; i < HoleAreas.length; i += 2) {
      Holes[i / 2] = HoleAreas[i];
    }
    return Holes;
  };
  const Holes: string[] = initializeHoles();

  return (
    <div id="wrapper" className="w-[8px] h-screen bg-transparent">
      <div id="beam">
        {Holes.map((item, index) => (
          <div
            className={
              "relative w-full bg-primary " +
              item +
              " " +
              HoleAreas[index * 2 + 1]
            }
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundBeams;
