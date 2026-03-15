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
    <section id="contact" className="py-20 lg:py-28 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">
              Ready for your dream pool?
            </h2>
            <p className="mt-4 text-background/70">
              Schedule your free consultation today. Our expert designers will visit your property to discuss your vision and provide a detailed estimate.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-background/60">Call Us Directly</p>
                  <a href="tel:8005557665" className="font-semibold hover:text-primary transition-colors">
                    (800) 555-POOL
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-background/60">Visit Our Showroom</p>
                  <address className="font-semibold not-italic">
                    123 Aqua Blvd, Los Angeles, CA
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card text-foreground rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-semibold mb-6">Get a Free Consultation</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(555) 000-0000" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Service Interested In</Label>
                <Select>
                  <SelectTrigger id="service">
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
              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea id="message" placeholder="Tell us about your project..." rows={3} />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
