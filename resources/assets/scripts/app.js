import Vue from "vue";
import utils from "./core/utils";
import router from "./core/utils/router";
import store from "./core/store";
import App from "./App.vue";

Vue.use(utils);

new Vue({
  el: "#app",
  data: {
    errorMsg: false,
    successMsg: false,
    showAddModal: false,
    showEditModal: false,
    showDeleteModal: false
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
