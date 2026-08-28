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
