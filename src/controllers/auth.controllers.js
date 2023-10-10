//Import User model
import User from "../models/user.model.js";

// library to encrypt
import bcrypt from "bcryptjs";

// middlewar wst
import { createAccesToken } from "../libs/jwt.js";

import jwt from "jsonwebtoken";

import { KEY_TOKEN } from "../config.js";
import { transporter } from "../libs/nodemailer.js";
import { upLoadImage } from "../libs/claudinary.js";
import fs from "fs-extra";

/*function for te procces of register*/
export const register = async (req, res) => {
  let { fullName, email, password, profilePicture } = req.body;

  // return password encrypt
  const passwordHash = await bcrypt.hash(password, 10);

  try {
    const userFound = await User.findOne({ email });

    if (userFound) return res.status(400).json(["The email already exist."]);
    // const profilePictureDefault = {
    //   publicId: `${Math.round(Math.random() * 1000)}`,
    //   secureUrl: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    // };

    // create a new user
    const newUser = new User({
      email,
      password: passwordHash,
      fullName,
    });

    if (req.files?.profilePicture) {
      const result = await upLoadImage(req.files.profilePicture.tempFilePath);
      newUser.profilePicture = {
        publicId: result.public_id,
        secureUrl: result.secure_url,
      };

      await fs.unlink(req.files.profilePicture.tempFilePath);
      console.log(result);
    }
    // saved the user create
    const userSaved = await newUser.save();

    // creating a json web token
    const token = await createAccesToken({ id: userSaved._id });

    // response with cookie created
    res.cookie("token", token);

    res.json({
      id: userSaved._id,
      fullName: userSaved.fullName,
      email: userSaved.email,
      profilePicture: userSaved.profilePicture,
      createAt: userSaved.createdAt,
      updateAt: userSaved.updatedAt,
    });
    try {
      const mailOptions = {
        from: `${process.env.EMAIL}`,
        to: userSaved.email,
        subject: "¡Gracias por Registrarte en EFY - Essential For You!",
        text: `Estimado(a) ${userSaved.fullName}

        Es un placer darte la bienvenida a EFY - Essential For You, tu tienda virtual de perfumes preferida. Estamos emocionados de tenerte como parte de nuestra comunidad de amantes de las fragancias y estamos agradecidos por haberte registrado en nuestro sitio web.

        En EFY, nos esforzamos por brindarte una experiencia de compra de perfumes única y satisfactoria. Creemos en la importancia de encontrar la fragancia perfecta que complemente tu estilo y personalidad, y estamos aquí para ayudarte a descubrir tus favoritas. Ya sea que busques una fragancia fresca y ligera para el día a día o algo más sofisticado y elegante para ocasiones especiales, tenemos una amplia selección de perfumes que seguramente te encantarán.

        Al registrarte en EFY, tendrás acceso a una serie de beneficios, incluyendo:

        - Ofertas y promociones exclusivas para miembros.
        - Recomendaciones personalizadas de fragancias basadas en tus preferencias.
        - Actualizaciones sobre nuevos lanzamientos y productos destacados.
        - Una experiencia de compra segura y conveniente.

        Te animamos a explorar nuestro catálogo en línea y a descubrir las últimas tendencias en el mundo de las fragancias. Si alguna vez necesitas ayuda para encontrar la fragancia perfecta o tienes alguna pregunta sobre nuestros productos o servicios, no dudes en ponerte en contacto con nuestro equipo de atención al cliente. Estamos aquí para servirte y asegurarnos de que tu experiencia en EFY sea excepcional.

        Una vez más, gracias por unirte a EFY. Esperamos que disfrutes de tu experiencia de compra con nosotros y que encuentres los perfumes que se adapten a tu estilo y personalidad.

        ¡Bienvenido a la familia EFY!

        Atentamente, CEO Yuliana`};

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error al enviar el correo electrónico:", error);
        } else {
          console.log("Correo electrónico enviado:", info.response);
        }
      });
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**function for the login procces */
export const login = async (req, res) => {
  let { email, password } = req.body;

  try {
    // found user
    const userFound = await User.findOne({ email });

    if (!userFound) return res.status(400).json({ message: "User no found" });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Inconrrect password" });

    // creating a json web token
    const token = await createAccesToken({ id: userFound._id });

    // response with cookie created
    res.cookie("token", token);

    res.json({
      id: userFound._id,
      fullName: userFound.fullName,
      email: userFound.email,
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

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  console.log(token, "<==");
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
    });
  });
};
