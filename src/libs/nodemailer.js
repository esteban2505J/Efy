import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "juane.ramirezt@uqvirtual.edu.co",
    // hackeado... 🧙
    pass: "1005091937JE05",
  },
});

export const sendEmail = async ({ email, subject, html }) => {
  await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject,
    html,
  });
};
