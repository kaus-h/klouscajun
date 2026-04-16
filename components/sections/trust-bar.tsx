import { Utensils, Users, CalendarDays, Heart, Award, MapPin } from 'lucide-react'

const trustBadges = [
  {
    icon: Utensils,
    text: 'Authentic Cajun & Creole',
  },
  {
    icon: Users,
    text: 'Catering for All Event Sizes',
  },
  {
    icon: CalendarDays,
    text: 'Crawfish Boil Reservations',
  },
  {
    icon: Heart,
    text: 'Family-Run Hospitality',
  },
  {
    icon: Award,
    text: 'Black-Owned Business',
  },
  {
    icon: MapPin,
    text: 'Phoenix / Tempe Area',
  },
]

export function TrustBar() {
  return (
    <section className="bg-cream py-8 md:py-10 border-y border-cream-dark">
      <div className="container mx-auto px-4">
        {/* Mobile: Horizontal Scroll */}
        <div className="flex md:hidden gap-6 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {trustBadges.map((badge) => (
            <div
              key={badge.text}
              className="flex items-center gap-3 flex-shrink-0"
            >
              <div className="p-2 bg-cajun-red/10 rounded-full">
                <badge.icon className="h-5 w-5 text-cajun-red" />
              </div>
              <span className="text-charcoal font-medium text-sm whitespace-nowrap">
                {badge.text}
              </span>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-6">
          {trustBadges.map((badge) => (
            <div
              key={badge.text}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="p-3 bg-cajun-red/10 rounded-full">
                <badge.icon className="h-6 w-6 text-cajun-red" />
              </div>
              <span className="text-charcoal font-medium text-sm">
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
