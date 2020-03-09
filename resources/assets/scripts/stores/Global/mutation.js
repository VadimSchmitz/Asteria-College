export default {
    setCurrentUser: (state, currentUser) => {
        state.currentUser = currentUser;
        state.isLoggedIn = true;
    },
    removeCurrentUser: state => {
        state.currentUser = null;
        state.isLoggedIn = false;
    },
    setSettings: (state, firstName, lastName) => {
        state.settings.firstName = firstName;
        state.settings.lastname = lastName;
    }
};
