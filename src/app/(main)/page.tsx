// src/app/page.tsx
import About from "@/components/About";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <About />
      <Skills />
      <Work />
      <Projects />
      <Contact />
    </>
  );
}



