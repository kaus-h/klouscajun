import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Utensils, Heart, MessageCircle, DollarSign, Users, Award 
} from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { StickyCTABar } from '@/components/sticky-cta-bar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about K.Lou\'s Cajun Shack & Catering - 30+ years of authentic Louisiana Cajun cooking. Black-owned, family-run business serving Phoenix & Tempe, AZ.',
}

const whyUsReasons = [
  {
    icon: Utensils,
    title: 'Authentic Taste',
    description: 'Real Louisiana recipes passed down through generations. No shortcuts, no compromises.',
  },
  {
    icon: Heart,
    title: 'Memorable Catering',
    description: 'Events catered with care and attention to detail. Food that guests remember.',
  },
  {
    icon: MessageCircle,
    title: 'Welcoming Service',
    description: 'Every customer is treated like family. Genuine hospitality is our standard.',
  },
  {
    icon: Users,
    title: 'Dependable Communication',
    description: 'Clear, responsive communication from inquiry to delivery. We show up on time.',
  },
  {
    icon: DollarSign,
    title: 'Fair Pricing',
    description: 'Quality Cajun food at prices that respect your budget. Honest value every time.',
  },
  {
    icon: Award,
    title: 'Hard to Find Flavor',
    description: 'Authentic Cajun cuisine is rare in Arizona. We bring the real thing to your table.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16 md:pt-20 pb-20 lg:pb-0">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-charcoal text-cream overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/jambalaya-combo.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 text-center">
            <p className="text-gold font-display text-sm md:text-base tracking-wider mb-2">
              OUR STORY
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              30 Years of{' '}
              <span className="text-gold">Louisiana Flavor</span>
            </h1>
            <p className="text-cream/90 max-w-2xl mx-auto text-lg">
              Bringing authentic Cajun & Creole cuisine from the bayou to Arizona, 
              one plate at a time.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              {/* Image */}
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/shrimp-poboy.jpg"
                    alt="Authentic shrimp po-boy from K.Lou's Cajun Shack"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-cajun-red text-white p-4 md:p-6 rounded-lg shadow-xl">
                  <p className="font-display text-2xl md:text-3xl">30+</p>
                  <p className="text-sm">Years of Experience</p>
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-6">
                  From Louisiana With Love
                </h2>
                
                <div className="space-y-4 text-charcoal/80 leading-relaxed">
                  <p>
                    K.Lou&apos;s Cajun Shack & Catering was born from a deep love of authentic 
                    Louisiana cuisine and a passion for sharing that flavor with Arizona. Owner 
                    Roderick M. brings over 30 years of experience cooking traditional Cajun 
                    and Creole dishes the way his family taught him back home.
                  </p>
                  <p>
                    What started as cooking for friends and family has grown into a beloved 
                    food truck and catering service that serves the Phoenix and Tempe 
                    communities. Every dish we prepare carries the same love, care, and 
                    authentic seasoning that&apos;s been passed down through generations.
                  </p>
                  <p>
                    As a Black-owned, family-run business, we take immense pride in every 
                    plate we serve. Our commitment goes beyond just food - it&apos;s about 
                    creating experiences, bringing people together, and making sure every 
                    customer leaves satisfied and smiling.
                  </p>
                  <p>
                    Whether you&apos;re stopping by our pop-up for a quick lunch, ordering 
                    for your family, or hiring us for your next big event, you&apos;ll 
                    taste the difference that passion and experience make.
                  </p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-3 mt-8">
                  <span className="px-4 py-2 bg-cajun-red text-white rounded-full text-sm font-medium">
                    Black-Owned Business
                  </span>
                  <span className="px-4 py-2 bg-gold text-charcoal rounded-full text-sm font-medium">
                    Family-Run
                  </span>
                  <span className="px-4 py-2 bg-charcoal text-white rounded-full text-sm font-medium">
                    Since Day One
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why People Keep Coming Back */}
        <section className="py-16 md:py-24 bg-charcoal text-cream">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Why People Keep Coming Back
              </h2>
              <p className="text-cream/70 max-w-xl mx-auto">
                It&apos;s more than just the food - it&apos;s the complete experience.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyUsReasons.map((reason) => (
                <Card 
                  key={reason.title} 
                  className="bg-charcoal-light border-charcoal-light hover:border-gold/30 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                      <reason.icon className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="text-lg font-semibold text-cream mb-2">{reason.title}</h3>
                    <p className="text-cream/70 text-sm leading-relaxed">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-charcoal mb-8">
                Our Promise to You
              </h2>
              
              <div className="prose prose-lg mx-auto text-charcoal/80">
                <p>
                  At K.Lou&apos;s, we believe that great food brings people together. Every 
                  crawfish boil, every plate of jambalaya, every beignet we serve carries 
                  with it a piece of Louisiana heritage and a whole lot of heart.
                </p>
                <p>
                  We promise to always use quality ingredients, maintain generous portions, 
                  and treat every customer like family. When you choose K.Lou&apos;s, you&apos;re 
                  not just getting a meal - you&apos;re getting an experience rooted in 
                  tradition, prepared with care, and served with genuine hospitality.
                </p>
              </div>

              <p className="text-gold font-display text-xl md:text-2xl mt-10">
                &ldquo;Come Hungry, Leave Happy&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-cajun-red text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Experience the Flavor?
            </h2>
            <p className="text-white/90 max-w-xl mx-auto mb-8">
              Check out our menu or book us for your next event. Let&apos;s make 
              something delicious happen!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-cajun-red hover:bg-cream font-semibold"
              >
                <Link href="/menu">View Our Menu</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-cajun-red"
              >
                <Link href="/catering">Book Catering</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyCTABar />
    </>
  )
}
