import { GraduationCap } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="inline-block border border-primary/40 px-4 py-1.5 rounded text-sm font-mono text-primary mb-4">
            {"> EDUCATION"}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Academic Background</h2>
        </div>

        <div className="border border-border bg-card rounded-lg p-6 md:p-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Osmania University</h3>
                  <p className="text-lg text-primary font-semibold mt-1">
                    BE, Electronics and Communication Engineering
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <p className="font-mono text-sm text-primary">May 2025</p>
                  <p className="text-sm text-muted-foreground">Hyderabad, India</p>
                </div>
              </div>
              <div className="space-y-2 mt-6">
                <p className="text-muted-foreground">
                  <span className="text-foreground font-semibold">GPA:</span> 8.4/10
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground font-semibold">Activities:</span> Volunteer at National Service
                  Scheme (NSS), Member of Cultural Club (MCC)
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="text-lg font-semibold mb-3">Certifications & Achievements</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">Certifications</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Data Science Specialization, Internshala</li>
                      <li>• Blockchain and its applications, IIT-K</li>
                      <li>• SQL Advanced, HackerRank</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-2">Achievements</p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• First Prize, Major League Hacking Hackathon, 2023</li>
                      <li>• Second Prize, Engenius ideathon, 2024</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
