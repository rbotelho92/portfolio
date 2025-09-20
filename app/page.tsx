import { HeroSection } from "@/app/components/hero-section"
import { WorkSection } from "@/app/components/work-section"
import { AboutSection } from "@/app/components/about-section"
import { ServicesSection } from "@/app/components/services-section"
import { ContactSection } from "@/app/components/contact-section"
import { Footer } from "@/app/components/footer"


export default function Home() {
  return (
    <main >
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
