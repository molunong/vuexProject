<template>
<div v-if="showmap" id="mapdev">
  <!--<div>
    CnName: {{CnName}},<br>
    CreateTime: {{CreateTime}},<br>
    FinishedWashorders: {{FinishedWashorders}},<br>
    Id: {{Id}},<br>
    MobilePhone: {{MobilePhone}},<br>
    Sex: {{Sex}},<br>
    UpdateTime: {{UpdateTime}},<br>
    UserRole: {{UserRole}},<br>
    WalletBalance: {{WalletBalance}},<br>
    WalletPswd: {{WalletPswd}},<br>
    WechatCity: {{WechatCity}},<br>
    WechatImage: {{WechatImage}},<br>
    WechatMpOid: {{WechatMpOid}},<br>
    WechatName: {{WechatName}},<br>
    WechatProvince: {{WechatProvince}},<br>
    WechatSex: {{WechatSex}},<br>
    WechatUid: {{WechatUid}}<br>
  </div>-->
  <div>
    <ol>
      <li><a @click="createcarinfo()">添加车辆信息接口</a></li>
      <li><a @click="createwashorder()">创建订单接口</a></li>
      <li><a @click="deletecarinfo()">删除用户车辆信息接口</a></li>
      <li><a @click="getusercarlist()">获取用户车辆列表信息接口</a></li>
      <li><a @click="getuserinfo()">该获取用户信息实体</a></li>
      <li><a @click="getuserinfobystatecode()">根据状态码获取用户信息实体</a></li>
      <li><a @click="getuserwalletlogs()">获取用户钱包信息接口</a></li>
      <li><a @click="getuserwashorderlist()">获取用户洗车记录列表接口</a></li>
      <li><a @click="paywashorderfromwallet()">通过用户余额支付洗车订单接口</a></li>
      <li><a @click="updateprofile()">更新用户信息档案</a></li>
      <li><a @click="uploadcarimage()">上传车辆图片接口</a></li>
    </ol>
  </div>
  <!--<div>
    返回的数据：{{carlist}}
  </div>-->
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import $ from 'zepto'

export default {
  data () {
    return {
      carlist: []
    }
  },
  props: ['showmap'],
  computed: {
    // 获取用户信息
    ...mapGetters({
      CnName: 'CnName',
      CreateTime: 'CreateTime',
      FinishedWashorders: 'FinishedWashorders',
      Id: 'Id',
      MobilePhone: 'MobilePhone',
      Sex: 'Sex',
      UpdateTime: 'UpdateTime',
      UserRole: 'UserRole',
      WalletBalance: 'WalletBalance',
      WalletPswd: 'WalletPswd',
      WechatCity: 'WechatCity',
      WechatImage: 'WechatImage',
      WechatMpOid: 'WechatMpOid',
      WechatName: 'WechatName',
      WechatProvince: 'WechatProvince',
      WechatSex: 'WechatSex',
      WechatUid: 'WechatUid'
    })
  },
  methods: {
    createcarinfo () {
      console.log('1.添加车辆信息接口')
      var carinfo = {
        "CarBrand": "string",
        "CarColor": "string",
        "CarImage": "string",
        "CarModel": "string",
        "CarNumber": "string",
        "CreateTime": 1485181521,
        "Id": 0,
        "UpdateTime": 1485214847,
        "UserId": this.Id,
        "WechatMpOid": this.WechatMpOid
      }
      console.log("------------------新增车辆信息------------------", carinfo)
      var data = JSON.stringify(carinfo)
      $.ajax({
        type: "POST",
        url: "/v1/wechatapi/createcarinfo",
        data: data,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (result) {
          console.log(result)
        },
        error: function (result) {
          console.log(result)
        }
      })
      // this.$http.post('/v1/wechatapi/createcarinfo', carinfo).then(({data}) => {
      //   console.log(data)
      // }).catch(function (response) {
      //   console.log(response)
      // })
    },
    createwashorder () {
      console.log('2.创建订单接口')
    },
    deletecarinfo () {
      console.log('3.删除用户车辆信息接口')
    },
    getusercarlist () {
      console.log('4.获取用户车辆列表信息接口')
      this.$http.post('/v1/wechatapi/getusercarlist?oid=oppeow3sEGjKfCV245MnuoqdIv0k').then(({data}) => {
        this.carlist = data
        console.log(data)
      })
    },
    getuserinfo () {
      console.log('5.该获取用户信息实体')
    },
    getuserinfobystatecode () {
      console.log('6.根据状态码获取用户信息实体')
    },
    getuserwalletlogs () {
      console.log('7.获取用户钱包信息接口')
    },
    getuserwashorderlist () {
      console.log('8.获取用户洗车记录列表接口')
    },
    paywashorderfromwallet () {
      console.log('9.通过用户余额支付洗车订单接口')
    },
    updateprofile () {
      console.log('10.更新用户信息档案')
    },
    uploadcarimage () {
      console.log('11.上传车辆图片接口')
    }
  }
}
</script>

<style>
#mapdev{
    width: 100%;
    min-height: 100%;
    position: absolute;
    top:0;
    left: 0;
    background: #fff;
    z-index: 100;
}
</style>
