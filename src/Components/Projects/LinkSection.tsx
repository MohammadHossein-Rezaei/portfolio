import type { FC } from "react";
import { Github, SquareArrowOutUpRight } from "lucide-react";

type Props = {
  github: string;
  live: string;
};

const ProjectsCard: FC<Props> = ({ github, live }) => {
  return (
    <div className="flex gap-3 justify-self-end pb-2">
      <a href={github} target="_blank">
        <Github color="gray" />
      </a>
      <a href={live} target="_blank">
        <SquareArrowOutUpRight color="gray" />
      </a>
    </div>
  );
};
export default ProjectsCard;
