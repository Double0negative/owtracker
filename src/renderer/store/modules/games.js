import client from "../../../api/client"

const state = []

let findGameIndex = (games, id) => games.findIndex(game => game.id == id)
let findPlayerIndex = (game, id) => game.gamePlayers.findIndex(player => player.id == id)

const mutations = {
  ADD_GAME(state, payload) {
    state.push(payload.game)
    state.sort((a, b) => a.id - b.id)
  },
  UPDATE_GAME(state, payload) {
    console.log("UPDATE_GAME", state, JSON.stringify(payload))
    let index = findGameIndex(state, payload.id)
    console.log("Updating ", index)
    state.splice(index, 1, payload.game)
  },
  DELETE_GAME(state, payload) {
    let index = findGameIndex(state, payload.id)
    state.splice(index, 1);
  },
  CLEAR_GAMES(state) {
    state.splice(0, state.length)
  }
}

const getters = {
  getGame: (state) => (id) => findGameIndex(state, id)
}

const actions = {
  async loadGames({ commit }, payload) {
    let games = await client.getGames(payload.accountId, payload.limit)
    commit("CLEAR_GAMES")
    if (games) {
      games.forEach(game => commit("ADD_GAME", { game }))
    }
  },
  async reloadGame({ commit, state }, payload) {
    let game = client.getGame(payload.gameId)
    commit("UPDATE_GAME", { id: payload.gameId, game })
  },
  async createGame({ commit }, payload) {
    let game = await client.createGame(payload);
    game = await client.getGame(game.id)
    commit("ADD_GAME", { game })
    return game;
  },
  clearGames({ commit }) {
    commit("CLEAR_GAMES")
  },
  async addPlayerToGame({ commit }, payload) {
    await client.addPlayerToGame(payload.gameId, payload.accountId, payload.teammate);
    let game = await client.getGame(payload.gameId);
    commit("UPDATE_GAME", { id: game.id, game: game })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

