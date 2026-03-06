import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWaitlistWelcomeEmail(email: string) {
  const { error } = await resend.emails.send({
    from: process.env.EMAIL_FROM || "CompassPM <onboarding@resend.dev>",
    to: email,
    subject: "🎉 Welcome to the CompassPM Waitlist!",
    html: getWaitlistEmailHTML(),
  });

  if (error) {
    console.error("Failed to send waitlist email:", error);
    throw error;
  }
}

function getWaitlistEmailHTML(): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to CompassPM</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0f; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0a0a0f; min-height: 100vh;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width: 600px; width: 100%;">

          <!-- Logo / Brand -->
          <tr>
            <td align="center" style="padding-bottom: 32px;">
              <div style="display: inline-flex; align-items: center; gap: 8px;">
                <span style="font-size: 28px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                  Compass<span style="color: #6366f1;">PM</span>
                </span>
              </div>
            </td>
          </tr>

          <!-- Main Card -->
          <tr>
            <td>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: linear-gradient(145deg, #13131d 0%, #1a1a2e 100%); border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; overflow: hidden;">

                <!-- Gradient Top Bar -->
                <tr>
                  <td style="height: 4px; background: linear-gradient(90deg, #6366f1, #8b5cf6, #a855f7);"></td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="padding: 48px 40px;">

                    <!-- Celebration Icon -->
                    <div style="text-align: center; margin-bottom: 24px;">
                      <div style="display: inline-block; width: 72px; height: 72px; line-height: 72px; font-size: 36px; background: rgba(99, 102, 241, 0.15); border-radius: 20px; text-align: center;">
                        🎉
                      </div>
                    </div>

                    <!-- Heading -->
                    <h1 style="margin: 0 0 12px; font-size: 28px; font-weight: 700; color: #ffffff; text-align: center; line-height: 1.3;">
                      You're on the waitlist!
                    </h1>

                    <p style="margin: 0 0 32px; font-size: 16px; color: #a1a1aa; text-align: center; line-height: 1.6;">
                      Thank you for your interest in CompassPM. We're building the future of AI-powered project management, and we're thrilled to have you along for the ride.
                    </p>

                    <!-- Divider -->
                    <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.06); margin: 0 0 32px;" />

                    <!-- What to Expect -->
                    <h2 style="margin: 0 0 20px; font-size: 18px; font-weight: 600; color: #ffffff;">
                      What to expect next
                    </h2>

                    <!-- Feature 1 -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 20px;">
                      <tr>
                        <td width="44" valign="top">
                          <div style="width: 36px; height: 36px; line-height: 36px; text-align: center; background: rgba(99, 102, 241, 0.12); border-radius: 10px; font-size: 16px;">
                            🚀
                          </div>
                        </td>
                        <td style="padding-left: 12px;">
                          <p style="margin: 0 0 4px; font-size: 15px; font-weight: 600; color: #e4e4e7;">Early Access</p>
                          <p style="margin: 0; font-size: 14px; color: #71717a; line-height: 1.5;">You'll be among the first to try CompassPM when we launch. Early adopters get exclusive features and pricing.</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Feature 2 -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 20px;">
                      <tr>
                        <td width="44" valign="top">
                          <div style="width: 36px; height: 36px; line-height: 36px; text-align: center; background: rgba(139, 92, 246, 0.12); border-radius: 10px; font-size: 16px;">
                            📬
                          </div>
                        </td>
                        <td style="padding-left: 12px;">
                          <p style="margin: 0 0 4px; font-size: 15px; font-weight: 600; color: #e4e4e7;">Product Updates</p>
                          <p style="margin: 0; font-size: 14px; color: #71717a; line-height: 1.5;">We'll send you occasional updates about our progress, new features, and milestones. No spam, ever.</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Feature 3 -->
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom: 32px;">
                      <tr>
                        <td width="44" valign="top">
                          <div style="width: 36px; height: 36px; line-height: 36px; text-align: center; background: rgba(168, 85, 247, 0.12); border-radius: 10px; font-size: 16px;">
                            🎯
                          </div>
                        </td>
                        <td style="padding-left: 12px;">
                          <p style="margin: 0 0 4px; font-size: 15px; font-weight: 600; color: #e4e4e7;">Shape the Product</p>
                          <p style="margin: 0; font-size: 14px; color: #71717a; line-height: 1.5;">As an early supporter, your feedback will directly influence the features we build. Your voice matters to us.</p>
                        </td>
                      </tr>
                    </table>

                    <!-- Divider -->
                    <hr style="border: none; border-top: 1px solid rgba(255,255,255,0.06); margin: 0 0 32px;" />

                    <!-- Stay Connected -->
                    <p style="margin: 0; font-size: 14px; color: #71717a; text-align: center; line-height: 1.6;">
                      In the meantime, follow us on
                      <a href="#" style="color: #6366f1; text-decoration: none; font-weight: 500;">X (Twitter)</a>
                      for the latest updates and sneak peeks.
                    </p>

                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 40px; text-align: center;">
              <p style="margin: 0 0 8px; font-size: 13px; color: #52525b;">
                &copy; ${new Date().getFullYear()} CompassPM by Noventra Labs. All rights reserved.
              </p>
              <p style="margin: 0; font-size: 12px; color: #3f3f46;">
                You received this email because you signed up for the CompassPM waitlist.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
