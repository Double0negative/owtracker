import db from '../models';
import BaseDao from "./BaseDao"

export class GamePlayerDao extends BaseDao {
    constructor(Model, defaultIncludes) {
        super(Model, defaultIncludes)
    }
}

export default new GamePlayerDao(db.gamePlayer, [{model: db.account}]);
