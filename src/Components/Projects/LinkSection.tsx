import type { FC } from "react";

type Props = {
  github: string;
  live: string;
};

const ProjectsCard: FC<Props> = ({ github, live }) => {
  return (
    <div className="flex gap-3 justify-self-end pb-2">
      <a href={github} target="_blank">
        <img src="/public/github.png" alt="github" />
      </a>
      <a href={live} target="_blank">
        <img src="/public/live.png" alt="demo" />
      </a>
    </div>
  );
};
export default ProjectsCard;
