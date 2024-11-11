import mongoose from "mongoose";

const superheroSchema = new mongoose.Schema({
  id: String,
  nombreSuperheroe: { type: String, required: true },
  nombreReal: { type: String, required: true },
  edad: { type: Number, min: 0 },
  planetaOrigen: { type: String, default: 'Desconocido' },
  debilidad: String,
  poderes: [String],
  aliados: [String],
  enemigos: [String],
  creador: String,
  createdAt: { type: Date, default: Date.now }
}, { collection: 'Grupo-00' });

export default mongoose.model('SuperHeroe', superheroSchema);