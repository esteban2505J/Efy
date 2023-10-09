export const KEY_TOKEN = "efyKeyToken";

import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "Gmail", // Elige el servicio de correo que estés usando
  auth: {
    user: "juane.ramirezt@uqvirtual.edu.co",
    pass: "1005091937JE05",
  },
});
