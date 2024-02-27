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
        user: "testingserver95@gmail.com",
        pass: "kfhxpvjbrhkfvqjk",
      },
    });

    const mailOption = {
      from: "testingserver95@gmail.com",
      to: "ryangosling3053@gmail.com",
      subject: "Send Email For Next Update",
      html: `
        <h3>Arshad Hussain</h3>
        <p>Passionate Digital Marketer</p>
       
         <h4>${name}</h4>
         <h4> ${email}</h4>
         <h4> ${subject}</h4>
         <h4>  ${message}</h4>
        
      `,
    };
    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email sent Successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to Send Message!" },
      { status: 400 }
    );
  }
}
