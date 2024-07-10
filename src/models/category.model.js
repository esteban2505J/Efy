import mongoose from "mongoose";

const {model, Schema} = mongoose;

const categorySchema = new Schema({
    name : {type: String, required:true},
    atributtes : [{type:String, required :true}]
})
const Categorie = model('categorie', categorySchema)
export default Categorie