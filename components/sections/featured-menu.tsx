import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const featuredItems = [
  {
    id: 1,
    name: 'Southern Fried Catfish Plate',
    image: '/images/catfish-plate.jpg',
    description: '5pc catfish with homemade Cajun seasoned fries and 2 hush puppies',
  },
  {
    id: 2,
    name: 'Jambalaya Combo',
    image: '/images/jambalaya-combo.jpg',
    description: 'Jambalaya with corn, sausage, and fried shrimp',
  },
  {
    id: 3,
    name: 'Shrimp Po-Boy',
    image: '/images/shrimp-poboy.jpg',
    description: 'Crispy fried shrimp on fresh French bread with all the fixings',
  },
]

export function FeaturedMenu() {
  return (
    <section className="py-16 md:py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-gold font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
              Signature Dishes
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream leading-tight max-w-2xl">
              The plates people talk about after the pop-up ends
            </h2>
            <p className="text-cream/90 mt-4 max-w-xl leading-relaxed">
              Bold Louisiana flavors that keep people coming back, whether you catch the truck or 
              bring the whole menu to your event.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-2 border-gold text-gold hover:bg-gold hover:text-charcoal rounded-full px-6 self-start md:self-auto"
          >
            <Link href="/menu" className="flex items-center gap-2">
              View Full Menu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <div 
              key={item.id} 
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4 shadow-xl shadow-black/40 ring-1 ring-charcoal-medium">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-bold text-cream mb-2">
                {item.name}
              </h3>
              <p className="text-cream/80 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
