import type { ArxivMeta } from "@/lib/arxiv"

function fmtDate(iso: string): string {
  if (!iso) return ""
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ""
  return d
    .toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    .toLowerCase()
}

export function AbstractPanel({ meta }: { meta: ArxivMeta }) {
  const submitted = fmtDate(meta.published)
  const revised = fmtDate(meta.updated)
  const versionLabel = meta.latestVersion ? `v${meta.latestVersion}` : null

  return (
    <div className="rounded-lg border border-neutral-200 bg-white px-6 py-8 sm:px-10 sm:py-10">
      <article className="mx-auto max-w-2xl">
        <p className="font-mono text-[12px] text-neutral-400">
          arxiv:{meta.id}
          {versionLabel ? ` ${versionLabel}` : ""}
        </p>

        <h1 className="mt-2 text-lg font-semibold leading-snug text-neutral-900">
          {meta.title}
        </h1>

        {meta.authors.length > 0 && (
          <p className="mt-3 text-[14px] text-neutral-600">{meta.authors.join(", ")}</p>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {meta.categories.map((c) => (
            <span
              key={c}
              className={
                "rounded border px-1.5 py-0.5 font-mono text-[11px] " +
                (c === meta.primaryCategory
                  ? "border-neutral-300 text-neutral-600"
                  : "border-neutral-200 text-neutral-400")
              }
            >
              {c}
            </span>
          ))}
        </div>

        <p className="mt-4 text-[13px] tabular-nums text-neutral-400">
          submitted {submitted}
          {revised && revised !== submitted ? ` · revised ${revised}` : ""}
        </p>

        {meta.comment && (
          <p className="mt-1 text-[13px] text-neutral-400">{meta.comment}</p>
        )}

        <div className="mt-8 border-t border-neutral-100 pt-6">
          <h2 className="text-[13px] font-semibold text-neutral-400">abstract</h2>
          <p className="mt-3 text-[15px] leading-[1.75] text-neutral-700">{meta.summary}</p>
        </div>

        {(meta.journalRef || meta.doi) && (
          <dl className="mt-6 space-y-1 text-[13px] text-neutral-500">
            {meta.journalRef && (
              <div className="flex gap-2">
                <dt className="text-neutral-400">journal ref</dt>
                <dd>{meta.journalRef}</dd>
              </div>
            )}
            {meta.doi && (
              <div className="flex gap-2">
                <dt className="text-neutral-400">doi</dt>
                <dd>
                  <a
                    href={`https://doi.org/${meta.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link text-neutral-700"
                  >
                    {meta.doi}
                  </a>
                </dd>
              </div>
            )}
          </dl>
        )}

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-1 border-t border-neutral-100 pt-6 text-[13px]">
          <a
            href={meta.absUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link text-neutral-500 hover:text-neutral-900"
          >
            arxiv abstract
          </a>
          <a
            href={meta.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link text-neutral-500 hover:text-neutral-900"
          >
            arxiv pdf
          </a>
          {meta.htmlUrl && (
            <a
              href={meta.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link text-neutral-500 hover:text-neutral-900"
            >
              arxiv html
            </a>
          )}
        </div>
      </article>
    </div>
  )
}
