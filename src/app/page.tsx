// src/app/page.tsx
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Work from "@/components/Work";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <section id="about" className="section"><About /></section>
      <section id="work" className="section"><Work /></section>
      <section id="skills" className="section"><Skills /></section>
      <section id="projects" className="section"><Projects /></section>
      <section id="contact" className="section"><Contact /></section>
    </>
  );
}


