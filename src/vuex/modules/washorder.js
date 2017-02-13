import * as types from '../mutation-types'
import $ from 'zepto'
const ERROR_MSG = "预约失败请重新尝试"
export default {
    state: {
        WashOrderInfo: {
            'AcceptDt': 0,
            'Address': '',
            'Amount': 0,
            'CancelDt': 0,
            'CnName': '',
            'EndDt': 0,
            'EvaluateContext': '',
            'EvaluateLevel': 0,
            'EvaluateTime': 0,
            'FinishDt': 0,
            'Id': 0,
            'ImgAfter': '',
            'ImgAfterDt': 0,
            'ImgAfterUpdateDt': 0,
            'ImgBefore': '',
            'ImgBeforeDt': 0,
            'ImgBeforeUpdateDt': 0,
            'Latitude': 0,
            'Longitude': 0,
            'MchReceiveAddress': '',
            'MchWechatMpOid': '',
            'MchWechatUid': '',
            'MercantMobile': '',
            'MerchantContact': '',
            'MerchantGrade': 0,
            'MerchantId': 0,
            'MerchantLatitude': 0,
            'MerchantLongitude': 0,
            'MerchantName': '',
            'MerchantSex': 0,
            'OrderCreateTime': 0,
            'OrderDesc': '',
            'OrderFrom': 0,
            'OrderInvalidTime': 0,
            'OrderNumber': '',
            'OrderState': '',
            'OtherServiceId': 0,
            'StartDt': 0,
            'SubscribeDt': 0,
            'TransactionId': '',
            'UpdateTime': 0,
            'UserId': 0,
            'UserCarId': 0,
            'UserCarNumber': '',
            'UserMobile': '',
            'UserSex': 0,
            'WechatMpOid': ''
        },
        historyorder: [],
        washcar: '',
        washtime: '',
        waggshadderss: '',
        upkeep: false,
        description: ''
    },
    getters: {
        WO_WashOrderInfo: state => state.WashOrderInfo,
        washcar: state => state.washcar,
        washtime: state => state.washtime,
        washadderss: state => state.washadderss,
        upkeep: state => state.upkeep,
        description: state => state.description,
        WO_historyorder: state => state.historyorder
    },
    actions: {
        WO_CreateWashOrder({
            commit,
            state
        }, Params) {
            $.ajax({
                headers: {
                    Accept: "application/json; charset=utf-8"
                },
                type: "POST",
                url: "/v1/wechatapi/createwashorder",
                data: JSON.stringify(Params),
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: function(washOrderInfo) {
                    if (washOrderInfo.WashRoderInfo.Id) {
                        washOrderInfo = washOrderInfo.WashRoderInfo
                        commit(types.WO_UPDATE_CLIENT_WASHORDER, { washOrderInfo })
                    } else {
                        $.hidePreloader()
                        // 预约失败发出提示
                        $.toast(ERROR_MSG)
                    }
                },
                error: function(washOrderInfo) {
                    $.hidePreloader()
                    // 预约失败发出提示
                    $.toast(ERROR_MSG)
                }
            })
        },
        WO_PayWashOrderFromWallet({commit, state}, Params) {
            console.log('into WO_PayWashOrderFromWallet, params=', Params)
            $.ajax({
                headers: {
                    Accept: "application/json; charset=utf-8"
                },
                type: "POST",
                url: "/v1/wechatapi/paywashorderfromwallet?oid=" + Params.oid + "&wid=" + Params.wid + "&uid=" + Params.uid,
                data: JSON.stringify(Params),
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: function(washOrderInfo) {
                    console.log("------------------余额支付成功结果，返回的是订单信息-------------------", washOrderInfo)
                    commit(types.WO_PAY_WASHORDER_FROM_WALLET, {washOrderInfo})
                },
                error: function(result) {
                    console.log("------------------余额支付失败结果-------------------", result)
                    $.alert('支付失败..请重新尝试..')
                }
            })
        },
        // 获取洗车记录
        WO_GetHistoryOrder({commit, state}, Params) {
            $.ajax({
                headers: {
                    Accept: "application/json; charset=utf-8"
                },
                type: "POST",
                url: "/v1/wechatapi/getuserwashorderlist?uid=" + Params.uid + "&pageindex=" + Params.pageindex + "&pagesize=" + Params.pagesize,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                success: function(orderInfo) {
                    commit(types.SET_WASHORDER_MSG, { orderInfo })
                },
                error: function(orderInfo) {
                    $.alert('查询数据失败')
                }
            })
        },
        WO_GetWashOrderFromWelcome({commit}, Params) {
            let washOrderInfo = Params
            commit(types.WO_GET_WASH_ORDER_FROM_WELCOME, {washOrderInfo})
        }
    },
    mutations: {
        [types.WO_UPDATE_CLIENT_WASHORDER](state, {washOrderInfo}) {
            state.WashOrderInfo = washOrderInfo
        },
        [types.WO_PAY_WASHORDER_FROM_WALLET](state, {washOrderInfo}) {
            state.WashOrderInfo = washOrderInfo
        },
        [types.SET_WASHORDER_MSG](state, {orderInfo}) {
            // state.historyorder = $.eval(orderInfo)
             for (let i = 0; i < orderInfo.length; i++) {
              state.historyorder.push(orderInfo[i])
             }
            // state.historyorder.push(orderInfo)
        },
        [types.WO_GET_WASH_ORDER_FROM_WELCOME](state, {washOrderInfo}) {
            state.WashOrderInfo = washOrderInfo
        }
    }
}
