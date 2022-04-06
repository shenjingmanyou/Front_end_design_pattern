var app = new Vue({
  el: "#root",
  template: `<button @click="onSwitch()">{{isOpen ? '关' : '开'}}</button>`,
  data: {
    isOpen: false,
  },
  methods: {
    onSwitch() {
      this.isOpen = !this.isOpen;
    },
  },
});
