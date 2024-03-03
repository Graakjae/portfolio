import Image from "next/image";

export default function TechStack({ reference, isSecondText }) {
    return (
        <span
            className={`m-0 block text-[#9F8B78] uppercase lg:text-[140px] font-bold pr-[30px] tracking-[4.8px] md:tracking-[8.4px] md:text-[80px] text-[60px] ${
                isSecondText && "absolute left-[100%] top-0"
            }`}
            ref={reference}
        >
            <Paragraph />
        </span>
    );
}

export function Paragraph({ text }) {
    return (
        <>
            <span className={`text-[#9F8B78] transition-colors flex`}>
                <Image
                    src="/projects/audiophile1.png"
                    alt="mig"
                    width={100}
                    height={100}
                    className="rounded-full px-3 animate-[wiggle_infinite]"
                />
                <Image
                    src="/projects/audiophile2.png"
                    alt="mig"
                    width={100}
                    height={100}
                    className="rounded-full px-3 animate-[wiggle_infinite]"
                />
                <Image
                    src="/projects/audiophile3.png"
                    alt="mig"
                    width={100}
                    height={100}
                    className="rounded-full px-3 animate-[wiggle_infinite]"
                />
                <Image
                    src="/projects/audiophile4.png"
                    alt="mig"
                    width={100}
                    height={100}
                    className="rounded-full px-3 animate-[wiggle_infinite]"
                />
                <Image
                    src="/projects/devLinks.png"
                    alt="mig"
                    width={100}
                    height={100}
                    className="rounded-full px-3 animate-[wiggle_infinite]"
                />

                <Image
                    src="/projects/Planets1.png"
                    alt="mig"
                    width={100}
                    height={100}
                    className="rounded-full px-3 animate-[wiggle_infinite]"
                />
                <Image
                    src="/projects/Planets2.png"
                    alt="mig"
                    width={100}
                    height={100}
                    className="rounded-full px-3 animate-[wiggle_infinite]"
                />
            </span>
        </>
    );
}
