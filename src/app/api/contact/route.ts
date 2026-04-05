import { NextResponse } from "next/server";
import { Resend } from "resend";

// ── POST /api/contact ─────────────────────────────────────────────────────────
// Receives form data, validates it, and sends an email via Resend.

const resend = new Resend(process.env.RESEND_API_KEY);

// server-side validation
function validate(data: { name: string; email: string; message: string }) {
  const errors: string[] = [];
  if (!data.name?.trim()) errors.push("Name is required");
  if (!data.email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.push("Valid email is required");
  if (!data.message?.trim() || data.message.trim().length < 10)
    errors.push("Message must be at least 10 characters");
  return errors;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validate
    const errors = validate({ name, email, message });
    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join(", ") }, { status: 400 });
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["kaludavidinyang@gmail.com"],
      replyTo: email, // clicking Reply in Gmail goes directly to the sender
      subject: `New message from ${name} — Portfolio`,
      // Plain text fallback
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      // HTML email
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
          <body style="margin:0;padding:0;background:#f4f4f5;font-family:system-ui,-apple-system,sans-serif;">
            <div style="max-width:560px;margin:40px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.08);">
              <!-- Header -->
              <div style="background:#18181b;padding:28px 32px;">
                <p style="margin:0;font-size:13px;color:#a1a1aa;letter-spacing:0.1em;text-transform:uppercase;font-weight:600;">Portfolio Contact</p>
                <h1 style="margin:8px 0 0;font-size:22px;color:#ffffff;font-weight:700;">New Message</h1>
              </div>

              <!-- Body -->
              <div style="padding:32px;">
                <!-- Sender info -->
                <div style="background:#f4f4f5;border-radius:8px;padding:16px 20px;margin-bottom:24px;">
                  <div style="margin-bottom:10px;">
                    <span style="font-size:12px;color:#71717a;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;">From</span>
                    <p style="margin:4px 0 0;font-size:16px;color:#18181b;font-weight:600;">${name}</p>
                  </div>
                  <div>
                    <span style="font-size:12px;color:#71717a;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;">Email</span>
                    <p style="margin:4px 0 0;font-size:15px;color:#18181b;">
                      <a href="mailto:${email}" style="color:#18181b;text-decoration:none;">${email}</a>
                    </p>
                  </div>
                </div>

                <!-- Message -->
                <div>
                  <span style="font-size:12px;color:#71717a;text-transform:uppercase;letter-spacing:0.08em;font-weight:600;">Message</span>
                  <div style="margin-top:10px;padding:20px;background:#fafafa;border:1px solid #e4e4e7;border-radius:8px;font-size:15px;color:#3f3f46;line-height:1.7;white-space:pre-wrap;">${message}</div>
                </div>

                <!-- Reply CTA -->
                <div style="margin-top:28px;">
                  <a href="mailto:${email}?subject=Re: Your message via Portfolio&body=Hi ${name},%0A%0A"
                    style="display:inline-block;background:#18181b;color:#ffffff;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:600;text-decoration:none;">
                    Reply to ${name} →
                  </a>
                </div>
              </div>

              <!-- Footer -->
              <div style="border-top:1px solid #e4e4e7;padding:20px 32px;background:#fafafa;">
                <p style="margin:0;font-size:12px;color:#a1a1aa;">
                  Sent via your portfolio contact form at
                  <a href="https://kaludavid.vercel.app/" style="color:#71717a;">Kalu David</a>
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("[Contact API] Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("[Contact API] Unexpected error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
