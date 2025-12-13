import express from "express";
import { sendMail } from "../lib/nodemailer.js";

const router = express.Router();

// Replace with your admin email
const ADMIN_EMAIL = "otengebenezer326@gmail.com";

router.post("/", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email required" });
  }

  try {
    // Send email to subscriber
    await sendMail({
      to: email,
      subject: "Thanks for subscribing!",
      text: `Welcome to NAYA AXIS FOODS newsletter.
Thank you for joining our community
Stay updated with:

- Fresh news on our poultry products
- Special offers and discounts
- Tips for poultry care and success
- Blog posts

We’re excited to keep you in the loop and help you achieve NAYA SUCCESS AXIS!`
    });

    // Send email to admin
    await sendMail({
      to: ADMIN_EMAIL,
      subject: "New subscriber alert!",
      text: `New user subscribed to the newsletter: ${email}`
    });

    res.status(200).json({ message: "Subscribed successfully" });
  } catch (error) {
    console.error(error); // for debugging
    res.status(500).json({ message: "Subscription failed" });
  }
});

export default router;
