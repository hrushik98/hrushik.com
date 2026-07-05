import { Reveal } from "./reveal"

export function Credentials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <Reveal>
        <p className="kicker text-ink">04 / Credentials</p>
        <h2 className="display mt-3 text-[clamp(2rem,5vw,3.4rem)] text-ink font-extrabold leading-none">
          On paper, too.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        <Reveal>
          <div className="brut-card brut-card-hover h-full bg-white p-6 text-ink flex flex-col justify-between">
            <div>
              <p className="sticker bg-brut-yellow text-ink text-[0.65rem] px-2 py-0.5 font-bold uppercase tracking-[0.1em] border-2 border-ink shadow-[2px_2px_0_0_var(--ink)]">
                Education
              </p>
              <h3 className="mt-6 display text-[1.3rem] font-extrabold text-ink">Osmania University</h3>
              <p className="mt-2 text-[0.9rem] font-medium text-ink/80">
                BE, Electronics &amp; Communication Engineering
              </p>
            </div>
            <div className="mt-8 border-t-2 border-ink/20 pt-4">
              <p className="font-mono text-[0.85rem] font-bold text-brut-pink">8.41 / 10 GPA · May 2025</p>
              <p className="mt-1 font-mono text-[0.72rem] font-bold text-ink/50">Hyderabad, India</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="brut-card brut-card-hover h-full bg-white p-6 text-ink flex flex-col justify-between">
            <div>
              <p className="sticker bg-brut-pink text-ink text-[0.65rem] px-2 py-0.5 font-bold uppercase tracking-[0.1em] border-2 border-ink shadow-[2px_2px_0_0_var(--ink)]">
                Certifications
              </p>
              <ul className="mt-6 space-y-3.5">
                <li>
                  <a
                    href="https://www.credly.com/badges/c8ae46cb-455c-416d-aeb6-ff2331726dc3/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <span className="text-[0.92rem] font-bold text-ink transition-colors group-hover:text-brut-blue hover:underline decoration-brut-blue decoration-2">
                      Generative AI Leader ↗
                    </span>
                    <span className="block font-mono text-[0.7rem] font-bold text-ink/50">Google</span>
                  </a>
                </li>
                <li>
                  <span className="text-[0.92rem] font-bold text-ink">Blockchain &amp; Applications</span>
                  <span className="block font-mono text-[0.7rem] font-bold text-ink/50">IIT Kanpur</span>
                </li>
                <li>
                  <span className="text-[0.92rem] font-bold text-ink">SQL (Advanced)</span>
                  <span className="block font-mono text-[0.7rem] font-bold text-ink/50">HackerRank</span>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="brut-card brut-card-hover h-full bg-white p-6 text-ink flex flex-col justify-between">
            <div>
              <p className="sticker bg-brut-green text-ink text-[0.65rem] px-2 py-0.5 font-bold uppercase tracking-[0.1em] border-2 border-ink shadow-[2px_2px_0_0_var(--ink)]">
                Achievements
              </p>
              <ul className="mt-6 space-y-3.5">
                <li>
                  <span className="text-[0.92rem] font-bold text-ink">
                    <span className="mr-2 font-mono font-black text-brut-pink bg-brut-pink/20 border border-ink px-1.5 py-0.5 shadow-[1px_1px_0_0_var(--ink)]">1st</span>MLH Hackathon
                  </span>
                  <span className="block font-mono text-[0.7rem] font-bold text-ink/50 mt-1">Major League Hacking · 2023</span>
                </li>
                <li>
                  <span className="text-[0.92rem] font-bold text-ink">
                    <span className="mr-2 font-mono font-black text-brut-blue bg-brut-blue/20 border border-ink px-1.5 py-0.5 shadow-[1px_1px_0_0_var(--ink)]">2nd</span>Engenius Ideathon
                  </span>
                  <span className="block font-mono text-[0.7rem] font-bold text-ink/50 mt-1">2024</span>
                </li>
                <li>
                  <a
                    href="https://leetcode.com/phanihrushik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <span className="text-[0.92rem] font-bold text-ink transition-colors group-hover:text-brut-blue hover:underline decoration-brut-blue decoration-2">
                      LeetCode ↗
                    </span>
                    <span className="block font-mono text-[0.7rem] font-bold text-ink/50">@phanihrushik</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
