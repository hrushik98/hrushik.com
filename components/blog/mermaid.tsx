"use client"

import { useEffect, useId, useState } from "react"

type Status = "loading" | "ready" | "error"

// Load and configure mermaid once, lazily, so it stays out of the main bundle
// and only ships to pages that actually contain a diagram.
let mermaidPromise: Promise<typeof import("mermaid").default> | null = null

function loadMermaid() {
  if (!mermaidPromise) {
    mermaidPromise = import("mermaid").then((mod) => {
      const mermaid = mod.default
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        theme: "neutral",
        fontFamily: "var(--font-inter), ui-sans-serif, system-ui, -apple-system, sans-serif",
        themeVariables: {
          fontSize: "13px",
          lineColor: "#a3a3a3",
          primaryColor: "#f5f5f5",
          primaryBorderColor: "#d4d4d4",
          primaryTextColor: "#262626",
          secondaryColor: "#fafafa",
          tertiaryColor: "#ffffff",
        },
        flowchart: { htmlLabels: true, useMaxWidth: true, curve: "basis" },
        sequence: { useMaxWidth: true, mirrorActors: false },
      })
      return mermaid
    })
  }
  return mermaidPromise
}

export function Mermaid({ chart }: { chart: string }) {
  const [svg, setSvg] = useState("")
  const [status, setStatus] = useState<Status>("loading")
  const source = chart.trim()
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "")

  useEffect(() => {
    let cancelled = false
    const id = `mmd-${uid}-${Math.random().toString(36).slice(2, 8)}`

    loadMermaid()
      .then((mermaid) => mermaid.render(id, source))
      .then(({ svg }) => {
        if (cancelled) return
        setSvg(svg)
        setStatus("ready")
      })
      .catch((err) => {
        if (cancelled) return
        console.error("[mermaid] render failed:", err)
        setStatus("error")
      })

    return () => {
      cancelled = true
      document.getElementById(id)?.remove()
    }
  }, [source, uid])

  // On a parse or render failure, fall back to the diagram source so the reader
  // still gets the information.
  if (status === "error") {
    return (
      <figure className="my-6 overflow-x-auto rounded-lg border border-neutral-200 bg-neutral-50 p-4">
        <figcaption className="mb-2 font-mono text-[12px] text-neutral-400">
          diagram source (render failed)
        </figcaption>
        <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed text-neutral-600">
          {source}
        </pre>
      </figure>
    )
  }

  return (
    <figure
      className="my-6 flex min-h-32 items-center justify-center overflow-x-auto rounded-lg border border-neutral-200 bg-neutral-50 p-4"
      aria-busy={status === "loading"}
    >
      {status === "ready" ? (
        <div
          className="w-full [&_svg]:mx-auto [&_svg]:block [&_svg]:h-auto [&_svg]:max-w-full"
          // mermaid sanitizes its own output under securityLevel: "strict"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      ) : (
        <span className="font-mono text-[12px] text-neutral-400">rendering diagram...</span>
      )}
    </figure>
  )
}
