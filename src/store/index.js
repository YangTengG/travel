import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations: {
    changeCity: function(state, city) {
      state.city = city;
      try {
        localStorage.currentCity = city;
      } catch (e) {}
    }
  },
  actions: {
    changeCity: function(context, city) {
      context.commit('changeCity', city);
    }
  }
});
