import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/database';
import proverbRoutes from './routes/proverbs';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/proverbs', proverbRoutes);

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});