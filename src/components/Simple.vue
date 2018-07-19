<template>
  <div style="height:100%" id="right_col">
    <l-map :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <template v-for="item in active">
        <l-geo-json :geojson="item.geojson" :options="options"></l-geo-json>
      </template>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LGeoJson, LMarker } from 'vue2-leaflet'

export default {
  name: 'example',
  props: ['active'],
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LGeoJson,
  },
  data () {
    return {
      zoom:8,
      center: L.latLng(60 ,7),
      url:'http://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo4&zoom={z}&x={x}&y={y}',
      attribution:'',
      marker: L.latLng(66 ,9),
      geojson: null,
      options: {
        style: function () {
          return {
            weight: 2,
            color: '#f00',
            opacity: 1,
            fillColor: '#f00',
            fillOpacity: .3
          }
        }
      }      
    }
  }
}
</script>