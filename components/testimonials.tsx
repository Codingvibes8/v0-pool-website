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
    <section id="testimonials" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-muted-foreground">
              Join over 500+ happy homeowners who trust Crystal Clear Pools for their outdoor sanctuary.
            </p>
            <div className="mt-6 flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
              <span className="ml-2 text-sm font-medium text-foreground">5.0 / 5.0</span>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <blockquote 
                key={testimonial.author} 
                className="bg-card p-6 rounded-xl border border-border"
              >
                <p className="text-muted-foreground italic leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">{testimonial.initials}</span>
                  </div>
                  <div>
                    <cite className="not-italic font-semibold text-foreground">{testimonial.author}</cite>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
