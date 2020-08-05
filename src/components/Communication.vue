<template>
    <div>
        <p>From Parent: {{ name }}</p>
        <p>From Child: {{ tips }}</p>
        <el-button type="primary" @click="changeParent">改变父组件的值$parent</el-button>
        <br>
        <p>From Parent：{{ DependencyInjection }}</p>

        <el-button type="primary" @click="comApostHandle">与componentB握手</el-button>
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
        book: '<<前端架构>>'
      }
    },
    created() {
      this.sendParent()
    },
    methods: {
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
