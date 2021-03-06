module.exports = {
  up: async (queryInterface, Sequelize) => {
    const DataTypes = Sequelize

    try {
      queryInterface.createTable("account", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, field: 'name', allowNull: false },
        battleTag: { type: DataTypes.STRING, field: 'battle_tag', allowNull: true },
        user: { type: DataTypes.BOOLEAN, field: "user", defaultValue: false, allowNull: false },
        created_at: { type: Sequelize.DATE, allowNull: true },
        updated_at: { type: Sequelize.DATE, allowNull: true },
        deleted_at: { type: Sequelize.DATE, allowNull: true },
        version: { type: DataTypes.BIGINT, allowNull: false, defaultValue: 0 }
      })

      queryInterface.createTable("game", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        accountId: { type: DataTypes.INTEGER, field: 'account_id', allowNull: false, references: { model: "account", key: "id" } },
        mapId: { type: DataTypes.INTEGER, field: 'map_id', allowNull: true, references: { model: "map", key: "id" } },
        result: { type: DataTypes.STRING, field: "result", allowNull: true },
        length: { type: DataTypes.STRING, field: "length", allowNull: true },
        type: { type: DataTypes.STRING, field: 'type', allowNull: true },
        created_at: { type: Sequelize.DATE, allowNull: true },
        updated_at: { type: Sequelize.DATE, allowNull: true },
        deleted_at: { type: Sequelize.DATE, allowNull: true },
        version: { type: DataTypes.BIGINT, allowNull: false, defaultValue: 0 }
      })

      queryInterface.createTable("game_player", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        accountId: { type: DataTypes.INTEGER, field: 'account_id', allowNull: true, references: { model: "account", key: "id" } },
        gameId: { type: DataTypes.INTEGER, field: 'game_id', allowNull: true, references: { model: "game", key: "id" } },
        teammate: { type: DataTypes.BOOLEAN, field: "teammate", allowNull: false, defaultValue: false },
        slot: { type: DataTypes.INTEGER, field: 'slot', allowNull: true },
        created_at: { type: Sequelize.DATE, allowNull: true },
        updated_at: { type: Sequelize.DATE, allowNull: true },
        deleted_at: { type: Sequelize.DATE, allowNull: true },
        version: { type: DataTypes.BIGINT, allowNull: false, defaultValue: 0 }
      })

      queryInterface.createTable("map", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        key: { type: DataTypes.STRING, field: 'key', allowNull: false },
        inGameKey: { type: DataTypes.STRING, field: "in_game_key", allowNull: false },
        name: { type: DataTypes.STRING, field: "name", allowNull: false },
        type: { type: DataTypes.STRING, field: 'type', allowNull: true },
        created_at: { type: Sequelize.DATE, allowNull: true },
        updated_at: { type: Sequelize.DATE, allowNull: true },
        deleted_at: { type: Sequelize.DATE, allowNull: true },
        version: { type: DataTypes.BIGINT, allowNull: false, defaultValue: 0 }
      })

    } catch (err) {
      console.error(err);
    }
  }
};
