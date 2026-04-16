import Link from 'next/link'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    id: 1,
    name: 'Sajani J.',
    location: 'Henderson, NV',
    rating: 5,
    content: "Had Jambalaya catered for a party. Delivery was early, which was great! Food was delicious, everybody was going back for seconds and thirds. The communication was phenomenal. He made a jambalaya just how we wanted it. Prices are very fair as well.",
    date: 'Mar 20, 2025',
  },
  {
    id: 2,
    name: 'LaNesa M.',
    location: 'Phoenix, AZ',
    rating: 5,
    content: 'Good food and great service. The catfish is yummy and the cabbage hit the spot. Definitely coming back!',
    date: 'May 20, 2024',
  },
  {
    id: 3,
    name: 'Jamie S.',
    location: 'Hemet, CA',
    rating: 5,
    content: "The food is incredible. It's hard to find Cajun food in Phoenix and even more difficult to find good Cajun food in the west. The owner is amazingly kind and welcoming. This is a great family business.",
    date: 'Jan 5, 2024',
  },
  {
    id: 4,
    name: 'Karen J.',
    location: 'City of Commerce, CA',
    rating: 5,
    content: "Easily the best Cajun food I've had in valley! 100% recommend, they're super friendly and attentive! Will definitely be back for more!",
    date: 'Mar 31, 2023',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? 'fill-[#FF3B30] text-[#FF3B30]' : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-cajun-red font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
            What Customers Are Saying
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-4 leading-tight max-w-2xl">
            Real reviews from real customers
          </h2>
          
          {/* Overall Rating from Yelp */}
          <div className="flex items-center gap-4 mt-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 ${
                    i < 4.5
                      ? 'fill-[#FF3B30] text-[#FF3B30]'
                      : i < 5 ? 'fill-[#FF3B30]/50 text-[#FF3B30]/50' : 'fill-gray-300 text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-charcoal/70 text-sm">4.5 stars on Yelp</span>
          </div>
        </div>

        {/* Testimonial Cards - Horizontal Scroll on Mobile */}
        <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 scrollbar-hide">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-[300px] md:w-auto bg-white rounded-lg p-6 shadow-sm border border-charcoal/5"
            >
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-charcoal/10 rounded-full flex items-center justify-center text-charcoal font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-charcoal">{testimonial.name}</p>
                  <p className="text-xs text-charcoal/50">{testimonial.location}</p>
                </div>
              </div>

              {/* Rating & Date */}
              <div className="flex items-center gap-2 mb-3">
                <StarRating rating={testimonial.rating} />
                <span className="text-xs text-charcoal/50">{testimonial.date}</span>
              </div>
              
              {/* Content */}
              <p className="text-charcoal text-sm leading-relaxed">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Button
            asChild
            variant="outline"
            className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream rounded-full"
          >
            <Link href="/reviews">Read More Reviews</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
