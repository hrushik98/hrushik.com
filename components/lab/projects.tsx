"use client"

import { Reveal } from "./reveal"

type Project = {
  name: string
  headline: string
  metric: string
  metricLabel: string
  description: string
  tech: string[]
  href: string
}

const projects: Project[] = [
  {
    name: "Paper2Pytorch",
    headline: "Research paper → running code",
    metric: "~85%",
    metricLabel: "zero-shot compilation",
    description:
      "A multi-agent system (Google ADK + Gemini 3 Pro) that reads ML papers and writes executable PyTorch notebooks — a 4-stage parse → design → codegen → auto-repair pipeline with SSE streaming and Colab integration.",
    tech: ["Next.js 14", "FastAPI", "Google ADK", "Gemini 3 Pro", "SSE"],
    href: "https://github.com/hrushik98/Paper2PyTorch",
  },
  {
    name: "SpeakThought",
    headline: "Say it. It's a task now.",
    metric: "98%",
    metricLabel: "extraction accuracy",
    description:
      "A voice-powered task manager: speak your thoughts, get structured to-dos and email reminders. Real-time DSP-driven voice visualization cut perceived latency by 40%.",
    tech: ["Next.js", "Web Audio API", "Google Realtime API", "Google ADK"],
    href: "https://github.com/hrushik98/speakthought",
  },
  {
    name: "Whisper Mobile",
    headline: "Speech-to-text with zero cloud",
    metric: "<4s",
    metricLabel: "for 30s clips, offline",
    description:
      "A fully offline ASR engine for Android: a custom JNI bridge runs whisper.cpp C++ inference on ARM64 NEON. No network. No servers. Your voice never leaves the phone.",
    tech: ["Kotlin", "Jetpack Compose", "Android NDK", "JNI", "whisper.cpp"],
    href: "https://github.com/hrushik98/whisper-mobile",
  },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <Reveal>
        <p className="kicker text-ink">02 / Projects</p>
        <h2 className="display mt-3 text-[clamp(2rem,5vw,3.4rem)] text-ink font-extrabold leading-none">
          Built after hours.
        </h2>
      </Reveal>

      <div className="mt-14 space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 90}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="brut-card brut-card-hover group grid gap-6 rounded-none p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-9 bg-white"
            >
              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="display text-[1.7rem] font-extrabold text-ink transition-colors group-hover:text-brut-pink">
                    {p.name}
                  </h3>
                  <span className="font-mono text-[0.78rem] font-bold text-ink/60">{p.headline}</span>
                </div>
                <p className="mt-3 max-w-2xl text-[0.92rem] font-semibold leading-relaxed text-ink/80">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t, idx) => {
                    const tagBgs = ["bg-brut-blue", "bg-brut-yellow", "bg-brut-pink", "bg-brut-green", "bg-brut-purple"]
                    const bg = tagBgs[idx % tagBgs.length]
                    return (
                      <span
                        key={t}
                        className={`brut-chip ${bg} px-2.5 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-ink`}
                      >
                        {t}
                      </span>
                    )
                  })}
                </div>
              </div>
              <div className="flex items-center justify-between gap-8 border-t-[3px] border-ink pt-4 sm:flex-col sm:items-end sm:border-l-[3px] sm:border-t-0 sm:pl-8 sm:pt-0 h-full justify-center">
                <div className="text-left sm:text-right">
                  <div className="font-mono text-[2.2rem] font-black leading-none text-ink bg-brut-yellow border-2 border-ink px-3 py-1 shadow-[2px_2px_0_0_var(--ink)] inline-block">
                    {p.metric}
                  </div>
                  <div className="mt-2.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.1em] text-ink/70">
                    {p.metricLabel}
                  </div>
                </div>
                <span className="font-mono text-[0.8rem] font-bold text-ink transition-all group-hover:translate-x-1 group-hover:text-brut-pink flex items-center gap-1">
                  view work ↗
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
