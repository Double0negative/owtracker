import db from '../models';
import BaseDao from "./BaseDao"

export class AccountDao extends BaseDao {
    constructor(Model, defaultIncludes) {
        super(Model, defaultIncludes)
    }
}

export default new AccountDao(db.account);
