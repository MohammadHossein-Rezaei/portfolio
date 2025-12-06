export default function Skills() {
  type Skill = {
    name: string;
    category: string;
  };
  const skills: Skill[] = [
    { name: "HTML", category: "Frontend Core" },
    { name: "CSS", category: "Frontend Core" },
    { name: "JavaScript", category: "Frontend Core" },
    { name: "TypeScript", category: "Frontend Core" },
    { name: "React", category: "Library" },
    { name: "Next.js", category: "Framework" },
    { name: "Tailwind CSS", category: "CSS Utility" },
    { name: "Vite", category: "Build Tool" },
    { name: "Redux Toolkit", category: "State Management" },
    { name: "Git", category: "Version Control" },
    { name: "Responsive Design", category: "UI/UX" },
  ];
  return (
    <div className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#161616] dark:text-white">
          Skills & Technologies
        </h2>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="
            group relative p-6 text-center
            bg-[#fcfcfc] dark:bg-gray-800
            border border-gray-300 dark:border-gray-700
            rounded-lg transition-colors
            hover:border-blue-800
          "
            >
              <h3 className="font-semibold text-[#161616] dark:text-white mb-1">
                {skill.name}
              </h3>

              <span className="text-sm text-[#636363] dark:text-gray-400">
                {skill.category}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
