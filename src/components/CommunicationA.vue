<template>
    <div>
        <p>From Parent: {{ name }}</p>
        <p>From Child: {{ tips }}</p>
        <el-button type="primary" @click="changeParent">改变父组件的值$parent</el-button>
        <br>
        <p>From Parent：{{ DependencyInjection }}</p>

        <el-button type="primary" @click="comApostHandle">与componentB握手</el-button>
        <br>
        <p>改变B组件的数据: {{ BMsg }}</p>
        <el-button type="primary" @click="getComAData">点我改变B组件的数据</el-button>
        <br>
        <p>嘿，我是B组件, 今年 {{ BAge }} 岁了！</p>
    </div>
</template>

<script>
  import { EventBus } from '../config/event-bus'

  export default {
    name: "Communication",
    inject: ['DependencyInjection'],
    props: {
      name: String
    },
    data() {
      return {
        tips: '俺我子组件!',
        book: '<<前端架构>>',
        messageA: '嘿，B组件，我是A组件！',
        BAge: 0
      }
    },
    computed: {
      BMsg() {
        return this.$store.state.BMSG
      }
    },
    created() {
      this.sendParent()
      this.getBStorage()
    },
    methods: {
      getBStorage() {
        localStorage.setItem('AMsg', 18)
        this.BAge = localStorage.getItem('BMsg')
      },
      getComAData() {
        this.$store.commit('receiveBMSG', {
          BMSG: this.messageA
        })
      },
      sendParent() {
        this.$emit("update:title","$emit + update:方式发送数据") // update后边:不能有空格！
        // this.$emit("onEmitTitle","$emit + update:方式发送数据") // update后边:不能有空格！
      },
      changeParent() {
        this.$parent.title = "改变父组件的值！"
      },
      comApostHandle() {
        EventBus.$emit("comApost", {
          AMSG: '传递给componentB！'
        })
      }
    }
  }
</script>

<style scoped>

</style>
