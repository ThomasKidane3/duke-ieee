import Link from "next/link";
import { signupUrl } from "@/lib/content";

export function Header({ showNews = true }: { showNews?: boolean }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-light text-duke">
          Duke <span className="font-medium">IEEE</span>
        </Link>
        <nav className="flex items-center gap-4">
          {showNews ? (
            <Link href="/blog" className="text-sm text-slate-500 transition hover:text-duke">
              News
            </Link>
          ) : null}
          <a
            href={signupUrl}
            className="rounded-full bg-duke px-5 py-2 text-sm font-medium text-white transition hover:bg-duke/90"
          >
            Join
          </a>
        </nav>
      </div>
    </header>
  );
}
