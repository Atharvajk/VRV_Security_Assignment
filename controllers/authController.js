const User = require('../models/User');
const { generateToken, generateRefreshToken } = require('../utils/jwt');
const { blacklistToken } = require('../middleware/tokenBlacklist');


exports.register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const user = await User.create({ username, email, password, role });
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(400).json({ message: 'Error registering user', error });
  }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  
    const token = generateToken({ id: user._id, role: user.role });
    const refreshToken = generateRefreshToken({ id: user._id, role: user.role });
  
    res.status(200).json({
      message: 'Login successful',
      token,
      refreshToken, // Return refresh token
    });
  };
  
  // Refresh token endpoint
  exports.refreshToken = (req, res) => {
    const { refreshToken } = req.body;
  
    if (!refreshToken) {
      return res.status(400).json({ message: 'Refresh token missing' });
    }
  
    try {
      const decoded = verifyToken(refreshToken);
      const newToken = generateToken({ id: decoded.id, role: decoded.role });
  
      res.status(200).json({ token: newToken });
    } catch (error) {
      res.status(403).json({ message: 'Invalid or expired refresh token' });
    }
  };

exports.logout = (req, res) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(400).json({ message: 'No token provided' });
    }
  
    const token = authHeader.split(' ')[1];
    blacklistToken(token); // Add token to blacklist
  
    res.status(200).json({ message: 'Logout successful' });
  };
  