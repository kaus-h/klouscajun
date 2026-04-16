import Link from 'next/link'
import { Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react'

const PHONE_NUMBER = '(602) 596-8036'
const PHONE_LINK = 'tel:+16025968036'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/catering', label: 'Book Catering' },
  { href: '/find-us', label: 'Find Us' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
]

const operatingHours = [
  { days: 'Mon - Thu', hours: '10:30 AM - 5:30 PM' },
  { days: 'Fri - Sat', hours: '11:00 AM - 5:30 PM' },
  { days: 'Sunday', hours: 'Closed' },
]

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <h3 className="font-serif text-2xl font-bold text-cream mb-2">
                K.Lou&apos;s Cajun Shack
              </h3>
            </Link>
            <p className="text-gold font-medium text-lg mb-4">
              Come Hungry, Leave Happy
            </p>
            <p className="text-cream/70 text-sm leading-relaxed">
              Authentic Louisiana Cajun & Creole cuisine serving the Phoenix/Tempe area 
              through pop-ups, events, and catering.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 bg-charcoal-light rounded-full hover:bg-cajun-red transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 bg-charcoal-light rounded-full hover:bg-cajun-red transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-gold">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={PHONE_LINK}
                  className="flex items-center gap-3 text-cream hover:text-gold transition-colors group"
                >
                  <div className="p-2 bg-charcoal-light rounded-full group-hover:bg-cajun-red transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{PHONE_NUMBER}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-cream/70">
                  <div className="p-2 bg-charcoal-light rounded-full mt-0.5">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="text-sm">
                    <p>Serving Phoenix & Tempe, AZ</p>
                    <p className="text-xs text-cream/50 mt-1">
                      Pop-up locations vary - check Find Us page
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-gold">
              Hours
            </h4>
            <ul className="space-y-2">
              {operatingHours.map((schedule) => (
                <li key={schedule.days} className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-cream/50" />
                  <span className="text-sm">
                    <span className="text-cream">{schedule.days}:</span>{' '}
                    <span className="text-cream/70">{schedule.hours}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-cream/50 mt-4">
              Hours may vary by pop-up location and event
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/50">
            <p>
              &copy; {new Date().getFullYear()} K.Lou&apos;s Cajun Shack & Catering, LLC. All rights reserved.
            </p>
            <p>
              Black-Owned Business | Family-Run Hospitality
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
