<template>
    <div>
        来自componentA的信息: {{ AMSG }}
    </div>
</template>

<script>
    /*eslint-disable*/
  import { EventBus } from '../config/event-bus'

  export default {
    name: "CommunicationB",
    data() {
      return {
        AMSG: 'AMSG'
      }
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
