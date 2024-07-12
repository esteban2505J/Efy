import mongoose from "mongoose";

const {model, Schema} = mongoose;

const categorySchema = new Schema({
    name : {type: String, required:true , unique:true},
   
})

// Crear índice con collation
categorySchema.index({ name: 1 }, { unique: true, collation: { locale: 'es', strength: 2 } });
const Categorie = model('categorie', categorySchema)
export default Categorie;