<template>
  <div>
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
      //
    };
  }
};
</script>
