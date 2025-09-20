import videoData from "@/data/videos.json"
import Link from "next/link"

export function AboutSection() {
  const { testimonials } = videoData

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-sm text-muted-foreground mb-4">Sobre</p>
          <div className="flex flex-col lg:flex-row gap-5 mb-5">
            <div className="h-80 lg:w-[800px] lg:h-80 rounded-xl ">
              <img src="/perfil-image.jpg" alt="About" className="w-full h-full object-cover rounded-xl mb-8 transition-transform hover:scale-105" />
            </div>
            <h2 className="text-3xl md:text-4xl  text-balance font-extrabold mb-8">
              Criando experiências visuais. Construindo narrativas envolventes e conteúdo digital otimizado.
              Experimentando com técnicas inovadoras de edição e motion graphics.
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nos últimos anos desenvolvi projetos para uma variedade de criadores — desde YouTubers independentes e
            influenciadores até grandes marcas e agências de publicidade. Além disso, também lancei um curso completo de
            edição há alguns anos, ensinando técnicas avançadas de pós-produção.
          </p>
        </div>


        {/* Testimonials */}
        <div>
          <h3 className="text-xl font-medium mb-8">Creator I've worked with</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Link
                target="_blank"
                key={index} href={testimonial.socialMedia} className="bg-card p-6 rounded-lg flex flex-col gap-5 hover:bg-card/80 transition-colors">
                <div className="flex items-center gap-3 flex-col">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm md:text-base font-medium">{testimonial.name}</div>
                  </div>
                </div>

              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
