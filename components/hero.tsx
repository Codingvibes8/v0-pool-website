import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury infinity pool overlooking the ocean"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] text-balance">
          Experience Pure<br />
          <span className="text-white/95">Luxury</span>
        </h1>
        <p className="mt-8 text-xl sm:text-2xl text-white/85 max-w-2xl mx-auto text-pretty font-light leading-relaxed">
          Bespoke infinity pools and premium maintenance for the discerning homeowner who values crystal clear perfection.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild className="w-full sm:w-auto text-base px-8">
            <Link href="#contact">Start Your Project</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-base px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
            <Link href="#projects">View Gallery</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
