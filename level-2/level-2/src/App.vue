<template>
  <div>
    <Game />
  </div>
</template>

<script>
import Game from './components/Game'

export default {
  name: 'App',
  components: {
    Game
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
</style>
