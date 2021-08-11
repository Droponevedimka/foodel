import { createStore } from 'vuex'

export default createStore({
  state: {
    myData: [
      
    ]
  },
  getters: {
    getActiveData: state => findId => {
      return state.myData.find(e => e.id == findId);
    }
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
  }
})
