<template>
    <div class="container">
    	<header class="bar bar-nav">
    	<a class="icon icon-left pull-left back" @click="submitUser()"></a>
    	<h1 class="title">用户信息</h1>
    	</header>    	            
    <!-- 内容 -->
        <div class="content content_st">       	
		    <div class="row rowbg">
		    	<div class="logo_name">
				   <div class="img_name">
			    		<img :src="userInfo.WechatImage" v-show="userInfo.WechatImage != ''" alt="用户头像" class="img_style" style="width: 4.5rem;height: 4.5rem;"/>
			    	    <img src="/static/img/defaultuser.png" v-show="userInfo.WechatImage == ''" alt="用户头像" class="img_style" style="width: 4.5rem;height: 4.5rem;"/>
			    	</div>
				    	<div class="ct_name"><p class="wx_name">{{userInfo.CnName}}</p>
				    		<p class="wx_text" v-show="userInfo.MobilePhone != ''">{{userInfo.MobilePhone}}</p>
				    		<p class="wx_text" v-show="userInfo.MobilePhone == ''">请完善以下信息</p>
				    	</div>				    	
		        </div>
		    </div>		    
		    <div class="row" style="padding-bottom: 1.5rem;">
		        <div class="list-block">
				    <ul>
				      <!-- Text inputs -->
				      <li>
				        <div class="item-content">						          
				          <div class="item-inner">
				            <div class="item-title label">姓名：</div>
				            <div class="item-input">
				              <input type="text" v-model="info.CnName"/>
				            </div>
				            <div class="item-input">
				            	<a href="#" @click="submitUserinfo()">
				            	    <p style="color: red; font-size: 0.7rem; margin: 0 auto;" v-show="userInfo.WalletPswd != ''">修改提现密码</p>
				            	    <p style="color: red; font-size: 0.7rem; margin: 0 auto;" v-show="userInfo.WalletPswd == ''">新增提现密码</p>
				            	</a>
				            </div>
				          </div>
				        </div>
				      </li>
				      <li>
				        <div class="item-content">
				          <div class="item-inner">
				            <div class="item-title label">称呼：</div>
				            <div class="item-input">
				              <input type="text" id='setSex' ref="textcall">
				            </div>            
				          </div>
				        </div>
				      </li>	
				      <li>
				        <div class="item-content">
				          <div class="item-inner">
				            <div class="item-title label">手机：</div>
				            <div class="item-input">
				              <input type="tel" v-model="info.MobilePhone" id="mobile" maxlength="11">
				            </div>
				            <div class="item-input">				            
				              <p style="width: 3rem; margin: 0 auto;"><a href="#" class="button">验证码</a></p>
				            </div>
				          </div>
				        </div>
				      </li>
				      <li>
				        <div class="item-content">
				          <div class="item-inner">
				            <div class="item-title label">输入验证：</div>
				            <div class="item-input">
				              <input type="number" v-model="vf_code">
				            </div>            
				          </div>
				        </div>
				      </li>		
				    </ul>		
		        </div>
		        <div class="row" style="padding-bottom: 1.5rem; margin: 0.75rem 0;">
			    <div class="col-100" ><a href="#"@click="submitButton()" style="background-color:#0894ec; margin-left:5rem;margin-right:5rem;" class="button button-big button-fill">修改</a></div>
			</div>
		    </div>    
		    			
        </div>            			
    </div>
</template>



<script>
import $ from 'zepto'
import { mapGetters } from 'vuex'
import { deepCopy } from '../util/util'
export default {
  mounted () {
    $.init()
    $('#mobile').blur(function () {
      var isMobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/
      var phone = $(this).val()
      if (phone !== '' && !isMobile.test(phone)) {
        $.alert('请重新输入', '电话号码格式不正确')
        return false
      }
    })
    $('#setSex').picker({
      toolbarTemplate: '<header class="bar bar-nav"> <button class="button button-link pull-right close-picker">确定</button> <h1 class="title">请选择称呼</h1> </header>',
      cols: [{
        textAlign: 'center',
        values: this.sex
      }]
    })
    // 获取到当前用户的数据
    this.info = deepCopy(this.userInfo)
    if (this.userInfo.Sex === 1) {
      this.$refs.textcall.value = '先生'
    } else if (this.userInfo.Sex === 2) {
      this.$refs.textcall.value = '女士'
    } else {
      this.$refs.textcall.value = '先生'
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'USR_UserInfo'
    })
  },
  data () {
    return {
      sex: ['先生', '女士'],
      vf_code: '',
      info: {}
    }
  },
  watch: {
    userInfo: 'submitModify', deep: true
  },
  methods: {
    submitModify () {
      this.$router.push({ name: 'userinfo' })
    },
    submitUserinfo () {
      console.log('submit userinfo')
      if (this.userInfo.MobilePhone === '') {
      $.alert('请填写手机号')
      } else {
        this.$router.push({ name: 'modifypwd' })
      }
    },
    submitUser () {
      console.log('submit usercenter')
      this.$router.push({ name: 'usercenter' })
    },
    submitButton () {
      if (this.$refs.textcall.value === '先生') {
        this.info.Sex = 1
      } else {
        this.info.Sex = 2
      }
      if (this.info.CnName === '' || this.info.MobilePhone === '' || this.info.Sex === '' || this.vf_code === '') {
        $.alert('请将信息输入完整')
        return false
      } else {
        this.$store.dispatch('USR_GetMyUserInfo', this.info)
        this.vf_code = ''
      }
    }
  }
}
</script>



 <style type="text/css">
	.content_st{background: #ffffff; text-align: center;}
	.rowbg{background: url(../../static/img/bg.jpg);position: relative; background-repeat: no-repeat; background-size: 100% 100%;overflow: hidden; margin-left: -4%; height: 30%;}
	.logo_name{position: absolute; overflow: hidden; left: 13%; top: 14%; width: 100%;}
	.img_name{float: left; text-align: right; padding-right: 0.8rem;}
	.img_style{width: 4rem; height: 5rem;}
	.ct_name{float: left; padding-top: 0.5rem; text-align: left;}
	.wx_name{font-size: 1.1rem; font-weight: bold;	 margin: 0 auto;}
	.wx_number{margin: 0 auto; font-size: 1rem;}
	.wx_text{margin: 0 auto; font-size: 0.9rem;color: #23acf6;}
</style>      