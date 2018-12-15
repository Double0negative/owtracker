<template>
  <div id="app" class="wrapper">
    <div class="side">side</div>
    <div class="main">
      <router-view :account-id="accountId" :client="client"></router-view>
    </div>
  </div>
</template>

<script>
    import {mapState, mapActions} from "vuex"

  export default {
    name: 'owmap-tracker',
    props: ['client', 'accountId'],
    methods: {
      ...mapActions([
          "loadGames",
          "clearGames"
      ])
    },
    data() {
      return {


      }
    },
    async mounted() {
      this.clearGames()
      await this.loadGames({accountId: this.accountId})
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
