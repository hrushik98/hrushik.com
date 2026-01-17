export function SkillsSection() {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        "LLMs (LLaMA 3, DeepSeek, Mixtral, Phi-3, Qwen-VL)",
        "Fine-tuning, Evaluation & Inference Optimization",
        "Retrieval-Augmented Generation (RAG)",
        "Multi-agent Systems & Orchestration",
        "Applied NLP & Computer Vision",
        "Recommendation Systems (Collaborative Filtering)",
        "Text-to-Speech & Speech-to-Text (Whisper, Kokoro)",
      ],
    },
    {
      title: "Backend, Systems & Cloud",
      skills: [
        "Python (production-grade)",
        "FastAPI, Flask, Django",
        "REST APIs, Async Services, Streaming (SSE)",
        "Google Cloud Platform (Cloud Run, IAM, Storage)",
        "AWS",
        "Docker & Containerized Deployments",
        "SQL, Redis",
        "Vector Databases (ChromaDB)",
      ],
    },
    {
      title: "Additional Tools & Frameworks",
      skills: [
        "LangChain, LangGraph",
        "Streamlit",
        "React.js",
        "Go (learning)",
        "Git & GitHub",
        "Web Scraping (BeautifulSoup)",
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="inline-block border border-primary/40 px-4 py-1.5 rounded text-sm font-mono text-primary mb-4">
            {"> TECHNICAL_STACK"}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Skills & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="border border-border bg-card rounded-lg p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1.5 bg-secondary border border-border rounded text-sm font-mono hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
