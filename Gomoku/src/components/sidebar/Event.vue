<template>
  <!-- mode="out-in"-->
  <transition name="event-slide">
    <li class="event boxed" v-show="isInChunk">
        <p>{{ msg + " " + id }}</p>
    </li>
  </transition>
</template>

<script>

const EventType = {
  PLAY: 0,
  WELCOME: 1,
  SELF_VICTORY: 2,
  OPONENT_VICTORY: 3,
  TIMER: 4
}

var id = 0;

export default {
  name: 'Event',
  props: {
    msg: { type: String, required: true },
    type: { type: Number, default: EventType.PLAY }
  },
  data () {
    return {
      id: id++
    };
  },
  computed: {
    isInChunk() {
      var start = this.$parent.chunkStart;
      return this.id >= start && this.id < start + this.$parent.chunkSize
    }
  }
};
</script>

<style lang="css" scoped>

.event {
  margin-bottom: 10px;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  overflow-x: auto;
}

.event-slide-enter-active {
  animation: pushed 1.5s;
}

.event-slide-leave-active {
  animation: popped 1.5s;
}

.event-slide-leave, .event-slide-enter-to {
  max-height: 100px;
}

.event-slide-enter, .event-slide-leave-to {
  max-height: 0;
  margin: 0;
  border: 0;
  margin-left: -100%;
}

@keyframes pushed {
  0%, 50% {
    max-height: 0;
    margin: 0;
    border: none;
    margin-left: -100%;
    opacity: 0;
  }
  66% {
    margin-left: -100%;
    opacity: 0;
  }
  75% {
    margin-left: -100%;
    opacity: 1;
  }
  100% {
    max-height: 100px;
  }
}

@keyframes popped {
  0% {
    max-height: 100px;
    margin-left: 0;
    margin-bottom: 10px;
  }
  25% {
    margin-left: -100%;
    margin-bottom: 10px;
    opacity: 1;
  }
  33% {
    margin-left: -100%;
    margin-bottom: 10px;
    max-height: 100px;
    opacity: 0;
  }
  50%, 100% {
    max-height: 0;
    margin: 0;
    border: none;
    margin-left: -100%;
    opacity: 0;
  }
}

</style>
