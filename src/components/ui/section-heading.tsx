import { Reveal } from "@/components/ui/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  level?: "h1" | "h2";
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  level = "h2",
  centered = false
}: SectionHeadingProps) {
  const TitleTag = level;

  return (
    <Reveal>
      <div
        className={
          centered
            ? "mx-auto flex max-w-3xl flex-col items-center text-center"
            : "max-w-3xl"
        }
      >
        <span className={`eyebrow ${centered ? "justify-center" : ""}`}>
          {eyebrow}
        </span>
        <TitleTag className="mt-7 text-balance text-5xl leading-[0.94] text-mist sm:text-6xl lg:text-[5.2rem]">
          {title}
        </TitleTag>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[#6b83a0] sm:text-lg">
          {description}
        </p>
      </div>
    </Reveal>
  );
}
