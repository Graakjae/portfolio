import Image from "next/image";
import Link from "next/link";
export default function Contact() {
    return (
        <section className="px-[5%] pt-[30px] pb-[80px] md:pt-[60px] md:flex md:justify-between" id="CONTACT">
            <div className="w-[100%] md:w-[50%]">
                <h2 className="text-[56px] md:text-[86px] font-extrabold text-[#3B3836]">Contact</h2>

                <div className="flex justify-between mt-[30px]">
                    <div>
                        <p className="text-[25px] md:text-[40px] text-[#3B3836] font-bold">Socials</p>
                        <div className="flex items-center gap-[28px] mt-2">
                            <Link
                                href="https://www.linkedin.com/in/frederik-graakjær-b29360206/"
                                target="_blank"
                                className="cursor-pointer"
                            >
                                <Image src="/icons/linkedin-icon.png" alt="linkedin" width={50} height={50} />
                            </Link>
                            <Link href="https://github.com/Graakjae" target="_blank" className="cursor-pointer">
                                <Image src="/icons/github-icon.png" alt="github" width={50} height={50} />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <p className="text-[25px] md:text-[40px] text-[#3B3836] font-bold">Mail</p>
                        <div className="flex items-center gap-2 mt-2">
                            <Image src="/icons/mail-icon.png" alt="github" width={50} height={50} />
                            <p>graakjaer.f@gmail.com</p>
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
