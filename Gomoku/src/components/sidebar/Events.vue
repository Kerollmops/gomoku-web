<template>
    <div class="events">
        <ul>
          <event v-for="i in numberOfEvents"></event>
        </ul>
        <div class="controls">
          <button class="boxed" :disabled="isFirstChunk()" @click="decrementChunk">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 10 5" width="20px" height="10px">
              <line stroke-linecap="round" x1="0" y1="5" x2="5" y2="0" stroke-width="0.2" stroke="#abb2bf"/>
              <line stroke-linecap="round" x1="10" y1="5" x2="5" y2="0" stroke-width="0.2" stroke="#abb2bf"/>
            </svg>
          </button>
          <button class="boxed" :disabled="isLastChunk()" @click="incrementChunk">
            <!-- TODO: reuse svg -->
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 10 5" width="20px" height="10px">
              <g transform="rotate(180 5 2.5)">
                <line stroke-linecap="round" x1="0" y1="5" x2="5" y2="0" stroke-width="0.2" stroke="#abb2bf"/>
                <line stroke-linecap="round" x1="10" y1="5" x2="5" y2="0" stroke-width="0.2" stroke="#abb2bf"/>
              <g>
            </svg>
          </button>
        </div>
    </div>
</template>

<script>
import Event from './Event.vue'

export default {
  name: 'Events',
  components: { Event },
  data () {
    return {
      events: [Event, Event, Event, Event, Event, Event, Event, Event, Event,
               Event, Event, Event, Event, Event, Event, Event, Event, Event,
               Event, Event, Event],
      chunkSize: 5,
      chunk: 0
    };
  },
  methods: {
    numberOfChunks() {
      return Math.ceil(this.events.length / this.chunkSize)
    },
    isFirstChunk() {
      return this.chunk == 0
    },
    isLastChunk() {
      return this.chunk == this.numberOfChunks() - 1
    },
    incrementChunk() {
      if (!this.isLastChunk()) {
        this.chunk += 1
      }
    },
    decrementChunk() {
      if (!this.isFirstChunk()) {
        this.chunk -= 1
      }
    }
  },
  computed: {
    numberOfEvents() {
      return this.events.length
    }
  }
};
</script>

<style lang="css" scoped>

.events ul {
  padding-top: 1em;
  list-style: none;
  margin: 0px;
  padding-left: 1rem;
  padding-right: 1rem;
}

.events button {
  padding-left: 1em;
  padding-right: 1em;
}

.events button:hover {
  cursor: pointer;
}

.events button:disabled {
  cursor: default;
}

.events button:disabled svg {
  opacity: 0.5;
}

.events .controls {
  margin: 0 auto;
  text-align: center;
  margin-top: 10px;
}

</style>
