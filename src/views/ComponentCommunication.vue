<template>
    <div class="component-communication">
        <h1>组件通信</h1>
        <p>方法一：props / emit (update:xx as child + xx:sync as parent)</p>
        <Communication :title.sync="title" :name="name"></Communication>
<!--        <Communication @onEmitTitle="onEmitTitle" :name="name"></Communication>-->
        From child: {{ title }}
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
    }
  }
</script>

<style scoped>

</style>
