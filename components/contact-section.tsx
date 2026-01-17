import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Code } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="inline-block border border-primary/40 px-4 py-1.5 rounded text-sm font-mono text-primary mb-4">
            {"> GET_IN_TOUCH"}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="border border-border bg-card rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:phanihrushik.10@gmail.com"
              className="flex items-center gap-3 p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-secondary/50 transition-all group"
            >
              <Mail className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-mono text-sm group-hover:text-primary transition-colors">
                  phanihrushik.10@gmail.com
                </p>
              </div>
            </a>
            <a
              href="tel:+918639548895"
              className="flex items-center gap-3 p-4 border border-border rounded-lg hover:border-primary/50 hover:bg-secondary/50 transition-all group"
            >
              <Mail className="w-5 h-5 text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-mono text-sm group-hover:text-primary transition-colors">+91 863-954-8895</p>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg" className="gap-2" asChild>
              <a href="mailto:phanihrushik.10@gmail.com">
                <Mail className="w-4 h-4" />
                Send Email
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
              <a href="https://github.com/hrushik98" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
              <a href="https://www.linkedin.com/in/hrushik/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
              <a href="https://leetcode.com/phanihrushik" target="_blank" rel="noopener noreferrer">
                <Code className="w-4 h-4" />
                LeetCode
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
