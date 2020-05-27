import User from "../../models/User";

export const actions = {};

export const getters = {};

export const mutations = {
    update: (state, fetchedUser) => {
        state.user = fetchedUser;
    }
};

export const state = {
    user: new User()
};

export const user = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
};
