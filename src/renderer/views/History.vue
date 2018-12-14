<template>
    <div class="map">
      <router-link to="/">Home</router-link>
        <h4>Map History</h4>
        <button @click="create">Create</button>
        <div v-for="game in games" :key="game.id">{{game}}</div>
    </div>
</template>

<script>
    import Game from "@/components/Game"
    import {mapState, mapActions} from "vuex"

  export default {
    name: 'Map',
    props: [
        "accountId"
    ],
    components: {
      Game
    },
    computed: {
      ...mapState([
        "games"
      ])
    },
    methods: {
      ...mapActions([
          "createGame",
          "loadGames"
      ]),
      create() {
          this.createGame({accountId: this.accountId})
      }
    },
    data() {
      return {


      }
    },
    created() {
      this.loadGames()
    }


  }
</script>
