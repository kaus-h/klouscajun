import { NextResponse } from 'next/server'
import { z } from 'zod'

const cateringFormSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string(),
  eventDate: z.string(),
  guestCount: z.string(),
  eventType: z.string(),
  serviceType: z.string(),
  notes: z.string().optional(),
  honeypot: z.string().max(0).optional(),
})

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT = 10 // requests per minute
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute in ms

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now })
    return true
  }

  if (record.count >= RATE_LIMIT) {
    return false
  }

  record.count++
  return true
}

export async function POST(request: Request) {
  try {
    // Get IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    const body = await request.json()

    // Validate the form data
    const result = cateringFormSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.flatten() },
        { status: 400 }
      )
    }

    const data = result.data

    // Check honeypot (spam prevention)
    if (data.honeypot) {
      // Silently accept but don't process spam submissions
      return NextResponse.json({ success: true })
    }

    // In production, you would send this to an email service like Resend
    // For now, we'll just log it and return success
    console.log('Catering inquiry received:', {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      eventDate: data.eventDate,
      guestCount: data.guestCount,
      eventType: data.eventType,
      serviceType: data.serviceType,
      notes: data.notes,
      timestamp: new Date().toISOString(),
    })

    // TODO: Implement actual email sending with Resend
    // Example:
    // await resend.emails.send({
    //   from: 'catering@klouscajun.com',
    //   to: 'owner@klouscajun.com',
    //   subject: `New Catering Inquiry from ${data.fullName}`,
    //   html: emailTemplate(data),
    // })

    return NextResponse.json({
      success: true,
      message: 'Catering inquiry submitted successfully',
    })
  } catch (error) {
    console.error('Catering form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
