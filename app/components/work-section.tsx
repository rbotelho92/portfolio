"use client"

import { useState } from "react"
import { Card } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Button } from "@/app/components/ui/button"
import { Play, Eye, Clock } from "lucide-react"
import videoData from "@/data/videos.json"
import { buildEmbedUrl, getYoutubeThumbnails } from "../utils/getYoutubeThumbnail"
import { VideoPlayer } from "./video-player"
import { useRouter } from "next/navigation"
import Link from "next/link"

export function WorkSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const { projects } = videoData



  const filteredLongVideos = projects.filter((project) => project.category === "long video")
  const filteredShorts = projects.filter((project) => project.category === "shorts")

  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="space-y-24">
          {/* Long Videos Projects Grid */}
          <div>
            <h3 className="text-center uppercase md:text-5xl text-3xl text-balance font-extrabold mb-8 underline underline-offset-4 decoration-primary">
              Long Form Videos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredLongVideos.map((project) => (
                <Card
                  key={project.id} className="overflow-hidden bg-card cursor-pointer p-0 h-[500px] video-card "
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative bg-muted group cursor-pointer h-full w-full ">
                    <img
                      src={project.video.thumbnailUrl}
                      alt={project.video.thumbnailUrl}
                      className="w-full h-full object-cover  "
                    />

                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <Button size="lg" className="rounded-full w-16 h-16 retro-button border-2 border-primary">
                        <Play className="w-6 h-6 ml-1" fill="currentColor" />
                      </Button>
                    </div>
                  </div>

                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-center uppercase md:text-5xl text-3xl mb-8  text-balance font-extrabold underline underline-offset-4 decoration-primary">Short Form Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredShorts.map((project) => (

                <Card key={project.id} className="video-card overflow-hidden bg-card cursor-pointer p-0 h-[600px] md:h-[500px]">
                  <iframe width="100%" height="100%" src={buildEmbedUrl(project.video.originalUrl)}
                    title={project.video.originalUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                  </iframe>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <VideoPlayer
        type="dialog"
        videoUrl={selectedProject?.video.originalUrl ?? ""}
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
