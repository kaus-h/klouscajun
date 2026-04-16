"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
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
      setIsScrolled(window.scrollY > 10)
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
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-charcoal/95 backdrop-blur-sm shadow-lg' 
          : 'bg-charcoal'
      )}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 text-cream hover:text-gold transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <span className="font-serif text-xl md:text-2xl font-bold tracking-tight">
              K.Lou&apos;s Cajun Shack
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  pathname === link.href
                    ? 'text-gold bg-charcoal-light'
                    : 'text-cream hover:text-gold hover:bg-charcoal-light'
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
            <Button asChild size="sm" className="bg-cajun-red hover:bg-cajun-red-light text-white">
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

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 top-16 bg-charcoal z-40 transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full px-4 py-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'px-4 py-3 text-lg font-medium rounded-md transition-colors',
                  pathname === link.href
                    ? 'text-gold bg-charcoal-light'
                    : 'text-cream hover:text-gold hover:bg-charcoal-light'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-4 pb-8">
            <a
              href={PHONE_LINK}
              className="flex items-center justify-center gap-2 py-3 text-cream hover:text-gold transition-colors border border-cream/20 rounded-md"
            >
              <Phone className="h-5 w-5" />
              <span className="font-medium">{PHONE_NUMBER}</span>
            </a>
            <Button 
              asChild 
              size="lg" 
              className="w-full bg-cajun-red hover:bg-cajun-red-light text-white"
            >
              <Link href="/catering" onClick={() => setIsOpen(false)}>
                Book Catering
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
