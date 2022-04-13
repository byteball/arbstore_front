import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    card: [],
    count:'',
    showReg:false,
    showMenu:false,
    languages:[],
    tags:[],
  },
  mutations: {
    getProducts(state, products){
      state.products = products
    },
    getLanguages(state, languages){
      state.languages = languages
    },
    getTags(state, tags){
      state.tags = tags
    },
    addCount (state, count) {
      state.count=count
    },
    showReg (state, showReg) {
      state.showReg=showReg
    },
    showMenu (state, showMenu) {
      state.showMenu=showMenu
    },
  },
  actions: {
    getProductsAction({commit}){

      axios(process.env.VUE_APP_BACKEND_URL + '/api/v1/').then(res => {
        commit('getProducts', res.data)
      }).catch(error => {
        console.log(error);
        this.errored = true;
      }).finally(() => (this.loading = false));

    },
    getLanguages({commit}){
      axios(process.env.VUE_APP_BACKEND_URL + '/api/v1/languages').then(res => {
        commit('getLanguages', res.data);
      }).catch(error => {
        console.log(error);
        this.errored = true;
      }).finally(() => (this.loading = false));
    },
    getTags({commit}){
      axios(process.env.VUE_APP_BACKEND_URL + '/api/v1/tags').then(res => {
        commit('getTags', res.data);
      }).catch(error => {
        console.log(error);
        this.errored = true;
      }).finally(() => (this.loading = false));
    },
    addCount({commit}, count) {
      commit('addCount', count)
    },
    showReg({commit}, showReg) {
      commit('showReg', showReg)
    },
    showMenu({commit}, showMenu) {
      commit('showMenu', showMenu)
    },
  },
  modules: {
  }
})