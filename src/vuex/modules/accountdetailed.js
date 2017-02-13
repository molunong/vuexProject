import * as types from '../mutation-types'
import $ from 'zepto'

export default {
    state: {
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
        // 'UserWalletLogs': []
    },
    getters: {
        USR_UserWalletLogs: state => state.UserWalletLogs,
         createtime: state => state.createtime
    },
    actions: {
        USR_GetUserWalletLogs({commit}, Params) {
            console.log('uid', Params.uid)
            $.ajax({
                url: '/v1/wechatapi/getuserwalletlogs?uid=' + Params.uid + '&pageindex=' + Params.index + '&pagesize=' + Params.size,
                type: 'POST',
                cache: false,
                processData: false,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: function(accountdetailed) {
                    console.log("ajax get wxconfig successed")
                    console.log("---------accountdetailed：-----------" + accountdetailed)
                    commit(types.USR_UPDATE_CLIENT_ACCOUNTDETAILED, {
                    accountdetailed
                    })
                }
            })
        }
    },
    mutations: {
        [types.USR_UPDATE_CLIENT_ACCOUNTDETAILED] (state, { accountdetailed }) {
            state.UserWalletLogs = accountdetailed
        }
    }
}
