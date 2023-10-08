//Import User model
import user from "../models/user.model.js";

// library to encrypt
import bcrypt from "bcryptjs";

// middlewar wst
import { createAccesToken } from "../libs/jwt.js";

import jwt from "jsonwebtoken";

import { KEY_TOKEN } from "../config.js";

/*function for te procces of register*/
export const register = async (req, res) => {
  let { fullName, email, password, profilePicture } = req.body;

  // return password encrypt
  const passwordHash = await bcrypt.hash(password, 10);

  try {
    const userFound = await user.findOne({ email });

    if (userFound) return res.status(400).json(["The email already exist."]);
    const profilePictureDefault = {
      publicId: `${Math.round(Math.random() * 1000)}`,
      secureUrl: "https://cdn-icons-png.flaticon.com/128/456/456212.png",
    };
    // create a new user
    const newUser = new user({
      email,
      password: passwordHash,
      fullName,
      profilePicture: profilePicture || profilePictureDefault,
    });

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
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**function for the login procces */
export const login = async (req, res) => {
  let { email, password } = req.body;

  try {
    // found user
    const userFound = await user.findOne({ email });

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
      userName: userFound.userName,
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
  const userFound = await user.findById(req.user.id);
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

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, KEY_TOKEN, async (err, user) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });
    const userFound = await userModel.findById(user.id);
    if (!userFound) return res.status(401).json({ message: "Unauthorized" });

    return res.json({
      id: userFound.id,
      userName: userFound.userName,
      email: userFound.email,
    });
  });
};
