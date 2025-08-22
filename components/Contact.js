import Image from "next/image";
import Link from "next/link";
export default function Contact() {
  return (
    <section
      className="pt-[30px] pb-[80px] md:pt-[60px] md:flex md:justify-between max-w-[1440px] mx-auto px-[5%] 2xl:px-0"
      id="CONTACT"
    >
      <div className="w-[100%] md:w-[50%] ">
        <h2 className="text-[56px] md:text-[86px] font-extrabold text-[#3B3836]">
          Contact
        </h2>

        <div className="flex justify-between mt-[30px]">
          <div>
            <p className="text-[25px] md:text-[40px] text-[#3B3836] font-bold">
              Socials
            </p>
            <div className="flex items-center gap-[18px] md:gap-[28px] mt-2">
              <Link
                href="https://www.linkedin.com/in/frederik-graakjær-b29360206/"
                target="_blank"
                className="cursor-pointer"
              >
                <Image
                  src="/icons/linkedin-icon.png"
                  alt="linkedin"
                  width={50}
                  height={50}
                />
              </Link>
              <Link
                href="https://github.com/Graakjae"
                target="_blank"
                className="cursor-pointer"
              >
                <Image
                  src="/icons/github-icon.png"
                  alt="github"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
          </div>
          <div>
            <p className="text-[25px] md:text-[40px] text-[#3B3836] font-bold">
              Mail
            </p>
            <div className="flex flex-col md:flex-row justify-start items-center gap-2 mt-2">
              <Image
                src="/icons/mail-icon.png"
                alt="github"
                width={50}
                height={50}
                className="hidden md:block"
              />
              <a href="mailto:graakjaer.f@gmail.com">graakjaer.f@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/frederik-graakjaer2.png"
        alt="github"
        width={300}
        height={300}
        className="hidden md:block mt-[30px w-[200px] h-[200px]] md:w-[300px] md:h-[300px]"
      />
    </section>
  );
}
