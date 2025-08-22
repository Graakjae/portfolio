"use client";
import { useState } from "react";
import { useEffect } from "react";
import { projectsData } from "@/lib/projects";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
export default function ProjectPage() {
  const [project, setProject] = useState(null);
  const path = usePathname();
  useEffect(() => {
    const project = projectsData.find((project) => `/${project.name}` === path);
    setProject(project);
  });

  return (
    <div className="relative lg:flex justify-between w-full h-full max-w-[1440px] mx-auto px-[5%] 2xl:px-0">
      <div className="relative mb-10 w-full lg:w-[60%]">
        <div className="w-full lg:w-[40%] 2xl:w-[50%] lg:max-w-[700px]  relative lg:fixed border border-[#9F8B78] pt-4 px-4 md:px-8 pb-8 shadow-xl rounded-xl">
          <h2 className="text-[50px] md:text-[70px] font-extrabold text-[#393633]">
            {project?.name}
          </h2>
          <p className="text-[20px] font-light">
            {project?.description}
            {project?.challenge && (
              <Link
                className="text-blue-700 border-b-2 border-blue-700 ml-2"
                href={project?.challenge}
                target="_blank"
              >
                View challenge
              </Link>
            )}
          </p>

          <div className="mt-[30px] relative w-full">
            <p className="mb-2 font-medium">Tech stack used</p>
            <div className="w-full relative flex gap-2">
              {project?.technology.map((icon, i) => (
                <Image
                  src={icon}
                  alt="icon"
                  width={100}
                  height={100}
                  className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]"
                  key={i}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center mt-[40px] gap-4">
            {project?.type === "webapp" && (
              <Link
                href={`${project?.urls?.website}`}
                target="_blank"
                className="text-white font-bold flex items-center justify-center w-[200px] h-[50px] border-2 border-[#9F8B78] bg-[#9F8B78] rounded-xl cursor-pointer"
              >
                LIVE SITE
              </Link>
            )}
            <Link
              href={`${project?.urls?.github}`}
              target="_blank"
              className="text-white font-bold flex items-center justify-center w-[200px] h-[50px] border-2 border-[#9F8B78] bg-[#9F8B78] rounded-xl cursor-pointer"
            >
              GITHUB REPO
            </Link>
          </div>
        </div>
      </div>
      {project?.type === "webapp" && (
        <div className="w-full lg:w-[50%] flex justify-end">
          <div>
            {project?.img.map((img, i) => (
              <div className="div mb-10" key={i}>
                <Image
                  src="/projects/bg/topbar.png"
                  alt="browserbar"
                  width={1000}
                  height={100}
                  className="w-full lg:w-[800px] rounded-t-md"
                />
                <Image
                  src={img}
                  alt={project.name}
                  width={800}
                  height={500}
                  className="w-full lg:w-[800px] rounded-b-md shadow-[0_5px_10px_0_rgba(0,0,0,0.25)]"
                />
              </div>
            ))}
          </div>
        </div>
      )}
      {project?.type === "app" && (
        <div className="w-full lg:w-[50%] flex justify-end mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {project?.img.map((img, i) => (
              <div key={i} className="relative">
                <div className=" inset-0 flex items-center justify-center">
                  <Image
                    src={img}
                    alt={project.name}
                    width={800}
                    height={1200}
                    className="w-full lg:w-[800px] rounded-b-md shadow-[0_5px_10px_0_rgba(0,0,0,0.25)] rounded-lg   "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
