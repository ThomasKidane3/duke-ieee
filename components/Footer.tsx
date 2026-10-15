import { email, instagramUrl } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="text-3xl font-light text-slate-900">Get in Touch</h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <a href={`mailto:${email}`} className="text-duke hover:underline">
            {email}
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="text-duke hover:underline"
          >
            @ieeeduke
          </a>
        </div>
        <p className="mt-10 text-sm text-slate-400">© 2026 Duke IEEE Student Chapter</p>
      </div>
    </footer>
  );
}
