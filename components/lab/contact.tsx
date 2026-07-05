import { Reveal } from "./reveal"

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <div className="relative mx-auto max-w-6xl px-5 text-center">
        <Reveal>
          <p className="kicker text-ink">05 / Contact</p>
          <h2 className="display mx-auto mt-4 max-w-3xl text-[clamp(2.2rem,6.5vw,4.6rem)] text-ink leading-[1.1] font-extrabold">
            Have a hard problem?
            <br />
            <span className="brut-mark bg-brut-pink text-ink rotate-[1.5deg] my-2">Send it over.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-[0.95rem] font-bold leading-relaxed text-ink/80">
            Open to interesting AI problems, collaborations, and conversations. I reply
            unreasonably fast.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:phanihrushik.10@gmail.com"
              className="brut-btn bg-brut-yellow text-ink px-7 py-3.5 font-mono text-[0.85rem]"
            >
              phanihrushik.10@gmail.com
            </a>
            <a
              href="tel:+918639548895"
              className="brut-btn bg-white text-ink px-7 py-3.5 font-mono text-[0.85rem]"
            >
              +91 863-954-8895
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-7 font-mono text-[0.8rem] font-bold">
            <a
              href="https://github.com/hrushik98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink/70 hover:text-ink hover:underline decoration-brut-pink decoration-[3px] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hrushik/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink/70 hover:text-ink hover:underline decoration-brut-blue decoration-[3px] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://leetcode.com/phanihrushik/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink/70 hover:text-ink hover:underline decoration-brut-yellow decoration-[3px] transition-colors"
            >
              LeetCode
            </a>
            <a
              href="/Hrushik_resume.pdf"
              className="text-ink/70 hover:text-ink hover:underline decoration-brut-purple decoration-[3px] transition-colors"
            >
              Résumé
            </a>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div className="mx-auto mt-14 max-w-sm">
            <p className="mb-3 font-mono text-[0.68rem] font-bold uppercase tracking-[0.18em] text-ink/70">
              ♪ song on my head rn
            </p>
            <div className="overflow-hidden border-[3px] border-ink shadow-[5px_5px_0_0_var(--ink)]">
              <iframe
                src="https://open.spotify.com/embed/track/6Ec5LeRzkisa5KJtwLfOoW?utm_source=generator&theme=0"
                width="100%"
                height="80"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Song on my head right now"
                className="block border-0"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
