export default function HeroText({ reference, isSecondText }) {
  return (
    <span
      className={`m-0 block text-[#9F8B78] uppercase lg:text-[140px] font-bold pr-[30px] tracking-[4.8px] md:tracking-[8.4px] md:text-[80px] text-[60px] ${
        isSecondText && "absolute left-[100%] top-0"
      }`}
      ref={reference}
    >
      <Paragraph text="Frederik Graakjær" />
      <Paragraph text="web developer" />
      <Paragraph text="Frederik Graakjær" />
      <Paragraph text="web developer" />
    </span>
  );
}

export function Paragraph({ text }) {
  return (
    <>
      {text} <span className={`text-[#9F8B78] transition-colors`}>-</span>{" "}
    </>
  );
}
