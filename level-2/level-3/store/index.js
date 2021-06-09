import { createStore } from "vuex";

export default createStore({
  state: {
    isStarted: false,
    squares: Array(25).fill(null),
    currentPlayer: 'X',
    winner: null,
    stepNumber: 1,
    coins: 0
  },

  getters: {
    getSquares: state => state.squares,
    getCurrentPlayer: state => state.currentPlayer,
    getStepNumber: state => state.stepNumber,
    getWinner: state => state.winner,
  },

  actions: {
    clickedSquare ({ commit }, index) {
      commit('pushClickedSquare', index)
    },

    flipCurrentPlayer(context) {
      context.commit('setCurrentPlayer')
    },

    increaseStepNumber(context) {
      context.commit('setStepNumber')
    },

    calculateWinner({ state, commit }) {
      const squares = state.squares
      const lines = [
        [0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9],
        [10, 11, 12, 13, 14],
        [15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24],
        [0, 5, 10, 15, 20],
        [1, 6, 11, 16, 21],
        [2, 7, 12, 17, 22],
        [3, 8, 13, 18, 23],
        [4, 9, 14, 19, 24],
        [4, 8, 12, 16, 20],
        [0, 6, 12, 18, 24]
      ];
      for (let line of lines) {
        const [a, b, c, d, e] = line;
        
        if (squares[a] && 
          squares[a] === squares[b] && 
          squares[a] === squares[c] &&
          squares[a] === squares[d] &&
          squares[a] === squares[e]) {
          commit('saveWinner', squares[a])
          commit('toggleIsStarted')
          commit('increaseCoins')
        }
      }
    },

    // earnCoin(context) {
    //   context.commit('increaseCoins')
    // }
  },

  mutations: {
    pushClickedSquare (state, index) {
      state.squares[index] = state.currentPlayer
    },

    setCurrentPlayer(state) {
      state.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X'
    },

    saveWinner(state, payload) {
      state.winner = payload
    },

    setStepNumber(state) {
      state.stepNumber += 1
    },

    toggleIsStarted(state) {
      state.isStarted = !state.isStarted
    },

    increaseCoins(state) {
      state.coins += 1
    }
  }
})