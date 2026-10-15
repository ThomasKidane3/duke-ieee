import Link from "next/link";
import { signupUrl } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-[12px] tracking-[0.22em] text-ink uppercase">
          Duke IEEE
        </Link>
        <nav className="flex items-center gap-6 font-mono text-[12px] tracking-[0.14em] uppercase">
          <Link href="/blog" className="text-muted transition hover:text-blue">
            News
          </Link>
          <a href={signupUrl} className="text-ink transition hover:text-blue">
            Join
          </a>
        </nav>
      </div>
    </header>
  );
}
