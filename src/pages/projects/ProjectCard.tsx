import SubHeader from "../../components/ui/SubHeader.tsx";

interface Props {
  title?: string;
  tagLine1: string[];
  tagLine2?: string[];
  img?: string;
}

const ProjectCard = ({ title, tagLine1, tagLine2, img }: Props) => {
  return (
    <div className="w-[500px] bg-dark-background text-center rounded-xl pb-3">
      <SubHeader textStyle="text-secondary mt-1">{title}</SubHeader>
      <div className="ml-7 mr-7 mt-1 p-[7px] rounded-lg bg-primary-gradient">
        <img src={img} alt={title} className="bg-cover rounded-md" />
      </div>
      <div className="flex m-7 mb-4 justify-center">
        {tagLine1.map((item, index) => (
          <div
            className="pr-1 pl-1 ml-2 mr-2 pt-[2px] pb-[2px] pl-3 pr-3 rounded-full bg-light-background text-primary font-manrope"
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
      {tagLine2 && (
        <div className="flex mb-4 justify-center">
          {tagLine2?.map((item, index) => (
            <div
              className="pr-1 pl-1 ml-2 mr-2 pt-[2px] pb-[2px] pl-3 pr-3 rounded-full bg-light-background text-primary font-manrope"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
