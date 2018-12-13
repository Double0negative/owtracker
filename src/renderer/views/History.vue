<template>
    <div class="map">
      <router-link to="/">Home</router-link>
        <h4>Map History</h4>
       
    </div>
</template>

<script>
    import Game from "@/components/Game"

  export default {
    name: 'Map',
    props: [

    ],
    components: {
      Game
    },
    data() {
      return {


      }
    }


  }
</script>
