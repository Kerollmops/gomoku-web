<template>
    <div class="events">
        <ul>
            <event></event>
        </ul>
        <p>Events buttons here</p>
    </div>
</template>

<script>
import Event from './Event.vue'

export default {
  name: 'Events',
  components: { Event },
  data () {
    return {

    };
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

</style>

