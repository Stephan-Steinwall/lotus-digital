import { Resend } from "resend";

/* ── helpers ── */
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function sanitise(value: unknown, max = 500): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

/* ── email templates ── */
function ownerEmailHtml(data: {
  name: string;
  email: string;
  businessName: string;
  businessType: string;
  website: string;
  websiteStatus: string;
  projectType: string;
  message: string;
}): string {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
           <td style="padding:8px 12px;font-weight:600;color:#9ca3af;white-space:nowrap;width:160px;vertical-align:top;">${label}</td>
           <td style="padding:8px 12px;color:#f4f4f4;">${value}</td>
         </tr>`
      : "";

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0c0c0c;font-family:system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0c0c0c;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#141414;border-radius:16px;border:1px solid rgba(255,255,255,0.07);overflow:hidden;max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#bff747,#d4ff6e);padding:28px 32px;">
            <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#0c0c0c;">Lotus Digital</p>
            <h1 style="margin:8px 0 0;font-size:22px;font-weight:800;color:#0c0c0c;letter-spacing:-0.02em;">New Enquiry Received 🌿</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <p style="margin:0 0 24px;color:rgba(244,244,244,0.55);font-size:14px;line-height:1.6;">
              Someone submitted the contact form on <strong style="color:#bff747;">lotusdigital.co</strong>. Here are their details:
            </p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid rgba(255,255,255,0.07);border-radius:10px;overflow:hidden;">
              <tbody>
                ${row("Name", data.name)}
                ${row("Email", `<a href="mailto:${data.email}" style="color:#bff747;text-decoration:none;">${data.email}</a>`)}
                ${row("Business Name", data.businessName)}
                ${row("Business Type", data.businessType)}
                ${row("Current Website", data.website ? `<a href="${data.website}" style="color:#bff747;text-decoration:none;">${data.website}</a>` : "")}
                ${row("Website Status", data.websiteStatus)}
                ${row("Project Type", data.projectType)}
              </tbody>
            </table>

            <!-- Message -->
            <div style="margin-top:24px;background:rgba(191,247,71,0.05);border:1px solid rgba(191,247,71,0.12);border-radius:10px;padding:20px;">
              <p style="margin:0 0 8px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#bff747;">Message</p>
              <p style="margin:0;color:rgba(244,244,244,0.7);font-size:14px;line-height:1.75;white-space:pre-line;">${data.message}</p>
            </div>

            <!-- Reply CTA -->
            <div style="margin-top:28px;text-align:center;">
              <a href="mailto:${data.email}" style="display:inline-block;background:#bff747;color:#0c0c0c;font-weight:700;font-size:14px;padding:12px 28px;border-radius:6px;text-decoration:none;">
                Reply to ${data.name} →
              </a>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 32px;border-top:1px solid rgba(255,255,255,0.06);">
            <p style="margin:0;font-size:11px;color:rgba(244,244,244,0.2);">
              This email was sent automatically when ${data.name} submitted the contact form on lotusdigital.co.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function confirmationEmailHtml(name: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0c0c0c;font-family:system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0c0c0c;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#141414;border-radius:16px;border:1px solid rgba(255,255,255,0.07);overflow:hidden;max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#bff747,#d4ff6e);padding:28px 32px;">
            <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#0c0c0c;">Lotus Digital</p>
            <h1 style="margin:8px 0 0;font-size:22px;font-weight:800;color:#0c0c0c;letter-spacing:-0.02em;">We&apos;ve received your request 🌿</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <p style="margin:0 0 16px;color:#f4f4f4;font-size:16px;font-weight:600;">Hi ${name},</p>
            <p style="margin:0 0 16px;color:rgba(244,244,244,0.6);font-size:14px;line-height:1.75;">
              Thanks for getting in touch with Lotus Digital. We&apos;ve received your enquiry and will review your details carefully.
            </p>
            <p style="margin:0 0 28px;color:rgba(244,244,244,0.6);font-size:14px;line-height:1.75;">
              You can expect to hear back from us within <strong style="color:#f4f4f4;">one business day</strong>. In the meantime, feel free to reply to this email if you have anything to add.
            </p>

            <!-- What happens next -->
            <div style="background:rgba(191,247,71,0.04);border:1px solid rgba(191,247,71,0.12);border-radius:10px;padding:20px 24px;">
              <p style="margin:0 0 14px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#bff747;">What happens next</p>
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding:6px 0;color:rgba(244,244,244,0.55);font-size:13px;">
                    <span style="color:#bff747;margin-right:8px;">✓</span> We review your enquiry &amp; current website
                  </td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:rgba(244,244,244,0.55);font-size:13px;">
                    <span style="color:#bff747;margin-right:8px;">✓</span> We prepare honest, actionable feedback
                  </td>
                </tr>
                <tr>
                  <td style="padding:6px 0;color:rgba(244,244,244,0.55);font-size:13px;">
                    <span style="color:#bff747;margin-right:8px;">✓</span> We reach out to discuss next steps
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 32px;border-top:1px solid rgba(255,255,255,0.06);">
            <p style="margin:0 0 4px;font-size:12px;font-weight:600;color:rgba(244,244,244,0.35);">Lotus Digital</p>
            <p style="margin:0;font-size:11px;color:rgba(244,244,244,0.2);">
              hello@lotusdigital.co &nbsp;·&nbsp; lotusdigital.co
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/* ── POST handler ── */
export async function POST(request: Request): Promise<Response> {
  // ── Step 1: confirm the route is being reached ──
  console.log("=== /api/contact POST hit ===");
  console.log("Has RESEND_API_KEY:", Boolean(process.env.RESEND_API_KEY));
  console.log("CONTACT_TO_EMAIL  :", process.env.CONTACT_TO_EMAIL);
  console.log("CONTACT_FROM_EMAIL:", process.env.CONTACT_FROM_EMAIL);

  // ── Step 2: parse body ──
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    console.error("Failed to parse request body as JSON");
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // ── Step 3: honeypot ──
  const honeypot = sanitise(body.company_website_check);
  if (honeypot) {
    console.log("Honeypot triggered — silently discarding submission");
    return Response.json({ success: true });
  }

  // ── Step 4: required field validation ──
  const name    = sanitise(body.name, 100);
  const email   = sanitise(body.email, 254);
  const message = sanitise(body.message, 3000);

  const errors: string[] = [];
  if (!name)                        errors.push("Name is required.");
  if (!email)                       errors.push("Email is required.");
  if (email && !isValidEmail(email)) errors.push("Email address is invalid.");
  if (!message)                     errors.push("Message is required.");

  if (errors.length > 0) {
    console.warn("Validation failed:", errors);
    return Response.json({ error: errors.join(" ") }, { status: 422 });
  }

  // ── Step 5: optional fields ──
  const businessName  = sanitise(body.businessName, 150);
  const businessType  = sanitise(body.businessType, 80);
  const website       = sanitise(body.website, 300);
  const websiteStatus = sanitise(body.websiteStatus, 80);
  const projectType   = sanitise(body.projectType, 80);

  // ── Step 6: env vars ──
  const toEmail   = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "Lotus Digital <onboarding@resend.dev>";

  if (!toEmail) {
    console.error("CONTACT_TO_EMAIL is not set — cannot send email");
    return Response.json({ error: "Server configuration error." }, { status: 500 });
  }

  // ── Step 7: instantiate Resend and send emails ──
  // Instantiated here (not at module level) so the build doesn't throw when
  // RESEND_API_KEY is absent from .env.local.
  const resend = new Resend(process.env.RESEND_API_KEY);

  // 7a — Owner notification
  console.log("Sending owner notification to:", toEmail);
  const { data: ownerData, error: ownerError } = await resend.emails.send({
    from:    fromEmail,
    to:      toEmail,
    replyTo: email,
    subject: `New Enquiry from ${name} — Lotus Digital`,
    html:    ownerEmailHtml({ name, email, businessName, businessType, website, websiteStatus, projectType, message }),
  });

  console.log("Owner email — data :", ownerData);
  console.log("Owner email — error:", ownerError);

  if (ownerError) {
    console.error("Resend rejected owner email:", ownerError);
    return Response.json(
      { success: false, error: ownerError },
      { status: 500 }
    );
  }

  // 7b — Confirmation to submitter
  console.log("Sending confirmation to submitter:", email);
  const { data: confirmData, error: confirmError } = await resend.emails.send({
    from:    fromEmail,
    to:      email,
    subject: "We've received your request — Lotus Digital",
    html:    confirmationEmailHtml(name),
  });

  console.log("Confirmation email — data :", confirmData);
  console.log("Confirmation email — error:", confirmError);

  if (confirmError) {
    // Owner email already sent — log but don't fail the whole request
    console.warn("Resend rejected confirmation email (non-fatal):", confirmError);
  }

  console.log("=== /api/contact success ===");
  return Response.json({ success: true });
}

