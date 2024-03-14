"use client";
import Projects from "@/components/Projects";
import FrontPage from "@/components/FrontPage";
import AboutText from "@/components/AboutText";
import Contact from "@/components/Contact";
export default function Home() {
    return (
        <div>
            <FrontPage />
            <AboutText />
            <Projects />
            <Contact />
        </div>
    );
}
