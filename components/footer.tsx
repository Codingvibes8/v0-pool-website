import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

const footerLinks = {
  services: [
    { label: "New Pool Design", href: "#services" },
    { label: "Infinity Pools", href: "#services" },
    { label: "Pool Resurfacing", href: "#services" },
    { label: "Heating Solutions", href: "#services" },
    { label: "Smart Automation", href: "#services" },
  ],
  company: [
    { label: "Our Process", href: "#" },
    { label: "Recent Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact Us", href: "#contact" },
    { label: "Careers", href: "#" },
  ],
  serviceAreas: [
    "Los Angeles, CA",
    "Santa Monica, CA",
    "Malibu, CA",
    "Beverly Hills, CA",
    "Pasadena, CA",
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-background/10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-primary rounded">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 12h2a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 1 2-2h2" />
                  <path d="M2 12c0-5.5 4.5-10 10-10s10 4.5 10 10" />
                </svg>
              </div>
              <span className="text-xl font-bold">Crystal Clear Pools</span>
            </div>
            <p className="text-sm text-background/60 mb-6">
              Creating breathtaking aquatic spaces that redefine luxury living. Licensed, insured, and committed to excellence since 1998.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-background/60 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Service Area</h4>
            <ul className="space-y-2">
              {footerLinks.serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-2 text-sm text-background/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/50">
          <p>&copy; {new Date().getFullYear()} Crystal Clear Pools. All Rights Reserved. License #0349945788</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
