import mongoose from "mongoose";

const {Schema, model } = mongoose

const tagSchema =  new Schema({
    name : {type: String, unique: true}
})

tagSchema.index({ name: 1 }, { unique: true, collation: { locale: 'es', strength: 2 } });
const TagModel = new model("tag", tagSchema)
export default TagModel;