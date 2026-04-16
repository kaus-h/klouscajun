import { Check } from 'lucide-react'

const trustBadges = [
  'Authentic Cajun & Creole',
  'Catering for All Sizes',
  'Crawfish Boil Reservations',
  'Family-Run Hospitality',
  'Black-Owned Business',
  'Phoenix / Tempe Area',
]

export function TrustBar() {
  return (
    <section className="bg-cream py-10 md:py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8">
          <p className="text-cajun-red font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
            Why Regulars Keep Pulling Up
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal leading-tight max-w-3xl">
            Flavor first. Hospitality close behind.
          </h2>
          <p className="text-charcoal mt-4 max-w-2xl leading-relaxed">
            K.Lou&apos;s is built for people who want authentic Cajun food, clear communication, 
            and a setup that feels rooted in community instead of generic catering.
          </p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-4 p-4 bg-white rounded-lg border border-charcoal/5"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-cajun-red rounded-full flex items-center justify-center">
                <Check className="h-5 w-5 text-white" strokeWidth={3} />
              </div>
              <span className="text-charcoal font-medium">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
