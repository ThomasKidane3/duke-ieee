import Link from "next/link";
import { posts } from "@/lib/content";

export const metadata = {
  title: "News | Duke IEEE Student Chapter",
};

export default function BlogPage() {
  return (
    <main className="px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="text-sm font-medium text-duke hover:underline">
          ← Back to Home
        </Link>
        <h1 className="mt-8 text-5xl font-light text-slate-900">Duke IEEE Blog</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-500">
          Insights, updates, and stories from Duke IEEE members as they explore the frontiers of
          technology and industry.
        </p>
        <div className="mt-12 grid gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-duke/20"
            >
              <div className="grid md:grid-cols-[280px_1fr]">
                <div className="relative h-52 overflow-hidden md:h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-duke/10 px-3 py-1 text-xs font-medium text-duke"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-4 text-2xl font-medium text-slate-900 group-hover:text-duke">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-slate-600">{post.excerpt}</p>
                  <p className="mt-4 text-sm text-slate-400">
                    {post.author} · {post.date} · {post.readTime}
                  </p>
                  <p className="mt-4 text-sm font-medium text-duke">Read Article</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
