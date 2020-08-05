<template>
    <div>
        <p>From Parent: {{ name }}</p>
        <p>From Child: {{ tips }}</p>
        <el-button type="primary" @click="changeParent">改变父组件的值</el-button>
        <br>
        <p>依赖注入：{{ DependencyInjection }}</p>
    </div>
</template>

<script>
  export default {
    name: "Communication",
    inject: ['DependencyInjection'],
    props: {
      name: String
    },
    data() {
      return {
        tips: '俺我子组件!'
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
      }
    }
  }
</script>

<style scoped>

</style>
