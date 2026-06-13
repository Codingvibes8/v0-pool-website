"use client"

import { Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-32 bg-gradient-to-b from-foreground to-foreground/95 text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">Get Started</p>
            <h2 className="mt-4 text-4xl sm:text-5xl font-serif font-bold text-balance leading-tight">
              Ready for your dream pool?
            </h2>
            <p className="mt-6 text-lg text-background/75 font-light leading-relaxed">
              Schedule your free consultation today. Our expert designers will visit your property to discuss your vision and provide a detailed estimate.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-background/10 hover:bg-background/15 transition-colors duration-300">
                <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-background/60 font-medium">Call Us Directly</p>
                  <a href="tel:8005557665" className="font-serif font-semibold text-lg hover:text-primary transition-colors">
                    (800) 555-POOL
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-background/10 hover:bg-background/15 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-background/60 font-medium">Visit Our Showroom</p>
                  <address className="font-serif font-semibold text-lg not-italic">
                    123 Aqua Blvd, Los Angeles, CA
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card text-foreground rounded-2xl p-8 sm:p-10 shadow-premium-lg border border-border/30">
            <h3 className="text-2xl font-serif font-semibold mb-8">Get a Free Consultation</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="fullName" className="font-semibold">Full Name</Label>
                  <Input id="fullName" placeholder="John Doe" className="rounded-lg shadow-sm h-10" />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="phone" className="font-semibold">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(555) 000-0000" className="rounded-lg shadow-sm h-10" />
                </div>
              </div>
              <div className="space-y-3">
                <Label htmlFor="email" className="font-semibold">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="rounded-lg shadow-sm h-10" />
              </div>
              <div className="space-y-3">
                <Label htmlFor="service" className="font-semibold">Service Interested In</Label>
                <Select>
                  <SelectTrigger id="service" className="rounded-lg shadow-sm h-10">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="construction">New Pool Construction</SelectItem>
                    <SelectItem value="renovation">Pool Renovation</SelectItem>
                    <SelectItem value="maintenance">Weekly Maintenance</SelectItem>
                    <SelectItem value="repair">Equipment Repair</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <Label htmlFor="message" className="font-semibold">Message (Optional)</Label>
                <Textarea id="message" placeholder="Tell us about your project..." rows={3} className="rounded-lg shadow-sm" />
              </div>
              <Button type="submit" size="lg" className="w-full font-semibold shadow-lg hover:shadow-xl mt-4">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
