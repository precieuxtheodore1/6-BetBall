const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getProfile, updateProfile, allUsers } = require('../controllers/userController');

router.get('/', auth, allUsers);           // admin can view all users (simple)
router.get('/me', auth, getProfile);
router.put('/me', auth, updateProfile);

module.exports = router;
