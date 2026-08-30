import type { ReactNode } from "react"
import type { Element } from "hast"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { Mermaid } from "./mermaid"

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node)
  if (Array.isArray(node)) return node.map(textOf).join("")
  if (node && typeof node === "object" && "props" in node) {
    const props = (node as { props?: { children?: ReactNode } }).props
    return textOf(props?.children)
  }
  return ""
}

// True when a hast <pre> wraps a ```mermaid fenced block.
function isMermaidPre(node: Element | undefined): boolean {
  const code = node?.children?.[0]
  if (!code || code.type !== "element" || code.tagName !== "code") return false
  const className = code.properties?.className
  return Array.isArray(className) && className.includes("language-mermaid")
}

export function Markdown({ content }: { content: string }) {
  return (
    <div className="text-neutral-700">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mt-10 mb-3 text-lg font-semibold text-neutral-900">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-9 mb-2 text-[15px] font-semibold text-neutral-900">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-6 mb-2 text-[15px] font-medium text-neutral-900">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="mt-5 mb-1 text-[13px] font-semibold text-neutral-400">{children}</h4>
          ),
          p: ({ children }) => <p className="my-4 leading-[1.75]">{children}</p>,
          a: ({ href, children }) => {
            const external = !!href && /^https?:\/\//.test(href)
            return (
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="link text-neutral-900"
              >
                {children}
              </a>
            )
          },
          strong: ({ children }) => <strong className="font-semibold text-neutral-900">{children}</strong>,
          em: ({ children }) => <em className="italic">{children}</em>,
          hr: () => <hr className="my-10 border-neutral-100" />,
          blockquote: ({ children }) => (
            <blockquote className="my-5 border-l-2 border-neutral-200 pl-4 text-neutral-500">
              {children}
            </blockquote>
          ),
          ul: ({ children }) => (
            <ul className="my-4 list-disc space-y-1.5 pl-5 marker:text-neutral-300">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="my-4 list-decimal space-y-1.5 pl-5 marker:text-neutral-400">{children}</ol>
          ),
          li: ({ children }) => <li className="leading-[1.7] pl-1">{children}</li>,
          code: ({ children, className }: { children?: ReactNode; className?: string }) => {
            const raw = textOf(children)
            if (/language-mermaid/.test(className ?? "")) {
              return <Mermaid chart={raw} />
            }
            const isBlock = /language-/.test(className ?? "") || raw.includes("\n")
            if (isBlock) {
              return (
                <code className={`${className ?? ""} font-mono text-[13px] leading-relaxed text-neutral-800`}>
                  {children}
                </code>
              )
            }
            return (
              <code className="rounded bg-neutral-100 px-1 py-0.5 font-mono text-[0.85em] text-neutral-800">
                {children}
              </code>
            )
          },
          pre: ({ children, node }) => {
            // Mermaid renders its own <figure>; keep that block-level element out
            // of an invalid <pre> nesting by returning the child unwrapped.
            if (isMermaidPre(node as Element | undefined)) {
              return <>{children}</>
            }
            return (
              <pre className="my-5 overflow-x-auto rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                {children}
              </pre>
            )
          },
          table: ({ children }) => (
            <div className="my-5 overflow-x-auto rounded-lg border border-neutral-200">
              <table className="w-full border-collapse text-left text-[14px]">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-neutral-50">{children}</thead>,
          th: ({ children }) => (
            <th className="border-b border-neutral-200 px-3 py-2 font-medium text-neutral-900">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-b border-neutral-100 px-3 py-2 align-top text-neutral-600">
              {children}
            </td>
          ),
          img: ({ src, alt }) =>
            typeof src === "string" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={src} alt={alt ?? ""} className="my-5 w-full rounded-lg border border-neutral-200" />
            ) : null,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
