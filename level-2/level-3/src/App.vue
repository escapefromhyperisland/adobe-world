<template>
  <div>
    <div class="score-board">
      <img class="coins" src="./assets/dollar.svg" alt="dollar sign">
      <p class="coins__text">{{ coins }}</p>
    </div>
    <Game />
  </div>
</template>

<script>
import Game from './components/Game'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Game
  },

  computed: {
    ...mapState([
      'coins'
    ])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  --theme-color: #CC0364;
  --gradient-color-base: #C91F8A;
  --gradient-color-1: #F42FDA;
  --gradient-color-2: #C91F8A;
  --gradient-color-3: #CC0364;
}

html, body {
  height: 100vh;
}

.score-board {
  display: flex;
  padding: 5px;
  height: 40px;
  align-items: center;
}

.coins {
  height: 40px;
}

.coins__text {
  color: #fff;
  margin-left: 10px;
  font-weight: 500;
}
</style>
