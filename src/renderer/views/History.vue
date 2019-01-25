<template>
  <div class="map">
    <router-link to="/">Home</router-link>
    <h4>Map History</h4>
    <button @click="create">Create</button>
    <game v-for="game in games" :key="game.id" :game="game"></game>
  </div>
</template>

<script>
import Game from "@/components/Game";
import { mapState, mapActions } from "vuex";
import client from "../../api/client";
export default {
  name: "Map",
  props: ["accountId"],
  components: {
    Game
  },
  computed: {
    ...mapState(["games"])
  },
  methods: {
    ...mapActions(["createGame", "addPlayerToGame"]),
    async create() {
      player.teammate = false;
      let game = await this.createGame({
        accountId: this.accountId,
        gamePlayers: [player]
      });

      console.log("ga,e", game);
    }
  },
  data() {
    return {};
  },
  created() {}
};
</script>
