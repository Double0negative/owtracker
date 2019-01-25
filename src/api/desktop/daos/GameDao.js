import db from '../models';
import BaseDao from "./BaseDao"

export class GameDao extends BaseDao {
    constructor(Model, defaultIncludes) {
        super(Model, defaultIncludes)
    }
}

export default new GameDao(db.game, [{ model: db.map }, { model: db.gamePlayer }, { model: db.account }]);
