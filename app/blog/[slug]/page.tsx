import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Markdown } from "@/components/blog/markdown"
import { getBlogBySlug, getBlogSlugs } from "@/lib/blog"

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return getBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  if (!blog) return {}
  const url = `https://www.hrushik.com/blog/${blog.slug}`
  return {
    title: `${blog.title.toLowerCase()} - hrushik`,
    description: blog.summary,
    alternates: { canonical: url },
    openGraph: {
      title: blog.title,
      description: blog.summary,
      type: "article",
      url,
      publishedTime: blog.date,
      siteName: "hrushik.com",
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
    <main className="mx-auto max-w-xl px-6 pt-14 pb-24 text-[15px] leading-[1.7] text-neutral-700">
      <Link href="/#writing" className="text-neutral-400 underline-offset-2 hover:text-neutral-900 hover:underline">
        &larr; back
      </Link>

      <article className="mt-10">
        <h1 className="text-lg font-semibold leading-snug text-neutral-900">
          {blog.title.toLowerCase()}
        </h1>
        <p className="mt-2 text-[13px] tabular-nums text-neutral-400">
          {blog.displayDate.toLowerCase()} · {blog.readingMinutes} min read
        </p>

        <div className="mt-8 border-t border-neutral-100 pt-2">
          <Markdown content={blog.content} />
        </div>
      </article>

      <footer className="mt-16 border-t border-neutral-100 pt-6 text-[13px] text-neutral-400">
        <Link href="/" className="hover:text-neutral-900">
          hrushik.com
        </Link>{" "}
        · © {new Date().getFullYear()} p. phani hrushik reddy
      </footer>
    </main>
  )
}
