const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { listCompetitions, createCompetition } = require('../controllers/competitionController');

router.get('/', listCompetitions);
router.post('/', auth, createCompetition); // admin only enforced in controller

module.exports = router;
