import { createStore } from "vuex";

export default createStore({
  state: {
    isStarted: false,
    squares: Array(9).fill(null),
    currentPlayer: 'X',
    winner: null,
    stepNumber: 1,
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
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let line of lines) {
        const [a, b, c] = line;
        
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          commit('saveWinner', squares[a])
          commit('toggleIsStarted')
        }
      }
    }
  },

  mutations: {
    pushClickedSquare (state, index) {
      state.squares[index] = state.currentPlayer
      console.log(state.squares)
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
    }
  }
})