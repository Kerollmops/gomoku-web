<template>
    <div class="board">
        <p>This is the board</p>
    </div>
</template>

<script>
export default {
  name: 'Board',
  data () {
    return {

    };
  }
};
</script>

<style lang="css" scoped>

.board {
    /*TODO: remove color*/
    color: rgb(171, 178, 191);
    flex-direction: column;
    box-sizing: border-box;
    flex: 1 1 0%;
    max-width: 83.3333%;
    flex-basis: 83.3333%;
}

</style>
