const { User, Wallet } = require('../models');

async function getProfile(req, res){
  try{
    const userId = req.user.sub;
    const user = await User.findByPk(userId, { attributes: ['id','fullName','email','phone','role','country','isVerified']});
    if(!user) return res.status(404).json({ error: 'User not found' });
    const wallet = await Wallet.findOne({ where: { userId: user.id }});
    res.json({ user, wallet });
  }catch(err){
    console.error('GetProfile', err);
    res.status(500).json({ error: 'Server error' });
  }
}

async function updateProfile(req, res){
  try{
    const userId = req.user.sub;
    const { fullName, phone, country } = req.body;
    const user = await User.findByPk(userId);
    if(!user) return res.status(404).json({ error: 'User not found' });

    user.fullName = fullName || user.fullName;
    user.phone = phone || user.phone;
    user.country = country || user.country;
    await user.save();

    res.json({ ok: true, user });
  }catch(err){
    console.error('UpdateProfile', err);
    res.status(500).json({ error: 'Server error' });
  }
}

async function allUsers(req, res){
  try{
    // for demo: only admin should call this; check role
    if(req.user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
    const users = await User.findAll({ attributes: ['id','fullName','email','role','country','isVerified']});
    res.json({ users });
  }catch(err){
    console.error('AllUsers', err);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = { getProfile, updateProfile, allUsers };
