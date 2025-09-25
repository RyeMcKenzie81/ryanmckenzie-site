import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.BEEHIIV_API_KEY;
    const publicationId = 'pub_1e4b8c9d-263a-44d8-99e3-37216b55a5d0';
    const automationId = 'aut_a5554f0a-be98-40c7-b1fc-0169c19e84fa';

    if (!apiKey) {
      console.error('Missing beehiiv API key');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create subscription and enroll in automation simultaneously
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          reactivate_existing: false,
          send_welcome_email: false, // Automation will handle welcome emails
          utm_source: 'newsletter_landing',
          utm_medium: 'lead_magnet',
          utm_campaign: 'ecommerce_resources',
          automation_ids: [automationId] // This enrolls them directly into the automation
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error('beehiiv API error:', response.status, errorData);

      if (response.status === 400) {
        return NextResponse.json(
          { error: 'Invalid email address' },
          { status: 400 }
        );
      }

      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      );
    }

    const data = await response.json();
    console.log('Subscription created and enrolled in automation:', data.data?.id);

    return NextResponse.json(
      {
        message: 'Successfully subscribed! Check your email for your free resources.',
        data
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}