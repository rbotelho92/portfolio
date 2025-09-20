"use client"

import { Button } from "@/app/components/ui/button"
import { Play, ArrowDown } from "lucide-react"
import videoData from "@/data/videos.json"
import { getYoutubeThumbnails } from "../utils/getYoutubeThumbnail"
import { VideoPlayer } from "./video-player"
import { useState } from "react"

export function HeroSection() {
  const { demoreel, stats } = videoData
  const [open, setOpen] = useState(false)

  const scrollToWork = () => {
    const element = document.getElementById("work")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const thumbnails = getYoutubeThumbnails([demoreel.videoUrl])


  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 grid-overlay relative">
      <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-accent/30 rotate-45 hidden md:block"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 border-2 border-primary/30 hidden md:block"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-sm text-accent mb-6 font-mono uppercase tracking-widest">BOA TARDE.</p>

        <h1 className="text-4xl md:text-6xl font-extrabold text-balance mb-8 ">
          SOU UM EDITOR DE VÍDEO INDEPENDENTE. TRANSFORMO IDEIAS EM HISTÓRIAS VISUAIS ENVOLVENTES.
        </h1>

        <div className="mb-12">
          <p className="text-lg text-primary mb-8 font-mono uppercase tracking-wider">DEMO REEL</p>

          <div className="relative max-w-2xl mx-auto mb-8" onClick={() => setOpen(true)}>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden group cursor-pointer border-2 border-primary/50 hover:border-primary transition-colors">
              <img
                src={thumbnails[0].url}
                alt={demoreel.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105 cur"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <Button size="lg" className="rounded-full w-16 h-16 retro-button border-2 border-primary">
                  <Play className="w-6 h-6 ml-1" fill="currentColor" />
                </Button>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4 font-mono">{demoreel.description}</p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center p-4 border border-primary/30 rounded-lg bg-card/50 flex flex-col items-center justify-center">
            <div className="text-2xl md:text-3xl font-bold mb-2 text-primary  font-mono">
              {stats.videosEdited}
            </div>
            <div className="text-sm text-muted-foreground font-mono uppercase tracking-wide">VÍDEOS EDITADOS</div>
          </div>
          <div className="text-center p-4 border border-accent/30 rounded-lg bg-card/50 flex flex-col items-center justify-center">
            <div className="text-2xl md:text-3xl font-bold mb-2 text-accent  font-mono">
              {stats.clientsServed}
            </div>
            <div className="text-sm text-muted-foreground font-mono uppercase tracking-wide">CLIENTES ATENDIDOS</div>
          </div>
          <div className="text-center p-4 border border-primary/30 rounded-lg bg-card/50 flex flex-col items-center justify-center">
            <div className="text-2xl md:text-3xl font-bold mb-2 text-primary  font-mono">
              {stats.totalViews}
            </div>
            <div className="text-sm text-muted-foreground font-mono uppercase tracking-wide">VISUALIZAÇÕES TOTAIS</div>
          </div>
          <div className="text-center p-4 border border-accent/30 rounded-lg bg-card/50 flex flex-col items-center justify-center   ">
            <div className="text-2xl md:text-3xl font-bold mb-2 text-accent  font-mono">
              {stats.yearsExperience}
            </div>
            <div className="text-sm text-muted-foreground font-mono uppercase tracking-wide">ANOS DE EXPERIÊNCIA</div>
          </div>
        </div>

        <Button variant="ghost" onClick={scrollToWork} className="group retro-button font-mono uppercase tracking-wide">
          VER TRABALHOS
          <ArrowDown className="w-4 h-4 ml-2 " />
        </Button>
      </div>

      <VideoPlayer
        type="dialog"
        videoUrl={demoreel.videoUrl}
        open={open}
        onClose={() => setOpen(false)}
      />
    </section>
  )
}
