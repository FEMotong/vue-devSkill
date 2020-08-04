<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>作者：{{ Author }}</h2>
    <!--    <h3>{{ date }}</h3>-->
    <h3>{{ updateDate }}</h3>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    // inject: ["date"],
    inject: {
      updateDate: {
        from: 'date'   // from别名
      }
    },
    props: {
      msg: String,
      Author: String
    },
    created() {
      this.changAuthor()
    },
    methods: {
      changAuthor() {
        this.$emit("update:Author", "莫童高级前端架构师") // 优雅更新props
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
