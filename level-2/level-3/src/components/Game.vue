<template>
  <div class="game">
    <div class="game-area">
      <video playsinline autoplay muted loop poster="../assets/neon.png" id="bgvid">
        <source src="../assets/neon.mp4" type="video/mp4">
      </video>
      <Board />
      <div class="game-info" v-if="winner || stepNumber > 25 || isStarted === false">
        <div>
          <p v-if="isStarted === false && winner === null">I'll bet you a coin you can't beat me!</p>
          <p v-if="winner">{{ winner === 'X' ? `You won!` : 'You lost' }}</p>
          <p v-if="winner === null && stepNumber > 25">It's a draw!</p>
          <button v-if="winner || stepNumber > 25" 
            @click="restart">Next level
          </button>
          <button v-if="isStarted === false && winner === null" 
            @click="startGame" 
            :class="{hidden : isStarted}">START
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Board from './Board'
import { mapState } from 'vuex'

export default {
  name: 'Game',
  components: {
    Board
  },
 
  computed: {
    ...mapState([
      'isStarted',
      'winner',
      'stepNumber'
    ])
  },

  methods: {
    startGame() {
      this.$store.commit('toggleIsStarted')
    },

    restart() {
      window.location.href = "https://matildabjorken.github.io/level3/";
    },
  }
}
</script>

<style scoped>
.hidden {
  display: none;
}

.game {
  background-color: (var(--gradient-color-base));
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.game-area {
  display: flex;
  flex-flow: column;
}

.game-info {
  margin: 3vmin 0 0;
  padding: 1rem .5rem;
  font-size: 1.25em;
  font-weight: 700;
  text-align: center;
  box-shadow: 2.5px 5px 25px #0001, 0 1px 6px #0004;
  text-shadow: 0 0 1px #CC0364, 0 2px 5px #CC0364;
  border-radius: .5rem;
  backdrop-filter: blur(10px);
  background: #ffffff14;
  background-blend-mode: exclusion;
  color: #111;
}
.game-info p {
  color: #ffffffa6;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-info button {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 900;
  font-size: .75em;
  padding: .5rem 1rem;
  margin-top: .5rem;
  border: 2px solid #CC0364;
  border-radius: 5px;
  background: transparent;
  text-shadow: 0 0 1px #CC0364, 0 2px 5px #CC0364;
  color: #ffffffa6;
  cursor: pointer;
  outline: none;
  transition: all .25s ease;
}
.game-info button:focus,
.game-info button:hover {
  background: #1115;
  box-shadow: 0 0 10px rgba(var(--theme-color), .75);
  color: rgba(var(--theme-color));
  text-shadow: -1px -1px 0 #CC0364, -1px 1px 0 #CC0364, 1px -1px 0 #CC0364, 1px 1px 0 #CC0364;
}
.game-info button:active {
  background: #1119;
}

video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>