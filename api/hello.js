// Simple Vercel serverless function
module.exports = function(req, res) {
  res.status(200).json({ message: 'Hello from the API!' });
} 