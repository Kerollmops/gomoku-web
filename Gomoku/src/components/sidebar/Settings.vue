<template>
    <div class="settings boxed">
      <form @submit.prevent="onSubmit">
        <label for="depth">Depth: </label>
        <input name="depth" type="number" value="10" min="2" max="25"/>
      </form>
      <button @click="pushEvent">new event</button>
    </div>
</template>

<script>
import events_store from '../../EventsStore'

export default {
  name: 'Settings',
  data () {
    return {

    };
  },
  methods: {
    onSubmit(event) {
      console.log(event)
    },
    pushEvent() {
      console.log(events_store)
      events_store.push_event()
    }
  }
};
</script>

<style lang="css" scoped>

.settings {
  margin: 3em 1em 0 1em;
  padding: 1em;
}

</style>
