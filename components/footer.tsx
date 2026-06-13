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
    <footer className="bg-gradient-to-b from-foreground to-foreground/98 text-background pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-background/10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg shadow-lg">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 12h2a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 1 2-2h2" />
                  <path d="M2 12c0-5.5 4.5-10 10-10s10 4.5 10 10" />
                </svg>
              </div>
              <span className="text-2xl font-serif font-bold">Crystal Clear Pools</span>
            </div>
            <p className="text-base text-background/70 mb-8 font-light leading-relaxed">
              Creating breathtaking aquatic spaces that redefine luxury living. Licensed, insured, and committed to excellence since 1998.
            </p>
            <div className="flex items-center gap-5">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:shadow-lg" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:shadow-lg" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-base text-background/70 hover:text-primary hover:translate-x-1 transition-all duration-300 font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-base text-background/70 hover:text-primary hover:translate-x-1 transition-all duration-300 font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-white">Service Area</h4>
            <ul className="space-y-3">
              {footerLinks.serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-3 text-base text-background/70 font-light">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-primary/60 shadow-lg" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-background/50 font-light">
          <p>&copy; {new Date().getFullYear()} Crystal Clear Pools. All Rights Reserved. License #0349945788</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-primary transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
