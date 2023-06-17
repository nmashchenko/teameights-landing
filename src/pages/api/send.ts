import { welcomeEmail } from "@/constants/email";
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email } = req.body;

    const transporter = nodemailer.createTransport({
      host: String(process.env.SMTP_HOST),
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: String(process.env.SMTP_USER),
        pass: String(process.env.SMTP_PASS),
      },
    });

    const options = {
      from: {
        name: "Teameights",
        address: "help@teameights.com",
      },
      to: [email, "helpteameights@gmail.com"],
      subject: "Welcome to Team8s✨",
      html: welcomeEmail(email),
    };

    const data = await transporter.sendMail(options);

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
