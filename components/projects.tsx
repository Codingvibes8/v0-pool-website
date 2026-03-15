import Image from "next/image"

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
    <section id="projects" className="py-20 lg:py-28 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Latest Projects</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Explore some of our most recent custom pool installations across the region.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="relative aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
