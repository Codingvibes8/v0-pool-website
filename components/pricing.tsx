import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const plans = [
  {
    name: "Basic Care",
    price: "$149",
    period: "/month",
    features: [
      "Weekly Skimming",
      "Chemical Balancing",
      "Filter Cleaning",
      "Wall Brushing",
    ],
    popular: false,
  },
  {
    name: "Premium Maintenance",
    price: "$249",
    period: "/month",
    features: [
      "Weekly Skimming & Vacuuming",
      "Chemical Balancing",
      "Wall Brushing",
      "System Health Check",
    ],
    popular: true,
  },
  {
    name: "White Glove Elite",
    price: "$449",
    period: "/month",
    features: [
      "Bi-Weekly Professional Visits",
      "All Chemicals Included",
      "Priority Repair Service",
      "Smart System Monitoring",
      "Tile Line Cleaning",
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="plans" className="py-28 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">Pricing Plans</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-serif font-bold text-foreground">Our Service Plans</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Choose the level of care that fits your lifestyle. All plans include our signature chemical balance guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-8 transition-all duration-500 hover:shadow-premium-lg hover:-translate-y-2 border ${
                plan.popular 
                  ? "border-primary shadow-premium lg:scale-105" 
                  : "border-border/50 shadow-premium hover:border-primary/20"
              }`}
            >
              {plan.popular && (
                <>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                </>
              )}
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-semibold text-foreground">{plan.name}</h3>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground font-light">{plan.period}</span>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={plan.popular ? "default" : "outline"}
                  className={`w-full mt-10 font-medium ${
                    plan.popular ? "shadow-lg hover:shadow-xl" : "shadow-sm"
                  }`}
                >
                  <Link href="#contact">
                    {plan.popular ? "Select Premium" : `Select ${plan.name.split(" ")[0]}`}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
