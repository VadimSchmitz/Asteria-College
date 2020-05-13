const authorize = {
    tokenDefaultName: 'Asteria_College',
    tokenStore: ['localStorage'],
    rolesVar: 'role',
    registerData: {url: 'auth/register', method: 'POST', redirect: '/login'},
    loginData: {url: 'auth/login', method: 'POST', redirect: '/', fetchUser: true},
    logoutData: {url: 'auth/logout', method: 'POST', redirect: '/login', makeRequest: true},
    fetchData: {url: 'auth/user', method: 'GET', enabled: true},
    refreshData: {url: 'auth/refresh', method: 'GET', enabled: true, interval: 30},
};

export default authorize;
