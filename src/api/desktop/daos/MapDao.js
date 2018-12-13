import db from '../models';
import BaseDao from "./BaseDao"

class MapDao extends BaseDao {
    constructor(Model, defaultIncludes) {
        super(Model, defaultIncludes)
        console.log(Model)
    }
}

console.log("db", db)

export default new MapDao(db.map);
