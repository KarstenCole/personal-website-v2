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
            title="Pure Skin AI"
            img="assets/PureSkinAi.jpg"
            tagLine1={["React", "TypeScript", "Voiceflow", "Bland AI"]}
            link="https://github.com/KarstenCole/pure-skin-ai"
          ></ProjectCard>
          <ProjectCard
            title="Galaxy Shooter"
            img="assets/GalaxyShooter.png"
            tagLine1={["Java"]}
            link="https://github.com/KarstenCole/APCS__FinalProject"
          ></ProjectCard>
        </div>
        <div className="flex flex-col max-[1414px]:mt-20">
          <ProjectCard
            title="Guitar & Music Lessons"
            img="assets/Music&GuitarLessons.jpg"
            tagLine1={["HTML", "CSS"]}
            link="https://github.com/KarstenCole/CSS-HTML-Project"
          ></ProjectCard>
        </div>
      </div>
    </div>
  );
};

export default Projects;
