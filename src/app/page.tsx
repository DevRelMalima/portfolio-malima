import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Blog from "@/components/sections/Blog";
import Speaking from "@/components/sections/Speaking";
import Resume from "@/components/sections/Resume";
import Certifications from "@/components/sections/Certifications";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Speaking />
      <Certifications />
      <Blog />
      <Resume />
    </>
  );
}
