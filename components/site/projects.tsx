import { Section } from "./section"
import { ArrowUpRightIcon } from "./icons"

type Project = {
  name: string
  blurb: string
  stars: string
  href: string
}

const projects: Project[] = [
  {
    name: "md2pdfgo",
    blurb: "full-stack markdown to print-ready pdf, rendered with wkhtmltopdf inside docker.",
    stars: "20★",
    href: "https://github.com/hrushik98/md2pdfgo",
  },
  {
    name: "termodoro",
    blurb: "a minimal terminal pomodoro timer in go, with raw keyboard loops and unix audio alerts.",
    stars: "19★",
    href: "https://github.com/hrushik98/termodoro",
  },
  {
    name: "bettrWrite",
    blurb: "a cli writing assistant that fixes typos, syntax and grammar with the openai api.",
    stars: "14★",
    href: "https://github.com/hrushik98/bettrWrite",
  },
  {
    name: "Paper2PyTorch",
    blurb: "a multi-agent compiler (google adk + gemini) that turns ml papers into runnable pytorch notebooks.",
    stars: "9★",
    href: "https://github.com/hrushik98/Paper2PyTorch",
  },
  {
    name: "Arxiv-researcher",
    blurb: "a semantic rag tool to upload, index and chat with arxiv papers in natural language.",
    stars: "5★",
    href: "https://github.com/hrushik98/Arxiv-researcher",
  },
  {
    name: "FIN-AI",
    blurb: "an ai assistant that pulls market metrics and writes performance summaries for stocks.",
    stars: "4★",
    href: "https://github.com/hrushik98/FIN-AI",
  },
  {
    name: "Rocky LM",
    blurb: "a lora fine-tune of gemma-2-2b that learns to talk like rocky from project hail mary.",
    stars: "3★",
    href: "https://github.com/hrushik98/rocky-lm",
  },
  {
    name: "Whisper Mobile",
    blurb: "fully offline telugu / english asr on android - whisper.cpp over jni, 30s clips in under 4s.",
    stars: "1★",
    href: "https://github.com/hrushik98/whisper-mobile",
  },
  {
    name: "offline-telugu-asr-android",
    blurb: "on-device telugu speech-to-text and speaker diarization with onnx runtime, zero network.",
    stars: "1★",
    href: "https://github.com/hrushik98/offline-telugu-asr-android",
  },
]

export function Projects() {
  return (
    <Section title="projects">
      <ul className="space-y-5">
        {projects.map((p) => (
          <li key={p.name}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-medium text-neutral-900 underline-offset-2 group-hover:underline">
                  {p.name}
                  <ArrowUpRightIcon className="ml-0.5 inline size-3 -translate-y-px text-neutral-400" />
                </span>
                <span className="shrink-0 text-[13px] tabular-nums text-neutral-400">{p.stars}</span>
              </div>
              <p className="mt-0.5 text-neutral-500">{p.blurb}</p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
