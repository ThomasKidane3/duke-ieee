import type { ReactNode } from "react";

export function Rule({ label }: { label?: string }) {
  return (
    <div className="my-14 flex items-center gap-4">
      <p aria-hidden className="h-[1.1em] overflow-hidden font-mono text-[11px] tracking-[0.45em] whitespace-nowrap text-ink/30">
        {"* ".repeat(80)}
      </p>
      {label ? (
        <span className="shrink-0 font-mono text-[11px] tracking-[0.22em] text-blue uppercase">{label}</span>
      ) : null}
    </div>
  );
}

export function Kicker({ index, children }: { index: string; children: ReactNode }) {
  return (
    <p className="font-mono text-[11px] tracking-[0.22em] text-blue uppercase">
      {index} — {children}
    </p>
  );
}
