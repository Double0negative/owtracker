<template>
  <div class="game card">
    <button @click="toggleEdit">Edit</button>

    <div v-if="edit" class="edit">
      <div class="row players">
        <div class="input-field col s2" v-for="t in 6">
          <input
            :value="getPlayer(t, false)"
            @change="updatePlayer(t, this)"
            placeholder="player"
            :id="'top' + t"
            type="text"
          >
        </div>
      </div>

      <div class="row players">
        <div class="input-field col s2" v-for="t in 6">
          <input :value="getPlayer(t, true)" placeholder="player" :id="'bot' + t" type="text">
        </div>
      </div>
    </div>
    <div class="static" v-else>
      <div class="row players">
        <div class="input-field col s2" v-for="t in 6">
          <span>Player {{getPlayer(t, false)}}</span>
        </div>
      </div>

      <div class="row players">
        <div class="input-field col s2" v-for="t in 6">
          <span>Player {{getPlayer(t, true).name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Game",
  props: ["game", "maps"],
  data() {
    return {
      edit: false
    };
  },
  methods: {
    toggleEdit() {
      this.edit = !this.edit;
    },
    getPlayer(slot, team) {
      for (let player of this.game.gamePlayers) {
        if (player.dataValues.slot == slot && player.dataValues.teammate) {
          return player.dataValues;
        }
      }
    },
    updatePlayer() {}
  },
  created() {
    console.log(this.game);
  }
};
</script>
