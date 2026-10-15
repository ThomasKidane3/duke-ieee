import type { Block } from "@/lib/content";

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6 text-[1.125rem] leading-relaxed text-ink/90">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2 key={index} className="pt-6 font-serif text-3xl font-medium tracking-tight text-ink">
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
            <blockquote key={index} className="border-l border-blue pl-5 text-ink">
              “{block.text}”
            </blockquote>
          );
        }
        if (block.type === "image") {
          return (
            <figure key={index} className="figure-grid border border-[#d5daf2] p-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={block.src} alt={block.alt} className="w-full object-cover" />
              {block.caption ? (
                <figcaption className="px-1 pt-3 font-mono text-[11px] tracking-[0.16em] text-blue uppercase">
                  {block.caption}
                </figcaption>
              ) : null}
            </figure>
          );
        }
        if (block.type === "callout") {
          return (
            <div key={index} className="border border-line bg-white/40 px-5 py-5">
              <p className="font-mono text-[11px] tracking-[0.2em] text-blue uppercase">{block.title}</p>
              <p className="mt-2">{block.text}</p>
              <a
                href={block.href}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex font-mono text-[12px] tracking-[0.12em] text-blue uppercase underline decoration-blue/30 underline-offset-4"
              >
                {block.label} →
              </a>
            </div>
          );
        }
        if (block.type === "sources") {
          return (
            <div key={index} className="border-t border-line pt-6">
              <h2 className="font-mono text-[11px] tracking-[0.22em] text-blue uppercase">Sources</h2>
              <ul className="mt-4 space-y-2">
                {block.items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-ink/25 underline-offset-4 hover:text-blue hover:decoration-blue/40"
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
