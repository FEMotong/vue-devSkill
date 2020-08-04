<template>
  <div class="home">
    <HelloWorld :Author.sync="Author" msg="关于Vue的开发技巧！"/>
    <h3>{{ Author }}</h3>
    <button @click="setState">{{ count }}</button>
  </div>
</template>

<script>
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
      /*eslint-disable*/
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
