import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//Estado inicial
const userSelectedDarkMode = window.localStorage.getItem("isDarkMode") === "true";

const state = {
  isDarkMode: userSelectedDarkMode
}

//Getter
const getters = {
  isDarkMode(state) {
    return state.isDarkMode
  }
}

//Mutations
const mutations = {
  toggleDarkMode(state) {
    if (state.isDarkMode === true) {
      state.isDarkMode = false;
      document.body.style.background = '#E8ECF0';
      window.localStorage.setItem("isDarkMode", "false");
    } else {
      state.isDarkMode = true;
      document.body.style.background = '#2E3131';
      window.localStorage.setItem("isDarkMode", "true");
    }
  }
}

//Actions
const actions = {
  triggerDarkMode(context) {
    context.commit('toggleDarkMode');
  }
}

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
});
