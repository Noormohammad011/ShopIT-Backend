import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()
const sendEmail = async ({ name, email, subject, message }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_FROM_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  const messageBody = {
    from: email,
    to: process.env.SMTP_FROM_EMAIL,
    subject: subject || `New Contact Message${process.env.SMTP_FROM_NAME}}`,
    html: `
      <div style="width: 100%; height: auto; padding: 15px 10px; text-align: left;">
        <h1 style="font-size: 25px;">New Contact Message</h1>
        <div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong>${message}</p>
        </div>
      </div>
    `,
  }
  await transporter.sendMail(messageBody)
}

export default sendEmail
