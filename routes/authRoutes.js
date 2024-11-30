const express = require('express');
const { register, login, logout, refreshToken } = require('../controllers/authController');

const router = express.Router();

// Register Route
router.post('/register', register);

// Login Route
router.post('/login', login);

// Logout Route
router.post('/logout', logout);

// Refresh token Route
router.post('/refresh-token', refreshToken);

module.exports = router;
