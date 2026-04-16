# Design Document: K.Lou's Cajun Shack & Catering Website

## Overview

### Purpose

This design document specifies the technical architecture, component structure, data models, and implementation approach for the K.Lou's Cajun Shack & Catering website. The website serves as a digital storefront for a Cajun food truck, pop-up, and catering business operating in the Phoenix/Tempe, Arizona area.

### Business Goals

The website is designed to achieve the following business objectives:

1. **Increase Catering Inquiries**: Streamlined catering inquiry forms with clear CTAs throughout the site
2. **Drive Direct Phone Calls**: Click-to-call functionality prominently displayed across all pages
3. **Showcase Authentic Cuisine**: High-quality food photography and detailed menu presentation
4. **Promote Pop-Up Locations**: Dynamic location module for current and upcoming events
5. **Build Trust**: Customer testimonials, brand story, and authentic Louisiana heritage
6. **Enable Future Growth**: Flexible architecture supporting online ordering and expanded features

### Design Principles

1. **Mobile-First**: Design and develop for mobile devices first, then enhance for larger screens
2. **Performance-Driven**: Fast page loads (< 3 seconds on 4G) through optimization and CDN delivery
3. **Conversion-Focused**: Clear CTAs, minimal friction in inquiry forms, prominent contact methods
4. **Accessibility-Compliant**: WCAG 2.1 Level AA standards for inclusive user experience
5. **Content-Flexible**: CMS-driven content allowing non-technical updates to menu, locations, and events
6. **Brand-Authentic**: Visual design reflecting Louisiana Cajun culture with premium, approachable aesthetic

### Key Technical Decisions

Based on research and requirements analysis, the following technical decisions have been made:

**Frontend Framework**: Next.js 14+ with App Router
- Server-side rendering (SSR) and static site generation (SSG) for optimal SEO
- React Server Components for reduced JavaScript bundle size (40-70% reduction)
- Built-in image optimization and lazy loading
- Automatic code splitting and route prefetching
- Native TypeScript support for type safety

**Content Management System**: Sanity CMS
- Real-time collaborative editing with Sanity Studio
- GROQ query language for flexible content retrieval
- Portable Text for rich content with custom components
- Generous free tier (100k API requests/month, 10GB bandwidth)
- Customizable Studio interface for business-specific workflows
- Strong Next.js integration with official SDK

**Hosting Platform**: Vercel
- Zero-configuration deployment for Next.js applications
- Global CDN with edge network (300+ locations)
- Automatic HTTPS with SSL certificates
- Preview deployments for every pull request
- Serverless functions for API routes
- Built-in analytics and performance monitoring

**Email Service**: Resend
- Developer-friendly API for transactional emails
- React Email for type-safe email templates
- Excellent deliverability rates
- Generous free tier (100 emails/day, 3,000/month)
- Webhook support for delivery tracking

**Form Handling**: React Hook Form + Zod
- Performant form validation with minimal re-renders
- Type-safe schema validation with Zod
- Accessible form error handling
- Server-side validation in Next.js Server Actions

**Styling**: Tailwind CSS + CSS Modules
- Utility-first CSS for rapid development
- Consistent design system through Tailwind configuration
- CSS Modules for component-specific styles when needed
- Responsive design utilities built-in

**Analytics**: Google Analytics 4
- Event tracking for CTAs, form submissions, and user interactions
- Conversion funnel analysis
- Privacy-compliant implementation with cookie consent
how much time till implementation


## Architecture

### System Architecture Overview

The website follows a modern JAMstack architecture with the following components:

```
┌─────────────────────────────────────────────────────────────┐
│                         User Browser                         │
│  (Mobile Safari, Chrome, Firefox, Edge, Desktop Browsers)   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ HTTPS
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Vercel Edge Network                       │
│              (Global CDN + Edge Functions)                   │
│  • Static Assets (HTML, CSS, JS, Images)                    │
│  • Server-Side Rendering (SSR)                              │
│  • API Routes (Serverless Functions)                        │
└────────┬────────────────────────────────┬───────────────────┘
         │                                │
         │                                │
         ▼                                ▼
┌────────────────────┐          ┌────────────────────┐
│   Sanity CMS API   │          │   Resend Email API │
│                    │          │                    │
│  • Menu Items      │          │  • Form Submissions│
│  • Events/Locations│          │  • Notifications   │
│  • Testimonials    │          │  • Confirmations   │
│  • Gallery Images  │          └────────────────────┘
│  • FAQ Content     │
│  • Page Content    │
└────────────────────┘
         │
         │
         ▼
┌────────────────────┐
│  Sanity Studio     │
│  (Content Editor)  │
│                    │
│  • Business Owner  │
│  • Content Manager │
└────────────────────┘
```

### Rendering Strategy

The website employs a hybrid rendering approach optimized for performance and SEO:

**Static Site Generation (SSG)** for:
- Homepage (revalidate every 60 seconds for location updates)
- About page
- FAQ page
- Contact page

**Server-Side Rendering (SSR)** for:
- Menu page (real-time menu availability)
- Find Us page (current location data)
- Reviews page (latest testimonials)

**Client-Side Rendering (CSR)** for:
- Form interactions and validation
- Gallery lightbox
- Mobile navigation menu
- Interactive map components

**Incremental Static Regeneration (ISR)** for:
- Menu items (revalidate every 300 seconds)
- Event listings (revalidate every 60 seconds)
- Testimonials (revalidate every 3600 seconds)

### Data Flow

1. **Content Updates**:
   - Business owner edits content in Sanity Studio
   - Changes trigger webhook to Vercel
   - Vercel revalidates affected pages
   - Updated content served from edge cache

2. **Form Submissions**:
   - User submits form (catering inquiry or contact)
   - Next.js Server Action validates data with Zod schema
   - Server Action calls Resend API to send email
   - Success/error response returned to client
   - Client displays confirmation or error message

3. **Page Requests**:
   - User requests page
   - Vercel edge network serves cached HTML (if available)
   - For SSR pages, Next.js fetches data from Sanity
   - Page rendered and cached at edge
   - Subsequent requests served from cache

### Security Architecture

**Frontend Security**:
- Content Security Policy (CSP) headers
- XSS protection through React's built-in escaping
- HTTPS-only cookies for session management
- Input sanitization on all form fields

**API Security**:
- CSRF tokens for form submissions
- Rate limiting on API routes (10 requests/minute per IP)
- Honeypot fields in forms to prevent spam
- Server-side validation for all user input

**Data Security**:
- Environment variables for API keys (never exposed to client)
- Sanity API tokens with read-only access for public queries
- Write access restricted to authenticated Studio users
- No sensitive data stored in browser localStorage

### Performance Architecture

**Image Optimization**:
- Next.js Image component with automatic optimization
- WebP format with JPEG/PNG fallbacks
- Responsive images with srcset
- Lazy loading for below-the-fold images
- Cloudinary or Sanity's image CDN for transformations

**Code Optimization**:
- Automatic code splitting by route
- Tree shaking to remove unused code
- Minification of CSS and JavaScript
- Gzip/Brotli compression
- Critical CSS inlined in HTML

**Caching Strategy**:
- Static assets cached for 1 year (immutable)
- HTML pages cached at edge with ISR
- API responses cached with appropriate headers
- Browser cache for fonts and images



## Components and Interfaces

### Component Hierarchy

The website is structured using a component-based architecture with the following hierarchy:

```
App Layout
├── Navigation
│   ├── Logo
│   ├── NavLinks (Desktop)
│   ├── MobileMenu
│   │   ├── HamburgerIcon
│   │   └── MobileNavLinks
│   └── PhoneNumber (Click-to-Call)
│
├── Page Content
│   ├── Homepage
│   │   ├── Hero
│   │   │   ├── HeroHeadline
│   │   │   ├── HeroSubheadline
│   │   │   └── CTAButtons
│   │   ├── TrustBar
│   │   │   └── TrustBadge (×6)
│   │   ├── FeaturedMenu
│   │   │   ├── SectionHeading
│   │   │   ├── MenuCard (×3)
│   │   │   └── ViewMenuCTA
│   │   ├── CateringSpotlight
│   │   │   ├── SectionHeading
│   │   │   ├── CateringDescription
│   │   │   ├── EventTypeList
│   │   │   └── CateringCTA
│   │   ├── LocationModule
│   │   │   ├── CurrentLocation
│   │   │   ├── UpcomingEvents
│   │   │   └── ServiceArea
│   │   ├── TestimonialsSection
│   │   │   ├── SectionHeading
│   │   │   └── TestimonialCard (×6)
│   │   ├── AboutPreview
│   │   │   ├── SectionHeading
│   │   │   ├── StoryExcerpt
│   │   │   └── LearnMoreCTA
│   │   ├── Gallery
│   │   │   ├── SectionHeading
│   │   │   ├── GalleryGrid
│   │   │   │   └── GalleryImage (×7+)
│   │   │   └── Lightbox
│   │   └── CTABanner
│   │       ├── BannerHeadline
│   │       └── CTAButtons
│   │
│   ├── About Page
│   │   ├── PageHero
│   │   ├── StorySection
│   │   ├── WhyUsSection
│   │   │   └── ReasonCard (×6)
│   │   └── PageCTA
│   │
│   ├── Menu Page
│   │   ├── PageHero
│   │   ├── MenuCategory (×3)
│   │   │   ├── CategoryHeading
│   │   │   └── MenuItem (multiple)
│   │   │       ├── ItemImage
│   │   │       ├── ItemName
│   │   │       ├── ItemPrice
│   │   │       ├── ItemDescription
│   │   │       └── ItemTags
│   │   └── MenuDisclaimer
│   │
│   ├── Catering Page
│   │   ├── PageHero
│   │   ├── CateringOverview
│   │   ├── EventTypesSection
│   │   ├── ServiceOptionsSection
│   │   ├── CrawfishBoilSection
│   │   ├── CateringForm
│   │   │   ├── FormField (×8)
│   │   │   ├── ValidationErrors
│   │   │   └── SubmitButton
│   │   └── CateringTestimonials
│   │
│   ├── Find Us Page
│   │   ├── PageHero
│   │   ├── LocationModule (detailed)
│   │   ├── MapEmbed
│   │   │   └── LocationMarker (×2)
│   │   ├── OperatingHours
│   │   └── ServiceAreaDescription
│   │
│   ├── Reviews Page
│   │   ├── PageHero
│   │   ├── OverallRating
│   │   ├── TestimonialGrid
│   │   │   └── TestimonialCard (×6+)
│   │   └── LeaveReviewCTA
│   │
│   ├── Contact Page
│   │   ├── PageHero
│   │   ├── ContactInfo
│   │   │   ├── PhoneNumber
│   │   │   ├── BusinessHours
│   │   │   └── ServiceArea
│   │   ├── ContactForm
│   │   │   ├── FormField (×4)
│   │   │   ├── ValidationErrors
│   │   │   └── SubmitButton
│   │   └── SocialLinks
│   │
│   └── FAQ Page
│       ├── PageHero
│       └── FAQAccordion
│           └── FAQItem (×10)
│               ├── Question
│               └── Answer
│
├── StickyCTABar (Mobile Only)
│   ├── CallButton
│   └── CateringButton
│
└── Footer
    ├── FooterNav
    ├── ContactInfo
    ├── BusinessHours
    ├── SocialLinks
    └── Copyright
```

### Core Component Specifications

#### Navigation Component

**Purpose**: Primary site navigation with responsive behavior

**Props**:
```typescript
interface NavigationProps {
  currentPath: string;
  phoneNumber: string;
}
```

**Behavior**:
- Desktop (≥768px): Horizontal navigation with all links visible
- Mobile (<768px): Hamburger menu with slide-out drawer
- Sticky positioning on scroll (desktop only)
- Active page highlighting
- Click-to-call phone number in header

**Accessibility**:
- Semantic `<nav>` element
- ARIA labels for hamburger button
- Keyboard navigation support (Tab, Enter, Escape)
- Focus trap in mobile menu when open

#### Hero Component

**Purpose**: Above-the-fold section with headline, subheadline, and CTAs

**Props**:
```typescript
interface HeroProps {
  headline: string;
  subheadline: string;
  backgroundImage: {
    url: string;
    alt: string;
  };
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  tertiaryCTA: {
    text: string;
    href: string;
  };
}
```

**Behavior**:
- Full viewport height on mobile
- 70vh on desktop
- Background image with overlay for text readability
- Responsive typography scaling
- CTA buttons stacked vertically on mobile, horizontal on desktop

**Performance**:
- Priority loading for background image
- WebP format with JPEG fallback
- Responsive image sizes

#### MenuCard Component

**Purpose**: Display individual menu item with image, name, price, description, and tags

**Props**:
```typescript
interface MenuCardProps {
  item: {
    id: string;
    name: string;
    price: number;
    description: string;
    image: {
      url: string;
      alt: string;
    };
    tags?: ('Signature' | 'Fan Favorite' | 'Seasonal')[];
    category: string;
  };
}
```

**Behavior**:
- Card layout with image on top
- Hover effect on desktop (subtle scale)
- Tags displayed as badges
- Price formatted as currency ($XX.XX)
- Responsive grid layout (1 column mobile, 2-3 columns desktop)

**Accessibility**:
- Semantic HTML structure
- Alt text for images
- Sufficient color contrast for text

#### CateringForm Component

**Purpose**: Collect catering inquiry information with validation

**Props**:
```typescript
interface CateringFormProps {
  onSubmit: (data: CateringFormData) => Promise<void>;
  onSuccess: () => void;
  onError: (error: string) => void;
}

interface CateringFormData {
  fullName: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: number;
  eventType: string;
  serviceType: string;
  notes?: string;
}
```

**Validation Schema** (Zod):
```typescript
const cateringFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 
    'Please enter a valid phone number'),
  eventDate: z.string().refine((date) => new Date(date) > new Date(), 
    'Event date must be in the future'),
  guestCount: z.number().min(1, 'Guest count must be at least 1'),
  eventType: z.enum(['Birthday', 'Graduation', 'Wedding', 'Corporate Event', 
    'Family Gathering', 'Crawfish Boil', 'Other']),
  serviceType: z.enum(['Pickup', 'Delivery', 'On-Site Catering']),
  notes: z.string().optional(),
});
```

**Behavior**:
- Real-time validation on blur
- Error messages displayed below fields
- Submit button disabled during submission
- Success message displayed after submission
- Form reset after successful submission
- Honeypot field for spam prevention

**Accessibility**:
- Labels associated with inputs
- Error messages announced to screen readers
- Focus management on validation errors
- Required fields marked with asterisk

#### LocationModule Component

**Purpose**: Display current pop-up location and upcoming events

**Props**:
```typescript
interface LocationModuleProps {
  currentLocation?: {
    name: string;
    address: string;
    date: string;
    time: string;
  };
  upcomingEvents: Array<{
    id: string;
    name: string;
    address: string;
    date: string;
    time: string;
  }>;
  serviceArea: string;
  operatingHours: {
    [key: string]: string;
  };
}
```

**Behavior**:
- Display current location prominently if available
- Show "Check back soon" message if no current location
- List upcoming events in chronological order
- Link to map directions for each location
- Editable through Sanity CMS

**CMS Integration**:
- Sanity document type: `location`
- Fields: name, address, date, time, status (current/upcoming/past)
- Automatic filtering of past events

#### TestimonialCard Component

**Purpose**: Display customer review with rating and attribution

**Props**:
```typescript
interface TestimonialCardProps {
  testimonial: {
    id: string;
    customerName: string;
    rating: number;
    content: string;
    date: string;
  };
}
```

**Behavior**:
- Star rating display (filled/empty stars)
- Customer name or initials
- Review content with character limit (200 chars with "Read more")
- Date formatted as relative time ("2 months ago")
- Card layout with subtle shadow

**Accessibility**:
- ARIA label for star rating
- Semantic HTML structure

#### Gallery Component

**Purpose**: Display food images in responsive grid with lightbox

**Props**:
```typescript
interface GalleryProps {
  images: Array<{
    id: string;
    url: string;
    alt: string;
    caption?: string;
  }>;
}
```

**Behavior**:
- Masonry or grid layout (2 columns mobile, 3-4 columns desktop)
- Click to open lightbox with full-size image
- Keyboard navigation in lightbox (arrow keys, Escape)
- Lazy loading for images below fold
- Smooth transitions

**Performance**:
- Next.js Image component for optimization
- Blur placeholder while loading
- Responsive image sizes

#### StickyCTABar Component (Mobile Only)

**Purpose**: Fixed bottom bar with primary CTAs on mobile

**Props**:
```typescript
interface StickyCTABarProps {
  phoneNumber: string;
  cateringFormUrl: string;
}
```

**Behavior**:
- Fixed position at bottom of viewport
- Only visible on mobile (<768px)
- Two buttons: "Call Now" and "Book Catering"
- Slide up animation on page load
- Does not obscure page content

**Accessibility**:
- High contrast colors
- Large touch targets (44×44px minimum)
- ARIA labels for buttons

### Shared Component Library

**Button Component**:
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}
```

**Variants**:
- Primary: Deep Cajun red background, white text
- Secondary: Muted gold background, charcoal text
- Outline: Transparent background, red border
- Ghost: Transparent background, no border

**Card Component**:
```typescript
interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
}
```

**SectionHeading Component**:
```typescript
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
}
```

### State Management

**Global State** (React Context):
- Mobile menu open/close state
- Lightbox open/close state with current image
- Form submission loading states

**Server State** (React Query / SWR):
- Menu items from Sanity
- Event listings from Sanity
- Testimonials from Sanity
- Automatic refetching and caching

**Form State** (React Hook Form):
- Form field values
- Validation errors
- Submission status

### API Routes

**POST /api/catering-inquiry**:
- Validates form data with Zod schema
- Sends email via Resend API
- Returns success/error response
- Rate limited to 10 requests/minute per IP

**POST /api/contact**:
- Validates contact form data
- Sends email via Resend API
- Returns success/error response
- Rate limited to 10 requests/minute per IP

**POST /api/revalidate**:
- Webhook endpoint for Sanity
- Revalidates affected pages on content update
- Secured with secret token



## Data Models

### Sanity CMS Schema Definitions

#### MenuItem Document

```typescript
{
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Item Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'menuCategory' }],
      validation: Rule => Rule.required()
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Signature', value: 'signature' },
          { title: 'Fan Favorite', value: 'fan-favorite' },
          { title: 'Seasonal', value: 'seasonal' }
        ]
      }
    },
    {
      name: 'available',
      title: 'Available',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      hidden: true
    },
    // Future online ordering fields
    {
      name: 'preparationTime',
      title: 'Preparation Time (minutes)',
      type: 'number',
      description: 'For future online ordering'
    },
    {
      name: 'customizationOptions',
      title: 'Customization Options',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'For future online ordering'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category.name',
      media: 'image'
    }
  }
}
```

#### MenuCategory Document

```typescript
{
  name: 'menuCategory',
  title: 'Menu Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'sortOrder'
    }
  }
}
```

#### Event Document

```typescript
{
  name: 'event',
  title: 'Event/Location',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Event Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'startTime',
      title: 'Start Time',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'endTime',
      title: 'End Time',
      type: 'string'
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Current', value: 'current' },
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Past', value: 'past' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'mapLink',
      title: 'Google Maps Link',
      type: 'url'
    },
    {
      name: 'coordinates',
      title: 'Coordinates',
      type: 'geopoint'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'date',
      description: 'status'
    }
  }
}
```

#### Testimonial Document

```typescript
{
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(5)
    },
    {
      name: 'content',
      title: 'Review Content',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Review Date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'cateringRelated',
      title: 'Catering-Related',
      type: 'boolean',
      initialValue: false,
      description: 'Show on catering page'
    },
    {
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'customerName',
      subtitle: 'rating',
      description: 'content'
    },
    prepare(selection) {
      const { title, subtitle, description } = selection;
      return {
        title,
        subtitle: `${subtitle} stars`,
        description: description.substring(0, 100)
      };
    }
  }
}
```

#### GalleryImage Document

```typescript
{
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Food', value: 'food' },
          { title: 'Events', value: 'events' },
          { title: 'Behind the Scenes', value: 'behind-scenes' }
        ]
      }
    },
    {
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image'
    }
  }
}
```

#### FAQ Document

```typescript
{
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Catering', value: 'catering' },
          { title: 'Menu', value: 'menu' },
          { title: 'Locations', value: 'locations' }
        ]
      }
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category'
    }
  }
}
```

#### SiteSettings Document (Singleton)

```typescript
{
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.email()
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string'
    },
    {
      name: 'serviceArea',
      title: 'Service Area',
      type: 'string'
    },
    {
      name: 'operatingHours',
      title: 'Operating Hours',
      type: 'object',
      fields: [
        { name: 'monday', title: 'Monday', type: 'string' },
        { name: 'tuesday', title: 'Tuesday', type: 'string' },
        { name: 'wednesday', title: 'Wednesday', type: 'string' },
        { name: 'thursday', title: 'Thursday', type: 'string' },
        { name: 'friday', title: 'Friday', type: 'string' },
        { name: 'saturday', title: 'Saturday', type: 'string' },
        { name: 'sunday', title: 'Sunday', type: 'string' }
      ]
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'twitter', title: 'Twitter URL', type: 'url' }
      ]
    },
    {
      name: 'grubhubLink',
      title: 'Grubhub Link',
      type: 'url'
    }
  ]
}
```

### TypeScript Interfaces

#### Frontend Data Types

```typescript
// Menu Types
export interface MenuItem {
  id: string;
  name: string;
  slug: string;
  price: number;
  description?: string;
  image: {
    url: string;
    alt: string;
  };
  category: MenuCategory;
  tags?: ('signature' | 'fan-favorite' | 'seasonal')[];
  available: boolean;
  featured: boolean;
  sortOrder: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  sortOrder: number;
}

// Event Types
export interface Event {
  id: string;
  name: string;
  address: string;
  date: string;
  startTime: string;
  endTime?: string;
  status: 'current' | 'upcoming' | 'past';
  description?: string;
  mapLink?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Testimonial Types
export interface Testimonial {
  id: string;
  customerName: string;
  rating: number;
  content: string;
  date: string;
  featured: boolean;
  cateringRelated: boolean;
}

// Gallery Types
export interface GalleryImage {
  id: string;
  title: string;
  image: {
    url: string;
    alt: string;
  };
  caption?: string;
  category?: 'food' | 'events' | 'behind-scenes';
  featured: boolean;
  sortOrder: number;
}

// FAQ Types
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'catering' | 'menu' | 'locations';
  sortOrder: number;
}

// Site Settings Types
export interface SiteSettings {
  businessName: string;
  phoneNumber: string;
  email?: string;
  tagline?: string;
  serviceArea?: string;
  operatingHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
  grubhubLink?: string;
}

// Form Types
export interface CateringInquiry {
  fullName: string;
  email: string;
  phone: string;
  eventDate: string;
  guestCount: number;
  eventType: 'Birthday' | 'Graduation' | 'Wedding' | 'Corporate Event' | 
    'Family Gathering' | 'Crawfish Boil' | 'Other';
  serviceType: 'Pickup' | 'Delivery' | 'On-Site Catering';
  notes?: string;
}

export interface ContactInquiry {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}
```

### Database Relationships

```
MenuCategory (1) ──< (many) MenuItem
  - One category has many menu items
  - Menu items reference their category

Event (independent)
  - No relationships
  - Filtered by status and date

Testimonial (independent)
  - No relationships
  - Filtered by featured, approved, cateringRelated

GalleryImage (independent)
  - No relationships
  - Filtered by featured, category

FAQ (independent)
  - No relationships
  - Grouped by category, sorted by sortOrder

SiteSettings (singleton)
  - Only one document exists
  - Referenced globally across the site
```

### Data Fetching Patterns

#### GROQ Queries

**Fetch Featured Menu Items**:
```groq
*[_type == "menuItem" && featured == true && available == true] | order(sortOrder asc) {
  _id,
  name,
  slug,
  price,
  description,
  "image": image.asset->{url, "alt": ^.alt},
  "category": category->{name, slug},
  tags,
  sortOrder
}[0...3]
```

**Fetch All Menu Items by Category**:
```groq
*[_type == "menuCategory"] | order(sortOrder asc) {
  _id,
  name,
  slug,
  description,
  "items": *[_type == "menuItem" && references(^._id) && available == true] | order(sortOrder asc) {
    _id,
    name,
    slug,
    price,
    description,
    "image": image.asset->{url, "alt": ^.alt},
    tags
  }
}
```

**Fetch Current and Upcoming Events**:
```groq
*[_type == "event" && (status == "current" || status == "upcoming") && date >= now()] | order(date asc) {
  _id,
  name,
  address,
  date,
  startTime,
  endTime,
  status,
  description,
  mapLink,
  coordinates
}
```

**Fetch Featured Testimonials**:
```groq
*[_type == "testimonial" && featured == true && approved == true] | order(date desc) {
  _id,
  customerName,
  rating,
  content,
  date
}[0...6]
```

**Fetch Gallery Images**:
```groq
*[_type == "galleryImage"] | order(sortOrder asc) {
  _id,
  title,
  "image": image.asset->{url, "alt": ^.alt},
  caption,
  category,
  featured
}
```

**Fetch FAQs by Category**:
```groq
*[_type == "faq"] | order(category asc, sortOrder asc) {
  _id,
  question,
  answer,
  category
}
```

**Fetch Site Settings**:
```groq
*[_type == "siteSettings"][0] {
  businessName,
  phoneNumber,
  email,
  tagline,
  serviceArea,
  operatingHours,
  socialMedia,
  grubhubLink
}
```



## Error Handling

### Error Handling Strategy

The website implements a comprehensive error handling strategy across all layers:

#### Client-Side Error Handling

**Form Validation Errors**:
- Display field-specific error messages below inputs
- Highlight invalid fields with red border
- Prevent form submission until all errors resolved
- Error messages announced to screen readers via ARIA live regions

**Network Errors**:
- Display user-friendly error messages for failed API calls
- Provide fallback actions (e.g., "Please call us at (602) 596-8036")
- Retry mechanism for transient failures
- Timeout handling for slow connections

**Image Loading Errors**:
- Display placeholder image if primary image fails to load
- Graceful degradation for missing images
- Alt text always displayed for accessibility

**JavaScript Errors**:
- Error boundary components to catch React errors
- Fallback UI displayed instead of blank screen
- Error logged to monitoring service (e.g., Sentry)
- User shown option to refresh page

#### Server-Side Error Handling

**API Route Errors**:
```typescript
// Example error handling in API route
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate with Zod
    const validatedData = cateringFormSchema.parse(body);
    
    // Send email
    const result = await resend.emails.send({
      from: 'noreply@klous-cajun.com',
      to: 'catering@klous-cajun.com',
      subject: 'New Catering Inquiry',
      react: CateringInquiryEmail(validatedData)
    });
    
    if (result.error) {
      throw new Error('Failed to send email');
    }
    
    return Response.json({ success: true }, { status: 200 });
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    
    console.error('Catering inquiry error:', error);
    
    return Response.json(
      { error: 'Something went wrong. Please try again or call us at (602) 596-8036.' },
      { status: 500 }
    );
  }
}
```

**Data Fetching Errors**:
- Retry failed Sanity queries with exponential backoff
- Cache previous successful responses as fallback
- Display cached content with "Content may be outdated" notice
- Log errors to monitoring service

**Build-Time Errors**:
- Validate all Sanity content during build
- Fail build if required content missing
- Type checking with TypeScript to catch errors early
- Lint checks for code quality

#### Error Messages

**User-Facing Error Messages**:
- Clear, non-technical language
- Actionable guidance (what user should do next)
- Contact information provided as fallback
- Consistent tone matching brand voice

**Examples**:
- ✅ "Please enter a valid email address"
- ✅ "Something went wrong. Please try again or call us at (602) 596-8036"
- ✅ "This field is required"
- ❌ "Error 500: Internal Server Error"
- ❌ "Validation failed: email.invalid"

#### Error Logging and Monitoring

**Client-Side Logging**:
- JavaScript errors logged to Sentry or similar service
- User actions leading to error captured
- Browser and device information included
- PII (personally identifiable information) excluded

**Server-Side Logging**:
- API errors logged with request context
- Failed email sends logged with details
- CMS query failures logged
- Performance metrics tracked

**Alerting**:
- Critical errors trigger immediate alerts
- Email notifications for form submission failures
- Slack/Discord notifications for site downtime
- Weekly error summary reports

### Specific Error Scenarios

#### Form Submission Failures

**Scenario**: User submits catering form but email service is down

**Handling**:
1. Display error message: "We couldn't process your request right now. Please call us at (602) 596-8036 or try again in a few minutes."
2. Save form data to localStorage
3. Offer "Try Again" button to resubmit
4. Log error to monitoring service
5. Alert site administrator

#### Content Loading Failures

**Scenario**: Sanity CMS is unreachable

**Handling**:
1. Serve cached content from previous successful fetch
2. Display notice: "Content may be outdated. Refresh page for latest information."
3. Retry connection in background
4. Log error to monitoring service
5. Fallback to static content if cache unavailable

#### Image Loading Failures

**Scenario**: Menu item image fails to load

**Handling**:
1. Display placeholder image with brand colors
2. Show alt text prominently
3. Log error (may indicate broken image URL)
4. Continue displaying other page content normally

#### Rate Limiting

**Scenario**: User submits form multiple times rapidly

**Handling**:
1. Block submission after 10 requests in 1 minute
2. Display message: "Too many requests. Please wait a moment and try again."
3. Implement exponential backoff (1 min, 5 min, 15 min)
4. Log potential spam attempt
5. Honeypot field catches most bots before rate limit

#### Browser Compatibility Issues

**Scenario**: User on unsupported browser (IE11)

**Handling**:
1. Detect browser on page load
2. Display banner: "For the best experience, please use a modern browser like Chrome, Firefox, Safari, or Edge."
3. Provide links to download modern browsers
4. Site still functional with graceful degradation
5. No JavaScript errors thrown



## Testing Strategy

### Testing Approach

This website project requires a comprehensive testing strategy focused on **user interactions, content rendering, accessibility, and integration points**. Property-based testing is **NOT applicable** for this project because:

1. **UI Rendering**: Testing how components render is best done with snapshot tests and visual regression tests
2. **Content Management**: CMS integration testing requires example-based tests with known content
3. **Form Submissions**: Testing form behavior requires specific scenarios, not universal properties
4. **User Interactions**: Click handlers, navigation, and UI state changes are scenario-specific

**Testing Philosophy**:
- **Unit Tests**: Test individual components and utility functions in isolation
- **Integration Tests**: Test component interactions and API routes
- **End-to-End Tests**: Test complete user flows (form submission, navigation, etc.)
- **Accessibility Tests**: Automated and manual testing for WCAG 2.1 Level AA compliance
- **Visual Regression Tests**: Catch unintended UI changes
- **Performance Tests**: Lighthouse CI for performance metrics

### Testing Pyramid

```
                    ▲
                   / \
                  /   \
                 /  E2E \
                /  Tests \
               /-----------\
              /             \
             /  Integration  \
            /      Tests      \
           /-------------------\
          /                     \
         /      Unit Tests       \
        /                         \
       /___________________________\
```

**Distribution**:
- 60% Unit Tests (fast, isolated, many)
- 30% Integration Tests (moderate speed, component interactions)
- 10% E2E Tests (slow, full user flows, critical paths)

### Unit Testing

**Framework**: Jest + React Testing Library

**What to Test**:
- Component rendering with different props
- User interactions (clicks, form inputs)
- Conditional rendering logic
- Utility functions (formatters, validators)
- Custom hooks

**Example Unit Tests**:

```typescript
// MenuCard.test.tsx
describe('MenuCard', () => {
  it('renders menu item with all details', () => {
    const item = {
      id: '1',
      name: 'Boiled Crawfish Plate',
      price: 20,
      description: 'Comes with potatoes and sausage',
      image: { url: '/crawfish.jpg', alt: 'Crawfish plate' },
      category: { name: 'Featured Plates', slug: 'featured' },
      tags: ['signature', 'seasonal'],
      available: true,
      featured: true,
      sortOrder: 1
    };
    
    render(<MenuCard item={item} />);
    
    expect(screen.getByText('Boiled Crawfish Plate')).toBeInTheDocument();
    expect(screen.getByText('$20.00')).toBeInTheDocument();
    expect(screen.getByText('Comes with potatoes and sausage')).toBeInTheDocument();
    expect(screen.getByAltText('Crawfish plate')).toBeInTheDocument();
    expect(screen.getByText('Signature')).toBeInTheDocument();
    expect(screen.getByText('Seasonal')).toBeInTheDocument();
  });
  
  it('does not render unavailable items', () => {
    const item = { ...mockItem, available: false };
    
    const { container } = render(<MenuCard item={item} />);
    
    expect(container.firstChild).toBeNull();
  });
  
  it('formats price correctly', () => {
    const item = { ...mockItem, price: 15.5 };
    
    render(<MenuCard item={item} />);
    
    expect(screen.getByText('$15.50')).toBeInTheDocument();
  });
});

// CateringForm.test.tsx
describe('CateringForm', () => {
  it('displays validation errors for empty required fields', async () => {
    render(<CateringForm />);
    
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Name must be at least 2 characters')).toBeInTheDocument();
      expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
      expect(screen.getByText('Please enter a valid phone number')).toBeInTheDocument();
    });
  });
  
  it('validates email format', async () => {
    render(<CateringForm />);
    
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);
    
    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
    });
  });
  
  it('validates phone number format', async () => {
    render(<CateringForm />);
    
    const phoneInput = screen.getByLabelText(/phone/i);
    fireEvent.change(phoneInput, { target: { value: '123' } });
    fireEvent.blur(phoneInput);
    
    await waitFor(() => {
      expect(screen.getByText('Please enter a valid phone number')).toBeInTheDocument();
    });
  });
  
  it('submits form with valid data', async () => {
    const mockSubmit = jest.fn();
    render(<CateringForm onSubmit={mockSubmit} />);
    
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '602-555-1234' } });
    fireEvent.change(screen.getByLabelText(/event date/i), { target: { value: '2026-12-31' } });
    fireEvent.change(screen.getByLabelText(/guest count/i), { target: { value: '50' } });
    
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        fullName: 'John Doe',
        email: 'john@example.com',
        phone: '602-555-1234',
        eventDate: '2026-12-31',
        guestCount: 50,
        eventType: expect.any(String),
        serviceType: expect.any(String)
      });
    });
  });
});

// formatPhoneNumber.test.ts
describe('formatPhoneNumber', () => {
  it('formats 10-digit number correctly', () => {
    expect(formatPhoneNumber('6025551234')).toBe('(602) 555-1234');
  });
  
  it('handles numbers with dashes', () => {
    expect(formatPhoneNumber('602-555-1234')).toBe('(602) 555-1234');
  });
  
  it('handles numbers with spaces', () => {
    expect(formatPhoneNumber('602 555 1234')).toBe('(602) 555-1234');
  });
  
  it('returns original if invalid format', () => {
    expect(formatPhoneNumber('123')).toBe('123');
  });
});
```

**Coverage Goals**:
- 80% code coverage minimum
- 100% coverage for utility functions
- 90% coverage for components
- All critical paths tested

### Integration Testing

**Framework**: Jest + React Testing Library + MSW (Mock Service Worker)

**What to Test**:
- Component interactions (parent-child communication)
- API route handlers
- Data fetching and caching
- Form submission flows
- Navigation between pages

**Example Integration Tests**:

```typescript
// CateringPage.integration.test.tsx
describe('Catering Page Integration', () => {
  beforeEach(() => {
    // Mock Sanity API responses
    server.use(
      rest.get('https://api.sanity.io/v1/data/query/*', (req, res, ctx) => {
        return res(ctx.json({
          result: {
            testimonials: mockCateringTestimonials
          }
        }));
      })
    );
  });
  
  it('displays catering testimonials from CMS', async () => {
    render(<CateringPage />);
    
    await waitFor(() => {
      expect(screen.getByText('Great catering service!')).toBeInTheDocument();
      expect(screen.getByText('Perfect for our graduation party')).toBeInTheDocument();
    });
  });
  
  it('submits catering inquiry and shows confirmation', async () => {
    // Mock Resend API
    server.use(
      rest.post('/api/catering-inquiry', (req, res, ctx) => {
        return res(ctx.json({ success: true }));
      })
    );
    
    render(<CateringPage />);
    
    // Fill out form
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Jane Smith' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'jane@example.com' } });
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '602-555-5678' } });
    fireEvent.change(screen.getByLabelText(/event date/i), { target: { value: '2026-12-31' } });
    fireEvent.change(screen.getByLabelText(/guest count/i), { target: { value: '100' } });
    
    // Submit
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    // Check confirmation
    await waitFor(() => {
      expect(screen.getByText(/thank you.*contact you within 24 hours/i)).toBeInTheDocument();
    });
  });
});

// API Route Tests
describe('POST /api/catering-inquiry', () => {
  it('sends email with valid data', async () => {
    const validData = {
      fullName: 'John Doe',
      email: 'john@example.com',
      phone: '602-555-1234',
      eventDate: '2026-12-31',
      guestCount: 50,
      eventType: 'Birthday',
      serviceType: 'Delivery',
      notes: 'Please include extra napkins'
    };
    
    const response = await fetch('/api/catering-inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(validData)
    });
    
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.success).toBe(true);
  });
  
  it('returns 400 for invalid email', async () => {
    const invalidData = {
      fullName: 'John Doe',
      email: 'invalid-email',
      phone: '602-555-1234',
      eventDate: '2026-12-31',
      guestCount: 50,
      eventType: 'Birthday',
      serviceType: 'Delivery'
    };
    
    const response = await fetch('/api/catering-inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(invalidData)
    });
    
    expect(response.status).toBe(400);
    const data = await response.json();
    expect(data.error).toBe('Validation failed');
  });
  
  it('returns 429 when rate limited', async () => {
    // Submit 11 requests rapidly
    const requests = Array(11).fill(null).map(() =>
      fetch('/api/catering-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validData)
      })
    );
    
    const responses = await Promise.all(requests);
    const lastResponse = responses[responses.length - 1];
    
    expect(lastResponse.status).toBe(429);
  });
});
```

### End-to-End Testing

**Framework**: Playwright

**What to Test**:
- Critical user flows (catering inquiry, contact form)
- Navigation between pages
- Mobile responsive behavior
- Click-to-call functionality
- Gallery lightbox interaction

**Example E2E Tests**:

```typescript
// catering-flow.spec.ts
test.describe('Catering Inquiry Flow', () => {
  test('user can submit catering inquiry from homepage', async ({ page }) => {
    await page.goto('/');
    
    // Click "Book Catering" CTA
    await page.click('text=Book Catering');
    
    // Should navigate to catering page
    await expect(page).toHaveURL('/catering');
    
    // Fill out form
    await page.fill('input[name="fullName"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="phone"]', '602-555-1234');
    await page.fill('input[name="eventDate"]', '2026-12-31');
    await page.fill('input[name="guestCount"]', '75');
    await page.selectOption('select[name="eventType"]', 'Birthday');
    await page.selectOption('select[name="serviceType"]', 'Delivery');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Check confirmation message
    await expect(page.locator('text=Thank you')).toBeVisible();
    await expect(page.locator('text=contact you within 24 hours')).toBeVisible();
  });
  
  test('mobile sticky CTA bar works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 1000));
    
    // Sticky bar should be visible
    await expect(page.locator('[data-testid="sticky-cta-bar"]')).toBeVisible();
    
    // Click "Book Catering" in sticky bar
    await page.click('[data-testid="sticky-cta-bar"] >> text=Book Catering');
    
    // Should navigate to catering page
    await expect(page).toHaveURL('/catering');
  });
});

// navigation.spec.ts
test.describe('Site Navigation', () => {
  test('user can navigate to all pages', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to About
    await page.click('nav >> text=About');
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toContainText('About');
    
    // Navigate to Menu
    await page.click('nav >> text=Menu');
    await expect(page).toHaveURL('/menu');
    await expect(page.locator('h1')).toContainText('Menu');
    
    // Navigate to Catering
    await page.click('nav >> text=Catering');
    await expect(page).toHaveURL('/catering');
    await expect(page.locator('h1')).toContainText('Catering');
    
    // Navigate to Find Us
    await page.click('nav >> text=Find Us');
    await expect(page).toHaveURL('/find-us');
    await expect(page.locator('h1')).toContainText('Find Us');
    
    // Navigate to Reviews
    await page.click('nav >> text=Reviews');
    await expect(page).toHaveURL('/reviews');
    await expect(page.locator('h1')).toContainText('Reviews');
    
    // Navigate to Contact
    await page.click('nav >> text=Contact');
    await expect(page).toHaveURL('/contact');
    await expect(page.locator('h1')).toContainText('Contact');
    
    // Navigate to FAQ
    await page.click('nav >> text=FAQ');
    await expect(page).toHaveURL('/faq');
    await expect(page.locator('h1')).toContainText('FAQ');
  });
  
  test('mobile menu works correctly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Menu should be hidden initially
    await expect(page.locator('[data-testid="mobile-menu"]')).not.toBeVisible();
    
    // Click hamburger
    await page.click('[data-testid="hamburger-button"]');
    
    // Menu should be visible
    await expect(page.locator('[data-testid="mobile-menu"]')).toBeVisible();
    
    // Click a link
    await page.click('[data-testid="mobile-menu"] >> text=Menu');
    
    // Should navigate and close menu
    await expect(page).toHaveURL('/menu');
    await expect(page.locator('[data-testid="mobile-menu"]')).not.toBeVisible();
  });
});

// gallery.spec.ts
test.describe('Gallery', () => {
  test('lightbox opens and closes', async ({ page }) => {
    await page.goto('/');
    
    // Click gallery image
    await page.click('[data-testid="gallery"] img').first();
    
    // Lightbox should open
    await expect(page.locator('[data-testid="lightbox"]')).toBeVisible();
    
    // Close with X button
    await page.click('[data-testid="lightbox-close"]');
    
    // Lightbox should close
    await expect(page.locator('[data-testid="lightbox"]')).not.toBeVisible();
  });
  
  test('lightbox keyboard navigation works', async ({ page }) => {
    await page.goto('/');
    
    // Open lightbox
    await page.click('[data-testid="gallery"] img').first();
    
    // Press Escape
    await page.keyboard.press('Escape');
    
    // Lightbox should close
    await expect(page.locator('[data-testid="lightbox"]')).not.toBeVisible();
  });
});
```

### Accessibility Testing

**Automated Tools**:
- jest-axe for unit/integration tests
- Lighthouse CI for automated audits
- axe DevTools browser extension for manual testing

**Manual Testing**:
- Keyboard navigation (Tab, Enter, Escape, Arrow keys)
- Screen reader testing (NVDA, JAWS, VoiceOver)
- Color contrast verification
- Focus indicator visibility
- Form error announcement

**Example Accessibility Tests**:

```typescript
// accessibility.test.tsx
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

describe('Accessibility', () => {
  it('Homepage has no accessibility violations', async () => {
    const { container } = render(<Homepage />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  
  it('CateringForm has no accessibility violations', async () => {
    const { container } = render(<CateringForm />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  
  it('Navigation is keyboard accessible', () => {
    render(<Navigation currentPath="/" phoneNumber="602-596-8036" />);
    
    const firstLink = screen.getAllByRole('link')[0];
    firstLink.focus();
    
    expect(firstLink).toHaveFocus();
    
    // Tab to next link
    userEvent.tab();
    
    const secondLink = screen.getAllByRole('link')[1];
    expect(secondLink).toHaveFocus();
  });
  
  it('Form errors are announced to screen readers', async () => {
    render(<CateringForm />);
    
    const submitButton = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      const errorMessage = screen.getByText('Name must be at least 2 characters');
      expect(errorMessage).toHaveAttribute('role', 'alert');
      expect(errorMessage).toHaveAttribute('aria-live', 'polite');
    });
  });
});
```

### Visual Regression Testing

**Tool**: Percy or Chromatic

**What to Test**:
- Component visual appearance across breakpoints
- Page layouts on different screen sizes
- Hover states and interactions
- Dark mode (if implemented)

**Example Visual Tests**:

```typescript
// visual.spec.ts
test.describe('Visual Regression', () => {
  test('Homepage renders correctly on desktop', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 1920, height: 1080 });
    await percySnapshot(page, 'Homepage - Desktop');
  });
  
  test('Homepage renders correctly on mobile', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 375, height: 667 });
    await percySnapshot(page, 'Homepage - Mobile');
  });
  
  test('Menu page renders correctly', async ({ page }) => {
    await page.goto('/menu');
    await percySnapshot(page, 'Menu Page');
  });
  
  test('Button hover states', async ({ page }) => {
    await page.goto('/');
    const button = page.locator('text=Book Catering').first();
    await button.hover();
    await percySnapshot(page, 'Button Hover State');
  });
});
```

### Performance Testing

**Tool**: Lighthouse CI

**Metrics to Track**:
- Performance score (target: 90+ mobile, 95+ desktop)
- First Contentful Paint (target: < 1.8s)
- Largest Contentful Paint (target: < 2.5s)
- Time to Interactive (target: < 3.8s)
- Cumulative Layout Shift (target: < 0.1)
- Total Blocking Time (target: < 300ms)

**Lighthouse CI Configuration**:

```json
{
  "ci": {
    "collect": {
      "url": [
        "http://localhost:3000/",
        "http://localhost:3000/menu",
        "http://localhost:3000/catering",
        "http://localhost:3000/find-us"
      ],
      "numberOfRuns": 3
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.95 }],
        "categories:best-practices": ["error", { "minScore": 0.9 }],
        "categories:seo": ["error", { "minScore": 0.95 }]
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}
```

### Testing Workflow

**Development**:
1. Write unit tests alongside component development
2. Run tests on file save (watch mode)
3. Fix failing tests before committing

**Pre-Commit**:
1. Run unit tests (fast)
2. Run linter and type checker
3. Block commit if tests fail

**Pull Request**:
1. Run full test suite (unit + integration)
2. Run E2E tests on critical paths
3. Run Lighthouse CI
4. Run accessibility audits
5. Visual regression tests
6. Block merge if any tests fail

**Pre-Deployment**:
1. Run full test suite on staging environment
2. Manual QA testing
3. Accessibility manual testing
4. Cross-browser testing
5. Mobile device testing

**Post-Deployment**:
1. Smoke tests on production
2. Monitor error rates
3. Check performance metrics
4. Verify analytics tracking

### Test Data Management

**Mock Data**:
- Centralized mock data files for consistency
- Realistic data matching production structure
- Separate mocks for different test scenarios

**Test Database**:
- Sanity dataset for testing (separate from production)
- Seeded with representative content
- Reset between test runs

**Example Mock Data**:

```typescript
// mocks/menuItems.ts
export const mockMenuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Boiled Crawfish Plate',
    slug: 'boiled-crawfish-plate',
    price: 20,
    description: 'Comes with potatoes and sausage',
    image: {
      url: '/images/crawfish.jpg',
      alt: 'Boiled crawfish with potatoes and sausage'
    },
    category: {
      id: 'cat-1',
      name: 'Featured Plates',
      slug: 'featured-plates',
      sortOrder: 1
    },
    tags: ['signature', 'seasonal'],
    available: true,
    featured: true,
    sortOrder: 1
  },
  // ... more items
];

// mocks/testimonials.ts
export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    customerName: 'Sajani J.',
    rating: 5,
    content: 'Had Jambalaya catered for a party. Delivery was early, which was great! Food was delicious, everybody was going back for seconds and thirds.',
    date: '2025-03-20',
    featured: true,
    cateringRelated: true
  },
  // ... more testimonials
];
```

### Continuous Integration

**GitHub Actions Workflow**:

```yaml
name: Test Suite

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run type check
        run: npm run type-check
      
      - name: Run unit tests
        run: npm run test:unit
      
      - name: Run integration tests
        run: npm run test:integration
      
      - name: Run E2E tests
        run: npm run test:e2e
      
      - name: Run Lighthouse CI
        run: npm run lighthouse:ci
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
```

### Testing Documentation

**Test Coverage Reports**:
- Generated after each test run
- Displayed in pull requests
- Tracked over time to prevent regression

**Test Documentation**:
- README in test directory explaining structure
- Comments in complex test cases
- Examples of common testing patterns

**Accessibility Audit Reports**:
- Automated audit results saved
- Manual testing checklist completed
- Issues tracked in project management tool



## Visual Design System

### Color Palette

**Primary Colors**:

```css
--cajun-red: #8B0000;        /* Deep Cajun red - primary brand color */
--charcoal: #2B2B2B;         /* Blackened charcoal - text and headers */
--cream: #F5F5DC;            /* Warm cream - backgrounds */
--gold: #D4AF37;             /* Muted gold - accents and highlights */
```

**Secondary Colors**:

```css
--red-dark: #6B0000;         /* Darker red for hover states */
--red-light: #A52A2A;        /* Lighter red for backgrounds */
--charcoal-light: #4A4A4A;   /* Lighter charcoal for secondary text */
--cream-dark: #E8E8D0;       /* Darker cream for subtle backgrounds */
--gold-light: #E5C158;       /* Lighter gold for hover states */
```

**Utility Colors**:

```css
--white: #FFFFFF;            /* Pure white */
--black: #000000;            /* Pure black */
--error: #DC2626;            /* Error messages */
--success: #16A34A;          /* Success messages */
--warning: #EA580C;          /* Warning messages */
--info: #0284C7;             /* Informational messages */
```

**Semantic Colors**:

```css
--text-primary: var(--charcoal);
--text-secondary: var(--charcoal-light);
--text-inverse: var(--white);
--bg-primary: var(--white);
--bg-secondary: var(--cream);
--bg-tertiary: var(--cream-dark);
--border-default: #E5E7EB;
--border-focus: var(--cajun-red);
```

**Color Usage Guidelines**:
- **Cajun Red**: Primary CTAs, links, active states, brand elements
- **Charcoal**: Body text, headings, icons
- **Cream**: Page backgrounds, card backgrounds, alternating sections
- **Gold**: Accent elements, badges, special highlights
- **White**: Card backgrounds, button text, overlays

**Contrast Ratios** (WCAG 2.1 Level AA):
- Cajun red (#8B0000) on white: 8.59:1 ✅
- Charcoal (#2B2B2B) on white: 13.28:1 ✅
- Charcoal (#2B2B2B) on cream (#F5F5DC): 11.85:1 ✅
- White on cajun red: 8.59:1 ✅
- Gold (#D4AF37) on charcoal: 4.89:1 ✅

### Typography

**Font Families**:

```css
--font-heading: 'Playfair Display', Georgia, serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-accent: 'Bebas Neue', Impact, sans-serif;
```

**Font Weights**:

```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-black: 900;
```

**Type Scale** (Mobile-first with responsive scaling):

```css
/* Headings */
--text-h1: clamp(2.5rem, 5vw, 4rem);        /* 40px - 64px */
--text-h2: clamp(2rem, 4vw, 3rem);          /* 32px - 48px */
--text-h3: clamp(1.5rem, 3vw, 2rem);        /* 24px - 32px */
--text-h4: clamp(1.25rem, 2.5vw, 1.5rem);   /* 20px - 24px */
--text-h5: clamp(1.125rem, 2vw, 1.25rem);   /* 18px - 20px */
--text-h6: 1rem;                             /* 16px */

/* Body */
--text-base: 1rem;                           /* 16px */
--text-lg: 1.125rem;                         /* 18px */
--text-sm: 0.875rem;                         /* 14px */
--text-xs: 0.75rem;                          /* 12px */

/* Display */
--text-display: clamp(3rem, 6vw, 5rem);     /* 48px - 80px */
```

**Line Heights**:

```css
--leading-tight: 1.2;
--leading-snug: 1.375;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
--leading-loose: 2;
```

**Letter Spacing**:

```css
--tracking-tighter: -0.05em;
--tracking-tight: -0.025em;
--tracking-normal: 0;
--tracking-wide: 0.025em;
--tracking-wider: 0.05em;
--tracking-widest: 0.1em;
```

**Typography Usage**:

```css
/* Headings */
h1, .h1 {
  font-family: var(--font-heading);
  font-size: var(--text-h1);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
  color: var(--text-primary);
}

h2, .h2 {
  font-family: var(--font-heading);
  font-size: var(--text-h2);
  font-weight: var(--font-weight-bold);
  line-height: var(--leading-tight);
  color: var(--text-primary);
}

h3, .h3 {
  font-family: var(--font-heading);
  font-size: var(--text-h3);
  font-weight: var(--font-weight-semibold);
  line-height: var(--leading-snug);
  color: var(--text-primary);
}

/* Body */
body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-weight-normal);
  line-height: var(--leading-normal);
  color: var(--text-primary);
}

/* Accent text (taglines, badges) */
.accent {
  font-family: var(--font-accent);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
}
```

### Spacing System

**8px Grid System**:

```css
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

**Section Spacing**:

```css
--section-padding-mobile: var(--space-12);    /* 48px */
--section-padding-desktop: var(--space-20);   /* 80px */
--section-gap: var(--space-16);               /* 64px */
```

**Component Spacing**:

```css
--card-padding: var(--space-6);               /* 24px */
--button-padding-x: var(--space-6);           /* 24px */
--button-padding-y: var(--space-3);           /* 12px */
--input-padding: var(--space-4);              /* 16px */
```

### Border Radius

```css
--radius-none: 0;
--radius-sm: 0.25rem;    /* 4px */
--radius-md: 0.5rem;     /* 8px */
--radius-lg: 0.75rem;    /* 12px */
--radius-xl: 1rem;       /* 16px */
--radius-2xl: 1.5rem;    /* 24px */
--radius-full: 9999px;   /* Fully rounded */
```

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
--shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
```

### Transitions

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slower: 500ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Breakpoints

```css
--breakpoint-sm: 640px;    /* Small devices (landscape phones) */
--breakpoint-md: 768px;    /* Medium devices (tablets) */
--breakpoint-lg: 1024px;   /* Large devices (desktops) */
--breakpoint-xl: 1280px;   /* Extra large devices (large desktops) */
--breakpoint-2xl: 1536px;  /* 2X large devices (larger desktops) */
```

**Media Query Usage**:

```css
/* Mobile-first approach */
.component {
  /* Mobile styles (default) */
  padding: var(--space-4);
}

@media (min-width: 768px) {
  /* Tablet and up */
  .component {
    padding: var(--space-8);
  }
}

@media (min-width: 1024px) {
  /* Desktop and up */
  .component {
    padding: var(--space-12);
  }
}
```

### Component Styles

#### Buttons

```css
/* Primary Button */
.btn-primary {
  background-color: var(--cajun-red);
  color: var(--white);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-weight-semibold);
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  background-color: var(--red-dark);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.btn-primary:focus-visible {
  outline: 2px solid var(--cajun-red);
  outline-offset: 2px;
}

/* Secondary Button */
.btn-secondary {
  background-color: var(--gold);
  color: var(--charcoal);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-weight-semibold);
  border: none;
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn-secondary:hover {
  background-color: var(--gold-light);
}

/* Outline Button */
.btn-outline {
  background-color: transparent;
  color: var(--cajun-red);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-weight-semibold);
  border: 2px solid var(--cajun-red);
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn-outline:hover {
  background-color: var(--cajun-red);
  color: var(--white);
}

/* Button Sizes */
.btn-sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
}

.btn-lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-lg);
}

.btn-full {
  width: 100%;
}
```

#### Cards

```css
.card {
  background-color: var(--white);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.card-elevated {
  box-shadow: var(--shadow-lg);
}

.card-outlined {
  border: 1px solid var(--border-default);
  box-shadow: none;
}
```

#### Form Inputs

```css
.input {
  width: 100%;
  padding: var(--space-4);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--text-primary);
  background-color: var(--white);
  transition: all var(--transition-base);
}

.input:focus {
  outline: none;
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3px rgba(139, 0, 0, 0.1);
}

.input:disabled {
  background-color: var(--bg-tertiary);
  cursor: not-allowed;
  opacity: 0.6;
}

.input-error {
  border-color: var(--error);
}

.input-error:focus {
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
}

/* Labels */
.label {
  display: block;
  margin-bottom: var(--space-2);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
}

.label-required::after {
  content: ' *';
  color: var(--error);
}

/* Error Messages */
.error-message {
  display: block;
  margin-top: var(--space-2);
  font-size: var(--text-sm);
  color: var(--error);
}
```

#### Badges

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-family: var(--font-accent);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
}

.badge-signature {
  background-color: var(--cajun-red);
  color: var(--white);
}

.badge-favorite {
  background-color: var(--gold);
  color: var(--charcoal);
}

.badge-seasonal {
  background-color: var(--charcoal);
  color: var(--white);
}
```

### Layout Patterns

#### Container

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}

@media (min-width: 768px) {
  .container {
    padding-left: var(--space-8);
    padding-right: var(--space-8);
  }
}
```

#### Grid Layouts

```css
/* Responsive Grid */
.grid {
  display: grid;
  gap: var(--space-6);
}

.grid-cols-1 {
  grid-template-columns: repeat(1, 1fr);
}

@media (min-width: 768px) {
  .grid-cols-2-md {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-cols-3-lg {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .grid-cols-4-lg {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

#### Section Spacing

```css
.section {
  padding-top: var(--section-padding-mobile);
  padding-bottom: var(--section-padding-mobile);
}

@media (min-width: 768px) {
  .section {
    padding-top: var(--section-padding-desktop);
    padding-bottom: var(--section-padding-desktop);
  }
}

.section-alt {
  background-color: var(--bg-secondary);
}
```

### Animation Guidelines

**Hover Effects**:
- Subtle scale (1.02-1.05)
- Slight elevation (translateY -1px to -2px)
- Shadow increase
- Color transitions

**Loading States**:
- Skeleton screens for content loading
- Spinner for button loading states
- Pulse animation for placeholders

**Page Transitions**:
- Fade in on page load
- Smooth scroll behavior
- Stagger animations for lists

**Example Animations**:

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.fade-in {
  animation: fadeIn var(--transition-slow) ease-out;
}

.pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.spin {
  animation: spin 1s linear infinite;
}
```

### Responsive Images

```css
.responsive-image {
  width: 100%;
  height: auto;
  display: block;
}

.aspect-ratio-16-9 {
  aspect-ratio: 16 / 9;
  object-fit: cover;
}

.aspect-ratio-4-3 {
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.aspect-ratio-square {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
```

### Accessibility Styles

```css
/* Focus Visible */
*:focus-visible {
  outline: 2px solid var(--cajun-red);
  outline-offset: 2px;
}

/* Skip to Content Link */
.skip-to-content {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--cajun-red);
  color: var(--white);
  padding: var(--space-2) var(--space-4);
  text-decoration: none;
  z-index: 100;
}

.skip-to-content:focus {
  top: 0;
}

/* Screen Reader Only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```



## Page Specifications

### Homepage

**Purpose**: Convert visitors into catering inquiries and phone calls while showcasing authentic Cajun cuisine

**Layout Structure**:

1. **Hero Section** (Full viewport height on mobile, 70vh on desktop)
   - Background: High-quality image of signature dish (crawfish boil or jambalaya)
   - Overlay: Semi-transparent dark gradient for text readability
   - Headline: "Authentic Louisiana Flavor in Arizona"
   - Subheadline: "K.Lou's Cajun Shack & Catering brings authentic Cajun and Creole comfort food to Arizona through catering, pop-ups, and specialty boils."
   - Primary CTA: "Book Catering" (prominent, cajun red button)
   - Secondary CTA: "Call Now (602) 596-8036" (outline button)
   - Tertiary CTA: "See Current Location" (text link with arrow)

2. **Trust Bar** (Horizontal scroll on mobile, grid on desktop)
   - 6 badges in a row
   - Icons + text for each badge
   - Badges: "Authentic Cajun & Creole", "Catering for Events of All Sizes", "Crawfish Boil Reservations", "Family-Run Hospitality", "Black-Owned Business", "Phoenix / Tempe Area"
   - Background: Cream color
   - Padding: 48px mobile, 64px desktop

3. **Featured Menu Section**
   - Heading: "Signature Dishes"
   - Subheading: "Bold Louisiana flavors that keep people coming back"
   - 3 menu cards in grid (1 column mobile, 3 columns desktop)
   - Each card: Image, name, price, description, tags
   - CTA: "View Full Menu" button centered below cards

4. **Catering Spotlight**
   - Two-column layout (stacked on mobile)
   - Left: Image of catered event or large food spread
   - Right: Content
     - Heading: "Catering That Makes Your Event Memorable"
     - Description: "From intimate family gatherings to large celebrations, we bring authentic Cajun flavor and Southern hospitality to your event."
     - Event types list with icons
     - CTA: "Request Catering Quote" button

5. **Location Module**
   - Heading: "Find Us"
   - Current location card (if available)
     - Location name, address, date, time
     - "Get Directions" link
   - Upcoming events list (3 most recent)
   - Background: White card on cream background
   - CTA: "See All Locations" link

6. **Testimonials Section**
   - Heading: "What People Are Saying"
   - Overall rating: 4.5 stars with review count
   - 6 testimonial cards in grid (1 column mobile, 2 columns tablet, 3 columns desktop)
   - Each card: Customer name, star rating, review excerpt, date
   - CTA: "Read More Reviews" link

7. **About Preview**
   - Two-column layout (stacked on mobile)
   - Left: Content
     - Heading: "Real Cajun Food. Real Hospitality."
     - Story excerpt (2-3 paragraphs)
     - CTA: "Learn Our Story" button
   - Right: Image of owner or food preparation

8. **Gallery**
   - Heading: "See What We're Cooking"
   - Masonry grid of 7+ food images
   - Lazy loading for images
   - Click to open lightbox
   - CTA: "View Full Gallery" link (if more images exist)

9. **CTA Banner**
   - Full-width section with cajun red background
   - Heading: "Ready to Experience Authentic Cajun Flavor?"
   - Two CTAs side-by-side: "Book Catering" and "Call Now"
   - White text on red background

10. **Footer**
    - Three-column layout (stacked on mobile)
    - Column 1: Business info (logo, tagline, phone, email)
    - Column 2: Quick links (all pages)
    - Column 3: Hours, social media links
    - Bottom bar: Copyright, "Come Hungry, Leave Happy"

**SEO Metadata**:
- Title: "K.Lou's Cajun Shack & Catering | Authentic Louisiana Food in Phoenix"
- Meta Description: "Experience authentic Cajun and Creole cuisine in Phoenix. K.Lou's offers catering, pop-ups, and crawfish boils with 30 years of Louisiana cooking expertise. Book your event today!"
- Keywords: Cajun catering Phoenix, Louisiana food Arizona, crawfish boil catering, authentic Cajun food Tempe
- Schema: LocalBusiness, Restaurant

### About Page

**Purpose**: Build trust and connection through authentic brand story

**Layout Structure**:

1. **Page Hero**
   - Heading: "About K.Lou's"
   - Subheading: "30 Years of Louisiana Flavor, Now in Arizona"
   - Background: Subtle pattern or image

2. **Story Section**
   - Heading: "Our Story"
   - Content: 3-4 paragraphs about Roderick M., 30 years experience, bringing authentic Louisiana cooking to Arizona
   - Image: Owner photo or family photo
   - Pull quote: Highlighted customer testimonial or owner quote

3. **Why Us Section**
   - Heading: "Why People Keep Coming Back"
   - 6 reason cards in grid (1 column mobile, 2 columns tablet, 3 columns desktop)
   - Each card: Icon, heading, description
   - Reasons: Authentic taste, memorable catering, welcoming service, dependable communication, fair pricing, hard-to-find Cajun food in Arizona

4. **Values Section**
   - Heading: "What We Stand For"
   - Content: Family-run hospitality, Black-owned business, community focus
   - Background: Cream color

5. **Page CTA**
   - Heading: "Taste the Difference"
   - CTAs: "View Menu" and "Book Catering"

**SEO Metadata**:
- Title: "About K.Lou's Cajun Shack | 30 Years of Louisiana Cooking"
- Meta Description: "Meet Roderick M. and learn how K.Lou's brings 30 years of authentic Louisiana cooking experience to Phoenix. Family-run, Black-owned, and committed to real Cajun flavor."

### Menu Page

**Purpose**: Display complete menu with prices and descriptions

**Layout Structure**:

1. **Page Hero**
   - Heading: "Our Menu"
   - Subheading: "Authentic Cajun & Creole Favorites"
   - Note: "Menu availability may vary by pop-up, season, or catering event"

2. **Menu Categories** (3 sections)
   
   **Featured Plates**:
   - Boiled Crawfish Plate - $20
     - Description: "Comes with potatoes and sausage"
     - Tags: Signature, Seasonal
   - Cajun Fried Gator Plate - $18
     - Description: "Comes with potato salad and sweet peas or green beans"
     - Tags: Signature
   - Southern Fried Catfish & Jambalaya Plate - $15
     - Description: "Comes with potato salad and sweet peas or green beans"
     - Tags: Fan Favorite
   
   **Frozen Treats**:
   - Snowballs - $6
     - Description: "1 flavor included, add-on flavors +$2"
     - Flavor list: All 19 flavors in a grid or dropdown
   
   **Drinks**:
   - Bottled Smart Water - $3 each
     - Description: "20 fl oz, 2 for $6"

3. **Menu Disclaimer**
   - Operating hours: Mon-Thu: 10:30 AM - 5:30 PM, Fri-Sat: 11:00 AM - 5:30 PM, Sun: Closed
   - Note about seasonal availability (crawfish Feb-Aug)
   - Note about catering custom menus

4. **Page CTA**
   - Heading: "Want to Order?"
   - CTAs: "Book Catering" and "Call to Order"

**SEO Metadata**:
- Title: "Menu | K.Lou's Cajun Shack & Catering"
- Meta Description: "View our authentic Cajun menu featuring crawfish boils, fried gator, catfish, jambalaya, and famous snowballs. Seasonal specialties and catering options available."

### Catering Page

**Purpose**: Convert visitors into catering inquiries

**Layout Structure**:

1. **Page Hero**
   - Heading: "Catering Services"
   - Subheading: "Bring Authentic Cajun Flavor to Your Event"
   - Background: Image of catered event

2. **Catering Overview**
   - Heading: "Events of All Sizes"
   - Content: Description of catering services
   - Key points: Custom menus, delivery/pickup/on-site, professional service

3. **Event Types Section**
   - Heading: "Perfect For"
   - Grid of event types with icons (2 columns mobile, 4 columns desktop)
   - Types: Private parties, birthdays, graduations, weddings, corporate events, family gatherings, vendor events, community events, celebrations, crawfish boils, Louisiana/Mardi Gras themed events

4. **Service Options**
   - Heading: "How We Serve You"
   - 3 cards: Pickup, Delivery, On-Site Catering
   - Each card: Icon, heading, description

5. **Crawfish Boil Section**
   - Heading: "Crawfish Boil Reservations"
   - Content: Seasonal availability (February-August), booking process
   - Image: Crawfish boil spread
   - CTA: "Reserve Your Crawfish Boil"

6. **Catering Form**
   - Heading: "Request a Quote"
   - Fields: Full name, email, phone, event date, guest count, event type (dropdown), service type (dropdown), notes (textarea)
   - Submit button: "Send Inquiry"
   - Success message: "Thank you! We'll contact you within 24 hours to discuss your event."

7. **Catering Testimonials**
   - Heading: "What Our Catering Clients Say"
   - 3-4 testimonials specific to catering experiences
   - Grid layout

8. **Page CTA**
   - Heading: "Ready to Book?"
   - CTAs: "Call Now" and "Email Us"

**SEO Metadata**:
- Title: "Catering Services | K.Lou's Cajun Shack Phoenix"
- Meta Description: "Book authentic Cajun catering for your Phoenix event. Crawfish boils, jambalaya, gumbo, and more. Serving events of all sizes with 30 years of experience."

### Find Us Page

**Purpose**: Help visitors locate current pop-up and upcoming events

**Layout Structure**:

1. **Page Hero**
   - Heading: "Find Us"
   - Subheading: "Current Locations & Upcoming Events"

2. **Current Location** (if available)
   - Large card with current pop-up details
   - Location name, address, date, time
   - Map preview
   - "Get Directions" button

3. **Upcoming Events**
   - Heading: "Upcoming Pop-Ups"
   - List of upcoming events (chronological)
   - Each event: Name, address, date, time, description
   - "Get Directions" link for each

4. **Map Embed**
   - Interactive Google Maps embed
   - Markers for known locations:
     - 615 S Hardy Dr, Tempe, AZ 85281
     - Yilo Superstore at 2841 W. Thunderbird Rd
   - Zoom to show both locations

5. **Operating Hours**
   - Heading: "Hours"
   - Table or list of hours by day
   - Note: "Hours may vary by location. Call ahead to confirm."

6. **Service Area**
   - Heading: "We Serve"
   - Description: "Phoenix / Tempe, Arizona and surrounding areas"
   - Note about catering delivery range

7. **Page CTA**
   - Heading: "Can't Find Us?"
   - Content: "We're always adding new locations. Call us to find out where we'll be next!"
   - CTA: "Call Now"

**SEO Metadata**:
- Title: "Locations | K.Lou's Cajun Shack Phoenix & Tempe"
- Meta Description: "Find K.Lou's Cajun Shack pop-up locations in Phoenix and Tempe. Check our current schedule and upcoming events. Serving authentic Cajun food across the Valley."

### Reviews Page

**Purpose**: Build trust through customer testimonials

**Layout Structure**:

1. **Page Hero**
   - Heading: "Customer Reviews"
   - Subheading: "See What People Are Saying"

2. **Overall Rating**
   - Large star display: 4.5 out of 5
   - Review count: "Based on 8 reviews"
   - Rating breakdown (5 stars: X, 4 stars: X, etc.)

3. **Testimonial Grid**
   - All testimonials in grid (1 column mobile, 2 columns desktop)
   - Each card: Customer name, star rating, review content, date
   - Sort options: Most recent, Highest rated

4. **Leave Review CTA**
   - Heading: "Had a Great Experience?"
   - Content: "We'd love to hear from you!"
   - CTA: "Leave a Review" (links to Google/Yelp)

**SEO Metadata**:
- Title: "Reviews | K.Lou's Cajun Shack & Catering"
- Meta Description: "Read reviews from K.Lou's customers. See why people love our authentic Cajun food, catering service, and Southern hospitality. 4.5 stars from satisfied customers."

### Contact Page

**Purpose**: Provide multiple contact methods

**Layout Structure**:

1. **Page Hero**
   - Heading: "Contact Us"
   - Subheading: "We're Here to Help"

2. **Contact Info** (Two-column layout, stacked on mobile)
   - Left: Contact methods
     - Phone: (602) 596-8036 (click-to-call)
     - Email: (if available)
     - Business hours
     - Service area
   - Right: Contact form
     - Fields: Name, email, phone, message
     - Submit button: "Send Message"
     - Success message: "Thank you! We'll get back to you soon."

3. **Response Time**
   - Note: "We typically respond within 24 hours. For urgent inquiries, please call."

4. **Social Media**
   - Heading: "Follow Us"
   - Social media icons/links
   - Instagram: @k.lous_cajunshackcateringllc
   - Facebook: K.Lou's Cajun Shack & Catering, LLC

5. **Page CTA**
   - Heading: "Ready to Order?"
   - CTAs: "View Menu" and "Book Catering"

**SEO Metadata**:
- Title: "Contact | K.Lou's Cajun Shack & Catering"
- Meta Description: "Contact K.Lou's Cajun Shack for catering inquiries, orders, or questions. Call (602) 596-8036 or send us a message. Serving Phoenix and Tempe, Arizona."

### FAQ Page

**Purpose**: Answer common questions to reduce support burden

**Layout Structure**:

1. **Page Hero**
   - Heading: "Frequently Asked Questions"
   - Subheading: "Find Answers to Common Questions"

2. **FAQ Accordion**
   - Questions organized by category (optional tabs or sections)
   - Categories: General, Catering, Menu, Locations
   - Each FAQ: Question (clickable), Answer (expands/collapses)
   
   **Questions**:
   1. Do you cater private events?
   2. How do I book catering?
   3. Do you offer crawfish boils?
   4. How do I find your current location?
   5. Does the menu change by event or season?
   6. How far in advance should I book?
   7. Can I place a large order?
   8. Do you offer custom catering menus?
   9. Are snowballs available at every event?
   10. What areas do you serve?

3. **Still Have Questions?**
   - Heading: "Didn't Find What You're Looking For?"
   - Content: "We're happy to help!"
   - CTAs: "Call Us" and "Send a Message"

**SEO Metadata**:
- Title: "FAQ | K.Lou's Cajun Shack & Catering"
- Meta Description: "Get answers to common questions about K.Lou's Cajun Shack catering, menu, locations, and services. Learn about crawfish boils, booking, and more."

