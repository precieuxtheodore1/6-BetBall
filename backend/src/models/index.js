const { Sequelize, DataTypes } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const sequelize = new Sequelize(config.url, { dialect: 'postgres', logging: false });

const User = require('./user')(sequelize, DataTypes);
const Wallet = require('./wallet')(sequelize, DataTypes);
const Game = require('./game')(sequelize, DataTypes);
const Challenge = require('./challenge')(sequelize, DataTypes);
const Competition = require('./competition')(sequelize, DataTypes);

// relations
User.hasOne(Wallet, { foreignKey: 'userId', onDelete: 'CASCADE' });
Wallet.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Challenge, { foreignKey: 'creatorId', as: 'createdChallenges' });
Challenge.belongsTo(User, { foreignKey: 'creatorId', as: 'creator' });

Game.hasMany(Challenge, { foreignKey: 'gameId' });
Challenge.belongsTo(Game, { foreignKey: 'gameId' });

Game.hasMany(Competition, { foreignKey: 'gameId' });
Competition.belongsTo(Game, { foreignKey: 'gameId' });

// export
module.exports = {
  sequelize,
  Sequelize,
  User,
  Wallet,
  Game,
  Challenge,
  Competition
};
