const jwt = require('jsonwebtoken');

const generateToken = (payload, expiresIn = '1h') => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
const generateRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
  };
  
  module.exports = { generateToken, verifyToken, generateRefreshToken };
  
