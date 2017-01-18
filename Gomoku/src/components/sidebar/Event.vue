<template>
    <li class="event boxed">
        <p>{{ msg + " " + id }}</p>
    </li>
</template>

<script>
var n = 0;

export default {
  name: 'Event',
  data () {
    n += 1;
    return {
      id: n,
      msg: "This is an event number"
    };
  }
};
</script>

<style lang="css" scoped>

.event {
  margin-bottom: 10px;
  padding-left: 1rem;
  padding-right: 1rem;
}

</style>
