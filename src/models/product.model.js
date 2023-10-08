import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const productSchema = new Schema({
  name: { String, required: true },
  brand: { type: String, unique: true, required: true },
  description: { String, required: true },
  referenceImage: {
    publicId: String,
    secureUrl: String,
  },
  price: {
    type: String,
    required: true,
  },
  category: { type: String, required: true },
  typeProduct: { type: String, required: true },
});

const Product = model("Product", productSchema);

export default Product;
