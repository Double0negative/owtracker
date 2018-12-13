const db = require('../models');
const BaseDao = require('./BaseDao');

class GameDao extends BaseDao {
    constructor(Model, defaultIncludes) {
        super(Model, defaultIncludes)
    }
}

const gameDao = new GameDao(db.game, [{model: db.map}]);

module.exports = {
    gameDao: gameDao,
    gameDao: GameDao
};
