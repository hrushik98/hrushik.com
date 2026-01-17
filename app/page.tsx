import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />

      <footer className="border-t border-border py-8 px-4 text-center text-sm text-muted-foreground">
        <div className="max-w-6xl mx-auto space-y-2">
          <p className="text-primary/80">Shipping {'>'} talking. Always.</p>
          <p className="font-mono">{"© 2026 | Hrushik.com"}</p>
        </div>
      </footer>
    </main>
  )
}
