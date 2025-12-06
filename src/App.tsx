import About from "./Components/About/About";
import ContactSection from "./Components/Contact/ContactSection";
import FadeInSection from "./Components/UI/FadelInSection";
import HeroComponent from "./Components/Hero/HeroComponent";
import ProjectsSection from "./Components/Projects/ProjectsSection";

import Skills from "./Components/Skills/Skills";
import { ThemeProvider } from "./Context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <div className=" dark:bg-gray-900 ">
        <FadeInSection>
          <HeroComponent />
        </FadeInSection>
        <FadeInSection>
          <About />
        </FadeInSection>
        <FadeInSection>
          <Skills />
        </FadeInSection>
        <FadeInSection>
          <ProjectsSection />
        </FadeInSection>
        <FadeInSection>
          <ContactSection />
        </FadeInSection>
        <div className="mt-20 pb-20 pt-8 border-t dark:bg-gray-900 dark:text-white border-gray-200 text-center text-sm  ">
          © 2025 Ramin Rezaei. Built with Next.js and Tailwind CSS.
        </div>
      </div>
    </ThemeProvider>
  );
}
