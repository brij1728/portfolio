import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

// A faulty API route to test Sentry's error monitoring
export function GET() {
  try {
    throw new Error('Sentry Example API Route Error');
  } catch (error) {
    // Log the error to Sentry or any other monitoring service
    // Sentry.captureException(error);

    // Return a JSON response indicating the error
    return NextResponse.json({ error: error.message });
  }
}
