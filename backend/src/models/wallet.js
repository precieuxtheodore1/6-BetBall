module.exports = (sequelize, DataTypes) => {
  const Wallet = sequelize.define('Wallet', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
    userId: { type: DataTypes.UUID, allowNull: false },
    cdf_balance: { type: DataTypes.DECIMAL(18,2), defaultValue: 0 },
    usd_balance: { type: DataTypes.DECIMAL(18,2), defaultValue: 0 },
    usdt_balance: { type: DataTypes.DECIMAL(18,2), defaultValue: 0 },
    frozen_balance: { type: DataTypes.DECIMAL(18,2), defaultValue: 0 }
  }, {
    tableName: 'wallets',
    timestamps: true
  });

  return Wallet;
};
