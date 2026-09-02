import type { Metadata } from "next"
import Link from "next/link"
import { PaperSearch } from "@/components/arxiv/paper-search"

export const metadata: Metadata = {
  title: "papers - hrushik",
  description:
    "Open any arxiv paper in a clean reader: swap arxiv.org for hrushik.com, or paste a link.",
  alternates: { canonical: "https://www.hrushik.com/abs" },
}

export default function PapersIndex() {
  return (
    <main className="mx-auto max-w-xl px-6 pt-14 pb-24 text-[15px] leading-[1.7] text-neutral-700">
      <Link
        href="/"
        className="text-neutral-400 underline-offset-2 hover:text-neutral-900 hover:underline"
      >
        &larr; home
      </Link>

      <h1 className="mt-10 text-lg font-semibold text-neutral-900">papers</h1>
      <p className="mt-2 text-neutral-500">
        a clean reader for arxiv papers. take any{" "}
        <span className="font-mono text-[13px] text-neutral-600">arxiv.org/abs/&lt;id&gt;</span>{" "}
        link, swap the domain to{" "}
        <span className="font-mono text-[13px] text-neutral-600">hrushik.com</span>, and it opens
        here - abstract, metadata, and the full pdf. or paste a link below.
      </p>

      <PaperSearch />

      <p className="mt-6 text-[13px] text-neutral-400">
        e.g.{" "}
        <Link href="/abs/1706.03762" className="link text-neutral-500 hover:text-neutral-900">
          /abs/1706.03762
        </Link>{" "}
        - attention is all you need.
      </p>
    </main>
  )
}
