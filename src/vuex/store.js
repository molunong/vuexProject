import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import washorder from './modules/washorder'
import userinfo from './modules/userinfo'
import wxjssdk from './modules/wxjssdk'
import lifengpin from './modules/lifengpin'
import createLogger from '../plugins/logger'
import accountdetailed from './modules/accountdetailed'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        washorder,
        userinfo,
        wxjssdk,
        lifengpin,
        accountdetailed
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})
