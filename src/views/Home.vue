<template>
  <div class="home">
    <HelloWorld @hook:mounted="doSomeTing" :Author.sync="Author" msg="关于Vue的开发技巧！"/>
    <h3>{{ Author }}</h3>
    <button @click="setState">{{ count }}</button>
    <br>
    <br>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
  /*eslint-disable*/
  import { state, mutations } from "../store/store";
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home',
    provide() {
      return {
        date: new Date()
      }
    },
    components: {
      HelloWorld
    },
    data() {
      return {
        Author: ''
      }
    },
    computed: {
      count() {
        return state.count
      }
    },
    created() {
      this.watchData()
    },
    methods: {
      doSomeTing() {
        console.log('监听组件生命周期')
      },
      watchData() {
        let unwatchFn = this.$watch('count',function (newVal) {
          console.log(`count新的值: ${newVal}`)
        })
        // unwatchFn()  // 卸载观察者
      },
      setState() {
        // state.count++
        mutations.SET_COUNT(100)
      }
    }
  }
</script>
