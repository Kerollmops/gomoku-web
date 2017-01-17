<template>
  <div id="app">
    <sidebar></sidebar>
    <board></board>
  </div>
</template>

<script>
import Sidebar from './components/sidebar/Sidebar.vue'
import Board from './components/Board.vue'

export default {
  name: 'app',
  components: { Sidebar, Board },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

html {
  background-color: #272727;
}

body {
  margin: 0;
  font-family: HelveticaNeue-Light, "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
  line-height: 1.85;
  color: rgb(51, 51, 51);
}

p {
  font-size: 1rem;
}

.boxed {
  color: rgb(171, 178, 191);
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.498039) 0px 2px 5px 0px;
  /*width: 100%;*/
  /*overflow-x: auto;*/
  background-color: rgb(50, 50, 50);
  border-spacing: 0px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(65, 65, 65);
  /*border-image: initial;*/
}

.px1 {
  padding-left: 1rem;
  padding-right: 1rem;
}

</style>
