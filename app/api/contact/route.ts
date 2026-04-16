import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const { name, email, phone, message, honeypot } = body

    // Check honeypot (anti-spam)
    if (honeypot) {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      )
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // In a production environment, you would:
    // 1. Send an email notification
    // 2. Store the inquiry in a database
    // 3. Integrate with a CRM
    
    // For now, we'll log the inquiry and return success
    console.log('Contact form submission:', {
      name,
      email,
      phone: phone || 'Not provided',
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate a slight delay to show loading state
    await new Promise(resolve => setTimeout(resolve, 500))

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message. We will get back to you within 24 hours.',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    )
  }
}
