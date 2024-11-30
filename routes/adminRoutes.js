const express = require('express');
const { authenticate, authorize } = require('../middlewares/authMiddleware');
const { updateUserRole } = require('../controllers/adminController');

const router = express.Router();

// Admin route to update user roles
router.patch('/update-role', authenticate, authorize('Admin'), updateUserRole);

module.exports = router;
