<template>
    <div class="component-communication">
        <h1>组件通信</h1>
        <p>方法一：props / emit (update:xx as child + xx:sync as parent)</p>
        <p>From child: {{ title }}</p>
        <Communication :title.sync="title" :name="name"></Communication>
<!--        <Communication @onEmitTitle="onEmitTitle" :name="name"></Communication>-->
        <br>
        <el-button type="primary" @click="changeChildTips">改变子组件的值</el-button>
    </div>
</template>

<script>
  /*eslint-disable*/
  import Communication from '@/components/Communication.vue'

  export default {
    name: "ComponentCommunication",
    components: {
      Communication
    },
    data() {
      return {
        name: '通过props向下传递数据！',
        title: ''
      }
    },
    methods: {
      // onEmitTitle(val) {
      //   this.title = val
      // }
      changeChildTips() {
        this.$children[0].tips = '改变子组件的值!'
      }
    }
  }
</script>

<style scoped>

</style>
