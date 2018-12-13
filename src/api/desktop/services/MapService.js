const db = require("../models").default


export async function getMapId(id) {
  return await db.map.findOne({
    where: {
      id
    }
  })
}

export async function getMapByKey(key) {
  return await db.map.findOne({
    where: {
      key
    }
  })
}

export async function getAllMaps() {
  console.log(db)
  return (await db.map.findAll()).map(data => data.dataValues)
}
