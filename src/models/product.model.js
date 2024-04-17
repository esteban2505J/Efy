import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Esta función es para crear el esquema en la base de datos
const productSchema = new Schema({
  title: { type: String, required: true }, // Corregido
  house: { type: String }, // Corregido
  description: { type: String, required: true }, // Corregido
  referenceImage: {
    publicId: String,
    secureUrl: String,
  },
  composition: [{ type: String, required: true }], // Corregido
  categories: [{ type: String, required: true }], // Corregido
  typeProduct: { type: String, required: true }, // Corregido
});

const Product = model("Product", productSchema);

export default Product;
