const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { listGames, createGame } = require('../controllers/gameController');

router.get('/', listGames);
router.post('/', auth, createGame); // admin or create allowed — controller will check role

module.exports = router;
