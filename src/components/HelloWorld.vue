<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>作者：{{ Author }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    Author: String
  },
  created() {
    this.changAuthor()
  },
  methods: {
    changAuthor() {
      this.$emit("update:Author", "莫童高级前端架构师")
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
