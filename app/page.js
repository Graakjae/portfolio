"use client";
import Projects from "@/components/Projects";
import About from "@/components/About";
import AboutText from "@/components/AboutText";
import Contact from "@/components/Contact";
export default function Home() {
    return (
        <div>
            <About />
            <AboutText />
            <Projects />
            <Contact />
        </div>
    );
}
