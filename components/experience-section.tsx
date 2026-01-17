export function ExperienceSection() {
  const experiences = [
    {
      company: "Techolution",
      role: "AI Engineer",
      period: "Nov. 2024 – Present",
      location: "Hyderabad, India",
      type: "Full-time, In Office",
      highlights: [
        "Designed and implemented backend infrastructure for scalable AI services used in client-facing applications",
        "Fine-tuned, evaluated, and hosted multiple open-source LLMs including LLaMA 3, DeepSeek, and Qwen-VL",
        "Built and deployed LLM-powered APIs using FastAPI with streaming responses",
        "Integrated and experimented with open-source TTS models (Whisper, Kokoro) for speech-based AI features",
        "Deployed AI systems on Google Cloud Platform, focusing on reliability, scalability, and cost efficiency",
        "Rapidly prototyped applied ML solutions under real-world constraints",
      ],
    },
    {
      company: "Multeway",
      role: "Python Developer Intern",
      period: "Apr. 2024 – Nov. 2024",
      location: "Hyderabad, India",
      type: "Internship, In Office",
      highlights: [
        "Developed AI-driven features including face verification, chatbots, and recommendation systems",
        "Fine-tuned open-source LLMs (Mixtral, Phi-3, LLaMA 3) for domain-specific use cases",
        "Built backend services using Django and integrated GPT-4o into production workflows",
        "Improved developer productivity by building automation tools for bug detection and resolution",
      ],
    },
    {
      company: "Eklavya.me",
      role: "Machine Learning Engineer Intern",
      period: "Jan. 2024 – Jun. 2024",
      location: "Goa, India",
      type: "Internship, Remote",
      highlights: [
        "Core contributor to Askek, an AI chatbot for answering student queries at scale",
        "Built and maintained APIs using FastAPI and containerized services with Docker",
        "Worked with AWS infrastructure for deploying and monitoring ML-backed services",
        "Collaborated closely with product teams to align AI capabilities with user needs",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="inline-block border border-primary/40 px-4 py-1.5 rounded text-sm font-mono text-primary mb-4">
            {"> WORK_HISTORY"}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="border border-border bg-card rounded-lg p-6 md:p-8 hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold">{exp.role}</h3>
                  <p className="text-xl text-primary font-semibold">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{exp.type}</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="font-mono text-sm text-primary">{exp.period}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-2 mt-6">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <span className="text-primary mt-1.5">▪</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
