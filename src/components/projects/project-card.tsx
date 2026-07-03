import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

function ProjectCardImage({ project }: ProjectCardProps) {
  if (project.imageUrl) {
    return (
      <Image
        src={project.imageUrl}
        alt={`${project.title} preview`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      />
    );
  }

  return (
    <div className="flex h-full flex-col items-center justify-center gap-1 border border-dashed border-border bg-bg-hover text-text-muted">
      <span className="font-mono text-[10px] uppercase tracking-wide">
        Preview
      </span>
      <span className="px-3 text-center text-xs">{project.title}</span>
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-bg-editor">
      <div className="relative aspect-video shrink-0 border-b border-border bg-bg-deep">
        <ProjectCardImage project={project} />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h2 className="font-medium text-text-primary">{project.title}</h2>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-text-primary">
          {project.summary}
        </p>

        <ul className="mt-3 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <li key={tech}>
              <Badge>{tech}</Badge>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-border pt-3 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="text-accent-primary transition-colors hover:text-accent-soft"
          >
            Case study →
          </Link>
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-text-primary"
            >
              GitHub
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted transition-colors hover:text-text-primary"
            >
              Live demo
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
