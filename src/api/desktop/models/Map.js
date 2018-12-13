module.exports = function(sequelize, DataTypes) {
  let map = sequelize.define('map', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    key: { type: DataTypes.STRING, field: 'key', allowNull: false },
    inGameKey: {type: DataTypes.STRING, field: "in_game_key", allowNull: false},
    name: {type: DataTypes.STRING, field: "name", allowNull: false},
    type: { type: DataTypes.STRING, field: 'type', allowNull: true },
  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    tableName: 'map',
    version: true,
    paranoid: true
  });


  map.associate = function(models) {
   // models.map.belongsTo(models.game);
  };

  return map;
};
