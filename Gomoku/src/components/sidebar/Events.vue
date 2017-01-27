<template>
  <div class="events">
    <p>I am Events</p>
    <el-button-group>
      <el-button type="primary" icon="arrow-left">Previous Move</el-button>
      <el-button type="primary" disabled="true">Next Move<i class="el-icon-arrow-right el-icon-right"></i></el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  name: 'Events',
  components: {},
  data () {
    return {
    };
  }
};
</script>

<style scoped>
.events {
  margin-bottom: 15px;
}
</style>
