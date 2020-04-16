import ElementUI from 'element-ui';
import {BootstrapVue} from "bootstrap-vue";
import axios from "axios";

window.axios = axios;
axios.defaults.baseURL = '/api/';

const includes = {
    install(Vue) {
        Vue.use(ElementUI);
        Vue.use(BootstrapVue);
    }
};

export default includes;
