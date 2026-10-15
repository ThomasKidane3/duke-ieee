import Link from "next/link";
import { posts } from "@/lib/content";

export const metadata = {
  title: "News | Duke IEEE Student Chapter",
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-16 pb-20">
      <Link
        href="/"
        className="font-mono text-[12px] tracking-[0.16em] text-blue uppercase underline decoration-blue/30 underline-offset-4"
      >
        ← Home
      </Link>
      <p className="mt-10 font-mono text-[11px] tracking-[0.22em] text-blue uppercase">Notes</p>
      <h1 className="mt-3 text-5xl tracking-tight">News</h1>
      <p className="mt-4 max-w-xl text-xl leading-snug text-ink/85">
        Insights, updates, and stories from Duke IEEE members as they explore the frontiers of
        technology and industry.
      </p>
      <ol className="mt-10 border-t border-line">
        {posts.map((post, index) => (
          <li key={post.slug} className="border-b border-line">
            <Link href={`/blog/${post.slug}`} className="group grid gap-3 py-7 sm:grid-cols-[3.5rem_1fr]">
              <span className="font-mono text-[12px] tracking-[0.14em] text-blue">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
                  {post.tags.join(" · ")}
                </span>
                <span className="mt-2 block text-2xl tracking-tight group-hover:text-blue">{post.title}</span>
                <span className="mt-2 block leading-relaxed text-ink/80">{post.excerpt}</span>
                <span className="mt-3 block font-mono text-[11px] tracking-[0.12em] text-muted uppercase">
                  {post.author} · {post.date} · {post.readTime}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
