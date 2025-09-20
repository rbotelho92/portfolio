import { Card } from "@/app/components/ui/card"
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
      </div>
    </section>
  )
}
