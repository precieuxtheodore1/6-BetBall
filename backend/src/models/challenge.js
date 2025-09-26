module.exports = (sequelize, DataTypes) => {
  const Challenge = sequelize.define('Challenge', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    creatorId: { type: DataTypes.UUID, allowNull: false },
    gameId: { type: DataTypes.UUID, allowNull: false },
    stake: { type: DataTypes.DECIMAL(18,2), allowNull: false },
    currency: { type: DataTypes.STRING, defaultValue: 'CDF' },
    status: { type: DataTypes.ENUM('open','accepted','in_progress','finished','cancelled'), defaultValue: 'open' },
    acceptedBy: { type: DataTypes.UUID, allowNull: true }
  }, { tableName: 'challenges', timestamps: true });

  return Challenge;
};
