import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js'; // Import the function
import userRoutes from './routes/authRoute.js';
import adminRoutes from './routes/adminRoutes.js';
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});
app.use('/api/auth',userRoutes)
app.use('/api/admin',adminRoutes)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});