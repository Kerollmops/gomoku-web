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

*, *::after, *::before {
  box-sizing: border-box;
}

html {
  background-color: #272727;
}

body {
  margin: 0;
  font-family: HelveticaNeue-Light, "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 400;
}

p {
  font-size: 1rem;
}

#app {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
}

.boxed {
  color: #abb2bf;
  font-size: 14px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
  background-color: #323232;
  border-spacing: 0px;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: #414141;
}

.px1 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.green {
  color: #98c379;
}

.orange {
  color: #e06c75;
}

.yellow {
  color: #e5c07b;
}

.blue {
  color: #61afef;
}

</style>
