<template>
  <div class="container">
   <!-- 标题栏 -->
    <header class="bar bar-nav">
        <a class="icon icon-left pull-left back" @click="returnBack()"></a>
    </header>

    <!-- 内容 -->
    <div class="content content_st">
      <div class="row" style="margin: 0 auto;">			     					    
        <p class="p0"><img src="../../static/img/logo.png" alt="logo"/></p>
      	<p class="p1">洗车</p>
      	<p class="p2">你只需支付<span id="">10</span>元就可以完成预约,<br/>清洁专员将上门为您洗车。</p>
      	<p class="p3">￥10.0</p>			
	  </div>
	  
	  <!--<div class="row">
     	<ul style="list-style: none;">
		   <li>
		    <label class="label-checkbox item-content">
		      <input type="radio" name="my-radio">
		      <div class="item-media"><i class="icon icon-form-checkbox"></i>余额支付</div>				    
		    </label>
		  </li>				  
			<li style="padding-top: 0.6rem;">
			  <label class="label-checkbox item-content">
			    <input type="radio" name="my-radio"> 
			    <div class="item-media"><i class="icon icon-form-checkbox"></i>微信支付</div>				     
			  </label>
			 </li>
			</ul>		    	
    </div>-->
    <div class="row row_r">
      <div class="col-30">订单号：</div>
      <div class="col-70">
        <input type="text" v-model="ordernumber">
      </div>
    </div>
	  <div class="row row_r">
     	<div :class="userInfo.WalletBalance >= 100 ? 'col-25':'col-33'">&nbsp;</div>
    	<div :class="userInfo.WalletBalance >= 100 ? 'col-25':'col-1'" style=" padding-top: 3px;"><a v-show="userInfo.WalletBalance>=100"  @click="walletpay()" class="button button-danger btn_pay">余额支付</a></div>
    	<div :class="userInfo.WalletBalance >= 100 ? 'col-25':'col-33'" style=" padding-top: 3px;"><a @click="wechatpay()" class="button button-danger btn_pay">微信支付</a></div>
    	<div :class="userInfo.WalletBalance >= 100 ? 'col-25':'col-33'">&nbsp;</div>
    </div>
  </div>
  </div>
</template>

<style type="text/css">
	.content_st{background: #ffffff; text-align: center;}
	.p0{margin: 0 auto; padding-top: 1rem;}
	.p1{font-size: 1.2rem; margin: 0 auto;}
	.p2{font-size: 0.9rem; color: #9D9D9D;margin: 0 auto;  padding-top: 0.5rem;}
	.p3{font-size: 1.5rem; color: #d7270f; margin-bottom: 2rem;margin: 0 auto;}
	.row_r{padding-top: 1.5rem; margin: 0 auto;}
  .btn_pay{line-height: 2.3rem; height: 2.4rem;font-size: 0.9rem;color: #fff;background: red;border: none;}            
</style>
        
<script>
import $ from 'zepto'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      ordernumber: 0
    }
  },
  mounted () {
    this.ordernumber = this.washOrderInfo.Id
    $.init()
  },
  ready: function () {
    console.log(this.$route.params.orderid)
  },
  computed: {
    ...mapGetters({
      userInfo: 'USR_UserInfo',
      orderInfo: 'WO_WashOrderInfo',
      //  获取微信配置
      wexincofig: 'WXSDK_Config',
      //  获取最全局的订单信息
      washOrderInfo: 'WO_WashOrderInfo'
    })
  },
  watch: {
    washOrderInfo: 'paysuccess', deep: true
  },
  methods: {
    returnBack () {
      console.log('submit appointment')
      this.$router.push({ name: 'appointment' })
    },
    paysuccess () {
      $.alert('余额支付成功')
      this.$router.push({ name: 'washcomplete' })
    },
    // 钱包支付
    walletpay () {
      var payinfo = {}
      payinfo.oid = this.userInfo.WechatMpOid
      // payinfo.wid = this.orderInfo.Id
      payinfo.wid = this.ordernumber
      payinfo.uid = this.userInfo.Id
      console.log(payinfo)
      this.$store.dispatch('WO_PayWashOrderFromWallet', payinfo)
    },
    wechatpay () {
      var payinfo = {}
      payinfo.oid = this.userInfo.WechatMpOid
      // payinfo.wid = this.orderInfo.Id
      payinfo.wid = this.ordernumber
      payinfo.uid = this.userInfo.Id
      if (payinfo.wid !== 0 && payinfo.oid !== '' && payinfo.uid !== 0) {
        this.$store.dispatch('WXSDK_WechatPay', payinfo)
      } else {
        $.alert('提交的信息不完整')
        $.alert('用户openid: ' + payinfo.oid)
        $.alert('订单id: ' + payinfo.wid)
        $.alert('用户id: ' + payinfo.uid)
      }
    }
  }
}
</script>