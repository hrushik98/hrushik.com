import Link from "next/link"
import { Section } from "./section"
import { getAllBlogs } from "@/lib/blog"

function shortDate(iso: string): string {
  return new Date(iso)
    .toLocaleDateString("en-US", { month: "short", year: "numeric" })
    .toLowerCase()
}

export function Writing() {
  const posts = getAllBlogs()

  return (
    <Section title="writing" id="writing">
      <ul className="space-y-2">
        {posts.map((p) => (
          <li key={p.slug} className="flex items-baseline justify-between gap-4">
            <Link
              href={`/blog/${p.slug}`}
              className="link text-neutral-700 hover:text-neutral-900"
            >
              {p.title.toLowerCase()}
            </Link>
            <span className="shrink-0 text-[13px] tabular-nums text-neutral-400">
              {shortDate(p.date)}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
