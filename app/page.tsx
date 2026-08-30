import { ProfileHeader } from "@/components/site/profile-header"
import { Intro } from "@/components/site/intro"
import { About } from "@/components/site/about"
import { Projects } from "@/components/site/projects"
import { Experience } from "@/components/site/experience"
import { Stack } from "@/components/site/stack"
import { Credentials } from "@/components/site/credentials"
import { Writing } from "@/components/site/writing"

export default function Home() {
  return (
    <main className="mx-auto max-w-xl px-6 pt-14 pb-24 text-[15px] leading-[1.7] text-neutral-700">
      <ProfileHeader />
      <Intro />
      <About />
      <Projects />
      <Experience />
      <Stack />
      <Credentials />
      <Writing />

      <footer className="mt-16 border-t border-neutral-100 pt-6 text-[13px] text-neutral-400">
        © 2026 p. phani hrushik reddy · built with next.js
      </footer>
    </main>
  )
}
