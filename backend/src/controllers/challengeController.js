const { Challenge, Wallet, User, Game } = require('../models');
const { getIO } = require('../services/liveService');
const { Op } = require('sequelize');

async function listOpen(req, res){
  try{
    const challenges = await Challenge.findAll({ where: { status: 'open' }, include: [{ model: User, as:'creator', attributes:['id','fullName']}, { model: Game }] });
    res.json({ challenges });
  }catch(err){
    console.error('listOpen', err);
    res.status(500).json({ error: 'Server error' });
  }
}

async function createChallenge(req, res){
  try{
    const userId = req.user.sub;
    const { gameId, stake, currency } = req.body;
    if(!gameId || !stake) return res.status(400).json({ error: 'Missing fields' });

    // debit stake from user's wallet (simplified: use cdf_balance)
    const wallet = await Wallet.findOne({ where: { userId }});
    if(!wallet) return res.status(400).json({ error: 'Wallet not found' });
    const balance = parseFloat(wallet.cdf_balance);
    const stakeF = parseFloat(stake);
    if(balance < stakeF) return res.status(400).json({ error: 'Insufficient balance' });

    wallet.cdf_balance = (balance - stakeF).toFixed(2);
    await wallet.save();

    const ch = await Challenge.create({ creatorId: userId, gameId, stake: stakeF, currency: currency || 'CDF' });

    // notify via socket
    const io = getIO();
    if(io) io.emit('challenge_created', { challenge: ch });

    res.json({ challenge: ch });
  }catch(err){
    console.error('createChallenge', err);
    res.status(500).json({ error: 'Server error' });
  }
}

async function acceptChallenge(req, res){
  try{
    const userId = req.user.sub;
    const challengeId = req.params.id;
    const ch = await Challenge.findByPk(challengeId);
    if(!ch) return res.status(404).json({ error: 'Challenge not found' });
    if(ch.status !== 'open') return res.status(400).json({ error: 'Challenge not open' });
    if(ch.creatorId === userId) return res.status(400).json({ error: 'Cannot accept your own challenge' });

    // debit acceptor wallet
    const wallet = await Wallet.findOne({ where: { userId }});
    if(!wallet) return res.status(400).json({ error: 'Wallet not found' });
    const balance = parseFloat(wallet.cdf_balance);
    const stakeF = parseFloat(ch.stake);
    if(balance < stakeF) return res.status(400).json({ error: 'Insufficient balance' });

    wallet.cdf_balance = (balance - stakeF).toFixed(2);
    await wallet.save();

    ch.acceptedBy = userId;
    ch.status = 'in_progress';
    await ch.save();

    // notify via socket
    const io = getIO();
    if(io) io.emit('challenge_accepted', { challenge: ch });

    res.json({ challenge: ch });
  }catch(err){
    console.error('acceptChallenge', err);
    res.status(500).json({ error: 'Server error' });
  }
}

async function myChallenges(req, res){
  try{
    const userId = req.user.sub;
    const list = await Challenge.findAll({
      where: { [Op.or]: [{ creatorId: userId }, { acceptedBy: userId }] },
      include: [{ model: Game }, { model: User, as: 'creator', attributes: ['id','fullName'] }]
    });
    res.json({ challenges: list });
  }catch(err){
    console.error('myChallenges', err);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { listOpen, createChallenge, acceptChallenge, myChallenges };
