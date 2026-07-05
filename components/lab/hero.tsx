import { NeuralCanvas } from "./neural-canvas"

export function Hero() {
  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-28 pb-16">
      <NeuralCanvas />

      <div className="hero-stagger relative mx-auto w-full max-w-6xl px-5">
        <h1 className="display text-[clamp(2.5rem,8.5vw,6rem)] text-ink leading-[1.05] font-extrabold tracking-tight">
          AI systems
          <br />
          that <span className="brut-mark bg-brut-yellow text-ink rotate-[-1deg] my-2">actually ship!</span>
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
      </div>
    </section>
  )
}
