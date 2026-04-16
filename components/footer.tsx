import Link from 'next/link'
import { Phone, Instagram, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PHONE_NUMBER = '(602) 596-8036'
const PHONE_LINK = 'tel:+16025968036'

const quickLinksLeft = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/find-us', label: 'Find Us' },
  { href: '/contact', label: 'Contact' },
]

const quickLinksRight = [
  { href: '/about', label: 'About' },
  { href: '/catering', label: 'Catering' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/faq', label: 'FAQ' },
]

const operatingHours = [
  { days: 'Mon - Thu', hours: '10:30 AM - 5:30 PM' },
  { days: 'Fri - Sat', hours: '11:00 AM - 5:30 PM' },
  { days: 'Sunday', hours: 'Closed' },
]

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream border-t border-charcoal-medium">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <p className="text-gold font-semibold text-xs tracking-[0.15em] uppercase mb-3">
              K.Lou&apos;s Cajun Shack & Catering
            </p>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-cream mb-4 leading-tight">
              Come hungry.<br />Leave happy.
            </h3>
            <p className="text-cream/90 text-sm leading-relaxed mb-6">
              Pop-up Cajun plates, crawfish season, and catering that feels like somebody 
              in the family made sure your event ate well.
            </p>
            
            <div className="flex flex-col gap-3">
              <Button 
                asChild 
                variant="outline"
                className="w-fit border-gold text-gold hover:bg-gold hover:text-charcoal rounded-full"
              >
                <a href={PHONE_LINK} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call {PHONE_NUMBER}
                </a>
              </Button>
              <Button 
                asChild 
                className="w-fit bg-cajun-red hover:bg-cajun-red-light text-white rounded-full shadow-lg shadow-cajun-red/30"
              >
                <Link href="/catering">
                  Book Catering
                </Link>
              </Button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="text-cream/60 text-sm">Phoenix / Tempe</span>
              <span className="text-gold text-sm">•</span>
              <span className="text-cream/60 text-sm">Black-owned</span>
              <span className="text-gold text-sm">•</span>
              <span className="text-cream/60 text-sm">Family-run</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-gold">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <ul className="space-y-3">
                {quickLinksLeft.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-cream hover:text-gold transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-cajun-red rounded-full" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {quickLinksRight.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-cream hover:text-gold transition-colors text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-cajun-red rounded-full" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-gold">
              Hours
            </h4>
            <ul className="space-y-3">
              {operatingHours.map((schedule) => (
                <li key={schedule.days} className="flex justify-between text-sm">
                  <span className="text-cream">{schedule.days}</span>
                  <span className="text-cream/80">{schedule.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Along */}
          <div>
            <h4 className="font-serif text-xl font-semibold mb-6 text-gold">
              Follow Along
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center gap-2 text-cream hover:text-gold transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/p/KLous-Cajun-Shack-Catering-LLC-100085657505713/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center gap-2 text-cream hover:text-gold transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="text-sm">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-medium">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cream/60">
            <p>
              &copy; {new Date().getFullYear()} K.Lou&apos;s Cajun Shack & Catering, LLC. All rights reserved.
            </p>
            <p>
              Thank you for your time and business.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
