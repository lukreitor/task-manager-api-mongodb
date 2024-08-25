import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri);  // Sem as opções antigas
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB', error);
    process.exit(1);
  }
};

export default connectDB;
