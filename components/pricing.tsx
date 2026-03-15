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
    <section id="plans" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Service Plans</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Choose the level of care that fits your lifestyle. All plans include our signature chemical balance guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-xl p-6 border-2 ${
                plan.popular ? "border-primary shadow-lg" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-4xl font-bold text-primary">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={plan.popular ? "default" : "outline"}
                className="w-full mt-8"
              >
                <Link href="#contact">
                  {plan.popular ? "Select Premium" : `Select ${plan.name.split(" ")[0]}`}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
