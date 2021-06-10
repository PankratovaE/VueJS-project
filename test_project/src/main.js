import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from './router';
import modal from './plugins/ModalWindow';
import vuetify from './plugins/vuetify';
import VueCharts from 'vue-chartjs'

// import "hchs-vue-charts";
// import "chart.js";

Vue.config.productionTip = false;
Vue.use(modal);
Vue.use(VueCharts);
// Vue.use(window.VueCharts);

new Vue({
  render: (h) => h(App),
  store,
  router,
  vuetify
}).$mount("#app");
