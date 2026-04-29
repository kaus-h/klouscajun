"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, CalendarDays, MapPin, Menu, Phone, X } from 'lucide-react'
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
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <header
      className={cn(
        'sticky top-0 left-0 right-0 z-50 border-b border-gold/20 bg-[#11100f] text-cream transition-all duration-300',
        isScrolled ? 'shadow-lg shadow-black/35' : 'shadow-none',
      )}
    >
      <div className="border-b border-cream/10 bg-[#080807] py-2 text-xs text-cream/85">
        <div className="container mx-auto flex items-center justify-center px-4 md:justify-between">
          <span className="md:hidden">Phoenix &amp; Tempe Pop-Ups - Catering Available</span>
          <span className="hidden md:inline">
            Phoenix &amp; Tempe Pop-Ups - Catering for Events - Crawfish Season Booking Open
          </span>
          <div className="hidden items-center gap-3 text-gold md:flex">
            <span>Black-owned</span>
            <span aria-hidden="true">-</span>
            <span>Family-run</span>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between md:h-24">
          <Link
            href="/"
            className="flex flex-col transition-opacity hover:opacity-85"
            onClick={() => setIsOpen(false)}
          >
            <span className="type-nav-brand text-cream">K.Lou&apos;s</span>
            <span className="type-nav-subbrand text-gold">Cajun Shack &amp; Catering</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 text-sm font-semibold uppercase transition-colors xl:px-4',
                  pathname === link.href ? 'text-gold' : 'text-cream hover:text-gold',
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={PHONE_LINK}
              className="flex items-center gap-2 text-[0.98rem] text-cream transition-colors hover:text-gold"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold">{PHONE_NUMBER}</span>
            </a>
            <Button
              asChild
              className="h-12 rounded-md bg-cajun-red px-6 text-white shadow-lg shadow-cajun-red/25 hover:bg-cajun-red-light"
            >
              <Link href="/catering" className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                Book Catering
              </Link>
            </Button>
          </div>

          <button
            className="flex min-h-11 min-w-11 items-center justify-center rounded-md text-cream transition-colors hover:bg-cream/10 hover:text-gold lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          'fixed inset-x-0 bottom-0 top-[113px] z-40 bg-[#11100f] transition-transform duration-300 ease-in-out lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex h-full flex-col px-4 py-6">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={cn(
                'rounded-md px-4 py-3 text-[1.05rem] font-semibold transition-colors',
                pathname === '/'
                  ? 'bg-charcoal-medium text-gold'
                  : 'text-cream hover:bg-charcoal-medium hover:text-gold',
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
                  'rounded-md px-4 py-3 text-[1.05rem] font-semibold transition-colors',
                  pathname === link.href
                    ? 'bg-charcoal-medium text-gold'
                    : 'text-cream hover:bg-charcoal-medium hover:text-gold',
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-md border-gold text-gold hover:bg-gold hover:text-charcoal"
            >
              <Link href="/menu" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                View Menu
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-md border-cream/35 text-cream hover:bg-cream hover:text-charcoal"
            >
              <Link href="/find-us" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Find Us
              </Link>
            </Button>
          </div>

          <div className="mt-auto flex flex-col gap-4 pb-8">
            <a
              href={PHONE_LINK}
              className="flex min-h-12 items-center justify-center gap-2 rounded-md border border-gold/60 py-3 text-[1rem] text-cream transition-colors hover:bg-gold hover:text-charcoal"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold">Call Now</span>
            </a>
            <Button
              asChild
              size="lg"
              className="h-12 w-full rounded-md bg-cajun-red text-white shadow-lg shadow-cajun-red/25 hover:bg-cajun-red-light"
            >
              <Link href="/catering" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5" />
                Book Catering
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
