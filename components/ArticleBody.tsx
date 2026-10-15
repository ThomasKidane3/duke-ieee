import type { Block } from "@/lib/content";

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6 text-lg leading-relaxed text-slate-600">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2 key={index} className="pt-4 text-2xl font-medium text-slate-900">
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={index} className="list-disc space-y-2 pl-6">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={index}
              className="border-l-4 border-duke/30 pl-4 italic text-slate-700"
            >
              “{block.text}”
            </blockquote>
          );
        }
        if (block.type === "image") {
          return (
            <figure key={index} className="overflow-hidden rounded-2xl border border-slate-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={block.src} alt={block.alt} className="w-full object-cover" />
              {block.caption ? (
                <figcaption className="bg-slate-50 px-4 py-3 text-sm text-slate-500">
                  {block.caption}
                </figcaption>
              ) : null}
            </figure>
          );
        }
        if (block.type === "callout") {
          return (
            <div key={index} className="rounded-2xl border border-duke/15 bg-duke/5 p-6">
              <h3 className="text-lg font-medium text-slate-900">{block.title}</h3>
              <p className="mt-2 text-base">{block.text}</p>
              <a
                href={block.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-base font-medium text-duke hover:underline"
              >
                {block.label}
              </a>
            </div>
          );
        }
        if (block.type === "sources") {
          return (
            <div key={index}>
              <h2 className="text-2xl font-medium text-slate-900">Sources</h2>
              <ul className="mt-3 space-y-2 text-base">
                {block.items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-duke hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        return <p key={index}>{block.text}</p>;
      })}
    </div>
  );
}
