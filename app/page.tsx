import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { StickyCTABar } from '@/components/sticky-cta-bar'
import { Hero } from '@/components/sections/hero'
import { TrustBar } from '@/components/sections/trust-bar'
import { FeaturedMenu } from '@/components/sections/featured-menu'
import { CateringSpotlight } from '@/components/sections/catering-spotlight'
import { LocationModule } from '@/components/sections/location-module'
import { Testimonials } from '@/components/sections/testimonials'
import { AboutPreview } from '@/components/sections/about-preview'
import { Gallery } from '@/components/sections/gallery'
import { CTABanner } from '@/components/sections/cta-banner'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="pb-20 lg:pb-0">
        <Hero />
        <TrustBar />
        <FeaturedMenu />
        <CateringSpotlight />
        <LocationModule />
        <Testimonials />
        <AboutPreview />
        <Gallery />
        <CTABanner />
      </main>
      <Footer />
      <StickyCTABar />
    </>
  )
}
