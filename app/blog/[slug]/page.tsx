import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/ArticleBody";
import { getPost, posts } from "@/lib/content";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article | Duke IEEE" };
  return {
    title: `${post.title} | Duke IEEE`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="px-6 py-16">
      <article className="mx-auto max-w-3xl">
        <Link href="/blog" className="text-sm font-medium text-duke hover:underline">
          ← Back to Blog
        </Link>
        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-duke/10 px-3 py-1 text-xs font-medium text-duke"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="mt-4 text-4xl font-light leading-tight text-slate-900 sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-slate-400">
          {post.author} · {post.date} · {post.readTime}
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt={post.imageAlt} className="max-h-[420px] w-full object-cover" />
        </div>
        <div className="mt-10">
          <ArticleBody blocks={post.body} />
        </div>
        <div className="mt-12 flex flex-wrap gap-4 border-t border-slate-200 pt-8 text-sm">
          <Link href="/blog" className="font-medium text-duke hover:underline">
            Back to All Articles
          </Link>
          <Link href="/" className="font-medium text-duke hover:underline">
            Return to Duke IEEE Home
          </Link>
        </div>
      </article>
    </main>
  );
}
