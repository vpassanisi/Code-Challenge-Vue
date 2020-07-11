import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Data from "./DATA.json";

import "./css/tailwind.css";

Vue.config.productionTip = false;

new Vue({
  store,
  props: ["data"],
  render: (h) => h(App, { props: { data: Data } }),
}).$mount("#app");
