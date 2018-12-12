module.exports = function(sequelize, DataTypes) {
  let game = sequelize.define('game', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    accountId:  { type: DataTypes.INTEGER, field: 'account_id', allowNull: false ,references:{model: "account", key: "id"}},
    mapId: { type: DataTypes.INTEGER, field: 'map_id', allowNull: false, references:{model: "map", key: "id"} },
    result: {type: DataTypes.STRING, field: "result", allowNull: false},
    length: {type: DataTypes.STRING, field: "length", allowNull: false},
    type: { type: DataTypes.STRING, field: 'type', allowNull: true },
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    tableName: 'game',
    version: true,
    paranoid: true
  });

  game.associate = function(models) {
    models.game.hasOne(models.map);
    models.game.hasOne(models.account);
    models.game.hasMany(models.gamePlayer)
  };

  return game;
};
