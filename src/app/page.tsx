import { MainPanel } from "@/components/layout/main-panel";
import { aboutContent } from "@/data/about";

export default function AboutPage() {
  return (
    <MainPanel title="About">
      <section className="rounded-lg border border-border bg-bg-editor p-4 md:p-5">
        <div
          aria-label="Profile photo placeholder"
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-dashed border-border bg-bg-hover text-xs text-text-muted"
        >
          Photo
        </div>

        <p className="mt-4 text-center font-mono text-sm text-accent-primary">
          {aboutContent.role}
        </p>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-text-primary">
          {aboutContent.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-5 border-t border-border pt-4">
          <h2 className="font-mono text-xs text-accent-soft">Skills</h2>
          <p className="mt-2 text-sm text-text-primary">
            {aboutContent.skills.join(" · ")}
          </p>
        </div>
      </section>
    </MainPanel>
  );
}
