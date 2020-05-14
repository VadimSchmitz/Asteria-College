const LoaderComponent = null; // TODO: Make these
const ErrorComponent = null;

export default function getComponent(dir = '', page = '') {
    return () => ({
        component: import( /* webpackChunkName: "page-[request]" */ './../../template/pages/' + dir + '/' + page),
        loading: LoaderComponent,
        error: ErrorComponent,
        delay: 300, // default 200ms;
        timeout: 3000 // default infinity
    });
}
