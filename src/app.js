// Imports configuration
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// this is for print request
import morgan from "morgan";

dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

export default app;
