export let login = (credentials, loading, error) => {
    this.$auth.login({
        body: credentials, // Vue-resource
        data: credentials, // Axios
        refresh: true,
        fetchUser: true
    }).then((response) => {
        // TODO: Add welcome
        setTimeout(() => {
            loading = false;
            return true;
        }, 1000);

    }).catch((error) => {
        setTimeout(() => {
            loading = aflse;
            error = 'De gegevens die je hebt ingevuld kloppen niet';
            return false
        }, 1000);
    });
};

