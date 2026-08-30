import { Section } from "./section"
import { ArrowUpRightIcon } from "./icons"

const certifications = [
  { label: "generative ai leader · google", href: "https://www.credly.com/badges/c8ae46cb-455c-416d-aeb6-ff2331726dc3/public_url" },
  { label: "blockchain & applications · iit kanpur" },
  { label: "sql (advanced) · hackerrank" },
]

const achievements = [
  { label: "1st · mlh hackathon, 2023" },
  { label: "2nd · engenius ideathon, 2024" },
  { label: "leetcode · @phanihrushik", href: "https://leetcode.com/phanihrushik/" },
]

function Item({ label, href }: { label: string; href?: string }) {
  if (!href) return <li className="text-neutral-500">{label}</li>
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-500 underline-offset-2 hover:text-neutral-900 hover:underline"
      >
        {label}
        <ArrowUpRightIcon className="ml-0.5 inline size-3 -translate-y-px text-neutral-400" />
      </a>
    </li>
  )
}

export function Credentials() {
  return (
    <Section title="credentials">
      <div className="space-y-4">
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <span className="font-medium text-neutral-900">osmania university</span>
            <span className="shrink-0 text-[13px] tabular-nums text-neutral-400">8.41/10 · 2025</span>
          </div>
          <p className="mt-0.5 text-neutral-500">be, electronics & communication engineering</p>
        </div>

        <div>
          <p className="mb-1 text-neutral-400">certifications</p>
          <ul className="space-y-0.5">
            {certifications.map((c) => (
              <Item key={c.label} {...c} />
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-1 text-neutral-400">achievements</p>
          <ul className="space-y-0.5">
            {achievements.map((a) => (
              <Item key={a.label} {...a} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
