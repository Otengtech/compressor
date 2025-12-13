import express from "express";
import { sendMail } from "../lib/nodemailer.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    // Send email to admin
    await sendMail({
      to: process.env.EMAIL_USER,
      subject: "New Contact Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // Send confirmation email to user
    await sendMail({
      to: email,
      subject: "Thanks for contacting us!",
      text: `Hi ${name},

Thank you for reaching out to NAYA AXIS FOODS. We received your message

Our team will get back to you as soon as possible.

Best regards,
NAYA AXIS FOODS`
    });

    res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error); // for debugging
    res.status(500).json({ message: "Failed to send message" });
  }
});

export default router;
