import gameDao from "../daos/GameDao"
import {mapDataValues} from "../utils";

export async function createGame(game) {
    console.log("Creating game", game)
    return (await gameDao.create(game)).dataValues
}

export async function updateGame(game) {
    await gameDao.update(game,  {id: game.id});
    return await getgame(game.id)
}

export async function getGame(id) {
    return (await gameDao.findOne({id})).dataValues
}

export async function getGames() {
    return mapDataValues(gameDao.findAll())
}

export async function deleteGame(game) {
    return await gameDao.delete({id: game.id})
}
