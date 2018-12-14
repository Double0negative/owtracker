<template>
  <div id="app" class="wrapper">
    <div class="main">
      <router-view :client="client"></router-view>
    </div>
  </div>
</template>

<script>
  import client from "../api/client"
  export default {
    name: 'owmap-tracker',
    data() {
      return {
        client
      }
    },
    async created() {
    }
  }
</script>

<style lang="scss">

</style>
