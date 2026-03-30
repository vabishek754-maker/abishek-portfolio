import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
  });

  try {
    // 1. Send the inquiry to YOUR inbox
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER, // Sends to your email
      replyTo: email,
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

    // 2. Send the Auto-Reply back to the CLIENT
    await transporter.sendMail({
      from: `"Abishek V" <${process.env.EMAIL_USER}>`, // Shows your name in their inbox
      to: email, // Sends to the email the user typed in the form
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Message Received! ✓</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out through my portfolio. This is an automated message to let you know I've successfully received your inquiry.</p>
          <p>I am currently reviewing your message and will get back to you as soon as possible.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>Abishek V</strong><br/>Full Stack Developer</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email Error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}