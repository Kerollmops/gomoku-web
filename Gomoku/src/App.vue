<template>
  <el-row :gutter="20">
    <el-col :span="4" class="sidebar">
      <sidebar></sidebar>
    </el-col>
    <el-col :span="20">
      <board></board>
    </el-col>
  </el-row>
</template>

<script>
  import Board from './components/Board.vue';
  import Sidebar from './components/sidebar/Sidebar.vue';
  export default {
    components: { Board, Sidebar }
  };
</script>

<style>
html, body {
  -webkit-font-smoothing: antialiased;
  background-color: #d33847;
}

html, body {
  font-family: "Helvetica Neue",Helvetica,Arial,"Lucida Grande",sans-serif;
}

body {
  margin: 0 10px;
}

.sidebar {
  background-color: white;
}
</style>
