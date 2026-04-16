"use client"

import Link from 'next/link'
import { Phone, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PHONE_LINK = 'tel:+16025968036'

export function StickyCTABar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-charcoal border-t border-charcoal-light shadow-2xl safe-area-bottom">
      <div className="flex gap-2 p-3">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="flex-1 border-cream text-cream hover:bg-cream hover:text-charcoal"
        >
          <a href={PHONE_LINK} className="flex items-center justify-center gap-2">
            <Phone className="h-5 w-5" />
            <span className="font-semibold">Call Now</span>
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          className="flex-1 bg-cajun-red hover:bg-cajun-red-light text-white"
        >
          <Link href="/catering" className="flex items-center justify-center gap-2">
            <Calendar className="h-5 w-5" />
            <span className="font-semibold">Book Catering</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
