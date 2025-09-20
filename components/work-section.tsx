"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Eye, Clock } from "lucide-react"
import videoData from "@/data/videos.json"

export function WorkSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const { projects } = videoData

  const categories = [
    { id: "all", label: "Todos" },
    { id: "YouTube Long Form", label: "YouTube" },
    { id: "YouTube Shorts", label: "Shorts" },
    { id: "Instagram Reels", label: "Reels" },
    { id: "Commercial", label: "Comercial" },
    { id: "Corporate", label: "Corporativo" },
  ]

  const filteredProjects =
    selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-sm text-muted-foreground mb-4">Trabalhos selecionados</p>
          <h2 className="text-3xl md:text-4xl font-light text-balance mb-8">
            Projetos que criei para criadores de conteúdo e marcas, focando em storytelling visual e engajamento.
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="text-xs"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="video-card overflow-hidden border-0 bg-card">
              <div className="relative aspect-video bg-muted group cursor-pointer">
                <img
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" className="rounded-full">
                    <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                  </Button>
                </div>
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-medium mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {project.views}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {project.duration}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 2}
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
