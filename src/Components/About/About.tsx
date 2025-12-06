import { useEffect, useRef } from "react";
import { useInView } from "../../Hook/useInview";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref as React.RefObject<HTMLElement>);

  useEffect(() => {
    if (isVisible) {
      document.querySelectorAll(".highlight").forEach((el) => {
        el.classList.add("visible");
      });
    }
  }, [isVisible]);

  return (
    <div
      ref={ref}
      id="ABOUT"
      className="py-20 px-4 bg-[#fbfbfb] dark:bg-gray-800"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[#161616] dark:text-white text-3xl md:text-4xl font-bold mb-8">
          About Me
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/80 dark:text-gray-300">
          <p>
            I’m a{" "}
            <span className="highlight">self-taught Frontend Developer</span>,
            passionate about building clean, responsive, and user-friendly web
            applications. With over a year of hands-on experience using{" "}
            <span className="highlight">
              React, TypeScript, and Tailwind CSS
            </span>
            , I focus on turning design ideas into smooth and accessible user
            interfaces.
          </p>
          <p>
            I love collaborating with teams, learning from real-world
            challenges, and continuously improving my skills to write better,
            more maintainable code. I’m excited to contribute to meaningful
            projects, grow as a developer, and help create great digital
            experiences for users.
          </p>
        </div>
      </div>
    </div>
  );
}
