import { Reveal } from "./reveal"

type Job = {
  company: string
  role: string
  period: string
  meta: string
  points: string[]
  tags: string[]
}

const jobs: Job[] = [
  {
    company: "Techolution",
    role: "AI Engineer",
    period: "May 2025 — present",
    meta: "Full-time · Hyderabad",
    points: [
      "Architected backend infrastructure for production LLM services — 20K+ inference requests/day across multiple client applications.",
      "Fine-tuned and served LLaMA-3, DeepSeek and Qwen-VL: ~35% accuracy gains and ~40% lower latency via quantization and optimized serving.",
      "Built real-time speech pipelines with Whisper + Kokoro at sub-2s transcription-to-synthesis latency.",
      "Designed GCP model-serving infra sustaining 10K+ concurrent jobs; shipped enterprise apps (Angular + Spring Boot) for HarperCollins.",
      "Accelerated ML prototyping cycles 3×; 5+ prototypes adopted in client and internal products.",
    ],
    tags: ["LLM serving", "Quantization", "Speech AI", "GCP"],
  },
  {
    company: "Multeway",
    role: "Fullstack Developer",
    period: "Apr — Nov 2024",
    meta: "Internship · Hyderabad",
    points: [
      "Fine-tuned LLaVA-1.5-7B to catch illicit marketplace listings from image + text — ~90% better moderation on double-entendre patterns.",
      "Built the complete FastAPI backend on Kubernetes (Helm), with Kafka notifications and PGVector retrieval; shipped the React frontend.",
      "Async face-verification pipelines with RabbitMQ + Celery; observability via Prometheus + Grafana.",
    ],
    tags: ["Vision LLM", "Kubernetes", "Kafka", "React"],
  },
  {
    company: "Eklavya.me",
    role: "ML Engineer",
    period: "Jan — Apr 2024",
    meta: "Internship · Remote",
    points: [
      "Fine-tuned a LLaMA-2 7B tutor on RunPod serverless GPUs (SGLang) with adaptive RAG over NCERT textbooks via ChromaDB.",
      "Built a multi-agent video-generation pipeline (plan → slides → images → TTS → assembly) cutting production time ~70%.",
      "Distributed media ingestion with SQS + S3 — ~80% faster internal workflows.",
    ],
    tags: ["RAG", "Multi-agent", "Stable Diffusion", "AWS"],
  },
]

export function Experience() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <Reveal>
        <p className="kicker text-ink">01 / Experience</p>
        <h2 className="display mt-3 text-[clamp(2rem,5vw,3.4rem)] text-ink font-extrabold leading-none">
          Trained in production.
        </h2>
      </Reveal>

      <div className="relative mt-14">
        <div className="timeline-rail absolute left-[8px] top-0 hidden h-full w-[3px] bg-ink sm:block" />
        <div className="space-y-12">
          {jobs.map((job, i) => (
            <Reveal key={job.company} delay={i * 90}>
              <div className="relative sm:pl-12">
                <span className="timeline-node absolute left-0 top-[26px] hidden h-[18px] w-[18px] border-[3px] border-ink bg-brut-yellow rounded-full sm:block z-10" />
                <div className="brut-card brut-card-hover bg-white rounded-none p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="display text-[1.4rem] font-extrabold text-ink flex flex-wrap items-center gap-x-3 gap-y-1">
                      {job.company}
                      <span className="font-mono text-[0.8rem] font-bold text-brut-pink bg-brut-pink/15 px-2 py-0.5 border border-ink shadow-[1px_1px_0_0_var(--ink)]">
                        {job.role}
                      </span>
                    </h3>
                    <p className="font-mono text-[0.75rem] font-bold text-ink/70">
                      {job.period} · {job.meta}
                    </p>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[0.92rem] font-semibold leading-relaxed text-ink/90">
                        <span className="mt-[2px] select-none text-brut-purple font-bold">✦</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tags.map((t, idx) => {
                      const colors = ["bg-brut-yellow", "bg-brut-pink", "bg-brut-green", "bg-brut-blue", "bg-brut-purple", "bg-brut-orange"]
                      const tagBg = colors[idx % colors.length]
                      return (
                        <span
                          key={t}
                          className={`brut-chip ${tagBg} px-2.5 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-ink`}
                        >
                          {t}
                        </span>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
