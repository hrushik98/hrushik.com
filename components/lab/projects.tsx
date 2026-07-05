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
    name: "md2pdfgo",
    headline: "Full-stack Markdown to print-ready PDF",
    metric: "20 ★",
    metricLabel: "GitHub Stars",
    description:
      "Full-stack document utility featuring a Go backend, a React/Vite frontend, and Docker containerization. Leverages wkhtmltopdf binaries inside Docker to render live print-ready PDF previews of raw Markdown input.",
    tech: ["Go", "React", "Vite", "wkhtmltopdf", "Docker"],
    href: "https://github.com/hrushik98/md2pdfgo",
  },
  {
    name: "termodoro",
    headline: "Minimal terminal Pomodoro app in Go",
    metric: "19 ★",
    metricLabel: "GitHub Stars",
    description:
      "Lightweight terminal-based Pomodoro focus timer CLI built in Go, implementing raw keyboard event loops, Unix audio alerts, and cross-platform terminal UI states.",
    tech: ["Go", "Terminal CLI", "Unix Shell", "Timer Loops"],
    href: "https://github.com/hrushik98/termodoro",
  },
  {
    name: "bettrWrite",
    headline: "AI-powered writing helper CLI",
    metric: "14 ★",
    metricLabel: "GitHub Stars",
    description:
      "Command-line writing assistant that automatically parses text files to correct typos, syntax anomalies, and grammatical issues using OpenAI's generative language endpoints.",
    tech: ["Python", "Shell Script", "OpenAI API", "CLI"],
    href: "https://github.com/hrushik98/bettrWrite",
  },
  {
    name: "Paper2PyTorch",
    headline: "Research papers → executable PyTorch code",
    metric: "9 ★",
    metricLabel: "GitHub Stars",
    description:
      "An advanced multi-agent compiler framework built with Google ADK and Gemini 3 Pro that parses complex machine learning research papers and outputs fully executable PyTorch Jupyter notebooks via a 4-stage self-repair loop.",
    tech: ["Google ADK", "Gemini Pro", "FastAPI", "React", "SSE"],
    href: "https://github.com/hrushik98/Paper2PyTorch",
  },
  {
    name: "Arxiv-researcher",
    headline: "Chat with Arxiv research papers",
    metric: "5 ★",
    metricLabel: "GitHub Stars",
    description:
      "A semantic RAG tool allowing developers to upload, index, and query academic publications from Arxiv via natural language, powered by vector databases and Node.js.",
    tech: ["TypeScript", "Node.js", "Vector DB", "RAG", "Arxiv API"],
    href: "https://github.com/hrushik98/Arxiv-researcher",
  },
  {
    name: "FIN-AI",
    headline: "AI stock analysis and summary assistant",
    metric: "4 ★",
    metricLabel: "GitHub Stars",
    description:
      "AI-driven investment helper that extracts market metrics, reads stock profiles, and delivers detailed performance summarizations of equities using financial APIs.",
    tech: ["Python", "Yahoo Finance API", "LLM API", "Data Extract"],
    href: "https://github.com/hrushik98/FIN-AI",
  },
  {
    name: "Rocky LM",
    headline: "Fine-tuning Gemma-2 to speak like Rocky",
    metric: "3 ★",
    metricLabel: "GitHub Stars",
    description:
      "End-to-end LLM fine-tuning pipeline using LoRA to train google/gemma-2-2b-it on custom fiction dialogue datasets, successfully recreating the unique vocabulary and speech patterns of Rocky from Project Hail Mary.",
    tech: ["Gemma 2", "LoRA", "Fine-tuning", "Python", "Transformers"],
    href: "https://github.com/hrushik98/rocky-lm",
  },
  {
    name: "Whisper Mobile",
    headline: "ASR speech engine with zero cloud dependency",
    metric: "1 ★",
    metricLabel: "GitHub Stars",
    description:
      "Fully offline Telugu/English ASR system for Android devices. Utilizes a custom JNI bridge running whisper.cpp C++ inference directly optimized for ARM64 NEON registers to transcribe 30s audio clips in under 4 seconds.",
    tech: ["Android NDK", "whisper.cpp", "JNI", "Kotlin", "NEON"],
    href: "https://github.com/hrushik98/whisper-mobile",
  },
  {
    name: "offline-telugu-asr-android",
    headline: "Fully offline Telugu speech-to-text on Android",
    metric: "0 ★",
    metricLabel: "GitHub Stars",
    description:
      "On-device automatic speech recognition and speaker diarization engine running entirely via ONNX Runtime on Android. Optimizes AI4Bharat IndicConformer and 3D-Speaker CAM++ models for low-latency live streaming with zero network reliance.",
    tech: ["ONNX Runtime", "IndicConformer", "CAM++", "Android NDK", "C++"],
    href: "https://github.com/hrushik98/offline-telugu-asr-android",
  },
  {
    name: "SpeakThought",
    headline: "Voice-to-task agent & scheduler",
    metric: "Local",
    metricLabel: "Private Repo",
    description:
      "A real-time voice task assistant integrating the Google Realtime API to extract scheduled events and structured to-dos from spoken thoughts, backed by DSP voice visualization mapping that lowers perceived latency by 40%.",
    tech: ["Next.js", "Web Audio API", "Google Realtime API", "DSP"],
    href: "https://github.com/hrushik98/speakthought",
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
          <Reveal key={p.name} delay={i * 70}>
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
