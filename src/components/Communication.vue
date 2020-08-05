<template>
    <div>
        From Parent: {{ name }}
    </div>
</template>

<script>
  export default {
    name: "Communication",
    props: {
      name: String
    },
    created() {
      this.sendParent()
    },
    methods: {
      sendParent() {
        this.$emit("update:title","$emit + update:方式发送数据") // update后边:不能有空格！
        // this.$emit("onEmitTitle","$emit + update:方式发送数据") // update后边:不能有空格！
      }
    }
  }
</script>

<style scoped>

</style>
