import { ProjectCard } from "@/components/projects/project-card";
import { StaggerGroup } from "@/components/ui/stagger-group";
import { ProjectCategory } from "@/data/site";

type ProjectGridProps = {
  items: ProjectCategory[];
  variant?: "preview" | "full";
};

const fullLayoutClasses = [
  "xl:col-span-4",
  "xl:col-span-3",
  "xl:col-span-3",
  "xl:col-span-5",
  "xl:col-span-5"
];

const previewLayoutClasses = [
  "lg:col-span-6",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-6",
  "lg:col-span-10"
];

export function ProjectGrid({
  items,
  variant = "full"
}: ProjectGridProps) {
  const isPreview = variant === "preview";

  return (
    <StaggerGroup
      amount={0.14}
      className={
        isPreview
          ? "grid items-start gap-5 md:grid-cols-2 lg:grid-cols-10"
          : "grid items-start gap-5 md:grid-cols-2 xl:grid-cols-10"
      }
      delayChildren={isPreview ? 0.04 : 0.08}
      distance={56}
      staggerChildren={isPreview ? 0.14 : 0.16}
    >
      {items.map((item, index) => (
        <div
          className={isPreview ? previewLayoutClasses[index] ?? "" : fullLayoutClasses[index] ?? ""}
          key={item.title}
        >
          <ProjectCard index={index} item={item} compact={isPreview} />
        </div>
      ))}
    </StaggerGroup>
  );
}
