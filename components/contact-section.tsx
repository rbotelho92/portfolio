"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Mail, Instagram, Youtube, Linkedin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-sm text-muted-foreground mb-4">Contato</p>
          <h2 className="text-3xl md:text-4xl font-light text-balance mb-8">
            Se você gostaria de discutir um projeto ou apenas dizer oi, estou sempre disponível para conversar.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-0 bg-card">
            <h3 className="text-xl font-medium mb-6">Vamos trabalhar juntos?</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm text-muted-foreground mb-2 block">
                    Nome
                  </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm text-muted-foreground mb-2 block">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div>
                <label htmlFor="project" className="text-sm text-muted-foreground mb-2 block">
                  Tipo de Projeto
                </label>
                <Input
                  id="project"
                  name="project"
                  placeholder="YouTube, Instagram, Comercial, etc."
                  value={formData.project}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-muted-foreground mb-2 block">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Conte-me sobre seu projeto..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Informações</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">lucas@videoeditor.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <span className="text-sm font-medium text-muted-foreground">BR</span>
                  </div>
                  <div>
                    <p className="font-medium">Localização</p>
                    <p className="text-sm text-muted-foreground">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://instagram.com/lucaseditor" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://youtube.com/@lucaseditor" target="_blank" rel="noopener noreferrer">
                    <Youtube className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://linkedin.com/in/lucaseditor" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Disponibilidade</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Atualmente aceitando novos projetos para 2024. Tempo de resposta típico: 24-48 horas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Orçamento</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Projetos a partir de R$ 500. Valores variam conforme complexidade, duração e prazo de entrega.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
