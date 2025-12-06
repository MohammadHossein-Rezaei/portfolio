import { ProjectsData } from "../../data/ProjectsData";
import ProjectsCard from "./ProjectsCart";

export default function ProjectsSection() {
  return (
    <section id="project" className="py-20 px-4 bg-[#fbfbfb] dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-[#161616] dark:text-white text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            A selection of my recent work and side projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {ProjectsData.map((p) => (
            <ProjectsCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
