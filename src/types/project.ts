export type Project = {
  slug: string;
  title: string;
  summary: string;
  techStack: string[];
  imageUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  caseStudy: {
    problem: string;
    solution: string;
    outcome: string;
  };
};
