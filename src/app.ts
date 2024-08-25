import express from 'express';
import taskRoutes from './routes/taskRoutes';
import connectDB from './database';

const app = express();

app.use(express.json());
app.use(taskRoutes);

connectDB(); // Conecta ao MongoDB

export default app;
