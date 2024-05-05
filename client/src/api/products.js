import axios from "./axios";

export const getProducts = () => axios.get("/products");
export const getProduct = (id) => axios.get(`/product/${id}`);
export const creteProduct = (product) => axios.post("/createProduct", product);
