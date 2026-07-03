import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

type ProjectPreviewProps = {
  project: Project;
};

function ProjectPreview({ project }: ProjectPreviewProps) {
  if (project.imageUrl) {
    return (
      <Image
        src={project.imageUrl}
        alt={`${project.title} preview`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 768px"
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

type CaseStudyContentProps = {
  project: Project;
};

export function CaseStudyContent({ project }: CaseStudyContentProps) {
  const { caseStudy } = project;

  return (
    <section className="rounded-lg border border-border bg-bg-editor p-4 md:p-5">
      <div className="relative aspect-video overflow-hidden rounded-md border border-border bg-bg-deep">
        <ProjectPreview project={project} />
      </div>

      <p className="mt-4 text-sm leading-relaxed text-text-primary">
        {project.summary}
      </p>

      <ul className="mt-3 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>

      <div className="mt-5 space-y-4 border-t border-border pt-5">
        <div>
          <h2 className="font-mono text-xs text-accent-soft">Problem</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-primary">
            {caseStudy.problem}
          </p>
        </div>
        <div>
          <h2 className="font-mono text-xs text-accent-soft">Solution</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-primary">
            {caseStudy.solution}
          </p>
        </div>
        <div>
          <h2 className="font-mono text-xs text-accent-soft">Outcome</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-primary">
            {caseStudy.outcome}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-border pt-4 text-sm">
        <Link
          href="/projects"
          className="text-text-muted transition-colors hover:text-text-primary"
        >
          ← All projects
        </Link>
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-primary transition-colors hover:text-accent-soft"
          >
            GitHub
          </a>
        ) : null}
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-primary transition-colors hover:text-accent-soft"
          >
            Live demo
          </a>
        ) : null}
      </div>
    </section>
  );
}
