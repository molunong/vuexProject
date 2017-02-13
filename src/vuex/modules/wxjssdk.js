import * as types from '../mutation-types'
import $ from 'zepto'
import wx from 'wx'

export default {
    state: {
        NowLatitude: 0,
        NowLongitude: 0,
        NowAddress: '',
        WxConfig: {
            AppId: '',
            NonceStr: '',
            Timestamp: '',
            Signature: '',
            Url: ''
        }
    },
    getters: {
        WXSDK_Config: state => state.WxConfig,
        WXSDK_NowLatitude: state => state.NowLatitude,
        WXSDK_NowLongitude: state => state.NowLongitude,
        WXSDK_NowAddress: state => state.NowAddress
    },
    actions: {
        WXSDK_SelectUploadImage({
            commit,
            state
        }) {
               wx.checkJsApi({
                   jsApiList: [
                       'chooseImage',
                       'previewImage'
                       // 'chooseImage'
                       // 'uploadImage'
                   ],
                   success: function (res) {
                       alert(JSON.stringify(res))
                       wx.chooseImage({
                            count: 1,
                            sourceType: ['album', 'camera'],
                            sizeType: ['compressed'],
                            jsApiList: ['chooseImage'],
                            success: function(localres) {
                                alert('图片已选择：' + JSON.stringify(localres))
                    // wx.uploadImage({
                    //     localId: localres.localIds[0],
                    //     success: function (res) {
                    //         let data = {
                    //             "CarBrand": "string",
                    //             "CarColor": "string",
                    //             "CarImage": "string",
                    //             "CarModel": "string",
                    //             "CarNumber": "string",
                    //             "UserId": 1,
                    //             "WechatMpOid": "oppeow0YX802ju8xlBhkm_9i0rRw"
                    //         }

                    //         $.ajax({
                    //             url: '/v1/wechatapi/createcarinfo?mediaId=' + res.serverId,
                    //             type: 'POST',
                    //             cache: false,
                    //             data: JSON.stringify(data),
                    //             processData: false,
                    //             contentType: "application/json; charset=utf-8",
                    //             dataType: 'json',
                    //             success: function(config) {
                    //                 alert('图片已上传：' + JSON.stringify(config))
                    //             }
                    //         })
                    //     },
                    //     fail: function (res) {
                    //         alert(JSON.stringify(res))
                    //     }
                    // })
                                }
                           })
                   }
               })
//             alert('begin select a image')
        },
        WXSDK_GetWxConfig({
            commit,
            state
        }, currUrl) {
            console.log('into WXSDK_GET_CONFIG', currUrl)
            if (state.WxConfig.AppId === '' || state.WxConfig.Url !== currUrl) {
                $.ajax({
                    url: '/v1/wechatapi/getwxconfig?url=' + currUrl,
                    type: 'POST',
                    cache: false,
                    processData: false,
                    contentType: "application/json; charset=utf-8",
                    dataType: 'json',
                    success: function(config) {
                        console.log("ajax get wxconfig successed")
                        commit(types.WXSDK_GET_CONFIG, {
                            config
                        })
                    }
                })
            }
        },
        WXSDK_GetLocationFromMap({
            commit,
            state
        }, addressinfo) {
            console.log('lat=' + addressinfo.latitude + ', long=' + addressinfo.longitude + ', addr=' + addressinfo.address)
            let latitude = addressinfo.latitude
            let longitude = addressinfo.longitude
            let address = addressinfo.address

            commit(types.WXSDK_GET_LOCALTION, {
                latitude,
                longitude,
                address
            })
        },
        WXSDK_GetLocation({
            commit,
            state
        }) {
            console.log('into WXSDK_GetLocation')
            wx.getLocation({
                type: 'gcj02',
                success: function(res) {
                    let latitude = res.latitude
                    let longitude = res.longitude

                    console.log('lat=' + res.latitude + ', long=' + res.longitude)

                    $.ajax({
                        url: 'http://apis.map.qq.com/ws/geocoder/v1/?location=' + latitude + ',' + longitude + '&coord_type=5&key=JGMBZ-6HIW5-KGXIO-QVFNN-3WQD5-3PBGV&output=jsonp',
                        type: 'GET',
                        async: false,
                        dataType: 'jsonp',
                        jsonp: 'callback',
                        jsonpCallback: 'success_jsonpCallback',
                        success: function(data) {
                            let name = data.result.formatted_addresses.rough
                            let address = data.result.formatted_addresses.recommend
                            let lat = data.result.location.lat
                            let lng = data.result.location.lng
                            console.log('get address successed: name=' + name + ', address=' + address + ', lat=' + lat + ', lng=' + lng)
                            commit(types.WXSDK_GET_LOCALTION, {
                                latitude,
                                longitude,
                                address
                            })
                        }
                    })
                },
                cancel: function(res) {
                    alert('请不要拒绝授权获取地理位置')
                }
            })
        },
        WXSDK_WechatPay({commit, state}, Params) {
            wx.checkJsApi({
                jsApiList: ['chooseWXPay'],
                success: function(res) {
                    $.ajax({
                        headers: {
                            Accept: "application/json; charset=utf-8"
                        },
                        type: "POST",
                        url: "/v1/wechatapi/paywashorderfromwechat?oid=" + Params.oid + "&wid=" + Params.wid + "&uid=" + Params.uid,
                        data: JSON.stringify(Params),
                        contentType: "application/json; charset=utf-8",
                        dataType: 'json',
                        success: function(result) {
                            let wxpayinfo = result.Respon
                            console.log('获取微信支付配置', wxpayinfo)
                            $.alert('appid=' + wxpayinfo.AppId + '<br/>ts=' + wxpayinfo.Timestamp + "<br/>non=" + wxpayinfo.NonceStr + "<br/>package=" + wxpayinfo.Package + "<br/>sing=" + wxpayinfo.PaySign + "<br/>type=" + wxpayinfo.SignType)
                            // let configStr = {
                            //     appId: wxpayinfo.AppId,
                            //     timestamp: wxpayinfo.Timestamp,
                            //     nonceStr: wxpayinfo.NonceStr,
                            //     package: wxpayinfo.Package,
                            //     signType: 'MD5',
                            //     paySign: wxpayinfo.PaySign
                            // }
                            // WeixinJSBridge.invoke(
                            //     'getBrandWCPayRequest',
                            //     configStr,
                            //     function(res) {
                            //         if (res.err_msg === "get_brand_wcpay_request：ok") {
                            //             console.log(res)
                            //         }
                            //     }
                            // )
                            wx.chooseWXPay({
                                appId: wxpayinfo.AppId, // 公众号名称，由商户传入
                                timestamp: wxpayinfo.Timestamp, // 时间戳，自1970年以来的秒数
                                nonceStr: wxpayinfo.NonceStr, // 随机串
                                package: wxpayinfo.Package,
                                signType: 'MD5', // 微信签名方式
                                paySign: wxpayinfo.PaySign, // 微信签名
                                success: function (res) {
                                    // 支付成功后的回调函数
                                    console.log('支付成功', res)
                                    if (res.err_msg === 'get_brand_wcpay_request：ok') {
                                        // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回ok,但并不保证它绝对可靠。
                                    }
                                },
                                error: function(res) {
                                    alert('支付失败')
                                    console.log('支付失败', res)
                                },
                                cancel: function(res) {
                                    alert('支付取消')
                                    console.log('支付取消', res)
                                }
                            })
                        },
                        error: function(result) {
                            // $.alert('调取微信支付信息失败')
                            console.log(result)
                        }
                    })
                }
            })
        }
    },
    mutations: {
        [types.WXSDK_GET_LOCALTION](state, {
            latitude,
            longitude,
            address
        }) {
            console.log('into types.WXSDK_GET_LOCALTION')
            state.NowLatitude = latitude
            state.NowLongitude = longitude
            state.NowAddress = address
        },
        [types.WXSDK_GET_CONFIG](state, {
            config
        }) {
            state.WxConfig.AppId = config.AppId
            state.WxConfig.Timestamp = config.Timestamp
            state.WxConfig.NonceStr = config.NonceStr
            state.WxConfig.Signature = config.Signature
            state.WxConfig.Url = config.Url

            // alert('appid=' + config.AppId + ', ts=' + config.Timestamp + ', non=' + config.NonceStr + '. sign=' + config.Signature + ', url=' + config.Url)
            // console.log(state.WxConfig)
            console.log('appid=' + config.AppId + ', ts=' + config.Timestamp + ', non=' + config.NonceStr + '. sign=' + config.Signature + ', url=' + config.Url)
            // 微信配置
            wx.config({
                    debug: true,
                    appId: config.AppId,
                    timestamp: config.Timestamp,
                    nonceStr: config.NonceStr,
                    signature: config.Signature,
                    jsApiList: [
                        'checkJsApi',
                        'onMenuShareTimeline',
                        'getLocation',
                        'chooseImage',
                        'previewImage',
                        'uploadImage',
                        'downloadImage',
                        'chooseWXPay'
                    ]
                })
                // 在需要配置分享内容的时候调用
                // wxShareConfig()
            wx.ready(function() {
                console.log('wx.ready')
                wx.onMenuShareTimeline({
                    title: '嘟嘟管家，为您服务', // 分享标题
                    link: 'http://dudu.gxbaimu.com/wxcallback/wxoauth1', // 分享链接
                    imgUrl: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png', // 分享图标
                    success: function() {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                })
            })
            wx.error(function(res) {})
        }
    }
}
