import express, { Application, Request, Response } from 'express';
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

app.use((req: Request, res: Response) => {
	res.status(404).send({
		message: "404 Not Found - The resource you are looking for does not exist.",
	});
});

process.on("unhandledRejection", (reason: unknown, promise: Promise<unknown>) => {
	console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

process.on("uncaughtException", (error: Error) => {
	console.error("Uncaught Exception:", error);
	process.exit(1);
});

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});