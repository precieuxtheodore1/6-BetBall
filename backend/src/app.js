const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const gameRoutes = require('./routes/games');
const challengeRoutes = require('./routes/challenges');
const competitionRoutes = require('./routes/competitions');

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/games', gameRoutes);
app.use('/api/challenges', challengeRoutes);
app.use('/api/competitions', competitionRoutes);

// health check
app.get('/health', (req,res)=> res.json({ ok: true, time: new Date() }));

// simple error handler
app.use((err, req, res, next) => {
  console.error(err.stack || err);
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;
