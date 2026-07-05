import { Nav } from "@/components/lab/nav"
import { Hero } from "@/components/lab/hero"
import { Marquee } from "@/components/lab/marquee"
import { Experience } from "@/components/lab/experience"
import { Projects } from "@/components/lab/projects"
import { Skills } from "@/components/lab/skills"
import { Credentials } from "@/components/lab/credentials"
import { Contact } from "@/components/lab/contact"

export default function Home() {
  return (
    <main id="top" className="min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <Experience />
      <Projects />
      <Skills />
      <Credentials />
      <Contact />

      <footer className="border-t-[3px] border-ink bg-white py-8 text-center font-mono text-[0.75rem] font-bold text-ink leading-loose">
        <p>
          © 2026 P. Phani Hrushik Reddy · hrushik.com
          <span className="blink text-brut-pink">_</span>
        </p>
        <p className="text-ink/75">Shipping &gt; talking. Always.</p>
      </footer>
    </main>
  )
}
