import gameDao from "../daos/GameDao"

export async function getGameById(id) {
    return await gameDao.findAll()
}

export async function createAccount(game) {
    await gameDao.create(game)
}

export async function getGames(start = 1, limit = 100 ) {
    console.log(db)
    return (await db.map.findAll()).map(data => data.dataValues)
}
