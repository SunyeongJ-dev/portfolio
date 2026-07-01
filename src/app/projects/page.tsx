import { MainPanel } from "@/components/layout/main-panel";

export default function ProjectsPage() {
  return (
    <MainPanel title="Projects">
      <p className="text-text-primary">
        Project cards will go here. Case studies will live at{" "}
        <span className="font-mono text-accent-soft">/projects/[slug]</span>.
      </p>
    </MainPanel>
  );
}
