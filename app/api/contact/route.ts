import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Format email content
    const emailSubject = `Contact Form: ${service || 'General Inquiry'}`;
    const emailBody = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Phone: ${phone || 'Not provided'}
Service Interest: ${service || 'Not specified'}

Message:
${message}

---
This message was sent from the GraphClic website contact form.
    `.trim();

    // For now, we'll use mailto as a fallback
    // In production, you can integrate with:
    // - SendGrid, Mailgun, or similar email service
    // - Nodemailer with SMTP
    // - AWS SES
    // - Resend, Postmark, etc.

    // Return success - the client will handle opening mailto
    return NextResponse.json(
      { 
        success: true,
        message: 'Form submitted successfully',
        mailto: `mailto:team@graphclicgroup.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
