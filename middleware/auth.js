const jwt = require('jsonwebtoken');

// This function runs before protected routes
module.exports = function(req, res, next) {
  // Get token from request header (sent by frontend after login)
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) return res.status(401).json({ msg: 'No token, access denied' });

  try {
    // Verify the token is valid and not expired
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // attach user info to the request
    next();             // move on to the actual route
  } catch {
    res.status(401).json({ msg: 'Invalid token' });
  }
};