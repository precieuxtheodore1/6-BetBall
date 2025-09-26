module.exports = (sequelize, DataTypes) => {
  const Competition = sequelize.define('Competition', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    title: { type: DataTypes.STRING, allowNull: false },
    gameId: { type: DataTypes.UUID, allowNull: false },
    entryFee: { type: DataTypes.DECIMAL(18,2), defaultValue: 0 },
    prizePool: { type: DataTypes.DECIMAL(18,2), defaultValue: 0 },
    status: { type: DataTypes.ENUM('registration','running','finished'), defaultValue: 'registration' }
  }, { tableName: 'competitions', timestamps: true });

  return Competition;
};
