const { User, Wallet } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const JWT_EXP = process.env.JWT_EXP || '3600s';
const REFRESH_SECRET = process.env.REFRESH_TOKEN_SECRET || 'refresh';

async function register(req, res){
  try{
    const { fullName, email, phone, password, country } = req.body;
    if(!fullName || !email || !password) return res.status(400).json({ error: 'Missing required fields' });

    const exists = await User.findOne({ where: { email }});
    if(exists) return res.status(400).json({ error: 'Email already used' });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ fullName, email, phone, passwordHash: hash, country });

    // create wallet
    await Wallet.create({ userId: user.id });

    const token = jwt.sign({ sub: user.id, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXP });

    res.json({
      token,
      user: { id: user.id, fullName: user.fullName, email: user.email, role: user.role }
    });
  }catch(err){
    console.error('Register error', err);
    res.status(500).json({ error: 'Server error' });
  }
}

async function login(req, res){
  try{
    const { email, password } = req.body;
    if(!email || !password) return res.status(400).json({ error: 'Missing credentials' });

    const user = await User.findOne({ where: { email }});
    if(!user) return res.status(401).json({ error: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.passwordHash);
    if(!match) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ sub: user.id, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXP });
    res.json({ token, user: { id: user.id, fullName: user.fullName, email: user.email, role: user.role } });
  }catch(err){
    console.error('Login error', err);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { register, login };
