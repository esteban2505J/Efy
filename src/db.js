import mongoose from "mongoose";

export const conectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://juaneramirezt:346lWRoIe9YaPfqv@cluster0.mkga2p3.mongodb.net/efyretryWrites=true&w=majority"
    );
    console.log(">>>>> DB IS CONNECTED");
  } catch (error) {
    console.log(error);
  }
};
