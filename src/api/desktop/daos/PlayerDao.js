import db from '../models';
import BaseDao from "./BaseDao"

export class PlayerDao extends BaseDao {
    constructor(Model, defaultIncludes) {
        super(Model, defaultIncludes)
    }
}

export default new PlayerDao(db.player, [{model: db.map}]);
