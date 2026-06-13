import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Crystal Clear transformed our backyard into a five-star resort. Their attention to detail during the construction was unparalleled.",
    author: "Jonathan Davis",
    role: "Homeowner, Beverly Hills",
    initials: "JD",
  },
  {
    quote: "The weekly maintenance service is fantastic. I haven't had to think about pH levels or cleaning since they took over.",
    author: "Sarah Miller",
    role: "Estate Manager, Austin",
    initials: "SM",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 lg:py-32 bg-gradient-to-b from-background via-muted/50 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">Testimonials</p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-serif font-bold text-foreground text-balance leading-tight">
              What Our Clients Say
            </h2>
            <p className="mt-6 text-lg text-muted-foreground font-light leading-relaxed">
              Join over 500+ happy homeowners who trust Crystal Clear Pools for their outdoor sanctuary.
            </p>
            <div className="mt-8 flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-base font-semibold text-foreground">5.0 / 5.0</span>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <blockquote 
                key={testimonial.author} 
                className="group bg-card p-8 rounded-2xl shadow-premium hover:shadow-premium-lg transition-all duration-500 border border-border/50 hover:border-primary/20 hover:-translate-y-1"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed text-lg font-light italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center shrink-0 shadow-sm">
                    <span className="text-sm font-semibold text-primary">{testimonial.initials}</span>
                  </div>
                  <div>
                    <cite className="not-italic font-serif font-semibold text-foreground block">{testimonial.author}</cite>
                    <p className="text-sm text-muted-foreground font-light">{testimonial.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
