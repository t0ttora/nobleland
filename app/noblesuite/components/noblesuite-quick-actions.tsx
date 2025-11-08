"use client";
import React from "react";
import { FileSpreadsheet, FileText, AppWindow } from "lucide-react";

// Minimal quick action card without external tabs context

type QuickCardProps = {
  onClick: () => void;
  accent: "emerald" | "indigo" | "violet";
  icon: React.ReactNode;
  title: string;
  description: string;
  decorative: React.ReactNode;
};

function QuickActionCard({ onClick, accent, icon, title, description, decorative }: QuickCardProps) {
  const accentClasses =
    accent === "emerald"
      ? "hover:border-emerald-300 hover:bg-emerald-50/60 hover:ring-emerald-400/40 dark:hover:bg-emerald-950/25 dark:hover:ring-emerald-300/40"
      : accent === "indigo"
      ? "hover:border-indigo-300 hover:bg-indigo-50/60 hover:ring-indigo-400/40 dark:hover:bg-indigo-950/25 dark:hover:ring-indigo-300/40"
      : "hover:border-violet-300 hover:bg-violet-50/60 hover:ring-violet-400/40 dark:hover:bg-violet-950/25 dark:hover:ring-violet-300/40";

  return (
    <button
      className={`group hover:ring-offset-background relative overflow-hidden rounded-xl border p-4 text-left transition-colors hover:ring-1 hover:ring-offset-1 ${accentClasses}`}
      onClick={onClick}
    >
      {/* Decorative corner */}
      <div className="pointer-events-none absolute -right-2 -top-2 h-20 w-24 opacity-60 transition-all duration-300 [mask-image:linear-gradient(to_left,black,transparent)] group-hover:opacity-90">
        {decorative}
      </div>
      <div className="mb-3 inline-flex items-center justify-center rounded-lg bg-muted/30 p-2">
        {icon}
      </div>
      <div className="text-sm font-medium">{title}</div>
      <div className="text-muted-foreground mt-1 text-xs">{description}</div>
    </button>
  );
}

export function NobleSuiteQuickActions() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {/* New Cells */}
      <QuickActionCard
        onClick={() => alert("Open: New Cells")}
        accent="emerald"
        icon={<FileSpreadsheet className="size-5 text-emerald-600 dark:text-emerald-400" />}
        title="New cells"
        description="Spreadsheet for your operations and analytics"
        decorative={
          <>
            <div className="absolute inset-0 rounded-bl-2xl bg-gradient-to-l from-emerald-400/15 to-emerald-400/0 group-hover:from-emerald-400/30 dark:from-emerald-300/10 dark:group-hover:from-emerald-300/30" />
            <div className="absolute right-3 top-3 rounded-sm border border-emerald-500/30 bg-emerald-500/10 p-1.5 shadow-sm group-hover:scale-[1.05]">
              <div className="grid grid-cols-3 gap-[2px]">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={`cells-dot-${i}`} className="size-1.5 rounded-sm bg-emerald-500/30" />
                ))}
              </div>
            </div>
          </>
        }
      />

      {/* New Document */}
      <QuickActionCard
        onClick={() => alert("Open: New Document")}
        accent="indigo"
        icon={<FileText className="size-5 text-indigo-600 dark:text-indigo-400" />}
        title="New document"
        description="Word‑style docs tailored for logistics workflows"
        decorative={
          <>
            <div className="absolute inset-0 rounded-bl-2xl bg-gradient-to-l from-indigo-400/15 to-indigo-400/0 group-hover:from-indigo-400/30 dark:from-indigo-300/10 dark:group-hover:from-indigo-300/30" />
            <div className="absolute right-3 top-3 rounded-sm border border-indigo-500/30 bg-indigo-500/10 p-1.5 shadow-sm group-hover:scale-[1.05]">
              <div className="h-1 w-9 rounded-sm bg-indigo-500/30" />
              <div className="mt-1 h-1 w-7 rounded-sm bg-indigo-500/20" />
              <div className="mt-1 h-1 w-10 rounded-sm bg-indigo-500/25" />
            </div>
          </>
        }
      />

      {/* Templates */}
      <QuickActionCard
        onClick={() => alert("Templates are coming soon.")}
        accent="violet"
        icon={<AppWindow className="size-5 text-violet-600 dark:text-violet-400" />}
        title="Templates"
        description="Start faster with ready‑made patterns"
        decorative={
          <>
            <div className="absolute inset-0 rounded-bl-2xl bg-gradient-to-l from-violet-400/15 to-violet-400/0 group-hover:from-violet-400/30 dark:from-violet-300/10 dark:group-hover:from-violet-300/30" />
            <div className="absolute right-3 top-3 grid grid-cols-2 gap-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={`tpl-${i}`} className="h-2.5 w-3 rounded-sm bg-gradient-to-br from-violet-500/25 to-violet-500/10" />
              ))}
            </div>
          </>
        }
      />
    </div>
  );
}
