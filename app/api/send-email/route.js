import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

     await resend.emails.send({
      from: "onboarding@resend.dev", // change to a verified domain
      to: "bolajimargaret91@gmail.com",
      subject: `New message from ${name}`,
      reply_to: email,
      text: message,
    });
    // 2. Send confirmation email to the sender (branded HTML)
    await resend.emails.send({
      from: "Data for Impact <contact@yourdomain.com>", // your verified domain
      to: email, // user who filled the form
      subject: "Thanks for reaching out to Data for Impact!",
      html: `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5; padding: 20px; background-color: #f9fafb;">
      <table width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
        <tr>
          <td style="padding: 20px; text-align: center; background-color: #00274d; border-radius: 10px 10px 0 0;">
            <img src="/datalogo.jpg" alt="Data for Impact" width="100" />
            <h1 style="color: #00274d; margin: 10px 0 0;">Data for Impact</h1>
          </td>
        </tr>
        <tr>
          <td style="padding: 20px;">
            <p style="font-size: 16px;">Hi <strong>${name}</strong>,</p>
            <p>Thank you for reaching out to us. We’ve received your message and our team will get back to you shortly.</p>
            <p>Here’s a copy of what you sent:</p>
            <blockquote style="border-left: 4px solid #00bfa6; margin: 10px 0; padding-left: 10px; color: #555;">
              ${message}
            </blockquote>
            <p>If this wasn’t you, please ignore this email.</p>
            <p style="margin-top: 20px;">Best regards,<br><strong>Data for Impact Team</strong></p>
          </td>
        </tr>
        <tr>
          <td style="padding: 15px; text-align: center; background-color: #f3f4f6; border-radius: 0 0 10px 10px; font-size: 12px; color: #777;">
            &copy; ${new Date().getFullYear()} Data for Impact. All rights reserved.
          </td>
        </tr>
      </table>
    </div>
  `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }), {
      status: 500,
    });
  }
}
