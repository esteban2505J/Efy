import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { String, required: true },
  brand: { type: String, unique: true, required: true },
  description: { String, required: true },
  referenceImage: {
    publicId: String,
    secureUrl: String,
  },
  size: { type: String },
  price: {
    type: String,
    required: true,
  },
  category: { type: String, required: true },
  typeProduct: { type: String, required: true },
});

const Product = model("Product", productSchema);

export default Product;
