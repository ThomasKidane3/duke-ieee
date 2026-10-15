import { email, instagramUrl } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-3xl px-6 py-12">
        <p aria-hidden className="h-[1.1em] overflow-hidden font-mono text-[11px] tracking-[0.45em] whitespace-nowrap text-ink/30">
          {"* ".repeat(40)}
        </p>
        <p className="mt-6 font-mono text-[11px] tracking-[0.22em] text-muted uppercase">
          Duke IEEE Student Chapter
        </p>
        <p className="mt-3 max-w-md text-lg leading-snug">
          Bridging the gap between industry, faculty, and students.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] tracking-wide">
          <a href={`mailto:${email}`} className="text-blue underline decoration-blue/30 underline-offset-4">
            {email}
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="text-blue underline decoration-blue/30 underline-offset-4"
          >
            @ieeeduke
          </a>
        </div>
        <p className="mt-10 font-mono text-[11px] tracking-[0.16em] text-muted uppercase">© 2026</p>
      </div>
    </footer>
  );
}
