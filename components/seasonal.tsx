import Image from "next/image"
import { Sun, Snowflake } from "lucide-react"

export function Seasonal() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600&auto=format&fit=crop"
                alt="Summer pool opening service"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mt-8">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Seamless Transitions
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every season brings new challenges for your pool. Our specialized opening and closing services ensure your investment is protected year-round.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Sun className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Spring Opening</h3>
                  <p className="text-sm text-muted-foreground">
                    Cover removal, intensive chemical shock, and system priming to get you swim-ready.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Snowflake className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Winter Closing</h3>
                  <p className="text-sm text-muted-foreground">
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
