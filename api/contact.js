import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST requests (form submissions)
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Set up your Gmail connection
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // We will set this in Vercel
      pass: process.env.EMAIL_PASS, // We will set this in Vercel
    },
  });

  try {
    // Construct and send the email to yourself
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "vabishek754@gmail.com", // Your inbox
      replyTo: email, // So you can hit "Reply" and it goes to the client
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #3b82f6;">New Inquiry 🚀</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border: 1px solid #eee; margin: 15px 0;" />
          <p><strong>Message:</strong></p>
          <p style="background: #f8fafc; padding: 15px; border-radius: 6px;">${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email Error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}