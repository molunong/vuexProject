<template>
    <div class="container">
    	
    	<header class="bar bar-nav">
		  		<a class="button button-link button-nav pull-left back" href="#" @click="submitAppointment('usercenter')">
    			<span class="icon icon-left"></span>
  				</a>
		    	<h1 class="title">我的账户</h1>
		</header>
		
<div class="content"style="background: #FFFFFF;">
  
  <div class="list-block" style="margin: 10px 0px;">    
        <div class="item-inner" style="background-color:#e1e1e1;">
          <div class="title" style="line-height: calc(25px);font-size: 1rem;">余额：<font style="color: #eb6a49;">￥:{{userInfo.WalletBalance}}</font></div>      
        </div>   
        <div>  
 </div><!--list-block end -->
  
  <div style="border-bottom: 1px solid #ccc;padding-top: 0.5rem;font-family: '宋体'; font-size: 1rem;">最近账单</div>

   <div class="contentt pull-to-refresh-content " >          <!--刷新的div-->	
		<div class="pull-to-refresh-layer">
      	<div class="preloader"></div>
     	<div class="pull-to-refresh"></div>
 	</div>

  <div class="list-block" style="margin-top: -2.2rem;">
    <ul> 
      <li v-for="item in userAccountdetailed" class="item-content ">
        <div class="item-media"><i class="icon icon-f7"></i></div>
        <div class="item-inner">
          <div class="item-title " style="padding-left:0rem ;">{{item.CreateTime | date(4)}}</div>
           <div class="item-title">{{item.OperatorDesc}}</div>
          <div class="item-title" style="color:#f29279 ;">{{item.Amount }}</div>
        </div>
      </li>
 
    </ul>
 
   </div><!--list-block end -->
   </div>  <!--刷新结束标符  end-->
   
 </div><!--content end -->
  
	<div class="content1-block" >
			
   <div class="row" style="padding:0.8rem 3rem 3.5rem 1.5rem;width:80%;line-height:1.5rem; position: fixed; left: 2.5rem;bottom: 0;">
      <div class="col-50"><a href="#" class="button button-big button-fill button-danger" @click="submitAppointment('recharge')" style="background: #0894ec;">充值</a></div>
      <div class="col-50"><a href="#" class="button button-big button-fill button-success" @click="submitAppointment('withdrawdeposit')"  style="background: #D72C16;">提现</a></div>
    </div>
    
	</div>	<!--content-block   end -->	
	
  </div><!--container end -->	
</template>

<script>
import { mapGetters } from 'vuex'
import mapcom from '../components/MapCom'
import $ from 'zepto'

var index = 0
export default {
  account () {
    $.init()
  },
  data () {
    return {
      accountdetailed: [],
      pa: {
        uid: '',
        index: 0,
        size: 8
      }
    }
  },
  watch: {
    userAccountdetailed: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
      if (index !== 0 && val === null) {
        $.alert('已加载完数据！')
        index--
        this.pa.index = index
        this.$store.dispatch('USR_GetUserWalletLogs', this.pa)
      }
    }
  },
   computed: {
    ...mapGetters({
      userInfo: 'USR_UserInfo',
      userAccountdetailed: 'USR_UserWalletLogs'
    })
  },
  components: {
    mapcom
  },
  methods: {
    submitAppointment (name) {
      // console.log('submit appointment')
      this.$router.push({ name: name })
    }
  },
  mounted () {
    console.log('userAccountdetailed=', this.userAccountdetailed)
    var uid = this.userInfo.Id
    console.log('uid=', uid)
    this.pa.uid = uid
    if (this.userAccountdetailed || this.userAccountdetailed.lenght === 0) {
       this.$store.dispatch('USR_GetUserWalletLogs', this.pa)
    }
    // this.$http.post('/v1/wechatapi/getuserwalletlogs?oid=81&pageindex=1&pagesize=5').then(({data}) => {
    //   console.log(data)
    //   this.list = data
    // })
    $.initPullToRefresh('.pull-to-refresh-content')
    var _this = this
//  添加'refresh'监听器
    $(document).on('refresh', '.pull-to-refresh-content', function (e) {
      setTimeout(function () {
        index++
        _this.pa.index = index
        console.info(_this.pa)
        _this.$store.dispatch('USR_GetUserWalletLogs', _this.pa)
      //  var cardHTML = '<li class="item-content " style="padding: 0rem;">' +
      //   '<div class="item-media"><i class="icon icon-f7"></i></div>' +
      //   '<div class="item-inner">' +
      //   '<div class="item-title "> ' + ' {{item.CreateTime}} ' + ' </div> ' +
      //   '<div class="item-title">{{item.OperatorDesc}}</div>' +
      //   '<div class="item-title" style="color:#64ccf2 ;">{{item.Amount}}</div>' +
      //   '</div>' +
      // '</li>'
        // $(e.target).find('.more-list').prepend(cardHTML)
//  加载完毕需要重置
        $.pullToRefreshDone('.pull-to-refresh-content')
      }, 2000)
    })
  }
}
</script>
<style>	
</style>