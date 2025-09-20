import videoData from "@/data/videos.json"

export function AboutSection() {
  const { testimonials } = videoData

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-sm text-muted-foreground mb-4">Sobre</p>
          <h2 className="text-3xl md:text-4xl font-light text-balance mb-8">
            Criando experiências visuais. Construindo narrativas envolventes e conteúdo digital otimizado.
            Experimentando com técnicas inovadoras de edição e motion graphics.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nos últimos anos desenvolvi projetos para uma variedade de criadores — desde YouTubers independentes e
            influenciadores até grandes marcas e agências de publicidade. Além disso, também lancei um curso completo de
            edição há alguns anos, ensinando técnicas avançadas de pós-produção.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-xl font-medium mb-8">Experiência</h3>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="text-sm text-muted-foreground md:w-32 flex-shrink-0">2024 — PRESENTE</div>
              <div className="flex-1">
                <h4 className="font-medium mb-2">Editor Freelancer Senior</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Especializado em conteúdo para YouTube, Instagram e TikTok. Trabalho com criadores de diversos nichos,
                  desde tech reviews até lifestyle vlogs, sempre focando em maximizar engajamento e retenção de
                  audiência.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">After Effects</span>
                  <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">Premiere Pro</span>
                  <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">DaVinci Resolve</span>
                  <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">Cinema 4D</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-xl font-medium mb-8">O que dizem sobre meu trabalho</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card p-6 rounded-lg">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
