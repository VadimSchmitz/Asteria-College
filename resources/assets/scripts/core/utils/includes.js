import ElementUI from 'element-ui';
import {BootstrapVue} from "bootstrap-vue";

const includes = {
    install(Vue) {
        Vue.use(ElementUI);
        Vue.use(BootstrapVue);
    }
};

export default includes;
