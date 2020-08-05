<template>
    <div>
        来自componentA的信息: {{ AMSG }}

        <br>
        <p>改变A组件的数据: {{ AMsg }}</p>
        <el-button type="primary" @click="getComBData">点我改变A组件的数据</el-button>
        <br>
        <p>嘿，我是A组件, 今年 {{ AAge }} 岁了！</p>
    </div>
</template>

<script>
    /*eslint-disable*/
  import { EventBus } from '../config/event-bus'

  export default {
    name: "CommunicationB",
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
