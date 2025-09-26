const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { listOpen, createChallenge, acceptChallenge, myChallenges } = require('../controllers/challengeController');

router.get('/', listOpen);
router.post('/', auth, createChallenge);
router.post('/:id/accept', auth, acceptChallenge);
router.get('/me', auth, myChallenges);

module.exports = router;
