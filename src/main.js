import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false;




new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");


Vue.use(VueGoogleMaps, {
  load:{
    key:'GOOGLE API KEY',
    libraries:'places'
  }


})
