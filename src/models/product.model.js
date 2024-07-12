import mongoose from "mongoose";

const { Schema, model } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  referenceImage: {
    publicId: String,
    secureUrl: String,
  },
  categories: [{ type: String, required: true }],
  subCategories: [{ type: String, required: true }],
  tags: [{ type: String, default:[] }],
  price: { type: String, required: true },
  attributes: { type: Map, of: String, default: {} }
}, { timestamps: true }
);

productSchema.index({ name: 1 }, { unique: true, collation: { locale: 'es', strength: 2 } });
const Product = model("Product", productSchema);

export default Product;
