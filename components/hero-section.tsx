import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, Music } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative lg:min-h-screen flex items-start lg:items-center justify-center px-4 pt-24 pb-10 lg:py-20">
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile */}
          <div className="space-y-8">
            <div className="inline-block">
              <div className="border border-primary/40 px-4 py-1.5 rounded text-sm font-mono text-primary mb-6">
                {"> AI_ENGINEER"}
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                P. Phani Hrushik Reddy
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Applied AI Engineer focused on building <span className="text-primary font-semibold">production-ready AI systems</span>, not demos.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I work across the full stack of modern AI — from model fine-tuning and evaluation to backend APIs, cloud deployment, and agent orchestration.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="default" size="lg" className="gap-2" asChild>
                <a href="/Hrushik_resume.pdf" download>
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
                <a href="https://github.com/hrushik98" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/hrushik98"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/hrushik/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:phanihrushik.10@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right side - Profile Image with Terminal Effect (hidden on mobile) */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/20 rounded-lg blur-lg opacity-75"></div>
              <div className="relative bg-card border border-border rounded-lg p-1">
                <Avatar className="w-72 h-72 md:w-96 md:h-96 rounded-lg overflow-hidden">
                  <AvatarImage
                    src="/profile_pic.png"
                    alt="P. Phani Hrushik Reddy"
                    className="object-cover object-top"
                  />
                  <AvatarFallback className="text-6xl font-bold">HR</AvatarFallback>
                </Avatar>
              </div>
              {/* Music player decoration */}
              <div className="absolute -bottom-6 -right-4 bg-secondary border border-border rounded-lg p-2 font-mono text-xs overflow-hidden">
                <div className="flex items-center gap-2 mb-1">
                  <Music className="w-3 h-3 text-primary" />
                  <span className="text-muted-foreground text-[10px]">song on my head rn</span>
                </div>
                <div className="w-[200px] h-[80px] overflow-hidden rounded">
                  <iframe
                    src="https://open.spotify.com/embed/track/6Ec5LeRzkisa5KJtwLfOoW?utm_source=generator&theme=0"
                    width="400"
                    height="225"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="border-0 origin-top-left scale-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
