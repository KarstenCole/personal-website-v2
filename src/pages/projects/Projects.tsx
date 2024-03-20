import UpArrow from "./UpArrow.tsx";
import ProjectCard from "./ProjectCard.tsx";
import Title from "./Title.tsx";

const Projects = () => {
  return (
    <div className="flex items-center flex-col mb-40">
      <UpArrow style="mt-[73px]"></UpArrow>
      <Title textStyle="mt-[73px]">Projects</Title>
      <div className="grid grid-cols-2 gap-20 mt-20 z-[1]">
        <ProjectCard
          title="Project 1"
          img="src/assets/ExProject.png"
          tags={["react", "tailwindcss", "gsap", "typescript"]}
        ></ProjectCard>
        <ProjectCard
          title="Project 2"
          img="src/assets/ExProject.png"
          tags={["react", "tailwindcss", "gsap", "typescript"]}
        ></ProjectCard>
      </div>
    </div>
  );
};

export default Projects;
