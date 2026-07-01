import type { ReactNode } from "react";

type MainPanelProps = {
  title: string;
  children: ReactNode;
};

export function MainPanel({ title, children }: MainPanelProps) {
  return (
    <main className="flex min-h-0 flex-1 flex-col bg-bg-deep">
      <header className="flex h-14 shrink-0 items-center border-b border-border bg-bg-main px-4 md:px-6">
        <h1 className="text-lg font-medium text-text-primary">{title}</h1>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 md:px-6">
        <div className="mx-auto w-full max-w-3xl">{children}</div>
      </div>
    </main>
  );
}
