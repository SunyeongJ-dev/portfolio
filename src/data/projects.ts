import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "couch-to-crunch",
    title: "Couch to Crunch",
    summary:
      "A responsive app for discovering workout videos, with search, bookmarks, and filters for level, workout type, and duration.",
    techStack: ["Next.js", "React", "PostgreSQL", "Prisma"],
    imageUrl: "/projects/couch-to-crunch.webp",
    repoUrl: "https://github.com/SunyeongJ-dev",
    liveUrl: "https://couch-to-crunch.vercel.app/",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
