import { ProjectCard } from "@/components/projects/project-card";
import { MainPanel } from "@/components/layout/main-panel";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <MainPanel title="Projects">
      <section className="rounded-lg border border-border bg-bg-editor p-4 md:p-5">
        <p className="text-sm leading-relaxed text-text-primary">
          Selected projects that highlight my experience with Next.js, React,
          TypeScript, and full-stack development.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </MainPanel>
  );
}
