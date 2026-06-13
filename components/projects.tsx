import Image from "next/image"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop",
    alt: "Modern infinity pool with ocean view",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
    alt: "Luxury backyard pool with landscaping",
  },
  {
    src: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=600&auto=format&fit=crop",
    alt: "Resort-style pool with palm trees",
  },
  {
    src: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=600&auto=format&fit=crop",
    alt: "Evening illuminated pool",
  },
  {
    src: "https://images.unsplash.com/photo-1562844282-8d2e5e2b6c09?q=80&w=600&auto=format&fit=crop",
    alt: "Crystal clear pool with underwater lighting",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-28 lg:py-32 bg-gradient-to-b from-background to-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Portfolio</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-serif font-bold text-foreground">Our Latest Projects</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Explore some of our most recent custom pool installations across the region.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer shadow-premium hover:shadow-premium-lg transition-all duration-500 hover:-translate-y-2 border border-border/30"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
