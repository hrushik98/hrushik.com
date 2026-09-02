import "server-only"
import { XMLParser } from "fast-xml-parser"
import type { ArxivMeta } from "./arxiv"

const USER_AGENT = "hrushik.com paper reader (+https://hrushik.com)"

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  trimValues: true,
})

type XmlNode = Record<string, unknown>

function toArray(value: unknown): unknown[] {
  if (value === undefined || value === null) return []
  return Array.isArray(value) ? value : [value]
}

function asNode(value: unknown): XmlNode | undefined {
  return value !== null && typeof value === "object" ? (value as XmlNode) : undefined
}

function asString(value: unknown): string | undefined {
  return typeof value === "string" ? value : typeof value === "number" ? String(value) : undefined
}

function collapse(value: unknown): string | undefined {
  const s = asString(value)
  return s ? s.replace(/\s+/g, " ").trim() : undefined
}

function attr(value: unknown, name: string): string | undefined {
  return asString(asNode(value)?.[`@_${name}`])
}

/**
 * Fetch paper metadata from the arxiv Atom API. Returns null for an unknown id
 * or any network/parse failure - callers should 404 rather than crash. Cached
 * for a day (arxiv only refreshes at midnight and asks callers to be gentle).
 */
export async function getArxivMeta(id: string): Promise<ArxivMeta | null> {
  let xml: string
  try {
    const res = await fetch(
      `https://export.arxiv.org/api/query?id_list=${encodeURIComponent(id)}&max_results=1`,
      {
        headers: { "User-Agent": USER_AGENT, Accept: "application/atom+xml" },
        next: { revalidate: 86400 },
        signal: AbortSignal.timeout(8000),
      },
    )
    if (!res.ok) return null
    xml = await res.text()
  } catch {
    return null
  }

  let entry: XmlNode | undefined
  try {
    const feed = asNode(asNode(parser.parse(xml))?.feed)
    entry = asNode(toArray(feed?.entry)[0])
  } catch {
    return null
  }
  // A missing id yields a feed with zero entries.
  if (!entry) return null

  // The API echoes the resolved id with its latest version, e.g. ".../abs/1706.03762v7".
  const versionMatch = (asString(entry.id) ?? "").match(/v(\d+)\s*$/)
  const latestVersion = versionMatch ? versionMatch[1] : null

  const htmlUrl = toArray(entry.link)
    .filter((l) => attr(l, "title") === "html")
    .map((l) => attr(l, "href"))
    .find((href): href is string => !!href)

  const categories = toArray(entry.category)
    .map((c) => attr(c, "term"))
    .filter((c): c is string => !!c)

  const primaryCategory =
    attr(entry["arxiv:primary_category"], "term") ?? categories[0] ?? "unknown"

  const authors = toArray(entry.author)
    .map((a) => collapse(asNode(a)?.name))
    .filter((a): a is string => !!a)

  const title = collapse(entry.title)
  const summary = collapse(entry.summary)
  if (!title || !summary) return null

  const versionSuffix = latestVersion ? `v${latestVersion}` : ""

  return {
    id,
    latestVersion,
    title,
    authors,
    summary,
    primaryCategory,
    categories: categories.length ? categories : [primaryCategory],
    published: asString(entry.published) ?? "",
    updated: asString(entry.updated) ?? "",
    comment: collapse(entry["arxiv:comment"]),
    journalRef: collapse(entry["arxiv:journal_ref"]),
    doi: asString(entry["arxiv:doi"])?.trim(),
    absUrl: `https://arxiv.org/abs/${id}${versionSuffix}`,
    pdfUrl: `https://arxiv.org/pdf/${id}${versionSuffix}`,
    htmlUrl,
  }
}
