import ElementUI from 'element-ui';
import { BootstrapVue } from "bootstrap-vue";
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

const includes = {
    install(Vue) {
        Vue.use(ElementUI);
        Vue.use(BootstrapVue);
        Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);
    }
};

export default includes;
