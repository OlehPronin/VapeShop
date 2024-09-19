import { createStore } from 'vuex';

export default createStore({
    state: {
        locale: document.head.querySelector("meta[name='locale']").content,
    },

    mutations: {
        
    },

    getters: {
        getLocale(state){
            return state.locale;
        },
    },

    actions: {
        
    },

    modules: {
       
    },
});
