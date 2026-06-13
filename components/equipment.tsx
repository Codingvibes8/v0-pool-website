import Image from "next/image"
import { Gauge, Filter, Thermometer, Search } from "lucide-react"

const diagnostics = [
  {
    icon: Gauge,
    title: "Pump Efficiency",
    description: "Optimizing flow rates to save on energy costs.",
  },
  {
    icon: Filter,
    title: "Filtration Care",
    description: "Backwashing and element cleaning for purity.",
  },
  {
    icon: Thermometer,
    title: "Heater Checks",
    description: "Combustion and electrical component testing.",
  },
  {
    icon: Search,
    title: "Leak Detection",
    description: "Advanced pressure testing and visual inspections.",
  },
]

export function Equipment() {
  return (
    <section className="py-28 lg:py-32 bg-gradient-to-b from-muted to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">Diagnostic Experts</p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-serif font-bold text-foreground text-balance leading-tight">
              Equipment Health & Diagnostics
            </h2>
            <p className="mt-6 text-lg text-muted-foreground font-light leading-relaxed">
              Don&apos;t wait for your pump to fail or your heater to quit in the middle of a party. Our technicians perform a 15-point diagnostic check on every visit to ensure peak performance and longevity of your pool&apos;s hardware.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {diagnostics.map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-colors duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground text-lg">{item.title}</h3>
                    <p className="text-muted-foreground font-light leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-premium-lg border border-border/30 hover:shadow-premium-hover transition-shadow duration-500">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop"
              alt="Pool technician performing maintenance"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
