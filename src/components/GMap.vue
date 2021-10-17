<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      
      <button
        @click='addMarker'
      >
        Add Marker
      </button>
    </div>
    <br>
    <GmapMap 
      :center='center'
      :zoom='12'
      style='width:800px;  height: 400px; display:block; margin-left:auto; margin-right:auto;'
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :draggable="true"
        
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      center: { lat: 40.998, lng: 29.050 },
      markers: [],
    }
  },
  
  methods: {
  
    addMarker() {
     
        const marker = {
          /* lat: this.geomery.location.lat(),
          lng: this.geometry.location.lng(), */

          lat: 40.955, lng: 29.103
        }
        this.markers.push({ position: marker })
      
        //this.center = marker
       
      }
    },

    
}
</script>