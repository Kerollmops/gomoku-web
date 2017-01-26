<template>
  <div>
    <el-button @click="hello()">Test</el-button>
  </div>
</template>

<style scoped>
</style>

<script type="text/ecmascript-6">
  export default {
    methods: {
        hello() {
            console.log("hello")
        }
    },
    data() {
      return {};
    }
  };
</script>
