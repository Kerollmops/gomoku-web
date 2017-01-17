<template>
    <div class="sidebar">
        <events></events>
        <settings></settings>
    </div>
</template>

<script>
import Events from './Events.vue'
import Settings from './Settings.vue'

export default {
  name: 'Sidebar',
  components: { Events, Settings },
  data () {
    return {

    };
  }
};
</script>

<style lang="css" scoped>

.sidebar {
    /*background: #ccc;*/
    flex-direction: column;
    box-sizing: border-box;
    flex: 1 1 0%;
    max-width: 16.6667%;
    flex-basis: 16.6667%;
}

</style>
