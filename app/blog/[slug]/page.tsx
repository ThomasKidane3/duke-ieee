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
    <main className="mx-auto max-w-3xl px-6 pt-16 pb-20">
      <article>
        <Link
          href="/blog"
          className="font-mono text-[12px] tracking-[0.16em] text-blue uppercase underline decoration-blue/30 underline-offset-4"
        >
          ← News
        </Link>
        <p className="mt-10 font-mono text-[11px] tracking-[0.18em] text-blue uppercase">
          {post.tags.join(" · ")}
        </p>
        <h1 className="mt-3 text-4xl leading-tight tracking-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-4 font-mono text-[12px] tracking-[0.12em] text-muted uppercase">
          {post.author} · {post.date} · {post.readTime}
        </p>
        <figure className="figure-grid mt-8 border border-[#d5daf2] p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt={post.imageAlt} className="max-h-[460px] w-full object-cover" />
          <figcaption className="px-1 pt-3 font-mono text-[11px] tracking-[0.16em] text-blue uppercase">
            Fig. — {post.imageAlt}
          </figcaption>
        </figure>
        <div className="mt-10">
          <ArticleBody blocks={post.body} />
        </div>
        <div className="mt-12 flex flex-wrap gap-6 border-t border-line pt-6 font-mono text-[12px] tracking-[0.14em] uppercase">
          <Link href="/blog" className="text-blue underline decoration-blue/30 underline-offset-4">
            All articles
          </Link>
          <Link href="/" className="text-ink underline decoration-ink/25 underline-offset-4 hover:text-blue">
            Home
          </Link>
        </div>
      </article>
    </main>
  );
}
