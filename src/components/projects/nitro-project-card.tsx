import { ProjectCategory } from "@/data/site";

type NitroProjectCardProps = {
  item: ProjectCategory;
  index: number;
  mode?: "home" | "projects";
};

export function NitroProjectCard({
  item,
  index,
  mode = "projects"
}: NitroProjectCardProps) {
  const isHome = mode === "home";
  const shellBackgrounds = [
    "linear-gradient(145deg, rgb(2, 16, 36), rgb(5, 38, 89))",
    "linear-gradient(145deg, rgb(5, 38, 89), rgb(84, 131, 179))",
    "linear-gradient(145deg, rgb(84, 131, 179), rgb(2, 16, 36))",
    "linear-gradient(145deg, rgb(106, 144, 180), rgb(2, 16, 36))",
    "linear-gradient(145deg, rgb(125, 160, 202), rgb(2, 16, 36))"
  ];
  const shellGlow = [
    "radial-gradient(circle at 20% 18%, rgba(193, 232, 255, 0.14), transparent 18%)",
    "radial-gradient(circle at 76% 16%, rgba(125, 160, 202, 0.16), transparent 18%)",
    "radial-gradient(circle at 22% 22%, rgba(193, 232, 255, 0.12), transparent 18%)",
    "radial-gradient(circle at 74% 20%, rgba(193, 232, 255, 0.12), transparent 18%)",
    "radial-gradient(circle at 20% 16%, rgba(193, 232, 255, 0.14), transparent 18%)"
  ];

  return (
    <article
      className={`relative overflow-hidden rounded-[42px] border border-white/10 shadow-[0_28px_90px_rgba(0,0,0,0.48)] ${
        isHome
          ? "min-h-[calc(100svh-11.25rem)] p-6 sm:p-8 lg:p-10"
          : "p-5 sm:p-6 lg:p-8"
      }`}
      style={{ background: shellBackgrounds[index % shellBackgrounds.length] }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: shellGlow[index % shellGlow.length] }}
      />
      <div
        className={`relative overflow-hidden rounded-[32px] border border-white/10 ${
          isHome ? "h-[48vh] min-h-[360px] max-h-[500px]" : "h-[320px] sm:h-[360px]"
        }`}
        style={{ backgroundImage: item.visual.base }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(1,22,43,0.03),rgba(1,22,43,0.56))]" />
        <div
          className="pointer-events-none absolute inset-x-[14%] top-8 h-32 rounded-full blur-3xl"
          style={{ backgroundColor: item.visual.glow }}
        />

        <div className="relative flex h-full flex-col justify-between p-6 lg:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.34em] text-[#e7f1fb]">
                {item.year}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.28em] text-[#cadef0]">
                {item.category}
              </p>
            </div>

            <span className="rounded-full border border-white/15 bg-[rgba(255,255,255,0.05)] px-4 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-[#edf5fc]">
              {item.subtitle}
            </span>
          </div>

          <div className="flex items-end justify-between gap-4">
            <div className="h-px flex-1 bg-white/18" />
            <div
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: item.visual.accent }}
            />
          </div>
        </div>
      </div>

      <div
        className={`grid gap-6 ${
          isHome ? "mt-8 lg:grid-cols-[1.05fr_0.95fr]" : "mt-6 lg:grid-cols-[1.05fr_0.95fr]"
        } lg:items-end`}
      >
        <div>
          <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[#7da0ca]">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2
            className={`mt-5 max-w-4xl text-balance font-serif leading-[0.94] text-mist ${
              isHome
                ? "text-[3rem] sm:text-[3.5rem] lg:text-[4.55rem]"
                : "text-[2.5rem] sm:text-[2.95rem] lg:text-[3.35rem]"
            }`}
          >
            {item.title}
          </h2>
        </div>

        <div>
          <p className="max-w-xl text-[1rem] leading-8 text-[#c4d3e2]">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}
