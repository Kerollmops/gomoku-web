<template>
    <div class="settings boxed">
      <form @submit.prevent="onSubmit">
        <label for="depth">Depth: </label>
        <input name="depth" type="number" value="10" min="2" max="25"/>
      </form>
    </div>
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {

    };
  },
  methods: {
    onSubmit(event) {
      console.log(event)
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
