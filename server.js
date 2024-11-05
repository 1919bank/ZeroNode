// server.js
import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';
import savingsRoutes from './routes/savingsRoutes.js';
import { connectDB } from './config/db.js';

dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/savings', savingsRoutes);

// Export the app without starting the server
export default app;
