module.exports = function (sequelize, DataTypes) {
  let game = sequelize.define('game', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    accountId: { type: DataTypes.INTEGER, field: 'account_id', allowNull: false, references: { model: "account", key: "id" } },
    mapId: { type: DataTypes.INTEGER, field: 'map_id', allowNull: true, references: { model: "map", key: "id" } },
    result: { type: DataTypes.STRING, field: "result", allowNull: true },
    length: { type: DataTypes.STRING, field: "length", allowNull: true },
    type: { type: DataTypes.STRING, field: 'type', allowNull: true },
  }, {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
      tableName: 'game',
      version: true,
      paranoid: true,
      underscored: true
    });

  game.associate = function (models) {
    models.game.belongsTo(models.map);
    models.game.belongsTo(models.account);
    models.game.hasMany(models.gamePlayer)
  };

  return game;
};
