import { ProjectCategory } from "@/data/site";

type ProjectCardProps = {
  item: ProjectCategory;
  index: number;
  compact?: boolean;
};

export function ProjectCard({
  item,
  index,
  compact = false
}: ProjectCardProps) {
  return (
    <article
      className={`floating-card group flex h-full flex-col rounded-[30px] p-5 sm:p-6 ${
        compact ? "min-h-[360px]" : "min-h-[420px]"
      }`}
    >
      <div
        className="relative overflow-hidden rounded-[24px] border border-[#d2dbeb]/18"
        style={{ backgroundImage: item.visual.base }}
      >
        <div
          className="pointer-events-none absolute inset-x-10 top-6 h-20 rounded-full blur-3xl transition duration-500 ease-out-expo group-hover:opacity-100"
          style={{ backgroundColor: item.visual.glow }}
        />
        <div className="relative flex h-[170px] items-start justify-between p-5 sm:h-[190px]">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[#eef4fa]">
              {item.year}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.26em] text-[#c7d3df]">
              {item.category}
            </p>
          </div>
          <div
            className="h-11 w-11 rounded-full border border-[#d2dbeb]/22"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.16), rgba(210,219,235,0.04))"
            }}
          />
        </div>

        <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-end justify-between">
          <div className="h-px flex-1 bg-[#d2dbeb]/18" />
          <div
            className="ml-4 h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: item.visual.accent }}
          />
        </div>
      </div>

      <div className="mt-7 flex items-start justify-between gap-4">
        <span className="text-[0.68rem] uppercase tracking-[0.32em] text-[#94a2bf]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-right text-[0.68rem] uppercase tracking-[0.25em] text-[#c1cedc]">
          {item.subtitle}
        </span>
      </div>

      <div className="mt-8">
        <h3
          className={`text-balance font-serif leading-[0.96] text-mist ${
            compact ? "text-[2.2rem] sm:text-[2.5rem]" : "text-[2.55rem] sm:text-[3.15rem]"
          }`}
        >
          {item.title}
        </h3>
        <p className="mt-5 max-w-[32rem] text-[1.04rem] leading-8 text-[#d2dbeb]">
          {item.description}
        </p>
      </div>

      <div className="mt-auto pt-9">
        <div className="flex flex-wrap gap-2">
          {item.highlights.map((highlight) => (
            <span
              className="rounded-full border border-[#d2dbeb]/14 bg-[rgba(210,219,235,0.08)] px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.22em] text-[#dbe4ee]"
              key={highlight}
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
