<template>
 <div class="container">
  	 	
    <header class="bar bar-nav">
      <h1 class="title">会员中心</h1>
    </header>
     
       <div class="content">
       	  <div class="row rowbg">
		    	<div class="logo_name">
			    	<div class="img_name">
			    		<img :src="userInfo.WechatImage" v-show="userInfo.WechatImage != ''" alt="用户头像" class="img_style" style="width: 4.5rem;height: 4.5rem;"/>
			    	    <img src="/static/img/defaultuser.png" v-show="userInfo.WechatImage == ''" alt="用户头像" class="img_style" style="width: 4.5rem;height: 4.5rem;"/>
			    	</div>
			    	<div class="ct_name"><p class="wx_name">{{userInfo.CnName}}</p>
			    		<p class="wx_number" v-show="userInfo.MobilePhone != ''">{{userInfo.MobilePhone}}</p>
			    		<p class="wx_number" v-show="userInfo.MobilePhone == ''"><a href="#" @click="submitAppointment('userinfo')" class="wx_number">完善个人信息</a></p>
			    	</div>					    	
		        </div>
		    </div>
          <div class="content-padded grid-demo"> 
			
			<div class="list-block" style="margin: 20px 0px !important;">
			     	 <ul>
					      <li>
					        <div class="item-content">
					          <div class="item-media"><i class="icon icon-form-name"></i></div>
					          <div class="item-inner">
					            <div class="item-title label">账户余额</div>
					            <div class="item-input">
					            	<div class="row">
					            		<div class="col-60"><p class="margin-6" style="color: #FF5722;"><span style="float: left;">￥{{userInfo.WalletBalance}}</span><span style="float: right;margin-right: 0.3rem;">元</span></p></div>
					            		<div class="col-40"><a href="#" @click="submitAppointment('recharge')" class="button button-big button-fill  button-success btn-height" style="background: #FF5722;">充值</a></div>
					            	</div>
					            </div>
					          </div>
					        </div>
					      </li>
					      <li>
					        <div class="item-content">
					          <div class="item-media"><i class="icon icon-form-email"></i></div>
					          <div class="item-inner">
					            <div class="item-title label">洗车次数</div>
					            <div class="item-input">
					            	<div class="row">
					            		<div class="col-60"><p class="margin-6" style="color: #23acf6;"><span style="float: left;">{{userInfo.FinishedWashorders}}</span><span style="float: right;margin-right: 0.3rem;">次</span></p></div>
					            		<div class="col-40"><a href="#" @click="submitAppointment('appointment')" class="button button-big button-fill btn-height" style="background: #0894ec ;">预约</a></div>
					            	</div>
					            </div>
					          </div>
					        </div>
					    </li>
			      </ul>
			</div>


            <!-- 菜单1 -->
            <div class="row clear-margin width100 margin-6">
              <div class="col-33 clear-margin width33 text-center">
                <div  class="logo-click" @click="submitAppointment('washrecord')">
                  <div class="img-box">  <img class="img-rounded" src="/static/img/1.png"  /></div>
                  <p class="color-lan text-center margin-6">洗车记录</p>
                </div>
              </div>      

              <div class="col-33 clear-margin width33 text-center">
                <div  class="logo-click" @click="submitAppointment('userinfo')">
                  <div class="img-box">  <img class="img-rounded" src="/static/img/2.png"  /></div>
                  <p class="color-lan text-center margin-6">用户信息</p>
                </div>
              </div>
              <div class="col-33 clear-margin width33 text-center">
                <div  class="logo-click" @click="submitAppointment('carlist')">
                  <div class="img-box">  <img class="img-rounded" src="/static/img/3.png"  style="width: 50px; height: 28px; margin-top: 11px;" /></div>
                  <p class="color-lan text-center margin-6">我的车辆</p>
                </div>
              </div>
            </div>
            <!-- 菜单 -->

            <!-- 菜单2 -->
            <div class="row clear-margin width100 margin-6">
              <div class="col-33 clear-margin width33 text-center">
                <div  class="logo-click"  @click="submitAppointment('accountdetailed')">
                 <div class="img-box">  <img class="img-rounded" src="/static/img/6.png"  /></div>
                  <p class="color-lan text-center margin-6">账户明细</p>
                </div>
              </div>
              <div class="col-33 clear-margin width33 text-center">
                <div  class="logo-click" @click="submitAppointment('agreement')">
                  <div class="img-box">  <img class="img-rounded" src="/static/img/5.png"   style="width: 85%;"  /></div>
                  <p class="color-lan text-center margin-6">服务协议</p>
                </div>
              </div>
              <div class="col-33 clear-margin width33 text-center">
                <div  class="logo-click" @click="submitAppointment('services')">
                  <div class="img-box">  <img class="img-rounded" src="/static/img/4.png" style="height:86%; margin-top: 6px;"  /></div>
                  <p class="color-lan text-center margin-6 ">客服热线</p>
                </div>
              </div>
            </div>
            <!-- 菜单 -->
          </div>
        </div>
      </div>
</template>

<script>
import { mapGetters } from 'vuex'
import $ from 'zepto'
export default {
  computed: {
    ...mapGetters({
      userInfo: 'USR_UserInfo'
    })
  },
  methods: {
    submitAppointment (name) {
      if (name === 'recharge' && this.userInfo.MobilePhone === '') {
        $.alert('请先完善个人信息！')
      } else {
        this.$router.push({ name: name })
      }
    }
  }
}
</script>

<style>
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
