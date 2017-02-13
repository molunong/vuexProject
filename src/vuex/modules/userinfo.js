import * as types from '../mutation-types'
import $ from 'zepto'

export default {
    state: {
        'UserInfo': {
            'CnName': '',
            'CreateTime': 0,
            'FinishedWashorders': 0,
            'Id': 0,
            'MobilePhone': '',
            'Sex': 0,
            'UpdateTime': 0,
            'UserRole': 0,
            'WalletBalance': 0,
            'WalletPswd': '',
            'WechatCity': '',
            'WechatImage': '',
            'WechatMpOid': '',
            'WechatName': '',
            'WechatProvince': '',
            'WechatSex': 0,
            'WechatUid': ''
        },
        'UserWalletLogs': [
            {
                "Amount": 0,
                "CreateTime": 0,
                "Id": 0,
                "OperatorDesc": "string",
                "OrderNumber": "string",
                "UserId": 0,
                "WechatMpOid": "string",
                "WechatUid": "string"
            }
        ]
    },
    getters: {
        USR_UserInfo: state => state.UserInfo
    },
    actions: {
        USR_GetMyUserInfo({
            commit,
            state
        }, Params) {
            console.log('---------------, params=', JSON.stringify(Params))
            $.ajax({
                type: "POST",
                url: "/v1/wechatapi/updateprofile",
                data: JSON.stringify(Params),
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: function(info) {
                    console.log('---------------, params=', JSON.stringify(info))
                    commit(types.SET_USER_INFO, { info })
                    $.alert('操作成功')
                },
                error: function(info) {
                    $.alert('操作失败')
                }
            })
        },
        setUserInfo({
            commit
        }, info) {
            commit(types.SET_USER_INFO, {
                info
            })
        },
        getUserInfo({
            commit,
            state
        }, info) {
            commit(types.SET_USER_INFO, {
                info
            })
            return info
        }
    },
    mutations: {
        [types.SET_USER_INFO](state, {
            info
        }) {
            state.UserInfo = info
        }
    }
}
