import SubHeader from "../../components/ui/SubHeader.tsx";

interface Props {
  title?: string;
  tagLine1: string[];
  img?: string;
  imgStyle?: string;
  link: string;
}

const ProjectCard = ({ title, tagLine1, img, link }: Props) => {
  return (
    <div className="w-[450px] max-[1414px]:w-[600px] max-[1030px]:w-[450px] max-[470px]:w-[400px] bg-dark-background text-center rounded-xl pb-2 max-[430px]:w-[300px] mb-20">
      <SubHeader textStyle="text-secondary mt-2 leading-[50px] mb-2">
        {title}
      </SubHeader>
      <a href={link} target="_blank">
        <div className="ml-7 mr-7 mt-1 p-[7px] rounded-lg bg-secondary-gradient hover:p-[3px] duration-100">
          <img
            src={img}
            alt={title}
            className="rounded-md bg-center hover:opacity-90"
            draggable="false"
          />
        </div>
      </a>
      <div className="flex m-2 mt-4 mb-4 justify-center flex-wrap">
        {tagLine1.map((item, index) => (
          <div
            className="m-2
            pr-1 pl-1 pt-[2px] pb-[2px] pl-3 pr-3 rounded-full bg-light-background text-primary font-manrope max-[475px]:text-[13px]"
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
