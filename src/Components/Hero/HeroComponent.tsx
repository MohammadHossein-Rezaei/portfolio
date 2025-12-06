import ThemeToggle from "../UI/ThemeToggle";

export default function HeroComponent() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-white dark:bg-gray-900 transition-colors duration-500 ease-in-out">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-border dark:border-gray-600">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="profile.jpg"
              alt="profile"
            />
          </div>
        </div>

        <h1 className="text-[#161616]  dark:text-white  text-5xl md:text-7xl font-bold mb-4">
          Mohammad Rezaei
        </h1>

        <p className="text-[#636363] dark:text-gray-300 text-xl md:text-2xl mb-8">
          Frontend Developer
        </p>

        <p className="text-[#636363] dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Building elegant, performant web experiences with modern technologies
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#project"
            className="cursor-pointer bg-black dark:bg-gray-800 text-white dark:text-white inline-flex items-center justify-center px-6 py-3 rounded-lg hover:bg-[#0e0e0ee1] dark:hover:bg-gray-700 transition-colors duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="cursor-pointer border border-border dark:border-gray-600 text-black dark:text-white px-6 py-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <a
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground dark:text-gray-400 hover:text-foreground dark:hover:text-white transition-colors animate-bounce"
        href="#ABOUT"
      >
        <img src="down.png" alt="Down" />
      </a>
    </div>
  );
}
