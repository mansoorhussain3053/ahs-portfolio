import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      logger: true,
      debug: true,
      secureConnection: false,
      auth: {
        user: "",
        pass: "",
      },
    });

    const mailOption = {
      from: "ryangosling3053@gmail.com",
      to: "ryangosling3053@gmail.com", // <-- Update recipient email address if needed
      subject: "Send Email For Next Update",
      html: `
        <h3>Hello Test</h3>
        <ul>
          <li>name: ${name}</li>
          <li>email: ${email}</li>
          <li>subject: ${subject}</li>
          <li>message: ${message}</li>
        </ul>
      `,
    };
    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email sent Successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error); // Log any errors
    return NextResponse.json(
      { message: "Failed to Send Message!" },
      { status: 400 }
    );
  }
}
