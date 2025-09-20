"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { Card } from "@/app/components/ui/card"
import { Mail, Instagram, Youtube, Linkedin, InstagramIcon, CopyIcon, LinkedinIcon, X, Disc } from "lucide-react"
import Link from "next/link"
import { toast } from "sonner"
import XIcon from "../icons/XIcon"
import DiscordIcon from "../icons/DiscordIcon"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  })

  const socialMedias = [
    {
      name: "rbotelho92@gmail.com",
      icon: Mail,
    },
    {
      name: "@botelhoresolve",
      icon: XIcon,
    },
    {
      name: "@botelhoresolve",
      icon: DiscordIcon,
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-sm text-muted-foreground mb-4">Contato</p>
          <h2 className="text-3xl md:text-4xl text-balance font-extrabold mb-8">
            Se você gostaria de discutir um projeto ou apenas dizer oi, estou sempre disponível para conversar.
          </h2>
        </div>


        {/* Contact Info */}

        <div>
          <h3 className="text-xl font-medium mb-4">Redes Sociais</h3>
          <div className="flex flex-col md:flex-row gap-4">
            {socialMedias.map((socialMedia, index) => (
              <button className="relative bg-card hover:bg-card/80 p-10 rounded-2xl flex flex-col gap-5 transition-colors cursor-pointer w-full" onClick={() => {
                navigator.clipboard.writeText(socialMedia.name)
                toast.success(`${socialMedia.name} copied`)
              }}>
                <div className="absolute top-4 left-4 cursor-pointer" >
                  <CopyIcon
                    className="w-4 h-4"
                  />
                </div>
                <div className="flex items-center gap-3 flex-col">
                  <socialMedia.icon
                    className="w-12 h-12 "
                  />
                  <div>
                    <div className="text-sm md:text-base font-medium">
                      {socialMedia.name}
                    </div>
                  </div>
                </div>

              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
