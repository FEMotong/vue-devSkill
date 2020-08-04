<template>
  <div class="home">
    <HelloWorld :Author.sync="Author" msg="关于Vue的开发技巧！"/>
    <h3>{{ Author }}</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      Author: ''
    }
  }
}
</script>
