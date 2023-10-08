import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true },
    profilePicture: {
      publicId: String,
      secureUrl: String,
    },
    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    shoppingList: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    tempPassword: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
