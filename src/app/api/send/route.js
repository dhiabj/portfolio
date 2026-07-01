import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/lib/contactSchema';

export async function POST(req) {
  const body = await req.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: 'Invalid input' }, { status: 400 });
  }

  const { email, subject, message } = parsed.data;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [process.env.TO_EMAIL],
      replyTo: email,
      subject: `Portfolio contact: ${subject}`,
      react: (
        <div>
          <p>From: {email}</p>
          <h1>{subject}</h1>
          <p>{message}</p>
        </div>
      ),
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json({ ok: false, error: 'Failed to send message' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return NextResponse.json({ ok: false, error: 'Failed to send message' }, { status: 500 });
  }
}
