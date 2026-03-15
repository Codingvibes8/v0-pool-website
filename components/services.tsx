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
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-semibold tracking-wider text-primary uppercase">Our Expertise</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Transforming Your<br />Outdoor Living
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              From initial conceptual design to meticulous weekly upkeep, we provide end-to-end pool excellence tailored to your lifestyle.
            </p>
          </div>
          <Link 
            href="#services" 
            className="flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4"
          >
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <article key={service.title} className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{service.description}</p>
                <Link 
                  href="#contact" 
                  className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline underline-offset-4"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
