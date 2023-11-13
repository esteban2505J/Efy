// Importar el módulo 'stripe'
import Stripe from "stripe";
const key =
  "sk_test_51OBOwoFXqJV00ZOvSpxYdYAl5rIMDnnK8ttOXfhMvBurFnHGv45oqDMEdoexS3q3YcYER1GThw4Mr5PZ7IID5f0S00KEkItA6u";
// Crear una instancia de Stripe con tu clave secreta
const stripe = new Stripe(key);
import { transporter } from "../libs/nodemailer.js";

// Definir la ruta para manejar el pago

export const payStripe = async (req, res) => {
  const { shoppingCart, user } = req.body;

  // Crear una sesión de pago con la API de Stripe
  console.log(user);
  try {
    const line_items = shoppingCart.map((item) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.title,
            images: [item.img],
            description: item.description,
          },
          unit_amount: parseInt(item.price.replace(/[\$,]/g, ""), 10),
        },
        quantity: item.quantity,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: "http://localhost:5173/succes",
      cancel_url: "http://localhost:5173/shoppingcart",
    });
    console.log(session);

    const htmlContent = `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bienvenido a Efy</title>
        <style>
          /* Agrega estilos CSS según sea necesario */
          body {
            font-family: Arial, sans-serif;
          }
          .container {
            padding: 5px;
            margin-bottom: 5px;
          }
          .section {
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
            background: #ffc349;
          }
          .logo {
            width: 41px;
            height: 41px;
            
          }
          .button {
            display: inline-block;
            padding: 10px;
            margin-top: 10px;
            text-decoration: none;
            color: #fffaf2;
            background-color: #061615;
            border-radius: 5px;
            margin: 10px
          }
          .button:hover {
            background-color: #00261d;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="section">
            <img class="logo" src="https://res.cloudinary.com/dapsakqbt/image/upload/v1699647385/logo_zqnph0.png">
            <hr>
            <p class="font-bold">
               ${user.fullName} tu compra ha sido exitosa!! gracias por cofiar en nosotros,esperamos que disfrutes de nuestros productos.
  
               id compra : ${session.id}
            </p>
            <a class="button" href="http://localhost:5173/">Click para entrar a la tienda</a>
          </div>
        </div>
      </body>
      </html>
      `;

    const mailOptions = {
      from: "juane.ramirezt@uqvirtual.edu.co",
      to: `${user.email}`,
      subject: "Bienvenida",
      html: htmlContent,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error("Error al enviar el correo electrónico", emailError);
      return res.status(500).json({
        error: "Error al enviar el correo electrónico",
        emailDetails: emailError.message,
      });
    }

    return res.json({ sessionId: session.id });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al crear la sesión de pago" });
  }
};
