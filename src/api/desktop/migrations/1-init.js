module.exports = {
  up: async (queryInterface, Sequelize) => {
    const DataTypes = Sequelize

    try {
      queryInterface.createTable("account", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name:  { type: DataTypes.STRING, field: 'name', allowNull: false},
        battleTag:  { type: DataTypes.STRING, field: 'battle_tag', allowNull: false}
      })

      queryInterface.createTable("game", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        accountId:  { type: DataTypes.INTEGER, field: 'account_id', allowNull: false ,references:{model: "account", key: "id"}},
        mapId: { type: DataTypes.INTEGER, field: 'map_id', allowNull: false, references:{model: "map", key: "id"} },
        result: {type: DataTypes.STRING, field: "result", allowNull: false},
        length: {type: DataTypes.STRING, field: "length", allowNull: false},
        type: { type: DataTypes.STRING, field: 'type', allowNull: true },
      })

      queryInterface.createTable("game_player", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        playerId: { type: DataTypes.INTEGER, field: 'player_id', allowNull: true, references:{model: "player", key: "id"} },
        gameId: { type: DataTypes.INTEGER, field: 'game_id', allowNull: true , references:{model: "game", key: "id"}},
      })

      queryInterface.createTable("map", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        key: { type: DataTypes.STRING, field: 'key', allowNull: false },
        inGameKey: {type: DataTypes.STRING, field: "in_game_key", allowNull: false},
        name: {type: DataTypes.STRING, field: "name", allowNull: false},
        type: { type: DataTypes.STRING, field: 'type', allowNull: true },
      })

      queryInterface.createTable("player", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name:  { type: DataTypes.STRING, field: 'name', allowNull: false},
        battleTag:  { type: DataTypes.STRING, field: 'battle_tag', allowNull: false}
      })
    }catch(err){
      console.error(err);
    }
  }
};