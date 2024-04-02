import UpArrow from "./UpArrow.tsx";
import ProjectCard from "./ProjectCard.tsx";
import Title from "./Title.tsx";

interface Props {
  id?: string;
}

const Projects = ({ id }: Props) => {
  return (
    <div id={id} className="flex items-center flex-col mb-20">
      <UpArrow style="mt-[73px]"></UpArrow>
      <Title textStyle="mt-[73px]">Projects</Title>
      <div className="flex flex-row mt-20 z-[1]">
        <div className="flex flex-col mr-20">
          <ProjectCard
            title="Project 1"
            img="src/assets/ExProject.png"
            tagLine1={["React", "TailwindCSS", "GSAP", "TypeScript"]}
          ></ProjectCard>
        </div>
        <div className="flex flex-col">
          <ProjectCard
            title="Project 2"
            img="src/assets/ExProject.png"
            tagLine1={["React", "TailwindCSS", "GSAP", "TypeScript"]}
            tagLine2={["HTML", "CSS", "JavaScript", "GSAP"]}
          ></ProjectCard>
        </div>
      </div>
    </div>
  );
};

export default Projects;
