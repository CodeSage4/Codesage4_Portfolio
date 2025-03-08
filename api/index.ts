// Vercel serverless function handler
import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

// Simple test endpoint
app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'API is working!' });
});

app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the API!' });
});

// Export the Express API
export default app; 