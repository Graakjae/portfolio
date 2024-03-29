"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projectsData } from "../lib/projects";
import useMousePosition from "@/utils/useMousePosition";
import Image from "next/image";
import Link from "next/link";
export default function Projects() {
    const [mousePosition, setMousePosition] = useState({
        x: null,
        y: null
    });
    const [cursorVariant, setCursorVariant] = useState("default");
    const { x, y } = useMousePosition();
    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            height: 0,
            width: 0,
            x: mousePosition.x - 7,
            y: mousePosition.y - 7
        },
        text: {
            height: 80,
            width: 80,
            x: mousePosition.x - 45,
            y: mousePosition.y - 45
        }
    };

    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");

    return (
        <section id="PROJECTS" className="bg-black rounded-b-[20px] pt-10 relative mt-[-1px]">
            <div className="px-[5%] relative ">
                <h2 className="text-[#D1D1C8] font-extrabold text-[56px] my-5 md:my-10 leading-[1] md:leading-[0.5] ">
                    SELECTED PROJECTS
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-10 relative h-full pb-10">
                    {projectsData.map((project, index) => (
                        <Link href={`/${project.name}`} className="mb-[30px]">
                            <div className="relative h-[400px] md:h-[600px]  overflow-hidden rounded-md">
                                <div
                                    className="relative block cursor-pointer h-full hover:scale-105 ease-in transition-all duration-[400ms]"
                                    onMouseEnter={textEnter}
                                    onMouseLeave={textLeave}
                                >
                                    <Image
                                        src={project.bgImage}
                                        alt="image background"
                                        className="rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%]"
                                        width={600}
                                        height={600}
                                    />
                                    <div className="w-full h-full flex justify-center items-center">
                                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-[0_10px_20px_10px_rgba(0,0,0,0.3)] w-[80%] rounded-md">
                                            <Image
                                                src="/projects/bg/topbar.png"
                                                alt="topbar"
                                                className="rounded-t-md w-[100%]"
                                                width={500}
                                                height={100}
                                            />
                                            <Image
                                                src={project.img[0]}
                                                alt={project.name}
                                                className="rounded-b-md w-[100%] "
                                                width={1000}
                                                height={1000}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <motion.div
                                    className="bg-[#9F8B78] h-[10px] w-[10px] rounded-full fixed top-0 left-0 pointer-events-none"
                                    variants={variants}
                                    animate={cursorVariant}
                                    transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
                                >
                                    {cursorVariant === "text" && (
                                        <p className="text-white text-[1rem] font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                            VIEW
                                        </p>
                                    )}
                                </motion.div>
                            </div>
                            <h2
                                onMouseEnter={textEnter}
                                onMouseLeave={textLeave}
                                className="text-[#D1D1C8] font-bold text-[35px] md:text-[45px] py-2 cursor-pointer z-50 leading-[1] transition-all duration-200 ease-in-out"
                            >
                                {project.name}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
