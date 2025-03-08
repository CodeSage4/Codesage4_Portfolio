// This file is specifically for Vercel serverless deployment
import express from 'express';
import { registerRoutes } from '../server/routes.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setup routes
registerRoutes(app);

// Export the Express API
export default app; 