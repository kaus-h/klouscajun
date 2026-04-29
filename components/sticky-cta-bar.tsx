"use client"

import Link from 'next/link'
import { Phone, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PHONE_LINK = 'tel:+16025968036'

export function StickyCTABar() {
  return (
    <div className="safe-area-bottom fixed bottom-0 left-0 right-0 z-50 border-t border-gold/20 bg-[#11100f]/96 shadow-2xl shadow-black/50 lg:hidden">
      <div className="grid grid-cols-2 gap-3 p-3">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-14 rounded-md border-gold text-cream hover:bg-gold hover:text-charcoal"
        >
          <a href={PHONE_LINK} className="flex items-center justify-center gap-2">
            <Phone className="h-5 w-5" />
            <span className="font-semibold">Call Now</span>
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          className="h-14 rounded-md bg-cajun-red text-white shadow-lg shadow-cajun-red/25 hover:bg-cajun-red-light"
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
