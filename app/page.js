"use client";
import Projects from "@/components/Projects";
import FrontPage from "@/components/FrontPage";
import About from "@/components/About";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <div>
      <FrontPage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
