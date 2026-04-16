import { Check } from 'lucide-react'

const trustGroups = [
  {
    title: 'For lunch, dinner, and quick stops',
    items: [
      'Authentic Cajun and Creole cooking',
      'Phoenix and Tempe pop-up locations',
      'Seasonal crawfish and snowball specials',
    ],
  },
  {
    title: 'For family tables and bigger events',
    items: [
      'Family-run hospitality',
      'Catering for gatherings of all sizes',
      'Clear communication from quote to pickup or setup',
    ],
  },
]

export function TrustBar() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div className="space-y-4">
            <p className="type-kicker text-cajun-red">Why people keep pulling up</p>
            <h2 className="type-section-title max-w-xl text-charcoal">
              The food lands first. The hospitality makes people stay loyal.
            </h2>
            <p className="type-body max-w-xl text-charcoal/75">
              K.Lou&apos;s works because it feels grounded. The menu is recognizable, the service is
              direct, and both the everyday stop and the bigger catering order feel handled by
              people who care.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {trustGroups.map((group) => (
              <article key={group.title} className="border-t border-charcoal/15 pt-5">
                <h3 className="type-card-title text-charcoal">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-charcoal/75">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cajun-red/10">
                        <Check className="h-4 w-4 text-cajun-red" strokeWidth={3} />
                      </span>
                      <span className="type-meta text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
