const Promise = require('bluebird');
//const logger  = require('../../logger');
const { CustomError } = require('../errors/CustomError');
const db = require('../models').default;

let logger = {
    debug: console.log
}

const sequelize = db.sequelize
const Op = sequelize.Op

export default class BaseDao {

    constructor(Model, defaultInclude, defaultLimit = 100, defaultOffset = 0) {
        this.model = Model.inspect();
        this.defaultInclude = defaultInclude
        this.defaultLimit = defaultLimit;
        this.defaultOffset = defaultOffset;
    }

    count(options){
        return db.sequelize.model(this.model).count(options)
    }

    countWithWhere(where, options){
        return db.sequelize.model(this.model).count({ where: where }, options)
    }

    async countDistinctWithWhere(column, where) {
        return await db.sequelize.model(this.model).count({
            distinct: true,
            col: column,
            where: where,
        })
    }

    findAndCountAllWithWhere(where, limit, offset, sort, include) {
        logger.debug("BaseDao.findAndCountAllWithWhere");
        return db.sequelize.model(this.model)
            .findAndCountAll({
                where: where,
                limit: limit,
                offset: offset,
                order: [sort],
                include: include || this.defaultInclude
            });
    }

    findAndCountAll() {
        logger.debug("BaseDao.findAndCountAll");
        return db.sequelize.model(this.model)
            .findAndCountAll();
    }

    findAllWithWhere(where, limit, offset, sort, include) {
        logger.debug("BaseDao.findAllWithWhere");
        return db.sequelize.model(this.model)
            .findAll({
                where: where,
                limit: limit,
                offset: offset,
                order: [sort],
                include: include || this.defaultInclude});
    }

    findAll() {
        logger.debug("BaseDao.findAll",this.model,  db.sequelize.model(this.model));
        return db.sequelize.model(this.model)
            .findAll();
    }

    findAllOptions(limit, offset, sort, include) {
        logger.debug("BaseDao.findAllOptions",this.model,  db.sequelize.model(this.model));
        return db.sequelize.model(this.model)
            .findAll({
                limit: limit,
                offset: offset,
                order: [sort],
                include: include || this.defaultInclude
            });
    }

    findById(id, options) {
        logger.debug("BaseDao.findById")
        if(!options){
            options = {include: this.defaultInclude}
        }
        return db.sequelize.model(this.model)
            .findById(id, options);
    }

    async findByIds(ids, include){
        let currentOffset = 0;
        let currentEndIndex = this.defaultLimit;
        let entities = [];
        do{
            if(ids.length < currentEndIndex){
                currentEndIndex = ids.length;
            }
            const currentSliceOfIds = ids.slice(currentOffset, currentEndIndex);
            const foundEntities = await this.findAllWithWhere({
                id:{
                    [Op.in]: currentSliceOfIds
                }
            }, currentSliceOfIds.length, 0, ["id", "ASC"], include);
            entities = entities.concat(foundEntities);
            currentOffset += this.defaultLimit;
            currentEndIndex += this.defaultLimit;
        }while(currentOffset < ids.length);

        return entities;
    }

    /**
     * This Method will go pageSize at a time over the where clause until everything is returned.  This is useful when that is
     * the business goal and we want to limit the stress on the DB.  Think things like hydrating an object graph that may keep
     * growing but it would be wrong not to return all the data.  Obviously this does NOT save this application from potential
     * going down if too much is hydrated so this should be used when the result set is presumed not large
     *
     * @param where
     * @param sort
     * @param include
     * @param pageSize
     * @returns {Promise<*[]>}
     */
    async paginateThruAllViaFindAllWithWhere(where, sort, include, pageSize = this.defaultLimit){
        let currentOffset = 0;
        let currentLimit = pageSize;
        let count;
        let entities = [];
        do{
            let entitiesAndCount = await this.findAndCountAllWithWhere(where, currentLimit, currentOffset, sort, include);
            entities = entities.concat(entitiesAndCount.rows);
            if(!count){ //never reset this to remove the chance of going on forever
                count = entitiesAndCount.count;
            }
            currentOffset += pageSize;
            currentLimit += pageSize;
        }while(currentOffset < count);

        return entities;
    }

    findOne(where, include, paranoid=true){
        logger.debug("BaseDao.findOne")
        return db.sequelize.model(this.model)
            .findOne({
                where: where,
                include: include || this.defaultInclude,
                paranoid: paranoid
            })
    }

    async create(input, options) {
        logger.debug('BaseDao.create(input)');
        return await db.sequelize.model(this.model)
            .create(input, options);
    }

    findOrCreate(where, defaults, include, paranoid=true){
        logger.debug("BaseDao.findOrCreate")
        return db.sequelize.model(this.model)
            .findOrCreate({
                where: where,
                defaults: defaults,
                include: include || this.defaultInclude,
                paranoid: paranoid
            })
    }

    upsert(input, options) {
        logger.debug('BaseDao.create(input)');
        return db.sequelize.model(this.model)
            .upsert(input, options);
    }

    bulkCreate(entities, options){
        logger.debug('BaseDao.bulkCreate(input)');
        return db.sequelize.model(this.model)
            .bulkCreate(entities, options)
    }

    updateById(id, input) {
        logger.debug("BaseDao.update(id, input)")
        return db.sequelize.model(this.model)
            .update(input,
                {
                    where: { id: id },
                    returning: true,
                    plain: true
                })
    }

    /**
     * @param  {object} format: { column: "value", column2: "another value"}
     * @param  {object} format: { column: "value", column2: "another value"}
     *
     * @return {array} [0, 1]
     */
    update(input, where) {
        logger.debug("BaseDao.update(input, where)")
        return db.sequelize.model(this.model)
            .update(input,
                {
                    where: where,
                    returning: true,
                    plain: true
                })
    }

    delete(where) {
        return db.sequelize.model(this.model)
            .destroy({
                where
            })
    }
}

