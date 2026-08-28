import type { ReactNode } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node)
  if (Array.isArray(node)) return node.map(textOf).join("")
  if (node && typeof node === "object" && "props" in node) {
    const props = (node as { props?: { children?: ReactNode } }).props
    return textOf(props?.children)
  }
  return ""
}

export function Markdown({ content }: { content: string }) {
  return (
    <div className="blog-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="display mt-14 mb-5 text-[clamp(1.9rem,4vw,2.7rem)] font-extrabold leading-tight text-ink">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="display mt-16 mb-5 border-b-[3px] border-ink pb-2 text-[clamp(1.5rem,3.4vw,2.1rem)] font-extrabold uppercase leading-tight text-ink">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="display mt-10 mb-3 flex items-baseline gap-2 text-[clamp(1.15rem,2.4vw,1.5rem)] font-bold leading-snug text-ink">
              <span aria-hidden className="text-brut-pink">
                ▹
              </span>
              <span>{children}</span>
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="mt-8 mb-2 font-mono text-[0.8rem] font-bold uppercase tracking-[0.18em] text-ink/70">
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p className="my-4 text-[0.98rem] font-medium leading-[1.75] text-ink/90">{children}</p>
          ),
          a: ({ href, children }) => {
            const external = !!href && /^https?:\/\//.test(href)
            return (
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="font-semibold text-ink underline decoration-brut-blue decoration-[2px] underline-offset-2 hover:decoration-brut-pink"
              >
                {children}
              </a>
            )
          },
          strong: ({ children }) => <strong className="font-extrabold text-ink">{children}</strong>,
          em: ({ children }) => <em className="italic text-ink/80">{children}</em>,
          hr: () => <hr className="my-12 border-0 border-t-[3px] border-dashed border-ink/60" />,
          blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-[6px] border-brut-purple bg-white px-5 py-1 shadow-[4px_4px_0_0_var(--ink)]">
              {children}
            </blockquote>
          ),
          code: ({ children, className }: { children?: ReactNode; className?: string }) => {
            const raw = textOf(children)
            const isBlock = /language-/.test(className ?? "") || raw.includes("\n")
            if (isBlock) {
              return (
                <code className={`${className ?? ""} font-mono text-[0.82rem] leading-relaxed`}>{children}</code>
              )
            }
            return (
              <code className="rounded-[2px] border-2 border-ink bg-brut-yellow/50 px-1.5 py-[1px] font-mono text-[0.85em] font-semibold text-ink">
                {children}
              </code>
            )
          },
          pre: ({ children }) => (
            <pre className="my-6 overflow-x-auto border-[3px] border-ink bg-ink p-4 text-cream shadow-[6px_6px_0_0_var(--ink)]">
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto border-[3px] border-ink shadow-[6px_6px_0_0_var(--ink)]">
              <table className="w-full border-collapse text-left">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-brut-yellow">{children}</thead>,
          th: ({ children }) => (
            <th className="border-2 border-ink px-3 py-2 font-mono text-[0.75rem] font-bold uppercase tracking-wide text-ink">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-2 border-ink bg-white px-3 py-2 align-top text-[0.86rem] font-medium leading-relaxed text-ink/90">
              {children}
            </td>
          ),
          img: ({ src, alt }) =>
            typeof src === "string" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt={alt ?? ""}
                className="my-6 w-full border-[3px] border-ink shadow-[6px_6px_0_0_var(--ink)]"
              />
            ) : null,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
