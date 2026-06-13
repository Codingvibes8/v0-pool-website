import Image from "next/image"
import { Sun, Snowflake } from "lucide-react"

export function Seasonal() {
  return (
    <section className="py-28 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-shadow duration-500 border border-border/30">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop"
                alt="Summer pool opening service"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mt-8 shadow-premium hover:shadow-premium-lg transition-shadow duration-500 border border-border/30">
              <Image
                src="https://images.unsplash.com/photo-1562844282-8d2e5e2b6c09?q=80&w=600&auto=format&fit=crop"
                alt="Winter pool closing service"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">Seasonal Care</p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-serif font-bold text-foreground text-balance leading-tight">
              Seamless Transitions
            </h2>
            <p className="mt-6 text-lg text-muted-foreground font-light leading-relaxed">
              Every season brings new challenges for your pool. Our specialized opening and closing services ensure your investment is protected year-round.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex items-start gap-6 p-6 rounded-xl bg-gradient-primary hover:bg-gradient-to-br hover:from-primary/15 hover:to-transparent transition-colors duration-300">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center shrink-0">
                  <Sun className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-foreground text-lg">Spring Opening</h3>
                  <p className="text-muted-foreground font-light leading-relaxed mt-1">
                    Cover removal, intensive chemical shock, and system priming to get you swim-ready.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 rounded-xl bg-gradient-primary hover:bg-gradient-to-br hover:from-primary/15 hover:to-transparent transition-colors duration-300">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center shrink-0">
                  <Snowflake className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-foreground text-lg">Winter Closing</h3>
                  <p className="text-muted-foreground font-light leading-relaxed mt-1">
                    Line blowing, anti-freeze protection, and safety cover installation to prevent freeze damage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
