//Import User model
import User from "../models/user.model.js";

// library to encrypt
import bcrypt from "bcryptjs";

// middlewar wst
import { createAccesToken } from "../libs/jwt.js";

import jwt from "jsonwebtoken";

import { KEY_TOKEN } from "../config.js";
import { sendEmail } from "../libs/nodemailer.js";
import { upLoadImage } from "../libs/claudinary.js";
import { render } from "@react-email/components";
// import { Welcome } from "../emails/template/Welcome.js";
import fs from "fs-extra";

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
    console.log(req.files);
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
    // const html = render(Welcome({ url: "", username: userSaved.fullName }));

    // await sendEmail({
    //   email: userSaved.email,
    //   subject: "¡Gracias por Registrarte en EFY - Essential For You!",
    //   html,
    // });
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
    console.log("this is a", userFound);

    if (!userFound) return res.status(400).json({ message: "User no found" });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Inconrrect password" });

    // creating a json web token
    const token = await createAccesToken({ id: userFound._id });

    // response with cookie created
    res.cookie("token", token);

    res.json({
      ...userFound,
      id: userFound._id,
    });
    // res.json({
    //   id: userFound._id,
    //   fullName: userFound.fullName,
    //   email: userFound.email,
    //   profilePicture: userFound.profilePicture,
    //   createAt: userFound.createdAt,
    //   updateAt: userFound.updatedAt,
    // });
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
