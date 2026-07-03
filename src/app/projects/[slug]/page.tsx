import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyContent } from "@/components/projects/case-study-content";
import { MainPanel } from "@/components/layout/main-panel";
import { getProjectBySlug, projects } from "@/data/projects";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <MainPanel title={project.title}>
      <CaseStudyContent project={project} />
    </MainPanel>
  );
}
