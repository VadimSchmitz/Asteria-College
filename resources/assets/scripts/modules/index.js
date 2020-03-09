import 'bootstrap';
import Axios from 'axios';
import 'bootstrap-vue';
import 'jquery';
window.axios = Axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.$ = require('jquery');

export default $;
