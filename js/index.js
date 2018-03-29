var tree = {
  label: 'root',
  nodes: [{
    label: 'item1',
    nodes: [{
      label: 'item1.1'
    }, {
      label: 'item1.2',
      nodes: [{
        label: 'item1.2.1'
      }]
    }]
  }, {
    label: 'item2'
  }]
};

Vue.component('tree-menu', {
  template: '#tree-menu',
  props: ['nodes', 'label', 'depth'],
  data: function data() {
    return {
      showChildren: false
    };
  },

  computed: {
    iconClasses: function iconClasses() {
      return {
        'fa-plus-square-o': !this.showChildren,
        'fa-minus-square-o': this.showChildren
      };
    },
    labelClasses: function labelClasses() {
      return { 'has-children': this.nodes };
    },
    indent: function indent() {
      return { transform: 'translate(' + this.depth * 50 + 'px)' };
    }
  },
  methods: {
    toggleChildren: function toggleChildren() {
      this.showChildren = !this.showChildren;
    }
  }
});

new Vue({
  el: '#app',
  data: {
    tree: tree
  }
});