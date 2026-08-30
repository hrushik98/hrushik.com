import { Section } from "./section"

type Job = {
  company: string
  href?: string
  role: string
  meta: string
  period: string
  points: string[]
}

const jobs: Job[] = [
  {
    company: "techolution",
    href: "https://www.techolution.com",
    role: "ai engineer",
    meta: "full-time · hyderabad",
    period: "may 2025 - current",
    points: [
      "architected the backend infra for production llm services - 20k+ inference requests a day across client apps.",
      "fine-tuned and served llama-3, deepseek and qwen-vl: ~35% accuracy gains, ~40% lower latency via quantization.",
      "built real-time whisper + kokoro speech pipelines at sub-2s transcription-to-synthesis latency.",
    ],
  },
  {
    company: "multeway",
    role: "fullstack developer",
    meta: "internship · hyderabad",
    period: "apr - nov 2024",
    points: [
      "fine-tuned llava-1.5-7b to catch illicit marketplace listings from image + text (~90% better moderation).",
      "built the full fastapi backend on kubernetes with kafka notifications and pgvector retrieval, plus the react frontend.",
      "async face-verification with rabbitmq + celery; observability via prometheus + grafana.",
    ],
  },
  {
    company: "eklavya.me",
    role: "ml engineer",
    meta: "internship · remote",
    period: "jan - apr 2024",
    points: [
      "fine-tuned a llama-2 7b tutor on serverless gpus with adaptive rag over ncert textbooks.",
      "built a multi-agent video-generation pipeline (plan, slides, images, tts, assembly) - ~70% faster.",
      "distributed media ingestion with sqs + s3 - ~80% faster internal workflows.",
    ],
  },
]

export function Experience() {
  return (
    <Section title="exp.">
      <ul className="space-y-6">
        {jobs.map((job) => (
          <li key={job.company}>
            <div className="flex items-baseline justify-between gap-4">
              {job.href ? (
                <a
                  href={job.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-neutral-900 underline-offset-2 hover:underline"
                >
                  {job.company}
                </a>
              ) : (
                <span className="font-medium text-neutral-900">{job.company}</span>
              )}
              <span className="shrink-0 text-[13px] tabular-nums text-neutral-400">{job.period}</span>
            </div>
            <p className="mt-0.5 text-neutral-500">
              {job.role} · {job.meta}
            </p>
            <ul className="mt-2 space-y-1.5 text-neutral-500">
              {job.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span aria-hidden className="select-none text-neutral-300">
                    -
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
