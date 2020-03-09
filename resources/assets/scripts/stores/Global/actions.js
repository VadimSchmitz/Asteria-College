export default {
    setCurrentUser(context, currentUser) {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        context.commit("setCurrentUser", currentUser);
    },

    fetchCurrentUserFromLocalstorage(context) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            context.commit("setCurrentUser", currentUser);
        }
    },

    fetchSettingsFromDB(context) {
        // TODO: make fetch call to db
        const firstName = 'Sheep';
        const lastName = "Company";
        context.commit("setSettings", firstName, lastName);
    }
};
