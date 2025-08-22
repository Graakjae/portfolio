"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import styles from "./styles.css";
import HeroText from "./HeroText";
export default function About() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.config({
      nullTargetWarn: false,
    });
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 110;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.02 * direction;
  };
  return (
    <section className="relative flex min-h-hero overflow-hidden bg-no-repeat bg-cover h-[100vh] mt-[-100px]">
      <div className="flex justify-center items-center w-full px-[5%] 2xl:px-0">
        <div className="w-[100%] md:w-[40%]">
          <Image
            src="/frederik-graakjaer-portfolio-min.png"
            alt="Frederik Graakjær"
            width={500}
            height={500}
            className="h-[100%] w-[100%] rounded-full border-4 border-[#9F8B78] max-w-[700px] mx-auto"
          />
        </div>
      </div>

      <h1 className="absolute bottom-[30px]">
        <strong ref={slider} className="block relative whitespace-nowrap">
          <HeroText reference={firstText} />
          <HeroText reference={secondText} isSecondText />
        </strong>
      </h1>
      {/* <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#9F8B78] to-transparent" /> */}
      <div className="absolute flex justify-center w-[500px] h-[500px] md:w-[950px] md:h-[950px] bg-gradient-to-t bg-[#DDDDD6] rounded-full z-[-1] top-[50%] left-[50%] translate-y-[-50%]  translate-x-[-50%]" />
    </section>
  );
}
