<template>
  <GmapMap
    :center="{ lat: 1.3521, lng: 103.8198 }" 
    :zoom="12"
    map-type-id="roadmap"
    style="width: 100%; height: 400px"
  >
    <GmapMarker
      :position="{ lat: 1.3521, lng: 103.8198 }"
      :clickable="true"
      :draggable="false"
    />
  </GmapMap>
</template>

<script>
export default {
  name: 'GoogleMapsComponent',
  data() {
    return {
      // Define any additional data you need
    }
  }
}
</script>

<style>
/* Add styles if needed */
</style>
