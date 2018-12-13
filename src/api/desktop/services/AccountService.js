import accountDao from "../daos/AccountDao"
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
    return mapDataValues(accountDao.findAll())
}

export async function deleteAccount(account) {
    return await accountDao.delete({id: account.id})
}