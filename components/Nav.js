import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { RemoveScroll } from "react-remove-scroll";

export default function Nav() {
    const navLinks = [{ name: "ABOUT ME" }, { name: "PROJECTS" }, { name: "CONTACT" }];
    const [ref, inView] = useInView();
    const [isOpen, setIsOpen] = useState(false);
    console.log(inView);

    return (
        <RemoveScroll enabled={isOpen}>
            <div className="flex justify-between items-center z-10 relative px-[2%] h-[100px]">
                <Link href="/" className="text-[#9F8B78] text-[1.5em] md:text-[30px] font-bold md:block">
                    FREDERIK GRAAKJÆR
                </Link>
                <div>
                    <div ref={ref} className="hidden md:block">
                        <ol className="gap-12 flex">
                            {navLinks &&
                                navLinks.map(({ name }, i) => (
                                    <li>
                                        <Link
                                            className="text-[#9F8B78] text-[25px] font-bold hover:border-b-2 hover:border-[#9F8B78] transition-colors duration-200"
                                            href={`/#${name}`}
                                        >
                                            {name}
                                        </Link>
                                    </li>
                                ))}
                        </ol>
                    </div>
                    <AnimatePresence>
                        {isOpen && (
                            <div className="z-20 ">
                                <m.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ duration: 0.2, opacity: 0 }}
                                    className="bg-black/50 inset-0 fixed w-[100svw] "
                                    onClick={() => setIsOpen(false)}
                                />
                                <m.aside
                                    initial={{ x: "100%" }}
                                    animate={{ x: "0", transition: { delay: 0.2, type: "tween" } }}
                                    exit={{ x: "100%" }}
                                    transition={{ duration: 0.2 }}
                                    className={`w-[98%] md:w-[550px] h-[99%] md:h-[96%] top-[0.5%] right-[1%] md:top-[2%] md:right-[1%] p-8 flex flex-col border-r fixed bg-[#DDDDD6] rounded-lg z-30 overflow-y-auto
                                `}
                                >
                                    <div className="text-center md:text-end flex-col gap-4 mt-[100px]">
                                        {navLinks &&
                                            navLinks.map(({ name }, i) => (
                                                <div className="inline-block md:mr-[30px] mt-[20px]">
                                                    <Link
                                                        href={`#${name}`}
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        transition={{
                                                            duration: 0.25,
                                                            delay: i / 10
                                                        }}
                                                        onClick={() => setIsOpen(!isOpen)}
                                                        className="relative block text-[50px] md:text-[80px] text-[#9F8B78] font-extrabold transition-colors duration-200 w-fit after:content-[''] after:absolute after:w-[0] after:bottom-0 after:left-0 after:h-[4px] after:bg-[#9F8B78] after:mt-2 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full "
                                                    >
                                                        {name}
                                                    </Link>
                                                </div>
                                            ))}
                                        <div className="flex absolute bottom-[50px] left-[50%] translate-x-[-50%] gap-20">
                                            <Image
                                                src="/icons/linkedin-icon.png"
                                                alt="linkedin"
                                                width={50}
                                                height={50}
                                            />
                                            <Image src="/icons/github-icon.png" alt="github" width={50} height={50} />
                                        </div>
                                    </div>
                                </m.aside>
                            </div>
                        )}
                    </AnimatePresence>
                    <AnimatePresence>
                        {inView ? null : (
                            <m.button
                                whileTap={{ scale: 0.85 }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.3,
                                    ease: [0, 0.71, 0.2, 1.01],
                                    scale: {
                                        type: "spring",
                                        damping: 7,
                                        stiffness: 100,
                                        restDelta: 0.001
                                    }
                                }}
                                exit={{
                                    scale: 0,
                                    transition: {
                                        ease: [0, 0.71, 0.2, 1.01],
                                        duration: 0.2,
                                        scale: 0
                                    }
                                }}
                                onClick={() => setIsOpen(!isOpen)}
                                className="fixed flex justify-center items-center right-3 top-3 md:right-8 md:top-8 rounded-full duration-200 h-[65px] w-[65px] md:h-[80px] md:w-[80px] bg-[#9F8B78] cursor-pointer z-50"
                                name="menu-button"
                            >
                                <Hamburger toggled={isOpen} toggle={() => setIsOpen(!isOpen)} rounded color={"white"} />
                            </m.button>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </RemoveScroll>
    );
}
