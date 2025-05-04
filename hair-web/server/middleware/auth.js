// server/middleware/auth.js
import jwt from 'jsonwebtoken';

export const authenticateUser = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log('🛡️ Received Auth Header:', authHeader);
  
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.warn('❌ Missing or invalid auth header');
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }
  
    const token = authHeader.split(' ')[1];
    console.log('🔍 Extracted Token:', token);
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('✅ Decoded token:', decoded);
      req.user = { email: decoded.email };
      next();
    } catch (err) {
      console.error('❌ Token verification failed:', err.message);
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
  };
  