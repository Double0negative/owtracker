import client from "../../../api/client"

const state = []

let findAccountIndex = (accounts, id) => accounts.findIndex(account => account.id == id)
let findAccountIndexByName = (accounts, name) => accounts.findIndex(account => account.name == name)

const mutations = {
  ADD_ACCOUNT (state, payload) {
    let index = findAccountIndex(state, payload.account.id)
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
    getAccountByName: (state) => (name) => accounts[findAccountIndexByName(state, name)]
}

const actions = {
   async loadAccounts ({ commit, state }) {
       commit("CLEAR_ACCOUNTS")
        let accounts = await client.getAccounts();
        if(accounts) {
            accounts.forEach(account => {
                commit( "ADD_ACCOUNT", {account})
            })
        }
    },
    async createAccount({ commit }) {
        console.log("Creating account")
        let account = await client.createAccount({name: "name", battleTag: ""})
        console.log("Created account", account)
        commit("ADD_ACCOUNT", {account})
    },
    async updateAccount({ commit }, payload) {
        let account = await client.updateAccount(payload);
        console.log("acccount", account)
        commit("UPDATE_ACCOUNT", {account})
    },
    async deleteAccount({commit}, payload) {
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

