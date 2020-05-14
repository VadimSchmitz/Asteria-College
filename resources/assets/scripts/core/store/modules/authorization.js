import Vue from 'vue';
import { User } from "../../models/User";

export default {
    namespaced: true,

    state: {
        authenticated: false,
        user: null
    },

    actions: {
        async signIn({commit}, credentials, remember) {
            await Vue.auth.login({
                body: credentials,
                data: credentials,
                rememberMe: false
            }).then(response => {
                commit('SET_AUTHENTICATED', true);
                commit('SET_USER', new User(response.data.user));
            }).catch(e => {
                commit('SET_AUTHENTICATED', false);
                commit('SET_USER', null);
            });
        },


        async signOut({commit}) {
            await Vue.auth.logout({
                makeRequest: true,
            }).then(response => {
                commit('SET_USER', null);
                commit('SET_AUTHENTICATED', false);
            }).catch(e => {
                commit('SET_USER', null);
                commit('SET_AUTHENTICATED', false);
            });
            Vue.auth.redirect();
        },
    },

    mutations: {
        SET_AUTHENTICATED(state, value) {
            state.authenticated = value
        },

        SET_USER(state, value) {
            state.user = value
        }
    },
    getters: {
        authenticated: state => state.authenticated,
        user: state => state.user,
    }
}
