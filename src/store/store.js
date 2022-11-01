/**
 * 功能描述：
 * 使用方法：
 * 注意事项：
 * 引入来源：
 * 作用：
 * Create by hauk0101 on 2018/9/7
 */

'use strict';
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


Vue.use(Vuex);
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  strict: true,
  modules: {

  }
});
