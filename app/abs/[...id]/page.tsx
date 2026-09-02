import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PaperReader } from "@/components/arxiv/paper-reader"
import { arxivPdfProxyPath, parseArxivId } from "@/lib/arxiv"
import { getArxivMeta } from "@/lib/arxiv-meta"

type Params = { id: string[] }

// arxiv's id space is open-ended, so this route is resolved on demand and cached
// through the metadata + PDF fetch caches rather than pre-rendered.
export const dynamicParams = true

async function resolve(params: Promise<Params>) {
  const { id } = await params
  const parsed = parseArxivId(id.join("/"))
  if (!parsed) return null
  const meta = await getArxivMeta(parsed.id)
  if (!meta) return null
  return { parsed, meta }
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const resolved = await resolve(params)
  if (!resolved) return { title: "paper not found - hrushik" }
  const { meta } = resolved
  const description =
    meta.summary.length > 200 ? `${meta.summary.slice(0, 197).trimEnd()}...` : meta.summary
  const url = `https://www.hrushik.com/abs/${meta.id}`
  return {
    title: `${meta.title.toLowerCase()} - hrushik`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: meta.title,
      description,
      type: "article",
      url,
      siteName: "hrushik.com",
    },
    twitter: { card: "summary_large_image", title: meta.title, description },
  }
}

export default async function PaperPage({ params }: { params: Promise<Params> }) {
  const resolved = await resolve(params)
  if (!resolved) notFound()
  const { parsed, meta } = resolved

  return <PaperReader meta={meta} pdfSrc={arxivPdfProxyPath(parsed.id, parsed.version)} />
}
