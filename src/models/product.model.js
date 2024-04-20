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
  composition: {
    notasAltas: { type: String, required: true },
    notasMedias: { type: String, required: true },
    notasBajas: { type: String, required: true },
  },
  categories: [{ type: String, required: true }],
  typeProduct: { type: String, required: true },
});

const Product = model("Product", productSchema);

export default Product;
