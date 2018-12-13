import mapDao from "../daos/MapDao"


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
  return _map(await mapDao.findAll())
}



