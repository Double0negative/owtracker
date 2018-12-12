<template>
    <div class="game card">
        <button @click="toggleEdit">Edit</button>

        <div v-if="edit" class="edit">
            <div class="row players">
                <div class="input-field col s2" v-for="t in 6">
                    <input v-model="game.players.top[t]" placeholder="player" :id="'top' + t" type="text" >
                </div>
            </div>

            <div class="row players">
                <div class="input-field col s2" v-for="t in 6">
                    <input v-model="game.players.bottom[t]" placeholder="player" :id="'bot' + t" type="text" >
                </div>
            </div>
        </div>
        <div class="static" v-else>
            <div class="row players">
                <div class="input-field col s2" v-for="t in 6">
                    <span>Player {{game.players.top[t]}}</span>
                </div>
            </div>

            <div class="row players">
                <div class="input-field col s2" v-for="t in 6">
                    <span>Player {{game.players.bottom[t]}}</span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

  export default {
    name: 'Game',
    props:[
        'game',
        'maps'
    ],
    data() {
      return{
        edit: false
      }
    },
    methods: {
      toggleEdit() {
        this.edit = !this.edit
      }
    },
    created() {
      console.log(this.game)
    }
  }
</script>
