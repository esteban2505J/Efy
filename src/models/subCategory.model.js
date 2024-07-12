import mongoose from "mongoose";
const {Schema, model} = mongoose

const subCategorySchema = new Schema(
    {
        name:{type:String, unique:true, required:true}
    }
)
// Crear índice con collation
subCategorySchema.index({ name: 1 }, { unique: true, collation: { locale: 'es', strength: 2 } });
const SubCategorie = new model("subCategory", subCategorySchema)
export default SubCategorie;