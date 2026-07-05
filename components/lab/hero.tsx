import { NeuralCanvas } from "./neural-canvas"
import { Counter } from "./counter"

const stats = [
  { render: <Counter value={20} suffix="K+" />, label: "inferences / day" },
  { render: <Counter value={10} suffix="K+" />, label: "concurrent jobs" },
  { render: <span>&lt;2s</span>, label: "voice round-trip" },
  { render: <Counter value={85} suffix="%" />, label: "zero-shot compile" },
]

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-28 pb-16">
      <NeuralCanvas />

      <div className="hero-stagger relative mx-auto w-full max-w-6xl px-5">
        <p className="kicker mb-6 flex items-center gap-2.5 text-ink">
          <span className="status-dot inline-block h-3.5 w-3.5 border-2 border-ink rounded-full bg-brut-green animate-pulse" />
          Online — AI Engineer @ Techolution
        </p>

        <h1 className="display text-[clamp(2.5rem,8.5vw,6rem)] text-ink leading-[1.05] font-extrabold tracking-tight">
          AI systems
          <br />
          that <span className="brut-mark bg-brut-yellow text-ink rotate-[-1deg] my-2">actually ship.</span>
        </h1>

        <p className="mt-7 max-w-xl text-[1.05rem] font-semibold leading-relaxed text-ink/90">
          I&rsquo;m <span className="font-extrabold text-ink underline decoration-brut-purple decoration-[3px] underline-offset-4">P. Phani Hrushik Reddy</span> — I
          fine-tune open-source LLMs, build real-time speech pipelines, and design the
          infrastructure that keeps them alive in production. Demos are easy. Uptime is the hard
          part.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="brut-btn bg-brut-green text-ink px-6 py-3 font-mono text-[0.85rem]"
          >
            See the work →
          </a>
          <a
            href="https://github.com/hrushik98"
            target="_blank"
            rel="noopener noreferrer"
            className="brut-btn bg-brut-pink text-ink px-6 py-3 font-mono text-[0.85rem]"
          >
            GitHub
          </a>
          <a
            href="mailto:phanihrushik.10@gmail.com"
            className="brut-btn bg-white text-ink px-6 py-3 font-mono text-[0.85rem]"
          >
            Email
          </a>
        </div>

        <dl className="mt-16 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => {
            const bgColors = ["bg-brut-yellow", "bg-brut-blue", "bg-brut-pink", "bg-brut-purple"]
            const bg = bgColors[i % bgColors.length]
            return (
              <div key={s.label} className={`brut-card brut-card-hover ${bg} p-5 flex flex-col justify-between min-h-[105px]`}>
                <dd className="font-mono text-[1.8rem] font-extrabold text-ink leading-none">{s.render}</dd>
                <dt className="mt-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.08em] text-ink/80">
                  {s.label}
                </dt>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
