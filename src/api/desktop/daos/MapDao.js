import db from '../models';
import BaseDao from "./BaseDao"

class MapDao extends BaseDao {
    constructor(Model, defaultIncludes) {
        super(Model, defaultIncludes)
    }
}

export default new MapDao(db.map);
