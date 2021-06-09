<template>
  <div class="board">
    <Square v-for="(square, position) in squares" :key="position"
      :position="position" :value="square"
    />
  </div>
</template>

<script>
import Square from './Square'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Board',
  computed: {
    ...mapState([
      'isStarted'
    ]),

    ...mapGetters({
      squares: 'getSquares'
    })
  },

  components: {
    Square
  },
}
</script>

<style scoped>
.board {
  border: 0.5rem solid #ffffff14;
  box-shadow: 2.5px 5px 25px #0004, 0 1px 6px #0006;
  border-radius: .5rem;
  width: 55vmin;
  height: 55vmin;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  backdrop-filter: blur(10px);
  background-blend-mode: exclusion;
}

/*
  add to div clas="board"
  :class="{rotate : isStarted}"
*/ 
/* .rotate {
  animation-duration: 5s;
  animation-name: spin;
  animation-iteration-count: infinite;
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
} */
</style>