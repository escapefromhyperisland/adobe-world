<template>
  <button class="square" @click="fillSquare">{{ value }}</button>
</template>

<script>
import { mapGetters, mapState} from 'vuex'

export default {
  name: 'Square',
  props: {
    position: Number,
    value: String
  },

  computed: {
    ...mapState([
      'isStarted'
    ]),
    ...mapGetters({
      squares: 'getSquares',
      currentPlayer: 'getCurrentPlayer',
      stepNumber: 'getStepNumber',
      winner: 'getWinner',
    }),
  },

  methods: {
    fillSquare() {
      if(this.isStarted && this.currentPlayer === 'X') {
        let reverseIndex = this.reverseIndex(this.position)
        const squareValue = this.squares[reverseIndex]
        
        if(this.winner) {
          this.$store.dispatch('earnCoin')
          return
        }
        if (squareValue === null) {
          this.$store.dispatch('clickedSquare', reverseIndex)
          this.dispatchers()
          this.opponentMove()
        } else {
          return
        }
      }
    },

    reverseIndex(index) {
      let reverseIndex = null
      if (index === 0) {
        reverseIndex = 24
      } else if (index === 1) {
        reverseIndex = 23
      } else if (index === 2) {
        reverseIndex = 22
      } else if (index === 3) {
        reverseIndex = 21
      } else if (index === 4) {
        reverseIndex = 20
      } else if (index === 5) {
        reverseIndex = 19
      } else if (index === 6) {
        reverseIndex = 18
      } else if (index === 7) {
        reverseIndex = 17
      } else if (index === 8) {
        reverseIndex = 16
      } else if (index === 9) {
        reverseIndex = 15
      } else if (index === 10) {
        reverseIndex = 14
      } else if (index === 11) {
        reverseIndex = 13
      } else if (index === 12) {
        reverseIndex = 12
      } else if (index === 13) {
        reverseIndex = 11
      } else if (index === 14) {
        reverseIndex = 10
      } else if (index === 15) {
        reverseIndex = 9
      } else if (index === 16) {
        reverseIndex = 8
      } else if (index === 17) {
        reverseIndex = 7
      } else if (index === 18) {
        reverseIndex = 6
      } else if (index === 19) {
        reverseIndex = 5
      } else if (index === 20) {
        reverseIndex = 4
      } else if (index === 21) {
        reverseIndex = 3
      } else if (index === 22) {
        reverseIndex = 2
      } else if (index === 23) {
        reverseIndex = 1
      } else if (index === 24) {
        reverseIndex = 0
      }
      return reverseIndex
    },

    opponentMove() {
      let arr = this.squares
      let index = Math.floor(Math.random() * arr.length)
      while ((arr[index] === 'X') || (arr[index] === 'O')) {
        index = Math.floor(Math.random() * arr.length)
        console.log('Picked random index: ', index)
        if(this.winner || this.stepNumber > 25) {
          return
        }
      }
      this.$store.dispatch('clickedSquare', index)
      this.dispatchers()
      console.log('filled index: ', index, 'with O')
    },
 
    dispatchers() {
      this.$store.dispatch('increaseStepNumber')
      this.$store.dispatch('calculateWinner')
      this.$store.dispatch('flipCurrentPlayer')
    }
  }
}
</script>

<style scoped>
.square {
  color: #000;
  background: #ffffff14;
  background-blend-mode: exclusion;
  border: 1px solid #0000008c;
  font-size: 10vmin;
  font-weight: bold;
  line-height: 34px;
  padding: 0;
  text-align: center;
  box-shadow: inset 0 0 0 #0004;
  text-shadow: 0 0 1px #33920e, 0 2px 5px #5dbf38;
  transition: all .25s ease;
  outline: none;
}

.square:not([disabled]):empty:hover,
.square:not([disabled]):empty:focus {
  box-shadow: inset 0 2px 25px #000000ad;
  cursor: pointer;
}
.square:not([disabled]):empty:active {
  box-shadow: inset 0 2px 50px #000000ad;
}

/*
  add to button
  :class="{shake : noFill === false}"
*/ 
/* .shake {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
} */
</style>