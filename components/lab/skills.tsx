import { Reveal } from "./reveal"

const groups = [
  {
    title: "GenAI & LLM systems",
    icon: "◉",
    items: ["Multi-agent (ADK, LangGraph)", "Fine-tuning & LoRA", "Quantization", "RAG pipelines", "Prompt & serving optimization"],
  },
  {
    title: "ML & deployment",
    icon: "◈",
    items: ["PyTorch", "Computer vision", "ChromaDB / FAISS / PGVector", "Prometheus + Grafana", "Model evaluation"],
  },
  {
    title: "Backend & APIs",
    icon: "▣",
    items: ["Python", "FastAPI", "REST APIs", "Spring Boot", "SSE streaming"],
  },
  {
    title: "Cloud & distributed",
    icon: "⬡",
    items: ["GCP", "AWS (S3, SQS)", "Docker & Kubernetes (Helm)", "Kafka / RabbitMQ / Celery", "Serverless GPUs"],
  },
  {
    title: "Frontend",
    icon: "◫",
    items: ["React", "Next.js", "Angular", "TypeScript", "HTML / CSS"],
  },
  {
    title: "Speech & edge AI",
    icon: "◬",
    items: ["Whisper (cloud → edge)", "Kokoro TTS", "Web Audio API (DSP)", "whisper.cpp on ARM64", "Android NDK / JNI"],
  },
]

export function Skills() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <Reveal>
        <p className="kicker text-ink">03 / Stack</p>
        <h2 className="display mt-3 text-[clamp(2rem,5vw,3.4rem)] text-ink font-extrabold leading-none">
          Full-stack, model to metal.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => {
          const bgColors = ["bg-brut-yellow", "bg-brut-pink", "bg-brut-green", "bg-brut-blue", "bg-brut-purple", "bg-brut-orange"]
          const headerBg = bgColors[i % bgColors.length]
          return (
            <Reveal key={g.title} delay={(i % 3) * 90}>
              <div className="brut-card brut-card-hover h-full rounded-none overflow-hidden bg-white">
                <div className={`${headerBg} border-b-[3px] border-ink p-4 flex items-center gap-2.5`}>
                  <span aria-hidden className="font-mono text-[1.2rem] font-black text-ink">
                    {g.icon}
                  </span>
                  <h3 className="display text-[1.05rem] font-bold text-ink leading-none">
                    {g.title}
                  </h3>
                </div>
                <ul className="p-5 space-y-2">
                  {g.items.map((item) => (
                    <li key={item} className="font-mono text-[0.78rem] font-bold leading-relaxed text-ink/90 flex items-center gap-2">
                      <span className="text-ink/40">■</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
