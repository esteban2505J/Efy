import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
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
router.delete("/products/product/delete/:id", deleteProduct);
router.put("/products/product/update", updateProduct);
router.get("/product/:id", getProduct);
export default router;
