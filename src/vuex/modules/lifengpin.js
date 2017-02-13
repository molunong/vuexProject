import * as types from '../mutation-types'
import $ from 'zepto'

export default {
    state: {
        'UserAddNewCar': {
                'CarBrand': '',
                'CarColor': '',
                'CarModel': '',
                'CarNumber': '',
                'Id': 0,
                'WechatMpOid': ''
           },
        'UserCarList': [],
        'UserCarNumber': []
    },
    getters: {
        USR_AddNewCar: state => state.UserAddNewCar,
        USR_CarList: state => state.UserCarList,
        USR_CarNumber: state => state.UserCarNumber
    },
    actions: {
        USR_GetUserCarList({commit}, oid) {
            console.log('oid', oid)
            $.ajax({
                url: '/v1/wechatapi/getusercarlist?oid=' + oid,
                type: 'POST',
                cache: false,
                processData: false,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: function(carlist) {
                    console.log("ajax get wxconfig successed")
                    commit(types.USR_UPDATE_CLIENT_CARLIST, { carlist })
                }
            })
        },
        USR_GetUserAddNewCar({commit, state}, createcarinfo) {
        console.log('submit appointment')
        console.log("------------------返回的数据是-------------------", JSON.stringify(createcarinfo))
        $.ajax({
                headers: {
                    Accept: "application/json; charset=utf-8"
                },
                type: "POST",
                url: "/v1/wechatapi/createcarinfo",
                data: JSON.stringify(createcarinfo),
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: function(result) {
                    console.log("------------------返回的数据是-------------------", result)
                    commit(types.USR_UPDATE_CLIENT_CARLIST, {
                    result
                    })
                },
                error: function(result) {
                }
           })
        }
    },
    mutations: {
        [types.USR_UPDATE_CLIENT_CARLIST] (state, { carlist }) {
            state.UserCarList = carlist
            for (let i = 0; i < carlist.length; i++) {
              state.UserCarNumber.push(carlist[i].CarNumber)
            }
        },
        [types.USR_SET_ADD_NEWCAR](state, {
            createcarinfo
        }) {
            state.UserInfo = createcarinfo
        }
    }
}
