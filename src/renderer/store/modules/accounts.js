import client from "../../../api/client"

const state = []

let findAccountIndex = (accounts, id) => accounts.findIndex(account => account.id == id)
let findAccountIndexByName = (accounts, name) => accounts.findIndex(account => account.name == name)

const mutations = {
  ADD_ACCOUNT (state, payload) {
    state.push(payload.account)
    state.sort((a,b)=> a.id - b.id)
  },
  UPDATE_ACCOUNT (state, payload) {
    let index = findAccountIndex(state, payload.account.id)
    state.splice(index, 1, payload.account)
  },
  DELETE_ACCOUNT (state, payload) {
    let index = findAccountIndex(state, payload.account.id)
    state.splice(index, 1);
  },
  CLEAR_ACCOUNTS(state) {
    state.splice(0, state.length)
  }
}

const getters = {
    getAccountById: (state) => (id) => accounts[findAccountIndex(state, id)],
    getAccountByName: (state) => (name) => accounts[findAccountIndexByName(state, name)],
    getAccounts: (state) => state.accounts
}

const actions = {
   async loadUserAccounts ({ commit, state }) {
       commit("CLEAR_ACCOUNTS")
        let accounts = await client.getUserAccounts();
        if(accounts) {
            accounts.forEach(account => {
                commit( "ADD_ACCOUNT", {account})
            })
        }
    },
    async createUserAccount({ commit }) {
        let account = await client.createAccount({user: true, name: "name", battleTag: ""})
        commit("ADD_ACCOUNT", {account})
    },
    async updateUserAccount({ commit }, payload) {
        let account = await client.updateAccount(payload);
        commit("UPDATE_ACCOUNT", {account})
    },
    async deleteUserAccount({commit}, payload) {
        await client.deleteAccount(payload)
        commit("DELETE_ACCOUNT", {account: payload})
    }
}

export default {
  state,
  mutations,
  getters,
  actions
}

