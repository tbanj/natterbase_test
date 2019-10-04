import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    statisticsData: {},
    applicationData: [],
  },

  getters: {
    /*  Here we will create a getter
        Getters compute properties based on the store state.
     */
  },

  mutations: {
    // mutation interact with the state directly
    updateApplications(state, unit) {
      state.applicationData = unit;
    },

    updateStatistics(state, unit) {
      state.statisticsData = unit;
    }

  },

  actions: {
    /* Here we will first process the data
    before sending to mutation
     */

    updateApplications(context, data) {

      if (context.state.applicationData.length < data.length) {
        context.commit('updateApplications', data)
      }
    },
    updateStatistics(context, data) {
      if (typeof context.state.statisticsData === typeof data) {
        context.commit('updateStatistics', data)
      }

    }



  }


});