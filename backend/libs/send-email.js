import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export const sendEmail = async (to, subject, html) => {
  try {
    await transporter.sendMail({
      from: "TaskHub <gurupraveen2533@gmail.com>",
      to,
      subject,
      html,
    });

    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.error("Email error:", error);
    return false;
  }
};