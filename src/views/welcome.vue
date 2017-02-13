<template>
 <div class="loader">
    <!-- <div class="tips">努力加载中...</div> -->
    <div class="pacman">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      wxConfig: 'WXSDK_Config',
      userInfo: 'USR_UserInfo'
    })
  },
  methods: mapActions([
    'setUserInfo',
    'WO_GetWashOrderFromWelcome'
  ]),
  mounted () {
    let url = window.location.href
    this.$store.dispatch('WXSDK_GetWxConfig', url.replace('&', '_'))
    setTimeout(() => {
      // 获取URL参数
      function getQueryString (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
        var r = window.location.search.substr(1).match(reg)
        if (r != null) {
          return unescape(r[2])
        } else {
          return null
        }
      }
      // 获取state
      var state = getQueryString('state')
      if (state) {
        // alert('code=' + state)
        this.$http.post('/v1/wechatapi/getuserinfobystatecode', {'state': state}).then(({data}) => {
          console.log('欢迎页面，获取用户基本信息和洗车预约信息', data)
            // if (this.userInfo.WechatMpOid !== '') {
              this.setUserInfo(data.UserInfo)
              this.WO_GetWashOrderFromWelcome(data.WashOrderInfo)
              var gopage = getQueryString('gopage')
              if (gopage === 'usercenter') {
                this.$router.push({ name: gopage })
              } else {
                // 当转入洗车预约的时候，根据状态跳转相关页
                // this.$router.push({ name: gopage })
                var orderstate = data.WashOrderInfo.OrderState
                // alert('用户最后一个订单状态：' + orderstate)
                if (orderstate === 'WAITPAY') {
                  this.$router.push({ name: 'userpay' })
                } else if (orderstate === 'WAITTING' || orderstate === 'READY' || orderstate === 'PROGRESS') {
                  this.$router.push({ name: 'washcomplete' })
                } else {
                  this.$router.push({ name: gopage })
                }
              }
            // } else {
            //   alert('获取不到openid')
            // }
        })
      } else {
        console.log('当获取不到state')
        var dataTest = {
          'Id': 1,
          'CnName': '索拉图2',
          'MobilePhone': '13926515891',
          'Sex': 1,
          'WechatUid': '',
          'WechatMpOid': 'oppeow0YX802ju8xlBhkm_9i0rRw',
          'WechatName': '索拉图',
          'WechatImage': 'http://wx.qlogo.cn/mmopen/ZSKuvXGhyWW1hoPia3icjMl7VeEBHPrKGwQVQ1WCGagPoGdXeA1L1UTFJNCBrsfGBqcvicLRRfpiamC1Ezsica71mH9WTfia5Q9NlH/0',
          'WechatProvince': '广东',
          'WechatCity': '深圳',
          'WechatSex': 1,
          'WalletBalance': 10000,
          'WalletPswd': '',
          'FinishedWashorders': 0,
          'UserRole': 0,
          'CreateTime': 1485181521,
          'UpdateTime': 0
        }
        this.setUserInfo(dataTest)
        if (this.userInfo.WechatMpOid !== '') {
          this.$router.push({ name: 'appointment' })
        } else {
          alert('获取不到openid')
        }
      }
    }, 1500)
  }
}
</script>

<style scoped>
-webkit-keyframes rotate_pacman_half_up {
  0% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}
@keyframes rotate_pacman_half_up {
  0% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  50% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  100% {
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
  }
}
@-webkit-keyframes rotate_pacman_half_down {
  0% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}
@keyframes rotate_pacman_half_down {
  0% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
}
@-webkit-keyframes pacman-balls {
  75% {
    opacity: 0.7;
  }
  100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-100px, -6.25px);
  }
}
@keyframes pacman-balls {
  75% {
    opacity: 0.7;
  }
  100% {
    -webkit-transform: translate(-100px, -6.25px);
    transform: translate(-100px, -6.25px);
  }
}
.loader {
  width: 100%;
  height: 100%;
  z-index: 1100;
  position: absolute;
  background-color: white;
}
.pacman {
  left: 50%;
  top: 50%;
  margin-top: -2rem;
  margin-left: -1.5rem;
  position: absolute;
}
.pacman > div:nth-child(2) {
  -webkit-animation: pacman-balls 1s -0.99s infinite linear;
  animation: pacman-balls 1s -0.99s infinite linear;
}
.pacman > div:nth-child(3) {
  -webkit-animation: pacman-balls 1s -0.66s infinite linear;
  animation: pacman-balls 1s -0.66s infinite linear;
}
.pacman > div:nth-child(4) {
  -webkit-animation: pacman-balls 1s -0.33s infinite linear;
  animation: pacman-balls 1s -0.33s infinite linear;
}
.pacman > div:nth-child(5) {
  -webkit-animation: pacman-balls 1s 0s infinite linear;
  animation: pacman-balls 1s 0s infinite linear;
}
.pacman > div:first-of-type {
  width: 0px;
  height: 0px;
  border-right: 1.5rem solid transparent;
  border-top: 1.5rem solid rgb(216, 65, 65);
  border-left: 1.5rem solid rgb(216, 65, 65);
  border-bottom: 1.5rem solid rgb(216, 65, 65);
  border-radius: 1.5rem;
  -webkit-animation: rotate_pacman_half_up 0.5s 0s infinite;
  animation: rotate_pacman_half_up 0.5s 0s infinite;
  position: relative;
  left: -1.5rem;
}
.pacman > div:nth-child(2) {
  width: 0;
  height: 0;
  border-right: 1.5rem solid transparent;
  border-top: 1.5rem solid rgb(216, 65, 65);
  border-left: 1.5rem solid rgb(216, 65, 65);
  border-bottom: 1.5rem solid rgb(216, 65, 65);
  border-radius: 1.5rem;
  -webkit-animation: rotate_pacman_half_down 0.5s 0s infinite;
  animation: rotate_pacman_half_down 0.5s 0s infinite;
  margin-top: -3rem;
  position: relative;
  left: -1.5rem;
}
.pacman > div:nth-child(3), .pacman > div:nth-child(4), .pacman > div:nth-child(5), .pacman > div:nth-child(6) {
  background-color: rgb(216, 65, 65);
  /*width: 15px;
  height: 15px;*/
  border-radius: 100%;
  margin: 1rem;
  width: 1rem;
  height: 1rem;
  position: absolute;
  -webkit-transform: translate(0, -6.25px);
  -ms-transform: translate(0, -6.25px);
  transform: translate(0, -6.25px);
  top: .4rem;
  left: 4.2rem;
}
</style>
