// Imports configuration
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// this is for print request
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";
import fileUpload from "express-fileupload";
import prodctuRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);
// app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api", authRoutes);
app.use("/api", prodctuRoutes);

export default app;
