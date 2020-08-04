<template>
  <div class="about">
    <Introduction :name="name" :age="age"></Introduction>
  </div>
</template>

<script>
  import Introduction from '@/components/Introduction.vue'

  export default {
    name: 'About',
    components: {
      Introduction
    },
    data() {
      return {
        name: '莫童',
        age: '23'
      }
    }
  }
</script>
