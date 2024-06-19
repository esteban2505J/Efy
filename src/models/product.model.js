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
  typeProduct: { type: String, required: true },
  price : {type : String, required:true},
  attributes: { type: Map, of: String ,default :{}}}, {timestamps :true}
);

const Product = model("Product", productSchema);

export default Product;
