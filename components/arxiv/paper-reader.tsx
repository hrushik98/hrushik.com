"use client"

import { useCallback, useRef, useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  Minus,
  Plus,
  Printer,
} from "lucide-react"
import type { ArxivMeta } from "@/lib/arxiv"
import { AbstractPanel } from "./abstract-panel"
import { AssistantRail } from "./assistant-rail"

const PdfView = dynamic(() => import("./pdf-view").then((m) => m.PdfView), {
  ssr: false,
  loading: () => (
    <div className="flex h-[calc(100vh-11rem)] min-h-[24rem] items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100">
      <span className="font-mono text-[12px] text-neutral-400">loading viewer...</span>
    </div>
  ),
})

type Tab = "abstract" | "paper"

const ZOOM_MIN = 0.6
const ZOOM_MAX = 2.4
const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n))

export function PaperReader({ meta, pdfSrc }: { meta: ArxivMeta; pdfSrc: string }) {
  const [tab, setTab] = useState<Tab>("paper")
  const [openedPaper, setOpenedPaper] = useState(true)

  const [numPages, setNumPages] = useState(0)
  const [page, setPage] = useState(1)
  const [zoom, setZoom] = useState(1)
  const [scrollTarget, setScrollTarget] = useState<{ page: number; nonce: number } | null>(null)
  const [pdfError, setPdfError] = useState(false)

  // Synchronous mirror of `page` so rapid prev/next clicks accumulate instead of
  // all resolving against a stale render.
  const pageRef = useRef(1)
  const setCurrentPage = useCallback((p: number) => {
    pageRef.current = p
    setPage(p)
  }, [])

  const step = useCallback(
    (delta: number) => {
      const target = clamp(pageRef.current + delta, 1, numPages || 1)
      if (target === pageRef.current) return
      setCurrentPage(target)
      setScrollTarget((prev) => ({ page: target, nonce: (prev?.nonce ?? 0) + 1 }))
    },
    [numPages, setCurrentPage],
  )

  const selectTab = (next: Tab) => {
    setTab(next)
    if (next === "paper") setOpenedPaper(true)
  }

  const toolbarDisabled = pdfError || numPages === 0

  return (
    <main className="mx-auto max-w-6xl px-4 pt-8 pb-16 sm:px-6">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/abs"
          className="inline-flex items-center gap-1 text-[13px] text-neutral-400 underline-offset-2 hover:text-neutral-900 hover:underline"
        >
          <ArrowLeft className="size-3.5" />
          papers
        </Link>

        <div className="inline-flex rounded-md border border-neutral-200 p-0.5 text-[13px]">
          {(["abstract", "paper"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => selectTab(t)}
              aria-pressed={tab === t}
              className={
                "rounded px-3 py-1 transition-colors " +
                (tab === t
                  ? "bg-neutral-100 text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-700")
              }
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {tab === "paper" && (
        <div className="mt-3 flex flex-wrap items-center gap-x-1 gap-y-2 text-neutral-400">
          <button
            type="button"
            onClick={() => step(-1)}
            disabled={toolbarDisabled || page <= 1}
            aria-label="previous page"
            className="rounded p-1 hover:text-neutral-900 disabled:opacity-40 disabled:hover:text-neutral-400"
          >
            <ChevronLeft className="size-4" />
          </button>
          <span className="min-w-[3.5rem] text-center text-[12px] tabular-nums text-neutral-500">
            {toolbarDisabled ? "-" : `${page} / ${numPages}`}
          </span>
          <button
            type="button"
            onClick={() => step(1)}
            disabled={toolbarDisabled || page >= numPages}
            aria-label="next page"
            className="rounded p-1 hover:text-neutral-900 disabled:opacity-40 disabled:hover:text-neutral-400"
          >
            <ChevronRight className="size-4" />
          </button>

          <span className="mx-2 h-4 w-px bg-neutral-200" />

          <button
            type="button"
            onClick={() => setZoom((z) => clamp(Number((z - 0.2).toFixed(2)), ZOOM_MIN, ZOOM_MAX))}
            disabled={toolbarDisabled || zoom <= ZOOM_MIN}
            aria-label="zoom out"
            className="rounded p-1 hover:text-neutral-900 disabled:opacity-40 disabled:hover:text-neutral-400"
          >
            <Minus className="size-4" />
          </button>
          <span className="min-w-[3rem] text-center text-[12px] tabular-nums text-neutral-500">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={() => setZoom((z) => clamp(Number((z + 0.2).toFixed(2)), ZOOM_MIN, ZOOM_MAX))}
            disabled={toolbarDisabled || zoom >= ZOOM_MAX}
            aria-label="zoom in"
            className="rounded p-1 hover:text-neutral-900 disabled:opacity-40 disabled:hover:text-neutral-400"
          >
            <Plus className="size-4" />
          </button>

          <span className="mx-2 h-4 w-px bg-neutral-200" />

          <a
            href={pdfSrc}
            download={`${meta.id.replace("/", "-")}.pdf`}
            aria-label="download pdf"
            className="rounded p-1 hover:text-neutral-900"
          >
            <Download className="size-4" />
          </a>
          <a
            href={pdfSrc}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="open pdf for printing"
            className="rounded p-1 hover:text-neutral-900"
          >
            <Printer className="size-4" />
          </a>
          <a
            href={meta.absUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="open on arxiv"
            className="rounded p-1 hover:text-neutral-900"
          >
            <ExternalLink className="size-4" />
          </a>
        </div>
      )}

      <div className="mt-4 grid gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <div className={tab === "abstract" ? undefined : "hidden"}>
            <AbstractPanel meta={meta} />
          </div>
          {openedPaper && (
            <div className={tab === "paper" ? undefined : "hidden"}>
              <PdfView
                src={pdfSrc}
                arxivPdfUrl={meta.pdfUrl}
                zoom={zoom}
                scrollTarget={scrollTarget}
                onLoad={setNumPages}
                onError={() => setPdfError(true)}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </div>

        <AssistantRail />
      </div>
    </main>
  )
}
