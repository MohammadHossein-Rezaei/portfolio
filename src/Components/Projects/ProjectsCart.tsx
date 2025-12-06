import type { FC } from "react";
import LinkSection from "./LinkSection";

type Props = {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  tech: string[];
};

const ProjectsCard: FC<Props> = ({
  title,
  description,
  image,
  github,
  live,
  tech,
}) => {
  return (
    <div className="group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition hover:shadow-lg">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
            {title}
          </h3>
          <LinkSection github={github} live={live} />
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((t) => (
            <span
              key={t}
              className="
                px-3 py-1 text-xs font-medium 
                rounded-full 
                bg-gray-100 dark:bg-gray-700 
                text-gray-700 dark:text-gray-300
              "
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
