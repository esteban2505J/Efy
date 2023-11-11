import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "juane.ramirezt@uqvirtual.edu.co",
    pass: "1005091937JE05",
  },
});
