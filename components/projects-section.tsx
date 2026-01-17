import { ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      name: "Fueza",
      description:
        "AI-powered search & answer engine (Perplexity alternative). Built an internet-aware AI system using RAG + live web data with retrieval pipelines combining scraping, embeddings, and LLM reasoning. Focused on response accuracy, citation grounding, and latency.",
      tech: ["Python", "Flask", "Streamlit", "LangChain", "BeautifulSoup", "Mixtral 8x7B"],
    },
    {
      name: "Velix",
      description:
        "Automated generation of short video lectures for NCERT content. Designed pipelines to convert structured educational content into AI-generated video lessons with focus on automation, scalability, and content consistency.",
      tech: ["Python", "GPT-4"],
    },
    {
      name: "Arxiv-Researcher",
      description:
        "Chat with research papers for faster understanding. Built a system to ingest research papers and enable semantic querying with embedding-based retrieval for accurate, context-aware responses.",
      tech: ["Python", "LangChain", "Streamlit", "OpenAI Embeddings", "ChromaDB"],
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="inline-block border border-primary/40 px-4 py-1.5 rounded text-sm font-mono text-primary mb-4">
            {"> SELECTED_WORK"}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="border border-border bg-card rounded-lg p-6 hover:border-primary/50 transition-all hover:scale-[1.02] group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.name}</h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech, techIdx) => (
                  <span key={techIdx} className="px-2 py-1 bg-secondary border border-border rounded text-xs font-mono">
                    {tech}
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
