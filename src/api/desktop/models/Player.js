module.exports = function(sequelize, DataTypes) {
  let player = sequelize.define('player', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name:  { type: DataTypes.STRING, field: 'name', allowNull: false},
    battleTag:  { type: DataTypes.STRING, field: 'battle_tag', allowNull: false}

  }, {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    tableName: 'player',
    version: true,
    paranoid: true,
    underscored: true
  });


  return player;
};
