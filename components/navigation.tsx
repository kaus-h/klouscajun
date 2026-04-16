"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/menu', label: 'Menu' },
  { href: '/catering', label: 'Catering' },
  { href: '/find-us', label: 'Find Us' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
]

const PHONE_NUMBER = '(602) 596-8036'
const PHONE_LINK = 'tel:+16025968036'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Top Announcement Bar - Dark */}
      <div className="bg-charcoal text-cream text-sm py-2 hidden md:block border-b border-charcoal-medium">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <span className="text-cream/90">
            Phoenix & Tempe pop-ups, catering, and crawfish season bookings
          </span>
          <div className="flex items-center gap-4">
            <span className="text-cajun-red font-semibold">Black-owned</span>
            <span className="text-gold">•</span>
            <span className="text-cajun-red font-semibold">Family-run</span>
          </div>
        </div>
      </div>

      <header
        className={cn(
          'sticky top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-charcoal-light shadow-lg shadow-black/30' 
            : 'bg-charcoal-light'
        )}
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex flex-col hover:opacity-80 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              <span className="font-serif text-2xl md:text-3xl font-bold text-cream tracking-tight leading-none">
                K.Lou&apos;s
              </span>
              <span className="text-gold text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase">
                Cajun Shack & Catering
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3 py-2 text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'text-gold'
                      : 'text-cream hover:text-gold'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Phone & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={PHONE_LINK}
                className="flex items-center gap-2 text-cream hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">{PHONE_NUMBER}</span>
              </a>
              <Button asChild className="bg-cajun-red hover:bg-cajun-red-light text-white rounded-full px-6 shadow-lg shadow-cajun-red/30">
                <Link href="/catering">Book Catering</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-cream hover:text-gold transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu - Dark */}
        <div
          className={cn(
            'lg:hidden fixed inset-0 top-16 bg-charcoal z-40 transition-transform duration-300 ease-in-out',
            isOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col h-full px-4 py-6">
            {/* Mobile badges */}
            <div className="flex items-center justify-center gap-4 pb-4 border-b border-charcoal-medium mb-4">
              <span className="text-cajun-red font-semibold text-sm">Black-owned</span>
              <span className="text-gold">•</span>
              <span className="text-cajun-red font-semibold text-sm">Family-run</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={cn(
                  'px-4 py-3 text-lg font-medium rounded-md transition-colors',
                  pathname === '/'
                    ? 'text-gold bg-charcoal-medium'
                    : 'text-cream hover:text-gold hover:bg-charcoal-medium'
                )}
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'px-4 py-3 text-lg font-medium rounded-md transition-colors',
                    pathname === link.href
                      ? 'text-gold bg-charcoal-medium'
                      : 'text-cream hover:text-gold hover:bg-charcoal-medium'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4 pb-8">
              <a
                href={PHONE_LINK}
                className="flex items-center justify-center gap-2 py-3 text-cream hover:text-gold transition-colors border border-charcoal-medium rounded-full"
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">{PHONE_NUMBER}</span>
              </a>
              <Button 
                asChild 
                size="lg" 
                className="w-full bg-cajun-red hover:bg-cajun-red-light text-white rounded-full shadow-lg shadow-cajun-red/30"
              >
                <Link href="/catering" onClick={() => setIsOpen(false)}>
                  Book Catering
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
