<template>
  <div class="container">
   <!-- 标题栏 -->
    <header class="bar bar-nav">
        <a class="icon icon-left pull-left back" @click="submitModify()"></a> 
         <h1 class='title'>修改密码</h1>
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
					    		<p class="wx_text" v-show="userInfo.MobilePhone == ''"><a href="#" @click="submitUserinfo()" class="wx_text">完善个人信息</a></p>
					  </div>					    	
			  </div>
			</div>      
	    <div class="row" style="padding-bottom: 1.5rem;">
	      <div class="list-block">
			    <ul>
			      <li>
			        <div class="item-content" v-show="userInfo.WalletPswd != ''">			          
			          <div class="item-inner">
			            <div class="item-title label">旧密码：</div>
			            <div class="item-input">
			              <input type="password" id="oldpwd" v-model="oldpwd" v-on:blur="oldblur">
			            </div>						           
			          </div>
			        </div>
			      </li>
			      <li>
			        <div class="item-content">
			          <div class="item-inner">
			            <div class="item-title label">新密码：</div>
			            <div class="item-input">
			              <input type="password" id="newpwd" v-model="WalletPswd">
			            </div>
			          </div>
			        </div>
			      </li>
			      <li>
			        <div class="item-content">
			          <div class="item-inner">
			            <div class="item-title label">确认密码：</div>
			            <div class="item-input">
			              <input type="password" id="repwd" v-model="repwd">
			            </div>
			          </div>
			        </div>
			      </li>	
			    </ul>
	      </div>
	      <div class="row">
			    	<div class="col-100" ><a href="#"@click="modify()" style="background-color:#0894ec; margin-left:5rem;margin-right:5rem;" class="button button-big button-fill">确认修改</a></div>
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
    this.info = deepCopy(this.userInfo)
  },
  computed: {
    ...mapGetters({
      userInfo: 'USR_UserInfo'
    })
  },
  data () {
    return {
      isIndex: false,
      oldpwd: '',
      repwd: '',
      WalletPswd: '',
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
    modify () {
      this.info.WalletPswd = this.WalletPswd
      if (this.userInfo.WalletPswd !== '') {
        if (this.oldpwd === '') {
          $.alert('旧密码不能为空！')
          return false
        } else if (this.oldpwd !== '' && this.info.WalletPswd === '' && this.oldpwd === this.userInfo.WalletPswd) {
          $.alert('新密码不能为空！')
          return false
        } else if (this.info.WalletPswd !== this.repwd) {
          $.alert('新密码与确认密码不一致！')
          return false
        } else if (this.oldpwd === this.userInfo.WalletPswd && this.info.WalletPswd === this.repwd) {
          this.$store.dispatch('USR_GetMyUserInfo', this.info)
        }
      } else {
          if (this.info.WalletPswd === '') {
            $.alert('新密码不能为空！')
            return false
            } else if (this.info.WalletPswd !== this.repwd) {
            $.alert('新密码与确认密码不一致！')
            return false
            } else if (this.info.WalletPswd === this.repwd) {
            this.$store.dispatch('USR_GetMyUserInfo', this.info)
          }
      }
    },
    oldblur: function () {
      if (this.oldpwd !== '' && this.oldpwd !== this.userInfo.WalletPswd) {
        $.alert('旧密码不正确！')
        return false
      }
    },
    submitUserinfo () {
      console.log('submit userinfo')
      this.$router.push({ name: 'userinfo' })
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
	.wx_name{font-size: 1.1rem; font-weight: bold;margin: 0 auto;}
	.wx_number{margin: 0 auto; font-size: 1rem;}
  .wx_text{margin: 0 auto; font-size: 0.9rem;color: #23acf6;}              	
</style>
       