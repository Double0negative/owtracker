import client from "../../../api/client"


const state = {
  games: []
}

let findGameIndex = (games, index) => state.games.findIndex(game => game.gameId == payload.id)

const mutations = {
  SET_GAMES (state, payload ) {
    state.games = payload.games
    state.games.sort((a,b)=> a.id - b.id)
  },
  ADD_GAME(state, payload) {
    state.games.push(payload.game)
    state.games.sort((a,b)=> a.id - b.id)
  },
  UPDATE_GAME (state, payload) {
    let index = findGameIndex(state.games, payload.id)
    state.games[index] = payload.game
  },
  DELETE_GAME (state, payload) {
    let index = findGameIndex(state.games, payload.id)
    state.games.splice(index, 1);
  }
}

const getters = {
  getGame: (state) => (id) => findGameIndex(state, id)
}

const actions = {
  loadGames ({ commit }) {
    client.
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions
}

