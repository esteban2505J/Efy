import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Esta función es para crear el esquema en la base de datos
const productSchema = new Schema({
  title: { type: String, required: true },
  house: { type: String }, // Corregido
  description: { type: String, required: true },
  referenceImage: {
    publicId: String,
    secureUrl: String,
  },
  composition: {
   type: String, required:true
  },
  categories: [{ type: String, required: true }],
  typeProduct: { type: String, required: true },
});

const Product = model("Product", productSchema);

export default Product;
