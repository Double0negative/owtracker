<template>
    <div class="home">
      <button @click="createUserAccount">Add Account</button>
      <account v-for="account in accounts" :key="account.id" :account="account"></account>
    </div>
</template>

<script>
  import {mapState, mapActions} from "vuex"
  import Account from "../components/Account"
  export default {
    name: 'home',
    components: {
      Account
    },
    computed: {
      ...mapState([
        "accounts"
      ])
    },
    methods: {
     ...mapActions([
       "createUserAccount",
       "loadUserAccounts"
     ])
    },
    created() {
      this.loadUserAccounts()
    } 
  }
</script>

<style scoped>
  .home {
    padding: 20px 100px;
  }
</style>


