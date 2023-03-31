import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="flex flex-col items-center h-auto py-28 max-w-6xl mx-auto">
      <h3 className="text-3xl mb-2">
        My Recent <span className="text-heading font-bold">Projects</span>{" "}
      </h3>
      <h4 className="mb-6">Here are a few past projects I've worked on. </h4>
      <div className="flex flex-wrap">
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      </div>
      
    </section>
  );
};
export default Projects;
