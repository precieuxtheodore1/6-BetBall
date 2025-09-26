const { Game } = require('../models');

async function listGames(req, res){
  try{
    const games = await Game.findAll({ where: { isActive: true }});
    res.json({ games });
  }catch(err){
    console.error('listGames', err);
    res.status(500).json({ error: 'Server error' });
  }
}

async function createGame(req, res){
  try{
    if(req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
    const { title, slug, description, image } = req.body;
    if(!title || !slug) return res.status(400).json({ error: 'Missing fields' });
    const g = await Game.create({ title, slug, description, image });
    res.json({ game: g });
  }catch(err){
    console.error('createGame', err);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { listGames, createGame };
