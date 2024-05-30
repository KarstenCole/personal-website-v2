// import UpArrow from "./UpArrow.tsx";
import ProjectCard from "./ProjectCard.tsx";
import Title from "./Title.tsx";

interface Props {
  id?: string;
}

const Projects = ({ id }: Props) => {
  return (
    <div id={id} className="flex items-center flex-col mb-20">
      <div className="h-[120px] bg-blue-600"></div>
      <Title textStyle="mt-[73px]">Projects</Title>
      <div
        id="project-cards"
        className="flex flex-row max-[1414px]:flex-col mt-20 z-[1]"
      >
        <div className="flex flex-col mr-20 max-[1414px]:mr-0">
          <ProjectCard
            title="Project 1"
            img="public/assets/ExProject.png"
            tagLine1={["React", "TailwindCSS", "GSAP", "TypeScript"]}
          ></ProjectCard>
          <div className="h-20"></div>
          <ProjectCard
            title="Project 3"
            img="public/assets/ExProject.png"
            tagLine1={[
              "React",
              "TailwindCSS",
              "GSAP",
              "TypeScript",
              "HTML",
              "CSS",
              "JavaScript",
              "GSAP",
            ]}
          ></ProjectCard>
        </div>
        <div className="flex flex-col max-[1414px]:mt-20">
          <ProjectCard
            title="Project 2"
            img="public/assets/ExProject.png"
            tagLine1={[
              "React",
              "TailwindCSS",
              "GSAP",
              "TypeScript",
              "HTML",
              "CSS",
              "JavaScript",
              "GSAP",
            ]}
          ></ProjectCard>
        </div>
      </div>
    </div>
  );
};

export default Projects;
