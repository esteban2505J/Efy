import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  getProductsByCategorie,
  getProductsByTags,
  
  updateProduct,
  createCategory,
  createSubCategory,
  createTag,
  getSubCategories,
  getCategories,
  getTags
} from "../controllers/products.controllers.js";

const router = new Router();

// Ruta para crear un producto con subida de imagen
router.post("/createProduct", createProduct);

// Rutas para otras operaciones CRUD de productos
router.get("/products", getProducts);
router.get("/products/categorie", getProductsByCategorie);
// router.get("/products/type", getProductsByTypeProduct);
router.delete("/products/product/delete/:id", deleteProduct);
router.put("/products/product/update/:id", updateProduct);
router.get("/product/:id", getProduct);
router.post("/product/getBytags", getProductsByTags)

// Ruta para obtener las sub categorias
router.get("/admin/getSubCategories", getSubCategories);
// Ruta para obtener las categorias
router.get("/admin/getCategories", getCategories);
// Ruta para obtener las tags
router.get("/admin/getTags", getTags);

// Ruta para la creación de categorias
router.post("/admin/createCategory",createCategory)
// Ruta para la creación de subCategorias
router.post("/admin/createSubCategory",createSubCategory)
// Ruta para la creación de etiquetas
router.post("/admin/createTag",createTag)



export default router;
