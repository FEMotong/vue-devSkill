<template>
    <div>
        来自componentA的信息: {{ AMSG }}

        <br>
        <p>改变A组件的数据: {{ AMsg }}</p>
        <el-button type="primary" @click="getComBData">点我改变A组件的数据</el-button>
        <br>
        <p>嘿，我是A组件, 今年 {{ AAge }} 岁了！</p>
        <p>获取$attrs值: {{ $attrs }}</p>
        <p>获取$listeners({ [key: string] : Function }})值：{{ $listeners.test1() }}</p>
    </div>
</template>

<script>
    /*eslint-disable*/
  import { EventBus } from '../config/event-bus'

  export default {
    name: "CommunicationB",
    inheritAttrs: false, // 关闭根组件继承该属性, 无论false/true都会获取到该$attrs
    props: {
      loveBook: String
    },
    data() {
      return {
        AMSG: 'AMSG',
        messageB: '嘿，A组件，我是B组件！',
        AAge: 0
      }
    },
    computed: {
      AMsg() {
        return this.$store.state.AMSG
      }
    },
    created() {
      this.getAStorage()
    },
    methods: {
      getAStorage() {
        localStorage.setItem('BMsg', 20)
        this.AAge = localStorage.getItem('AMsg')
      },
      getComBData() {
        this.$store.commit('receiveAMSG', {
          AMSG: this.messageB
        })
      },
    },
    mounted() {
      EventBus.$on("comApost", val => {
        this.AMSG = val.AMSG
      })
    }
  }
</script>

<style scoped>

</style>
