import accountDao from "../daos/AccountDao"
import gamePlayerDao from "../daos/GamePlayerDao"
import {mapDataValues} from "../utils"

export async function createAccount(account) {
    return (await accountDao.create(account)).dataValues
}

export async function updateAccount(account) {
    await accountDao.update(account,  {id: account.id});
    return await getAccount(account.id)
}

export async function getAccount(id) {
    return (await accountDao.findOne({id})).dataValues
}

export async function getAccounts() {
    return mapDataValues(await accountDao.findAll())
}

export async function deleteAccount(account) {
    return await accountDao.delete({id: account.id})
}

export async function getUserAccounts() {
    return await accountDao.findAllWithWhere({user: true})
}

export async function findOrCreateAccount(playerName, battleTag) {
    return mapDataValues(await accountDao.findOrCreate({name: playerName, battleTag}))
}

export async function addPlayerToGame(playerId, gameId) {
    return (await gamePlayerDao.create({playerId, gameId}))
}