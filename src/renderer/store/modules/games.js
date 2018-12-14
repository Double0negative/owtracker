import client from "../../../api/client"

const state = []

let findGameIndex = (games, id) => games.findIndex(game => game.id == id)

const mutations = {
  ADD_GAME(state, payload) {
    state.push(payload.game)
    state.sort((a,b)=> a.id - b.id)
  },
  UPDATE_GAME (state, payload) {
    let index = findGameIndex(state, payload.id)
    state[index] = payload.game
  },
  DELETE_GAME (state, payload) {
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
  async loadGames({commit}) {
    let games = await client.getGames()
    console.log("Loading games", {games})
    commit("CLEAR_GAMES")
    if(games) {
      games.forEach(game => commit("ADD_GAME", {game}))
    }
    
  },
  async createGame ({ commit }, payload) {
    let game = await client.createGame(payload);
    commit("ADD_GAME", {game})
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

