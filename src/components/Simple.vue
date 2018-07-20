<template>
  <div style="height:100%" id="right_col">
    <l-map :zoom="zoom" :center="center" :bounds="bounds">
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
      bounds: null,
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
  },
  watch: {
    active(val) {
      if(val.length > 0) {
        //var arr = this._.map(val, (v) => {return L.geoJson(v.geojson).getBounds(); })
        var arr = this._.flatten(this._.map(val, (v) => { return [L.latLng(v.geojson.bbox[1],v.geojson.bbox[0]),L.latLng(v.geojson.bbox[3],v.geojson.bbox[2])]; }))
        console.dir(arr);
        this.bounds = L.latLngBounds(arr)
      }
      

    }
  }
}
</script>