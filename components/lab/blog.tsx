import Link from "next/link"
import { Reveal } from "./reveal"
import { getAllBlogs } from "@/lib/blog"

const CHIP_BG = ["bg-brut-blue", "bg-brut-yellow", "bg-brut-pink", "bg-brut-green", "bg-brut-purple"]

export function Blog() {
  const posts = getAllBlogs()

  return (
    <section id="blog" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <Reveal>
        <p className="kicker text-ink">05 / Writing</p>
        <h2 className="display mt-3 text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-none text-ink">
          Notes from the build.
        </h2>
      </Reveal>

      <div className="mt-14 space-y-6">
        {posts.map((p, i) => (
          <Reveal key={p.slug} delay={i * 70}>
            <Link
              href={`/blog/${p.slug}`}
              className="brut-card brut-card-hover group grid gap-6 rounded-none bg-white p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-9"
            >
              <div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="display text-[1.55rem] font-extrabold leading-tight text-ink transition-colors group-hover:text-brut-pink">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-2xl text-[0.92rem] font-semibold leading-relaxed text-ink/80">
                  {p.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t, idx) => (
                    <span
                      key={t}
                      className={`brut-chip ${CHIP_BG[idx % CHIP_BG.length]} px-2.5 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-wider text-ink`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between gap-8 border-t-[3px] border-ink pt-4 sm:h-full sm:flex-col sm:items-end sm:justify-center sm:border-l-[3px] sm:border-t-0 sm:pl-8 sm:pt-0">
                <div className="text-left sm:text-right">
                  <div className="inline-block border-2 border-ink bg-brut-yellow px-3 py-1 font-mono text-[1rem] font-black leading-none text-ink shadow-[2px_2px_0_0_var(--ink)]">
                    {p.displayDate}
                  </div>
                  <div className="mt-2.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.1em] text-ink/70">
                    Essay
                  </div>
                </div>
                <span className="flex items-center gap-1 font-mono text-[0.8rem] font-bold text-ink transition-all group-hover:translate-x-1 group-hover:text-brut-pink">
                  read →
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
