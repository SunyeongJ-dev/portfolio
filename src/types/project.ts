export type Project = {
  slug: string;
  title: string;
  summary: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  caseStudy: {
    problem: string;
    solution: string;
    outcome: string;
  };
};
