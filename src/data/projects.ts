import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "portfolio",
    title: "Developer Portfolio",
    summary:
      "A dashboard-style portfolio built with Next.js to showcase projects, skills, and contact information.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/SunyeongJ-dev",
    caseStudy: {
      problem:
        "Needed a personal site that presents my work clearly to recruiters without feeling like a generic template.",
      solution:
        "Built a dark IDE-inspired layout with route-based sections, reusable components, and content driven by TypeScript data files.",
      outcome:
        "A maintainable portfolio that reflects my developer identity and is easy to extend with new projects.",
    },
  },
  {
    slug: "task-board",
    title: "Task Board App",
    summary:
      "A full-stack task management app with user authentication, CRUD operations, and a responsive dashboard UI.",
    techStack: ["Next.js", "React", "PostgreSQL", "Prisma"],
    repoUrl: "https://github.com/SunyeongJ-dev",
    caseStudy: {
      problem:
        "Wanted practice building a real-world app with auth, a database, and a polished interface.",
      solution:
        "Implemented Google OAuth, REST-style API routes, and a Prisma-backed PostgreSQL schema for tasks and users.",
      outcome:
        "Delivered a working app that demonstrates full-stack fundamentals from login to data persistence.",
    },
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    summary:
      "A weather lookup dashboard that fetches live data from a public API and displays forecasts in a clean layout.",
    techStack: ["Next.js", "TypeScript", "REST APIs", "Tailwind CSS"],
    liveUrl: "https://github.com/SunyeongJ-dev",
    repoUrl: "https://github.com/SunyeongJ-dev",
    caseStudy: {
      problem:
        "Needed a frontend-focused project to practice API integration, loading states, and error handling.",
      solution:
        "Connected to a weather API, cached responses on the server, and built reusable forecast components.",
      outcome:
        "Created a responsive dashboard that handles real network data and edge cases gracefully.",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
