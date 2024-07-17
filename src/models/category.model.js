import mongoose from 'mongoose';

const { model, Schema } = mongoose;

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
});

// Crear índice con collation
categorySchema.index({ name: 1 }, { unique: true, collation: { locale: 'es', strength: 3, caseLevel: true } });

const Categorie = model('Categorie', categorySchema);

export default Categorie;
