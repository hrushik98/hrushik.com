const stack = [
  "LLaMA-3",
  "DeepSeek",
  "Qwen-VL",
  "PyTorch",
  "Whisper",
  "Kokoro",
  "Google ADK",
  "LangGraph",
  "FastAPI",
  "Kubernetes",
  "Kafka",
  "GCP",
  "React",
  "Angular",
  "ChromaDB",
  "PGVector",
  "Docker",
  "RabbitMQ",
]

export function Marquee() {
  const row = (ariaHidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
      {stack.map((item) => (
        <span
          key={item}
          className="flex items-center gap-6 pr-6 font-mono text-[0.82rem] font-black uppercase tracking-wider text-ink"
        >
          {item}
          <span className="text-ink/50">✦</span>
        </span>
      ))}
    </div>
  )

  return (
    <div className="marquee overflow-hidden border-y-[3px] border-ink bg-brut-yellow py-4 rotate-[-1deg] w-[102vw] -ml-[1vw] relative z-10 my-8 shadow-[0_4px_0_0_var(--ink)]">
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}
