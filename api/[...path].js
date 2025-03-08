// Catch-all API handler for Vercel
export default function handler(req, res) {
  const { path } = req.query;
  
  res.status(404).json({ 
    message: 'API endpoint not found',
    requestedPath: path ? `/${path.join('/')}` : req.url,
    method: req.method
  });
} 