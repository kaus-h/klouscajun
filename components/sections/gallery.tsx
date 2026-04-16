"use client"

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const galleryImages = [
  {
    id: 1,
    src: '/images/shrimp-boil.jpg',
    alt: 'Louisiana-style shrimp boil with corn and potatoes',
    caption: 'Shrimp Boil',
  },
  {
    id: 2,
    src: '/images/jambalaya-combo.jpg',
    alt: 'Jambalaya with corn, sausage, and fried shrimp',
    caption: 'Jambalaya Combo',
  },
  {
    id: 3,
    src: '/images/catfish-plate.jpg',
    alt: 'Southern fried catfish with fries and hush puppies',
    caption: 'Catfish Plate',
  },
  {
    id: 4,
    src: '/images/beignets.jpg',
    alt: 'Fresh beignets dusted with powdered sugar',
    caption: 'Beignets',
  },
  {
    id: 5,
    src: '/images/shrimp-poboy.jpg',
    alt: 'Crispy shrimp po-boy sandwich',
    caption: 'Shrimp Po-Boy',
  },
  {
    id: 6,
    src: '/images/crawfish-poboy.jpg',
    alt: 'Cajun crawfish po-boy sandwich',
    caption: 'Crawfish Po-Boy',
  },
  {
    id: 7,
    src: '/images/seafood-boil-combo.jpg',
    alt: 'Seafood boil with shrimp, sausage, corn, and potatoes',
    caption: 'Seafood Boil Combo',
  },
]

export function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'unset'
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-cajun-red font-semibold text-xs md:text-sm tracking-[0.2em] uppercase mb-3">
            Eat With Your Eyes
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-charcoal mb-4 leading-tight">
            Photo Gallery
          </h2>
          <p className="text-charcoal max-w-xl">
            Take a look at our authentic Cajun dishes and catering setups.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-cajun-red focus:ring-offset-2"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-end justify-center">
                <span className="text-white font-medium text-sm pb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.caption}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10 z-10"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </Button>

          {/* Previous Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-white hover:bg-white/10 z-10"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-10 w-10" />
          </Button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl max-h-[80vh] aspect-video mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
            <p className="absolute bottom-0 left-0 right-0 text-center text-white bg-charcoal/50 py-3">
              {galleryImages[currentIndex].caption}
            </p>
          </div>

          {/* Next Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-white hover:bg-white/10 z-10"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            aria-label="Next image"
          >
            <ChevronRight className="h-10 w-10" />
          </Button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  )
}
