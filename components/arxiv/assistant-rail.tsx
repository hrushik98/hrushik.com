const PROMPTS = [
  "compare this with the strongest competing approach",
  "which assumptions break outside these benchmarks?",
  "turn this into a reproduction checklist",
  "teach me the hardest part, from intuition to pseudocode",
]

export function AssistantRail() {
  return (
    <aside className="rounded-lg border border-neutral-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-[13px] font-semibold text-neutral-500">assistant</h2>
        <span className="rounded-full border border-neutral-200 px-2 py-0.5 text-[11px] text-neutral-400">
          coming soon
        </span>
      </div>

      <p className="mt-3 text-[13px] leading-relaxed text-neutral-500">
        understand, challenge, or build on this paper.
      </p>

      <ul className="mt-4 space-y-2" aria-hidden>
        {PROMPTS.map((p) => (
          <li
            key={p}
            className="cursor-not-allowed rounded-md border border-neutral-100 bg-neutral-50 px-3 py-2 text-[12px] leading-snug text-neutral-400"
          >
            {p}
          </li>
        ))}
      </ul>

      <div
        className="mt-4 flex items-center rounded-md border border-neutral-100 bg-neutral-50 px-3 py-2 text-[12px] text-neutral-300"
        aria-hidden
      >
        ask about this paper...
      </div>
    </aside>
  )
}
