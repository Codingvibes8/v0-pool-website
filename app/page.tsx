import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import { Pricing } from "@/components/pricing"
import { Equipment } from "@/components/equipment"
import { Seasonal } from "@/components/seasonal"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Testimonials />
        <Pricing />
        <Equipment />
        <Seasonal />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
