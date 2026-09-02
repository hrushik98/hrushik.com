"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { parseArxivId } from "@/lib/arxiv"

export function PaperSearch() {
  const router = useRouter()
  const [value, setValue] = useState("")
  const [error, setError] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const parsed = parseArxivId(value)
    if (!parsed) {
      setError(true)
      return
    }
    const suffix = parsed.version ? `v${parsed.version}` : ""
    router.push(`/abs/${parsed.id}${suffix}`)
  }

  return (
    <form onSubmit={submit} className="mt-6">
      <div className="flex gap-2">
        <input
          type="text"
          inputMode="url"
          autoComplete="off"
          spellCheck={false}
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            if (error) setError(false)
          }}
          placeholder="arxiv.org/abs/1706.03762  or  1706.03762"
          aria-label="arxiv link or id"
          className="min-w-0 flex-1 rounded-md border border-neutral-200 bg-white px-3 py-2 text-[14px] text-neutral-800 placeholder:text-neutral-300 focus:border-neutral-400 focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 rounded-md border border-neutral-300 px-4 py-2 text-[13px] text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-900"
        >
          open
        </button>
      </div>
      {error && (
        <p className="mt-2 text-[13px] text-neutral-500">
          that doesn&apos;t look like an arxiv link or id.
        </p>
      )}
    </form>
  )
}
