import { createStore } from 'vuex';

export default createStore({
    state: {
        locale: document.head.querySelector("meta[name='locale']").content,
        isModalOpen: false,
        currentModalComponent: 'SignIn',
    },

    mutations: {
        setLocale(state, locale) {
            state.locale = locale;
        },
        openModal(state) {
            state.isModalOpen = true;
        },
        closeModal(state) {
            state.isModalOpen = false;
        },
        setCurrentModalComponent(state, component) {
            state.currentModalComponent = component;
        },
    },

    getters: {
        getLocale(state) {
            return state.locale;
        },
        isModalOpen(state) {
            return state.isModalOpen;
        },
        currentModalComponent(state) {
            return state.currentModalComponent;
        },
    },

    actions: {
        openModal({ commit }) {
            commit('openModal');
        },
        closeModal({ commit }) {
            commit('closeModal');
        },
        goToRegistration({ commit }) {
            commit('setCurrentModalComponent', 'Registration');
        },
    },

    modules: {
        // Добавьте модули, если они есть
    },
});