export type ArxivMeta = {
  id: string // canonical id without version, e.g. "1706.03762" or "hep-th/9901001"
  latestVersion: string | null // e.g. "7" (from the API's own id), if present
  title: string
  authors: string[]
  summary: string
  primaryCategory: string
  categories: string[]
  published: string // ISO
  updated: string // ISO
  comment?: string
  journalRef?: string
  doi?: string
  absUrl: string
  pdfUrl: string
  htmlUrl?: string // arxiv native HTML, only when the API advertises it
}

export type ParsedArxivId = {
  id: string
  version: string | null // digits only, e.g. "7"
}

const NEW_STYLE = /^(\d{4}\.\d{4,5})(?:v(\d+))?$/
// Old style: archive[.subclass]/YYMMNNN, e.g. hep-th/9901001, math.GT/0309136
const OLD_STYLE = /^([a-z-]+(?:\.[A-Za-z-]{2,})?\/\d{7})(?:v(\d+))?$/

const ARXIV_HOST = /(^|\.)arxiv\.org$/i

/**
 * Normalize an arxiv identifier from a bare id, a citation-style "arXiv:1706.03762",
 * or any arxiv.org URL (/abs/, /pdf/, /html/, with or without a trailing .pdf,
 * query string or fragment). Returns the version-stripped id plus the version if
 * one was given, or null when the input is not a recognizable arxiv id.
 */
export function parseArxivId(input: string): ParsedArxivId | null {
  let raw = input.trim()
  if (!raw) return null

  // Full URL form.
  if (/^https?:\/\//i.test(raw) || /(^|\.)arxiv\.org\//i.test(raw)) {
    let url: URL
    try {
      url = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`)
    } catch {
      return null
    }
    if (!ARXIV_HOST.test(url.hostname)) return null
    raw = url.pathname
      .replace(/^\/+/, "")
      .replace(/^(abs|pdf|html|format)\//, "")
      .replace(/\.pdf$/i, "")
  }

  // Citation-style prefix.
  raw = raw.replace(/^arxiv:/i, "")

  const m = raw.match(NEW_STYLE) ?? raw.match(OLD_STYLE)
  if (!m) return null
  return { id: m[1], version: m[2] ?? null }
}

/** Path to the first-party PDF proxy for a given id. */
export function arxivPdfProxyPath(id: string, version?: string | null): string {
  const qs = new URLSearchParams({ id })
  if (version) qs.set("v", version)
  return `/api/arxiv-pdf?${qs.toString()}`
}
