<template>
    <div class="map">
        <h4>Map History</h4>
       <game :game="games[0]"></game>
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
