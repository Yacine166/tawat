// src/store.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isAuthenticated: !!localStorage.getItem('authToken'),
    };
  },
  mutations: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  },
  actions: {
    login({ commit }) {
      commit('login');
    },
    logout({ commit }) {
      commit('logout');
    }
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
  }
});

export default store;
