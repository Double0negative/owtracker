module.exports = function (sequelize, DataTypes) {
  let account = sequelize.define('account', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, field: 'name', allowNull: false },
    battleTag: { type: DataTypes.STRING, field: 'battle_tag', allowNull: true },
    user: { type: DataTypes.BOOLEAN, field: "user", allowNull: false, defaultValue: false }

  }, {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      tableName: 'account',
      version: true,
      paranoid: true,
      underscored: true
    });

  account.associate = function (models) {
    models.account.hasMany(models.gamePlayer);
  };
  return account;
};
