<template>
  <div id="app">
    <div style="height:100%" id="wrap">
      <div id="left_col">
        <v-jstree :data="data" show-checkbox multiple allow-batch whole-row  @item-click="itemClick"></v-jstree>
      </div>
      <div id="right_col">
        <Simple/>
      </div>    
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Simple from './components/Simple';
import VJstree from 'vue-jstree'

export default {
  name: 'App',
  components: {
    Simple,
    VJstree
  },
  data: function() {
    return {
      data: [ {
            "text": "Same but with checkboxes",
            "children": [
              {
                "text": "initially selected",
                "selected": true
              },
              {
                "text": "custom icon",
                "icon": "fa fa-warning icon-state-danger"
              },
              {
                "text": "initially open",
                "icon": "fa fa-folder icon-state-default",
                "opened": true,
                "children": [
                  {
                    "text": "Another node"
                  }
                ]
              },
              {
                "text": "custom icon",
                "icon": "fa fa-warning icon-state-warning"
              },
              {
                "text": "disabled node",
                "icon": "fa fa-check icon-state-success",
                "disabled": true
              }
            ]
          }]
    };
  },
  methods: {
    itemClick (node) {
      console.log(node.model.text + ' clicked !')
    }
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
