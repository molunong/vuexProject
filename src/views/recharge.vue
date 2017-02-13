<template>
    <div class="container">        
        <header class="bar bar-nav">
        	<a class="button button-link button-nav pull-left back" href="#" @click="tousercenter()">
			<span class="icon icon-left"></span>
			</a>
	    	<h1 class="title">充值</h1>
		</header>
        <div class="content background-color">
        	<div class="row rowbg">
		    	<div class="logo_name">
			    	<div class="img_name">
			    		<img :src="userInfo.WechatImage" v-show="userInfo.WechatImage != ''" alt="用户头像" class="img_style" style="width: 4.5rem;height: 4.5rem;"/>
			    	    <img src="/static/img/defaultuser.png" v-show="userInfo.WechatImage == ''" alt="用户头像" class="img_style" style="width: 4.5rem;height: 4.5rem;"/>
			    	</div>
			    	<div class="ct_name"><p class="wx_name">{{userInfo.CnName}}</p>
			    	    <p class="wx_number">{{userInfo.MobilePhone}}</p>
			    	</div>					    	
		        </div>
		    </div>
            <div class="row" style="background: rgb(239, 239, 237); margin-top: 1rem; margin-left: 0.02rem;">
            	<div class="col-50 clear-margin">
            	  <div class="money-title">
            		<p class="margin-6">余额</p> 
            		<p class="text-center margin-6" style="color: rgb(247, 68, 65);"><span style="margin: 0.1rem;">¥</span>{{userInfo.WalletBalance}}<span style="margin: 0.3rem;">元</span></p>
            	  </div>
            	</div> 
        		<div class="col-50 clear-margin" style="border-left: 2px solid rgb(255, 255, 255);">
        			<div class="money-title">
        				<p class="margin-6">洗车次数</p> 
        				<p class="text-center margin-6" style="color: rgb(35, 172, 246);">{{userInfo.FinishedWashorders}}<span style="margin: 0.3rem;">次</span></p>
        			</div>
        		</div>
            </div>
    		<div class="list-block">     		
			    <div class="row">
		        <div class="col-33" style="text-align: right;">金额:</div>
		        <div class="col-33"><input type="text" placeholder="0.00" style="height: initial;"></div>
		        <div class="col-33">元</div>
		    	</div>
			</div>
    		<div class="content-block" style="margin-top: 10px;">
		      	<div class="row">
		        	<div class="col-100"><a href="#" @click="tousercenter()" style="background-color:blue; margin-left:50px;margin-right:50px;" class="button button-big button-fill button-success">充值</a></div>
		      	</div>
	    	</div>
    	</div>
    </div>   
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      userInfo: 'USR_UserInfo'
    })
  },
  methods: {
    tousercenter () {
      console.log('submit appointment')
      // this.$router.push({ name: 'usercenter' })
      this.$router.push({ name: 'usercenter' })
    }
  }
}
</script>
<style>
.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.user-logo{width: 80px;height: 80px;margin: 0 auto;}
.width100{width:100%;}
.user-name{font-size: 0.7rem; font-weight: bold; text-align: center; margin: 6px 0px;}
.background-color{background-color: #fff;}
.page{background: #FFF !important;}
.margin-auto{margin:0 auto !important;}
.clear-margin-padding{margin: 0 !important;padding: 0 !important;}
.clear-padding{padding: 0 !important;}
.clear-margin{margin: 0 !important;}
.margin-6{margin: 6px 0px !important;}
.margin-10{margin: 10px 0px !important;}
.width50{width: 50% !important;}
.width33{width: 33.33333% !important;}
.width22{width: 22%;display: inline-block;}
.width-height-100{width:100%;height: 100%;}
.width78{width: 73%;display: inline-block;}
.color-write{color: #fff;}
.font-bold{font-weight: bold;}
.text-right{text-align: right;}
.money-title{margin:4px 10px;}
.money-title>p{font-weight: bold;font-size: 0.7rem;}
.color-lan{color: #36B7FC !important;font-size: 0.7rem;}
.color-yellow{color: #FF5722 !important;}
.logo-click{width: 74px;height: 74px;padding-top:4px;display: inline-block;}
.img-box{width: 44px;height: 44px;margin:0 auto;}
.img-rounded{width: 100%;height: 100%;font-size:66px;color:#ADA9A8;}
.logo-click{width: 74px;height: 74px;padding-top:4px;display: inline-block;}
.logo-click:active{background:rgba(0,0,0,0.1) !important;}
.btn-height{height: 1.8rem !important;line-height: 1.8rem !important;}
.rowbg{background: url(../../static/img/bg.jpg);position: relative; background-repeat: no-repeat; background-size: 100% 100%;overflow: hidden; margin-left: -4%; height: 30%;}
.logo_name{position: absolute; overflow: hidden; left: 13%; top: 14%; width: 100%;}
.img_name{float: left; text-align: right; padding-right: 0.8rem;}
.img_style{width: 4rem; height: 5rem;}
.ct_name{float: left; padding-top: 0.5rem; text-align: left;}
.wx_name{font-size: 1.1rem; font-weight: bold;	 margin: 0 auto;}
.wx_number{margin: 0 auto; font-size: 0.9rem;color: #23acf6;}



</style>