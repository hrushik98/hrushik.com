import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Markdown } from "@/components/blog/markdown"
import { getBlogBySlug, getBlogSlugs } from "@/lib/blog"

type Params = { slug: string }

const CHIP_BG = ["bg-brut-blue", "bg-brut-yellow", "bg-brut-pink", "bg-brut-green", "bg-brut-purple"]

export function generateStaticParams(): Params[] {
  return getBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  if (!blog) return {}
  const url = `https://www.hrushik.com/blog/${blog.slug}`
  return {
    title: `${blog.title} — Hrushik`,
    description: blog.summary,
    alternates: { canonical: url },
    openGraph: {
      title: blog.title,
      description: blog.summary,
      type: "article",
      url,
      publishedTime: blog.date,
      siteName: "Hrushik Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.summary,
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  if (!blog) notFound()

  return (
    <main className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b-[3px] border-ink bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3.5">
          <Link href="/" className="font-mono text-sm font-bold tracking-tight text-ink">
            <span>hrushik</span>
            <span className="text-ink/60">.com</span>
            <span className="blink text-brut-pink">_</span>
          </Link>
          <Link
            href="/#blog"
            className="brut-btn bg-brut-yellow px-3.5 py-1.5 font-mono text-[0.72rem] font-bold text-ink"
            style={{ borderWidth: "2px", boxShadow: "3px 3px 0 0 var(--ink)" }}
          >
            ← All writing
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-5 pb-24 pt-24 sm:pt-28">
        <p className="kicker text-ink">Writing / {new Date(blog.date).getFullYear()}</p>
        <h1 className="display mt-3 text-[clamp(2rem,5.5vw,3.4rem)] font-extrabold leading-[1.05] text-ink">
          {blog.title}
        </h1>

        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.78rem] font-bold text-ink/70">
          <span>{blog.displayDate}</span>
          <span aria-hidden className="text-ink/30">
            /
          </span>
          <span>{blog.readingMinutes} min read</span>
          <span aria-hidden className="text-ink/30">
            /
          </span>
          <span>P. Phani Hrushik Reddy</span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {blog.tags.map((t, i) => (
            <span
              key={t}
              className={`brut-chip ${CHIP_BG[i % CHIP_BG.length]} px-2.5 py-1 font-mono text-[0.66rem] font-bold uppercase tracking-wider text-ink`}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 border-t-[3px] border-ink pt-2" />

        <Markdown content={blog.content} />

        <div className="mt-16 border-t-[3px] border-ink pt-8">
          <Link
            href="/#blog"
            className="brut-btn bg-brut-green px-5 py-3 font-mono text-[0.8rem] font-bold text-ink"
          >
            ← Back to hrushik.com
          </Link>
        </div>
      </article>

      <footer className="border-t-[3px] border-ink bg-white py-8 text-center font-mono text-[0.75rem] font-bold text-ink leading-loose">
        <p>
          © {new Date().getFullYear()} P. Phani Hrushik Reddy · hrushik.com
          <span className="blink text-brut-pink">_</span>
        </p>
        <p className="text-ink/75">Shipping &gt; talking. Always.</p>
      </footer>
    </main>
  )
}
