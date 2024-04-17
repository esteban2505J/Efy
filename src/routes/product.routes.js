import { Router } from "express";
import {
  createProduct,
  deleteProcut,
  getProducts,
  getProductsByCategorie,
  getProductsByTypeProduct,
  updateProduct,
} from "../controllers/products.controllers.js";

const router = new Router();
router.post("/createProduct", createProduct);
router.get("/products", getProducts);
router.get("/products/categorie", getProductsByCategorie);
router.get("/products/type", getProductsByTypeProduct);
router.delete("/products/product/delete", deleteProcut);
router.put("/products/product/update", updateProduct);
export default router;
