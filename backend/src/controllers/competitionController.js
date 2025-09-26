const { Competition, Game } = require('../models');

async function listCompetitions(req, res){
  try{
    const comps = await Competition.findAll({ include: [{ model: Game }] });
    res.json({ competitions: comps });
  }catch(err){
    console.error('listCompetitions', err);
    res.status(500).json({ error: 'Server error' });
  }
}

async function createCompetition(req, res){
  try{
    if(req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
    const { title, gameId, entryFee } = req.body;
    if(!title || !gameId) return res.status(400).json({ error: 'Missing fields' });
    const c = await Competition.create({ title, gameId, entryFee, prizePool: 0 });
    res.json({ competition: c });
  }catch(err){
    console.error('createCompetition', err);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { listCompetitions, createCompetition };
