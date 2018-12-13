<template>
  <div id="app" class="wrapper">
    <div class="side">side</div>
    <div class="main">
      <router-view :client="client"></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'owmap-tracker',
    props: ['client'],
    async created() {
      
    }
  }
</script>

<style lang="scss" scoped>
  .wrapper {
    display: grid;
    grid-template-columns: 100px auto;
    grid-template-rows: 100%;
    height: 100vh;
  }

  .side {
    grid-column-start: 1;
    background-color: #333;
  }

  .main {
    grid-column-start: 2;
    padding: 15px;
  }
</style>
