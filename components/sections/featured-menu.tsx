import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const featuredItems = [
  {
    id: 1,
    name: 'Boiled Crawfish Plate',
    price: 20,
    description: 'Our signature Louisiana-style boiled crawfish with potatoes and sausage. A seasonal favorite.',
    image: '/images/shrimp-boil.jpg',
    tags: ['Signature', 'Seasonal'],
  },
  {
    id: 2,
    name: 'Cajun Fried Gator Plate',
    price: 18,
    description: 'Crispy fried alligator bites served with potato salad and sweet peas or green beans.',
    image: '/images/jambalaya-combo.jpg',
    tags: ['Fan Favorite'],
  },
  {
    id: 3,
    name: 'Southern Fried Catfish & Jambalaya',
    price: 15,
    description: 'Golden fried catfish fillets with our house jambalaya, potato salad, and sweet peas or green beans.',
    image: '/images/catfish-plate.jpg',
    tags: ['Fan Favorite'],
  },
]

export function FeaturedMenu() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold font-display text-sm md:text-base tracking-wider mb-2">
            TASTE THE BAYOU
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-4">
            Featured Menu Items
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Authentic Louisiana flavors prepared with love and served with real Southern hospitality.
          </p>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredItems.map((item) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden bg-white border-0 shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-cajun-red text-white font-bold px-3 py-1 rounded-full text-lg shadow-lg">
                  ${item.price}
                </div>
              </div>

              <CardContent className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant={tag === 'Signature' ? 'default' : 'secondary'}
                      className={
                        tag === 'Signature' 
                          ? 'bg-cajun-red text-white' 
                          : tag === 'Seasonal'
                          ? 'bg-charcoal text-white'
                          : 'bg-gold text-charcoal'
                      }
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-charcoal mb-2">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-cajun-red text-cajun-red hover:bg-cajun-red hover:text-white"
          >
            <Link href="/menu" className="flex items-center gap-2">
              View Full Menu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
