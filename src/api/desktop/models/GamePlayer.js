module.exports = function(sequelize, DataTypes) {
  let gamePlayer = sequelize.define('gamePlayer', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    accountId: { type: DataTypes.INTEGER, field: 'account_id', allowNull: true, references:{model: "account", key: "id"} },
    gameId: { type: DataTypes.INTEGER, field: 'game_id', allowNull: true , references:{model: "game", key: "id"}},
    teammate: {type: DataTypes.BOOLEAN, field: "teammate", allowNull: false, defaultValue: false},
    slot:  { type: DataTypes.INTEGER, field: 'game_id', allowNull: true}
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
    models.gamePlayer.belongsTo(models.account)
  };

  return gamePlayer;
};
