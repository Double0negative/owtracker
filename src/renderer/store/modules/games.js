import client from "../../../api/client"

const state = {}

let findGameIndex = (games, id) => games.findIndex(game => game.id == id)

const mutations = {
  SET_GAMES (state, payload ) {
    state = payload.games
    state.sort((a,b)=> a.id - b.id)
  },
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
  }
}

const getters = {
  getGame: (state) => (id) => findGameIndex(state, id)
}

const actions = {
  loadGames ({ commit }) {
    
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

