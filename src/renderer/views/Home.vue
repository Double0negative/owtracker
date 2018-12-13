<template>
    <div class="home">
      <button @click="createAccount">Add Account</button>
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
       "createAccount",
       "loadAccounts"
     ])
    },
    created() {
      this.loadAccounts()
    } 
  }
</script>

<style scoped>
  .home {
    padding: 20px 100px;
  }
</style>


