// export * from 'admin-lte/build/js/AdminLTE'
import Axios from 'axios';
// import 'jquery';
window.axios = Axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// window.$ = require('jquery');

export default;
