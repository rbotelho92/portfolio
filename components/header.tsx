"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b-2 border-primary scanlines">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-primary neon-text font-mono">LUCAS OLIVEIRA</h1>
            <p className="text-sm text-accent font-mono uppercase tracking-wider">VIDEO EDITOR</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("work")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono uppercase tracking-wide hover:neon-text"
            >
              TRABALHOS
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono uppercase tracking-wide hover:neon-text"
            >
              SOBRE
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono uppercase tracking-wide hover:neon-text"
            >
              SERVIÇOS
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono uppercase tracking-wide hover:neon-text"
            >
              CONTATO
            </button>
          </nav>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden border border-primary hover:bg-primary/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} className="text-primary" /> : <Menu size={20} className="text-primary" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t-2 border-primary pt-4 bg-card/50 rounded-lg">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("work")}
                className="text-left text-sm text-muted-foreground hover:text-primary transition-colors font-mono uppercase tracking-wide"
              >
                TRABALHOS
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-sm text-muted-foreground hover:text-primary transition-colors font-mono uppercase tracking-wide"
              >
                SOBRE
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-sm text-muted-foreground hover:text-primary transition-colors font-mono uppercase tracking-wide"
              >
                SERVIÇOS
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-sm text-muted-foreground hover:text-primary transition-colors font-mono uppercase tracking-wide"
              >
                CONTATO
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
