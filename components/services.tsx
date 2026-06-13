import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Hammer, RefreshCw, Sparkles } from "lucide-react"

const services = [
  {
    icon: Hammer,
    title: "Pool Construction",
    description: "Custom-built architectural masterpieces tailored to your landscape using premium materials and cutting-edge tech.",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: RefreshCw,
    title: "Pool Renovation",
    description: "Breathe new life into your existing pool with modern finishes, LED lighting, and energy-efficient equipment.",
    image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Sparkles,
    title: "Weekly Maintenance",
    description: "Pristine water quality, vacuuming, and equipment checks so you can enjoy your swim stress-free, year-round.",
    image: "https://images.unsplash.com/photo-1562844282-8d2e5e2b6c09?q=80&w=800&auto=format&fit=crop",
  },
]

export function Services() {
  return (
    <section id="services" className="py-28 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">Our Expertise</p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-serif font-bold text-foreground text-balance leading-tight">
              Transforming Your<br />Outdoor Living
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl font-light leading-relaxed">
              From initial conceptual design to meticulous weekly upkeep, we provide end-to-end pool excellence tailored to your lifestyle.
            </p>
          </div>
          <Link 
            href="#services" 
            className="flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4 transition-colors"
          >
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <article key={service.title} className="group bg-card rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-500 border border-border/50 hover:border-primary/30 hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/5 to-transparent">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 text-muted-foreground text-base font-light leading-relaxed">{service.description}</p>
                <Link 
                  href="#contact" 
                  className="mt-6 inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
