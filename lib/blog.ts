import { readFileSync } from "node:fs"
import { join } from "node:path"

export type BlogMeta = {
  slug: string
  title: string
  summary: string
  date: string // ISO
  displayDate: string
  tags: string[]
  accent: "yellow" | "pink" | "green" | "blue" | "purple" | "orange"
}

export type Blog = BlogMeta & {
  content: string
  readingMinutes: number
}

const CONTENT_DIR = join(process.cwd(), "content", "blog")

// Newest first.
const posts: BlogMeta[] = [
  {
    slug: "realtime-web-communication",
    title: "Real-time on the web: WebSockets, polling, and SSE",
    summary:
      "HTTP only speaks when spoken to, and every live feature on the web is a workaround for that. A field guide to the four real-time transports - short polling, long polling, Server-Sent Events, and WebSockets - with sequence diagrams for how each one works, the costs they push onto your servers, the fan-out and resume problems that bite at scale, and a decision guide for picking one.",
    date: "2026-08-31",
    displayDate: "Aug 31, 2026",
    tags: ["System Design", "WebSockets", "SSE", "Real-time", "Scaling"],
    accent: "blue",
  },
  {
    slug: "understanding-rpc-and-how-mcp-uses-rpc",
    title: "Understanding RPC and how MCP uses RPC",
    summary:
      "RPC makes a network call look like a local function call: stubs, IDLs, marshalling, and strong contracts. This walks the general RPC picture, then shows exactly where MCP sits inside it - JSON-RPC 2.0 on the wire, a small fixed method catalog, the initialize handshake, stdio and HTTP transports, and tool schemas discovered at runtime instead of code-generated.",
    date: "2026-08-31",
    displayDate: "Aug 31, 2026",
    tags: ["RPC", "MCP", "JSON-RPC", "Protocols", "AI Engineering"],
    accent: "green",
  },
  {
    slug: "production-grade-rag-system-dos-and-donts",
    title: "Production Grade RAG System: Dos and Don'ts",
    summary:
      "What separates a RAG demo from a RAG system that survives production: structure-aware ingestion, hybrid retrieval with reranking, enforced grounding and abstention, a golden evaluation set that gates every release, full-trace observability, and access control at retrieval time. A dos-and-don'ts field guide with the architecture and failure modes.",
    date: "2026-08-31",
    displayDate: "Aug 31, 2026",
    tags: ["RAG", "LLM", "Retrieval", "Evaluation", "Production", "AI Engineering"],
    accent: "purple",
  },
  {
    slug: "monitoring-outages-sre",
    title: "Monitoring outages: site reliability engineering in system design",
    summary:
      "Outage monitoring as a system-design problem: why microservices break visibility, the four golden signals, SLIs / SLOs / error budgets, layered detection (health checks, heartbeats, multi-region synthetics, RUM), symptom-based burn-rate alerting, incident response roles, blameless postmortems, meta-monitoring, and build versus buy.",
    date: "2026-08-31",
    displayDate: "Aug 31, 2026",
    tags: ["SRE", "Observability", "Monitoring", "System Design", "Incident Response"],
    accent: "orange",
  },
  {
    slug: "ai-system-design-interviews-2026",
    title: "How to approach AI system design interviews in 2026",
    summary:
      "AI system design interviews are not a test of how many tools you can name - they test whether your architecture falls out of the numbers. A five-move method distilled from a live-solve talk: scope with clarifying questions, do the back-of-the-envelope math (QPS, tokens, cost, latency), climb the escalation ladder only as far as requirements push, draw the reference architecture that covers 80% of answers, then defend it. Includes a full worked solve of \"design an AI support assistant for a bank\" and the 45-minute time budget.",
    date: "2026-08-31",
    displayDate: "Aug 31, 2026",
    tags: ["AI System Design", "LLM", "System Design Interview", "RAG", "AI Engineering"],
    accent: "pink",
  },
  {
    slug: "vibecode-like-a-pro",
    title: "No BS guide to code with AI in 2026",
    summary:
      "A field guide distilled from 100+ YouTube talks, long-form articles, and discussion forums on going from idea to prototype to production with AI in 2026: the stages, the skills that matter, when to write tests, how to work inside an unfamiliar codebase, and a full idea-to-ship runbook.",
    date: "2026-08-29",
    displayDate: "Aug 29, 2026",
    tags: ["AI Engineering", "Vibe Coding", "Claude Code", "Testing", "Playbook"],
    accent: "yellow",
  },
]

function readingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 220))
}

export function getAllBlogs(): BlogMeta[] {
  return posts
}

export function getBlogSlugs(): string[] {
  return posts.map((p) => p.slug)
}

export function getBlogBySlug(slug: string): Blog | null {
  const meta = posts.find((p) => p.slug === slug)
  if (!meta) return null
  const content = readFileSync(join(CONTENT_DIR, `${slug}.md`), "utf8")
  return { ...meta, content, readingMinutes: readingMinutes(content) }
}
