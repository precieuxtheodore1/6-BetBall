require('dotenv').config();
const http = require('http');
const app = require('./app');
const { initSocket } = require('./services/liveService');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 4000;

async function start(){
  try{
    // connect db
    await sequelize.authenticate();
    console.log('Database connected.');

    // sync models (dev). In production, use migrations.
    await sequelize.sync({ alter: true });
    console.log('Database synced.');

    const server = http.createServer(app);
    initSocket(server);

    server.listen(PORT, ()=> {
      console.log(`Server listening on port ${PORT}`);
    });
  }catch(err){
    console.error('Startup error', err);
    process.exit(1);
  }
}

start();
