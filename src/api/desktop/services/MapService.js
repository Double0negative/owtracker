const db = require("../models")


module.exports.getMapId = async (id) => {
  return await db.Map.findOne({
    where: {
      id
    }
  })
}

module.exports.getMapByKey = async (key) => {
  return await db.Map.findOne({
    where: {
      key
    }
  })
}

module.exports.getMaps = async () => {
  return await db.Map.findAll()
}
