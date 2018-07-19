<template>
  <div id="app">
    <div style="height:100%" id="wrap">
      <div id="left_col">
        <v-jstree :data="data" show-checkbox multiple allow-batch whole-row  @item-click="itemClick"></v-jstree>
      </div>
      <div id="right_col">
        <Simple v-bind:active="active"/>
      </div>    
    </div>
  </div>
</template>

<script>
import Simple from './components/Simple'
import VJstree from 'vue-jstree'

export default {
  name: 'App',
  components: {
    Simple,
    VJstree
  },
  data: function() {
    return {
      active: [],
      data: [ {
            "text": "Features",
            "children": []            
          },
          {
            "text": "Another item",
            "icon": "fa fa-folder icon-state-danger",
            "disabled": false
          }]
    };
  },
  methods: {
    itemClick (node) {
      var self = this
      var zoom = 8
      var id = zoom + '/' + node.model.id

      if(node.model.selected) {
        this.$http.get('/api/cell/' + id).then(response => {
          this.active.push({
            id: node.model.id,
            geojson:response.body
          })
        })        
      } else {
        var idx = _.findIndex(this.active, (a) => {return a.id == node.model.id;})
        this.active.splice(idx,1)
      }

    }
  },
  mounted: function () {
    var self = this;
    this.$http.get('/api/cell/').then(response => {

      self.data[0].children = response.body.map((d) => { return {text: d.name, id: d.id};})
  
    }, response => {
      // error callback
    });
  }  
}
</script>

<style>

html, body, #app {
  height: 100%;
  margin: 0;
}

#wrap {
   display:flex;
}
#left_col {
  height: 100vh;
  flex: 285px 0 0;
}
#right_col {
   flex-grow: 1;
}

</style>
