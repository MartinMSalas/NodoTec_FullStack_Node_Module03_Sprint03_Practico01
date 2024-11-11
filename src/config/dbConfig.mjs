import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export async function connectDB() {
  try {
    
    await mongoose.connect(process.env.MONGODB_URI);
    // await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conexión exitosa a MongoDB');

  } catch (error) {
    console.log('Error al conectar a MongoDB:', error);
    process.exit(1);
  }
  
}