module.exports = function(sequelize, DataTypes) {
  let gamePlayer = sequelize.define('gamePlayer', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    playerId: { type: DataTypes.INTEGER, field: 'player_id', allowNull: true, references:{model: "player", key: "id"} },
    gameId: { type: DataTypes.INTEGER, field: 'game_id', allowNull: true , references:{model: "game", key: "id"}},
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    tableName: 'game_player',
    version: true,
    paranoid: true,
    underscored: true
  });

  gamePlayer.associate = function(models) {
    models.gamePlayer.belongsTo(models.game);
    models.gamePlayer.hasOne(models.player)
  };

  return gamePlayer;
};
