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

// Ruta para crear un producto con subida de imagen
router.post("/createProduct", createProduct);

// Rutas para otras operaciones CRUD de productos
router.get("/products", getProducts);
router.get("/products/categorie", getProductsByCategorie);
router.get("/products/type", getProductsByTypeProduct);
router.delete("/products/product/delete/:id", deleteProduct);
router.put("/products/product/update/:id", updateProduct);
router.get("/product/:id", getProduct);

export default router;
