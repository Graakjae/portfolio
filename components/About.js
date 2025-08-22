"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function AboutText() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  const icons = [
    {
      src: "javascript-icon.png",
      alt: "javascript-icon",
    },
    {
      src: "react-icon.png",
      alt: "react-icon",
    },
    {
      src: "nextjs-icon.png",
      alt: "nextjs-icon",
    },
    {
      src: "mongodb-icon.png",
      alt: "mongodb-icon",
    },
    {
      src: "typescript-icon.png",
      alt: "typescript-icon",
    },
    {
      src: "remix-icon.png",
      alt: "remix-icon",
    },
    {
      src: "php-icon.png",
      alt: "php-icon",
    },
    {
      src: "mysql-icon.png",
      alt: "mysql-icon",
    },
    {
      src: "zustand-icon.png",
      alt: "zustand-icon",
    },
    {
      src: "tailwind-icon.png",
      alt: "tailwind-icon",
    },
    {
      src: "expo-icon.png",
      alt: "expo-icon",
    },
    {
      src: "firebase-icon.png",
      alt: "firebase-icon",
    },
  ];

  return (
    <section className="relative bg-black rounded-t-[20px] pt-10" id="ABOUT ME">
      <div className="max-w-[1440px] mx-auto px-[5%] 2xl:px-0">
        <h2 className="text-[#D1D1C8] font-extrabold text-[56px] md:text-[86px] my-10 leading-[0.5] ">
          ABOUT ME
        </h2>
        <div className="md:flex md:justify-between">
          <div className="w-[100%] md:w-[47%] bg-[#212121] rounded-lg flex justify-center items-center mb-[30px] md:mb-0">
            <p className="text-[#D1D1C8] font-regular text-[22px] w-[90%] py-5 px-1">
              My name is Frederik Graakjær and I'm a web developer based in
              Aarhus. I specialize in building responsive and user-friendly
              websites. I have expertise in various JavaScript technologies
              commonly used for frontend and fullstack development.
            </p>
          </div>
          <div className="w-[100%] md:w-[47%] bg-[#212121] rounded-lg overflow-hidden relative">
            <p className="text-[#D1D1C8] font-regular text-[25px] text-center mt-[20px] font-semibold">
              My tech stack
            </p>
            <div className="scroller my-[10px] md:my-[30px]" data-speed="fast">
              <ul className="tag-list scroller__inner">
                {icons.map((icon, i) => (
                  <li className="tag" key={i}>
                    <Image
                      src={`/icons/${icon.src}`}
                      alt={icon.alt}
                      width={65}
                      height={65}
                      className="w-[55px] h-[55px] md:w-[65px] md:h-[65px]"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
