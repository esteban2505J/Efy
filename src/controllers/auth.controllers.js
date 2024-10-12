//Import User model
import User from "../models/user.model.js";

// library to encrypt
import bcrypt from "bcryptjs";

// middlewar wst
import { createAccesToken } from "../libs/jwt.js";

import jwt from "jsonwebtoken";

import { KEY_TOKEN } from "../config.js";
import { transporter } from "../libs/nodemailer.js";
// import upLoadImage from "../libs/claudinary.js";

import fs from "fs-extra"

/*function for te procces of register*/
export const register = async (req, res) => {
  let { fullName, email, password, profilePicture } = req.body;

  // return password encrypt
  const passwordHash = await bcrypt.hash(password, 10);

  try {
    const userFound = await User.findOne({ email });

    if (userFound) return res.status(400).json(["The email already exist."]);

    // create a new user
    const newUser = new User({
      email,
      password: passwordHash,
      fullName,
    });
   
    // saved the user create
    const userSaved = await newUser.save();

    // creating a json web token
    const token = await createAccesToken({ id: userSaved._id });

    // response with cookie created
    res.cookie("token", token);

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
            Gracias ${userSaved.fullName} por registrarte en nuestra tienda, ahora puedes comprar y disfrutar de nuestros productos.
          </p>
          <a class="button" href="http://localhost:5173/">Click para entrar a la tienda</a>
        </div>
      </div>
    </body>
    </html>
    `;

    const mailOptions = {
      from: "juane.ramirezt@uqvirtual.edu.co",
      to: `${userSaved.email}`,
      subject: "Bienvenida",
      html: htmlContent,
    };

    // Enviar el correo electrónico de confirmación
    await transporter.sendMail(mailOptions);

    // Eliminar la imagen temporal
    if (req.files.profilePicture) {
      fs.unlink(req.files.profilePicture.tempFilePath, (err) => {
        if (err) {
          console.error("Error al eliminar la imagen temporal:", err);
        } else {
          console.log("Imagen temporal eliminada correctamente");
        }
      });
    }

    res.json({
      id: userSaved._id,
      fullName: userSaved.fullName,
      email: userSaved.email,
      profilePicture: userSaved.profilePicture.secureUrl,

      createAt: userSaved.createdAt,
      updateAt: userSaved.updatedAt,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

/**function for the login procces */
export const login = async (req, res) => {
  let { email, password } = req.body;

  try {
    // found user
    const userFound = await User.findOne({ email });
    // console.log("this is a", userFound);

    if (!userFound) return res.status(400).json(["User not found"]);

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) return res.status(400).json(["Incorrect password or email"]);

    // creating a json web token
    const token = await createAccesToken({ id: userFound._id });

    // response with cookie created
    res.cookie("token", token);

    res.json({
      id: userFound._id,
      fullName: userFound.fullName,
      email: userFound.email,
      profilePicture: userFound.profilePicture.secureUrl,
      shoppingList: userFound.shoppingList,
      createAt: userFound.createdAt,
      updateAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* function for the  logout procces */
export const logOut = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return res.sendStatus(200);
};

/* function for the process of obtaining the user's profile*/
export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);
  if (!userFound) return res.status(400).json({ message: "user not found" });

  return res.json({
    id: userFound.id,
    email: userFound.email,
    createAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};

// Function for the verificarion token
export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.status(401).json({ message: "Unauthorized 1" });

  jwt.verify(token, KEY_TOKEN, async (err, user) => {
    if (err) return res.status(401).json({ message: "Unauthorized 2" });
    const userFound = await User.findById(user.id);
    console.log("si está llegando back");
    if (!userFound) return res.status(401).json({ message: "Unauthorized 3" });

    return res.json({
      id: userFound._id,
      fullName: userFound.fullName,
      email: userFound.email,
      profilePicture: userFound.profilePicture.secureUrl,
    });
  });
};
