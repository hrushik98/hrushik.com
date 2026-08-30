import { Section } from "./section"

const groups: { title: string; items: string }[] = [
  {
    title: "genai & llm systems",
    items: "multi-agent (adk, langgraph), fine-tuning & lora, quantization, rag pipelines, serving optimization",
  },
  {
    title: "ml & deployment",
    items: "pytorch, computer vision, chromadb / faiss / pgvector, prometheus + grafana, model evaluation",
  },
  {
    title: "backend & apis",
    items: "python, fastapi, rest apis, spring boot, sse streaming",
  },
  {
    title: "cloud & distributed",
    items: "gcp, aws (s3, sqs), docker & kubernetes (helm), kafka / rabbitmq / celery, serverless gpus",
  },
  {
    title: "frontend",
    items: "react, next.js, angular, typescript, html / css",
  },
  {
    title: "speech & edge ai",
    items: "whisper (cloud to edge), kokoro tts, web audio api, whisper.cpp on arm64, android ndk / jni",
  },
]

export function Stack() {
  return (
    <Section title="stack">
      <dl className="space-y-2.5">
        {groups.map((g) => (
          <div key={g.title} className="sm:flex sm:gap-4">
            <dt className="shrink-0 text-neutral-400 sm:w-40">{g.title}</dt>
            <dd className="text-neutral-600">{g.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
