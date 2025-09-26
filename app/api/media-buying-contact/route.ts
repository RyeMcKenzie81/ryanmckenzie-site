import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'brandName', 'websiteUrl', 'monthlySpend', 'storeRevenue', 'hearAbout'];
    for (const field of requiredFields) {
      if (!formData[field] || !formData[field].trim()) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Basic spam prevention checks
    const suspiciousPatterns = [
      /viagra|cialis|pharmacy/i,
      /bitcoin|cryptocurrency|crypto/i,
      /click here|visit now|act now/i,
      /\$\$\$|\!\!\!/,
      /http.*http/i, // Multiple URLs
    ];

    const allText = Object.values(formData).join(' ').toLowerCase();
    const hasSuspiciousContent = suspiciousPatterns.some(pattern => pattern.test(allText));

    if (hasSuspiciousContent) {
      console.log('Spam detected in media buying form:', formData);
      return NextResponse.json(
        { error: 'Invalid submission detected' },
        { status: 400 }
      );
    }

    // Rate limiting: Simple check for obvious spam (same email submitting quickly)
    // In production, you'd want to use a proper rate limiting service
    const userAgent = request.headers.get('user-agent') || '';
    if (userAgent.includes('bot') || userAgent.includes('crawler')) {
      return NextResponse.json(
        { error: 'Automated submissions not allowed' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // URL validation (flexible - accepts with or without protocol)
    const urlRegex = /^(https?:\/\/)?.+\..+/;
    if (!urlRegex.test(formData.websiteUrl)) {
      return NextResponse.json(
        { error: 'Invalid website URL format' },
        { status: 400 }
      );
    }

    // Normalize the URL by adding https:// if no protocol is provided
    const normalizedUrl = formData.websiteUrl.startsWith('http')
      ? formData.websiteUrl
      : `https://${formData.websiteUrl}`;

    // Initialize Resend with API key
    const resendApiKey = process.env.RESEND_API_KEY || 're_chNyw93d_HyxCJMUJ6Ld2rLjN6fkiiiqi';
    const resend = new Resend(resendApiKey);

    // Prepare email content
    const emailContent = `
New Media Buying Inquiry from ${formData.brandName}

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Brand Details:
- Brand Name: ${formData.brandName}
- Website: ${normalizedUrl}

Financial Information:
- Current Monthly Meta Spend: ${formData.monthlySpend}
- Monthly Store Revenue: ${formData.storeRevenue}

Source:
- How they heard about us: ${formData.hearAbout}

---
Submitted via ryanmckenzie.com/media-buying
Time: ${new Date().toISOString()}
`;

    // Send email using Resend
    try {
      const emailResponse = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'ryan.mckenzie@gmail.com',
        subject: `Media Buying Request: ${formData.brandName}`,
        text: emailContent,
      });

      console.log('Email sent successfully:', emailResponse);
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }
    return NextResponse.json(
      {
        message: 'Media buying inquiry submitted successfully',
        debug: process.env.NODE_ENV === 'development' ? {
          subject: `Media Buying Request: ${formData.brandName}`,
          content: emailContent
        } : undefined
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Media buying contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}