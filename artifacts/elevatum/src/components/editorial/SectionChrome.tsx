import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function sectionRule(className?: string) {
  return cn("relative border-t border-white/50", className);
}

/** Centered content shell — use for all sections */
export function sectionShell(className?: string) {
  return cn("mx-auto w-full max-w-[88rem] px-6 md:px-10 lg:px-16", className);
}

export function sectionStack(className?: string) {
  return cn("flex flex-col gap-12 md:gap-16 lg:gap-20", className);
}

export function sectionPadY(className?: string) {
  return cn("py-24 md:py-32 lg:py-36", className);
}

/** @deprecated use sectionShell */
export function sectionPad(className?: string) {
  return sectionShell(className);
}

export function layoutSplit(className?: string) {
  return cn(
    "grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-12 items-stretch [&>*]:min-w-0",
    className,
  );
}

export function layoutTrio(className?: string) {
  return cn(
    "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 [&>*]:min-w-0",
    className,
  );
}

export function layoutQuad(className?: string) {
  return cn("grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8 [&>*]:min-w-0", className);
}

export function layoutOffer(className?: string) {
  return cn(
    "grid w-full min-w-0 grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-10 items-stretch [&>*]:min-w-0",
    className,
  );
}

export function SectionTag({
  className,
  children,
  tone = "primary",
}: {
  className?: string;
  children: ReactNode;
  tone?: "primary" | "accent" | "muted";
}) {
  return (
    <span
      className={cn(
        "section-tag",
        tone === "accent" && "section-tag-accent",
        tone === "muted" && "section-tag-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionLabel({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span className={cn("section-label block", className)}>{children}</span>
  );
}

export function SectionIntro({
  className,
  index,
  tag,
  title,
  aside,
  children,
}: {
  className?: string;
  index?: string;
  tag: string;
  title: ReactNode;
  aside?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className={cn("section-intro", className)}>
      {index ? (
        <span className="section-index" aria-hidden>
          {index}
        </span>
      ) : null}
      <div className="section-intro-inner grid w-full min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:items-end lg:gap-x-16 [&>*]:min-w-0">
        <div className="w-full min-w-0 max-w-full space-y-5">
          <SectionTag>{tag}</SectionTag>
          <h2 className="display-title">{title}</h2>
          {children}
        </div>
        {aside ? (
          <p className="copy-two-lines max-w-[28ch] text-muted-foreground lg:text-right lg:pb-1">
            {aside}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function DisplayTitle({
  className,
  children,
  as: Tag = "h2",
}: {
  className?: string;
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
}) {
  return <Tag className={cn("display-title", className)}>{children}</Tag>;
}

export function GlassPane({
  className,
  children,
  accent = false,
  glow = false,
}: {
  className?: string;
  children: ReactNode;
  accent?: boolean;
  glow?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass-pane min-w-0 w-full",
        accent && "glass-pane-accent",
        glow && "glass-pane-glow",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** @deprecated use GlassPane */
export const EditorialBlock = GlassPane;
