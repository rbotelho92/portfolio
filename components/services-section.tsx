import { Card } from "@/components/ui/card"
import { Video, Smartphone, Sparkles, Palette, Volume2, Wand2 } from "lucide-react"
import videoData from "@/data/videos.json"

const iconMap = {
  video: Video,
  smartphone: Smartphone,
  sparkles: Sparkles,
  palette: Palette,
  volume: Volume2,
  magic: Wand2,
}

export function ServicesSection() {
  const { services } = videoData

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm text-muted-foreground mb-4">Serviços</p>
          <h2 className="text-3xl md:text-4xl font-light text-balance mb-8">
            Ofereço soluções completas de pós-produção, desde edição básica até motion graphics avançado e correção de
            cor cinematográfica.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]

            return (
              <Card key={index} className="p-6 border-0 bg-card hover:bg-accent/50 transition-colors">
                <div className="mb-4">
                  <IconComponent className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="font-medium mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            )
          })}
        </div>

        {/* Process */}
        <div className="mt-20">
          <h3 className="text-xl font-medium mb-8">Meu Processo</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mb-4 mx-auto">
                01
              </div>
              <h4 className="font-medium mb-2">Briefing</h4>
              <p className="text-sm text-muted-foreground">
                Entendo sua visão, objetivos e estilo desejado para o projeto.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mb-4 mx-auto">
                02
              </div>
              <h4 className="font-medium mb-2">Edição</h4>
              <p className="text-sm text-muted-foreground">
                Crio a primeira versão focando em ritmo, storytelling e flow.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mb-4 mx-auto">
                03
              </div>
              <h4 className="font-medium mb-2">Refinamento</h4>
              <p className="text-sm text-muted-foreground">
                Adiciono motion graphics, correção de cor e efeitos visuais.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium mb-4 mx-auto">
                04
              </div>
              <h4 className="font-medium mb-2">Entrega</h4>
              <p className="text-sm text-muted-foreground">
                Finalizo com mixagem de áudio e exporto nos formatos necessários.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
