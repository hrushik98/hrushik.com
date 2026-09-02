import { parseArxivId } from "@/lib/arxiv"

export const runtime = "nodejs"

const USER_AGENT = "hrushik.com paper reader (+https://hrushik.com)"

/**
 * Streams an arxiv PDF through this origin. Keeps pdf.js on a same-origin URL
 * (no CORS), hides the reader's IP from arxiv, and lets the Vercel CDN cache the
 * bytes so we hit arxiv at most once per paper per week.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const parsed = parseArxivId(searchParams.get("id") ?? "")
  if (!parsed) {
    return new Response("bad arxiv id", { status: 400 })
  }

  const rawVersion = searchParams.get("v")
  const version = rawVersion && /^\d+$/.test(rawVersion) ? rawVersion : parsed.version
  const versionSuffix = version ? `v${version}` : ""
  const upstreamUrl = `https://arxiv.org/pdf/${parsed.id}${versionSuffix}`

  let upstream: Response
  try {
    upstream = await fetch(upstreamUrl, {
      headers: { "User-Agent": USER_AGENT, Accept: "application/pdf" },
      signal: AbortSignal.timeout(20000),
    })
  } catch {
    return new Response("could not reach arxiv", { status: 502 })
  }

  if (!upstream.ok || !upstream.body) {
    return new Response("paper not found on arxiv", { status: upstream.status === 404 ? 404 : 502 })
  }

  // A version-pinned request can never change; an unpinned one tracks the latest
  // revision, so give it a shorter shared-cache life.
  const cacheControl = version
    ? "public, max-age=604800, s-maxage=2592000, immutable"
    : "public, max-age=86400, s-maxage=604800"

  return new Response(upstream.body, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${parsed.id.replace("/", "-")}${versionSuffix}.pdf"`,
      "Cache-Control": cacheControl,
    },
  })
}
