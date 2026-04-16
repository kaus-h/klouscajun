import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MapPin, Clock, Send, Facebook, Instagram } from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { StickyCTABar } from '@/components/sticky-cta-bar'
import { ContactForm } from '@/components/contact-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact K.Lou\'s Cajun Shack & Catering. Call (602) 596-8036 or send us a message. Serving Phoenix & Tempe, AZ with authentic Cajun cuisine.',
}

const operatingHours = [
  { days: 'Monday - Thursday', hours: '10:30 AM - 5:30 PM' },
  { days: 'Friday - Saturday', hours: '11:00 AM - 5:30 PM' },
  { days: 'Sunday', hours: 'Closed' },
]

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20 pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-charcoal text-cream">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gold font-display text-sm md:text-base tracking-wider mb-2">
              GET IN TOUCH
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-cream/80 max-w-2xl mx-auto text-lg">
              Have a question? Want to place an order or book catering? 
              We&apos;d love to hear from you!
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="lg:col-span-2 space-y-8">
                {/* Phone */}
                <Card className="bg-white border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-cajun-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-cajun-red" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-charcoal mb-1">Call Us</h3>
                        <a 
                          href="tel:+16025968036" 
                          className="text-2xl font-bold text-cajun-red hover:underline"
                        >
                          (602) 596-8036
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                          Best way to reach us for quick questions or orders
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="bg-white border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-charcoal mb-1">Service Area</h3>
                        <p className="text-charcoal">
                          Phoenix & Tempe, Arizona
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          Pop-up locations vary. Check our{' '}
                          <Link href="/find-us" className="text-cajun-red hover:underline">
                            Find Us
                          </Link>{' '}
                          page for current locations.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Hours */}
                <Card className="bg-white border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-charcoal/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-charcoal" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-charcoal mb-3">Hours</h3>
                        <div className="space-y-2">
                          {operatingHours.map((schedule) => (
                            <div key={schedule.days} className="flex justify-between text-sm">
                              <span className="text-muted-foreground">{schedule.days}</span>
                              <span className={`font-medium ${schedule.hours === 'Closed' ? 'text-muted-foreground' : 'text-charcoal'}`}>
                                {schedule.hours}
                              </span>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-3">
                          Hours may vary by location. Call to confirm.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="bg-white border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-charcoal mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center hover:bg-cajun-red transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-5 w-5 text-white" />
                      </a>
                      <a
                        href="#"
                        className="w-12 h-12 bg-charcoal rounded-full flex items-center justify-center hover:bg-cajun-red transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5 text-white" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Catering CTA */}
        <section className="py-16 md:py-20 bg-cajun-red text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Planning an Event?
            </h2>
            <p className="text-white/90 max-w-xl mx-auto mb-8">
              For catering inquiries, use our dedicated catering form for faster response.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-cajun-red hover:bg-cream font-semibold"
            >
              <Link href="/catering" className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                Request Catering Quote
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTABar />
    </>
  )
}
