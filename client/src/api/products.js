
import axios from "./axios";

export const getProducts = () => axios.get("/products");
export const getSubCategories = () => axios.get("/admin/getSubCategories");
export const getProduct = (id) => axios.get(`/product/${id}`);
export const creteProduct = (product) => axios.post("/createProduct", product);
export const createCategory = (categorie) => axios.post("/admin/createCategory", categorie)
export const createSubCategory = (subCategorie)=> axios.post("/admin/createSubCategory",subCategorie)
export const createTag = (tag)=> axios.post("/admin/createTag",tag)