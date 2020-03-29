import includes from "./includes";
import authorize from "./authorize";

const utils = {
    install(Vue) {
        Vue.use(includes);
        Vue.use(authorize);
    }
};

export default utils;
