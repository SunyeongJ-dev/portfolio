import { IconGithub, IconLinkedIn } from "@/components/icons/social-icons";
import { MainPanel } from "@/components/layout/main-panel";
import { contactContent, contactDetails } from "@/data/contact";

export default function ContactPage() {
  return (
    <MainPanel title="Contact">
      <section className="rounded-lg border border-border bg-bg-editor p-4 md:p-5">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="flex items-center">
            <p className="text-sm leading-relaxed text-text-primary">
              {contactContent.intro}
            </p>
          </div>

          <div className="md:border-l md:border-border md:pl-6">
            <h2 className="text-lg font-medium text-text-primary">
              {contactContent.name}
            </h2>

            <dl className="mt-4 space-y-3">
              {contactDetails.map((item) => (
                <div key={item.label}>
                  <dt className="font-mono text-xs text-accent-soft">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm text-text-primary">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-accent-primary transition-colors hover:text-accent-soft"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={contactContent.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-bg-hover text-accent-soft transition-colors hover:bg-bg-deep hover:text-accent-primary"
              >
                <IconLinkedIn />
              </a>
              <a
                href={contactContent.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-bg-hover text-accent-soft transition-colors hover:bg-bg-deep hover:text-accent-primary"
              >
                <IconGithub />
              </a>
            </div>
          </div>
        </div>
      </section>
    </MainPanel>
  );
}
