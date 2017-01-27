<template>
  <el-form ref="form" :model="form" label-position="top">
    <el-form-item label="Maximum search depth">
      <el-input-number v-model="form.maxDepth" :step="2" :max="20" :min="0">
      </el-input-number>
    </el-form-item>
    <el-form-item label="Help">
      <el-checkbox v-model="form.displayBest">Display best moves</el-checkbox>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'Settings',
  components: {},
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  },
  data () {
    return {
      form: {
        maxDepth: 4,
        displayBest: true
      }
    };
  }
};
</script>
