import Link from 'next/link'
import { Star, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    id: 1,
    name: 'Marcus T.',
    rating: 5,
    content: "Best Cajun food I've had outside of Louisiana! The crawfish was perfectly seasoned and the portions were generous. Roderick and his team are incredibly friendly and professional.",
    date: '2 months ago',
  },
  {
    id: 2,
    name: 'Jennifer R.',
    rating: 5,
    content: 'We hired them for our graduation party and they exceeded all expectations. Food arrived early, stayed hot, and our guests went back for seconds and thirds. Amazing communication throughout!',
    date: '1 month ago',
  },
  {
    id: 3,
    name: 'David & Lisa M.',
    rating: 5,
    content: 'The fried gator was incredible - crispy on the outside, tender inside. The beignets reminded us of our trip to New Orleans. Finally, real Cajun food in Phoenix!',
    date: '3 weeks ago',
  },
  {
    id: 4,
    name: 'Tamika W.',
    rating: 5,
    content: "Can't say enough good things about this business. Fair prices, authentic flavors, and the owner genuinely cares about his customers. The crawfish boil was unforgettable.",
    date: '1 month ago',
  },
  {
    id: 5,
    name: 'Robert J.',
    rating: 5,
    content: 'Catered our corporate event and everyone was impressed. Professional setup, delicious food, and spotless cleanup. The jambalaya was the star of the show!',
    date: '2 weeks ago',
  },
  {
    id: 6,
    name: 'Angela S.',
    rating: 5,
    content: "Hard to find good Cajun food in Arizona, but K.Lou's delivers the real deal. The catfish was perfectly fried and the potato salad was homemade perfection.",
    date: '3 months ago',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? 'fill-gold text-gold' : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  const averageRating = 4.9
  const totalReviews = testimonials.length

  return (
    <section className="py-16 md:py-24 bg-charcoal text-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold font-display text-sm md:text-base tracking-wider mb-2">
            WHAT OUR CUSTOMERS SAY
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Reviews & Testimonials
          </h2>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < Math.floor(averageRating)
                      ? 'fill-gold text-gold'
                      : 'fill-gray-500 text-gray-500'
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-gold">{averageRating}</span>
            <span className="text-cream/70">({totalReviews}+ reviews)</span>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-charcoal-light border-charcoal-light hover:border-gold/30 transition-colors"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-gold/30 mb-4" />
                
                <p className="text-cream/90 leading-relaxed mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-cream">{testimonial.name}</p>
                    <p className="text-sm text-cream/50">{testimonial.date}</p>
                  </div>
                  <StarRating rating={testimonial.rating} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-cream text-cream hover:bg-cream hover:text-charcoal"
          >
            <Link href="/reviews">Read More Reviews</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
