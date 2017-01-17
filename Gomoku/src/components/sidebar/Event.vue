<template>
    <li class="event boxed px1">
        <p>{{ msg }}</p>
    </li>
</template>

<script>
export default {
  name: 'Event',
  data () {
    return {
      msg: "This is an event"
    };
  }
};
</script>

<style lang="css" scoped>

.event {
  /**/
}

</style>
