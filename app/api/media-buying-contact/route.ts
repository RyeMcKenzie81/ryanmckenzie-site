import { NextRequest, NextResponse } from 'next/server';

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

    // URL validation
    const urlRegex = /^https?:\/\/.+\..+/;
    if (!urlRegex.test(formData.websiteUrl)) {
      return NextResponse.json(
        { error: 'Invalid website URL format' },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailContent = `
New Media Buying Inquiry from ${formData.brandName}

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Brand Details:
- Brand Name: ${formData.brandName}
- Website: ${formData.websiteUrl}

Financial Information:
- Current Monthly Meta Spend: ${formData.monthlySpend}
- Monthly Store Revenue: ${formData.storeRevenue}

Source:
- How they heard about us: ${formData.hearAbout}

---
Submitted via ryanmckenzie.com/media-buying
Time: ${new Date().toISOString()}
`;

    // In a real application, you would integrate with an email service like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Resend
    //
    // For now, we'll use a simple fetch to a mail service or log the data

    // Example with Resend (you'd need to install and configure):
    /*
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'noreply@ryanmckenzie.com',
      to: 'ryan.mckenzie@gmail.com',
      subject: `Media Buying Request: ${formData.brandName}`,
      text: emailContent,
    });
    */

    // For development/testing, log the email content
    console.log('Media Buying Contact Form Submission:');
    console.log('Subject:', `Media Buying Request: ${formData.brandName}`);
    console.log('To: ryan.mckenzie@gmail.com');
    console.log('Content:', emailContent);

    // TODO: Replace this with actual email sending service
    // For now, we'll simulate success after validation
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