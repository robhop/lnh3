<template>
  <div style="height:100%" id="right_col">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="marker"></l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
  name: 'example',
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      zoom:8,
      center: L.latLng(60 ,7),
      url:'http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo4&zoom={z}&x={x}&y={y}',
      attribution:'',
      marker: L.latLng(66 ,9),
    }
  }
}
</script>