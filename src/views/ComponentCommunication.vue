<template>
    <div class="component-communication">
        <h1>组件通信</h1>
        <p>From child: {{ title }}</p>
        <CommunicationA :title.sync="title" :name="name" ref="componnetA"></CommunicationA>
<!--        <Communication @onEmitTitle="onEmitTitle" :name="name"></Communication>-->
        <br>
        <el-button type="primary" @click="changeChildTips">改变子组件的值$children</el-button>
        <br>
        <p>From child: {{ childComponentBook }}</p>
        <el-button type="primary" @click="passRefs">通过refs获取子组件数据</el-button>
        <br>
        <CommunicationB></CommunicationB>
    </div>
</template>

<script>
  /*eslint-disable*/
  import CommunicationA from '@/components/CommunicationA.vue'
  import CommunicationB from '@/components/CommunicationB.vue'

  export default {
    name: "ComponentCommunication",
    provide: {
      DependencyInjection: "通过provide / inject 组件依赖注入"
    },
    components: {
      CommunicationA,
      CommunicationB
    },
    data() {
      return {
        name: '通过props向下传递数据！',
        title: '',
        childComponentBook: '《CSS世界》'
      }
    },
    methods: {
      // onEmitTitle(val) {
      //   this.title = val
      // }
      changeChildTips() {
        this.$children[0].tips = '改变子组件的值!'
      },
      passRefs() {
        this.childComponentBook = this.$refs['componnetA'].book
      }
    }
  }
</script>

<style scoped>

</style>
