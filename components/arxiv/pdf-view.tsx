"use client"

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

// Bundled by Turbopack; keeps the worker version locked to the pinned pdfjs-dist.
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString()

export type PdfViewProps = {
  src: string
  arxivPdfUrl: string
  /** zoom multiplier applied to the fit-to-column base width */
  zoom: number
  /** bump `nonce` to request a scroll to `page` */
  scrollTarget: { page: number; nonce: number } | null
  onLoad: (numPages: number) => void
  onError: () => void
  onPageChange: (page: number) => void
}

const BASE_MAX_WIDTH = 880

export function PdfView({
  src,
  arxivPdfUrl,
  zoom,
  scrollTarget,
  onLoad,
  onError,
  onPageChange,
}: PdfViewProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const pageEls = useRef<Map<number, HTMLDivElement>>(new Map())
  const [numPages, setNumPages] = useState(0)
  const [baseWidth, setBaseWidth] = useState(0)

  // Fit page width to the scroll column. Measured before paint so pages render
  // once at the right size instead of re-rendering (and failing to composite the
  // canvas) after a width change.
  useLayoutEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const measure = () => {
      if (el.clientWidth === 0) return // hidden (abstract tab active) - keep last width
      const inner = el.clientWidth - 32 // px-4 padding both sides
      setBaseWidth(Math.max(240, Math.min(inner, BASE_MAX_WIDTH)))
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // While a programmatic (prev/next) scroll is animating, ignore scroll-driven
  // page reports so they don't fight the toolbar.
  const suppressUntil = useRef(0)

  // Track which page is currently in view.
  useEffect(() => {
    const el = scrollRef.current
    if (!el || !numPages) return
    let frame = 0
    const update = () => {
      frame = 0
      if (Date.now() < suppressUntil.current) return
      // rect-based so it doesn't depend on the pages' offsetParent.
      const mark = el.getBoundingClientRect().top + el.clientHeight * 0.3
      let current = 1
      for (let p = 1; p <= numPages; p++) {
        const node = pageEls.current.get(p)
        if (node && node.getBoundingClientRect().top <= mark) current = p
      }
      onPageChange(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    el.addEventListener("scroll", onScroll, { passive: true })
    update()
    return () => {
      el.removeEventListener("scroll", onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [numPages, onPageChange])

  // Respond to prev/next requests from the toolbar. Scroll the container itself
  // (not scrollIntoView, which also nudges the outer document).
  useEffect(() => {
    if (!scrollTarget) return
    const el = scrollRef.current
    const node = pageEls.current.get(scrollTarget.page)
    if (!el || !node) return
    const top = node.getBoundingClientRect().top - el.getBoundingClientRect().top + el.scrollTop
    // Direct assignment: `behavior: "smooth"` here gets cancelled by react-pdf's
    // page canvases painting in mid-animation.
    suppressUntil.current = Date.now() + 400
    el.scrollTop = Math.max(0, top - 8)
  }, [scrollTarget])

  const setPageRef = useCallback(
    (page: number) => (node: HTMLDivElement | null) => {
      if (node) pageEls.current.set(page, node)
    },
    [],
  )

  const pageWidth = baseWidth ? Math.round(baseWidth * zoom) : 0

  // react-pdf paints the page canvas, but Chrome sometimes doesn't composite it
  // until the scroll container is invalidated. Nudge the scroll by 1px (across a
  // frame boundary, so it isn't coalesced) a few times while the first pages
  // settle. Imperceptible, and a no-op once everything is already visible.
  useEffect(() => {
    if (!numPages || !pageWidth) return
    const el = scrollRef.current
    if (!el) return
    let raf = 0
    const nudge = () => {
      const y = el.scrollTop
      el.scrollTop = y + 1
      raf = requestAnimationFrame(() => {
        if (scrollRef.current) scrollRef.current.scrollTop = y
      })
    }
    const timers = [60, 250, 600, 1100].map((t) => window.setTimeout(nudge, t))
    return () => {
      timers.forEach(clearTimeout)
      cancelAnimationFrame(raf)
    }
  }, [numPages, pageWidth])

  return (
    <div
      ref={scrollRef}
      className="relative h-[calc(100vh-11rem)] min-h-[24rem] overflow-y-auto overscroll-contain rounded-lg border border-neutral-200 bg-neutral-100 px-4 py-4"
    >
      <Document
        file={src}
        onLoadSuccess={({ numPages: n }) => {
          setNumPages(n)
          onLoad(n)
        }}
        onLoadError={onError}
        onSourceError={onError}
        loading={
          <p className="py-16 text-center font-mono text-[12px] text-neutral-400">
            loading paper...
          </p>
        }
        error={
          <p className="py-16 text-center text-[13px] text-neutral-500">
            couldn&apos;t render this pdf.{" "}
            <a href={arxivPdfUrl} target="_blank" rel="noopener noreferrer" className="link text-neutral-900">
              open it on arxiv
            </a>
          </p>
        }
        className="flex flex-col items-center gap-4"
      >
        {pageWidth > 0 &&
          Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
          <div
            key={page}
            ref={setPageRef(page)}
            data-page={page}
            className="scroll-mt-4 overflow-hidden rounded-sm bg-white shadow-[0_1px_3px_rgba(0,0,0,0.12)]"
          >
            <Page
              pageNumber={page}
              width={pageWidth}
              renderTextLayer
              renderAnnotationLayer
              loading={
                <div
                  style={{ width: pageWidth, aspectRatio: "1 / 1.294" }}
                  className="bg-white"
                />
              }
            />
          </div>
        ))}
      </Document>
    </div>
  )
}
