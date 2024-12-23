import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response("All fields are required", { status: 400 });
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email provider (e.g., Gmail, Outlook, etc.)
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "justnunoo@gmail.com", // Default recipient's email address
      subject: `New Contact Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("Failed to send email", { status: 500 });
  }
}
