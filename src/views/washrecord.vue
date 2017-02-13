<template>   
    <div class="container">
    	<header class="bar bar-nav">
		  		<a class="button button-link button-nav pull-left back" @click="back()">
    			<span class="icon icon-left"></span>
  				</a>
		    	<h1 class="title">洗车记录</h1>
			</header>
			<div class="content pull-to-refresh-content infinite-scroll infinite-scroll-bottom" data-ptr-distance="55" data-distance="100">
				<!-- 默认的下拉刷新层 -->
			    <div class="pull-to-refresh-layer">
			        <div class="preloader"></div>
			        <div class="pull-to-refresh-arrow"></div>
			    </div>
				<div class="list-block" style="margin: 0;">
					<!--<div class="list-group"  style="padding-bottom: 3em;">-->
				   <div class="list-group">
					<ul class="show-more-list"> 
				        <!--已经绑定好数据的li-->
				        <li v-for="(contnet,index) in washrecord">
				          <a  href="javascript:void(0);" @click="showOrderMsg(index)" class="open-popup is-link-a" data-popup=".popup-ordermsg"></a>
				          <div class="item-content"  style="padding-left: 9px; padding-right: 10px;">
				            <div class="item-inner" style="padding-right: 0; padding-bottom: 0;">
				            	<div class="row" style="width: 100%; margin: 0;">
				              		<div class="col-16">
				              			<img src="../../static/img/washcar.png" width="50px" height="45px"/>
				              		</div>
				              		<div class="col-84">
				              			<div class="row" style="height: 65px;">
				              				<div class="col-70">
				              					<div class="content-block-title" style="margin: 9px 0px; color: dimgrey; font-size: 0.75rem; text-overflow: initial;">单号：{{contnet.OrderNumber}}</div>
				              					<div class="content-block-title"  style="margin: 0;">时间：{{contnet.SubscribeDt | date(3)}}</div>
				              				</div>
				              				<div class="col-30 col30">{{contnet.OrderState | statefilter}}</div>
				              			</div>
				              		</div>
				              	</div>
				            </div>
				          </div>
				        </li>
				         <!--无数据时显示-->
				        <li v-show="washrecord.length == 0">
				        	<div class="item-content">
				            <div class="item-inner" >
				         		<h1 class='title'>暂无数据</h1>
			         		</div>
			         		</div>
				        </li>
	 				</ul>
					</div>
				</div>
				<!-- 加载提示符 -->
          <div class="infinite-scroll-preloader">
              <div class="preloader"></div>
          </div>
			</div>	
				<!-- About    Popup -->
				<div class="popup popup-ordermsg">
				  <div class="content-block"  >
				  	<ordercontent :msg="showMoreIndex"></ordercontent>
				  </div>				  
				</div>
    </div>  
</template>
<script>
//  全局禁用自带的路由
//  $.config = {router: false}
import { mapGetters } from 'vuex'
import $ from 'zepto'
import Ordercontent from '../components/Ordercontent'
var pageindex = 0
export default{
  data () {
    return {
      showMoreIndex: 0,
      params: {
        uid: 0,  //  设置默认的ID
        pageindex: 1, //  设置第几页
        pagesize: 6  //  设置多少条数据
      },
      washrecord: []
    }
  },
  watch: {
    userAccountdetailed: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
      if (pageindex !== 0 && val === null) {
        $.alert('已加载完数据！')
        pageindex--
        this.params.pageindex = pageindex
        this.$store.dispatch('WO_GetHistoryOrder', this.params)
      }
    }
  },
  computed: {
    // 获取用户信息
    ...mapGetters({
    userInfo: 'USR_UserInfo',
    userCarList: 'USR_CarList',
    washOrderInfo: 'WO_WashOrderInfo',
    historyOrder: 'WO_historyorder'
    })
  },
  mounted () {
    if (this.userInfo.Id !== 0 && this.historyOrder.length === 0) {
      //  设置ID进入params中
      //  go
      this.params.uid = this.userInfo.Id
      console.log('-----------1-----------' + JSON.stringify(this.params))
      this.$store.dispatch('WO_GetHistoryOrder', this.params)
      this.washrecord = this.historyOrder
      //  console.log('----------2------------' + JSON.stringify(this.historyOrder))
      //  console.log('----------3------------' + JSON.stringify(this.washrecord))
    } else {
      this.washrecord = this.historyOrder
    }
      $.initPullToRefresh('.pull-to-refresh-content')
      var _this = this
      $(document).on('refresh', '.pull-to-refresh-content', function (e) {
        setTimeout(function () {
         _this.params.pageindex = 0
        console.info(_this.params)
        _this.$store.dispatch('WO_GetHistoryOrder', _this.params)
//      $(e.target).find('.show-more-list').prepend(cardHTML)
   // 加载完毕需要重置
        $.pullToRefreshDone('.pull-to-refresh-content')
        }, 2000)
      })
      var loading = false
      $(document).on('infinite', '.infinite-scroll-bottom', function() {
      // 如果正在加载，则退出
        if (loading) return
          // 设置flag
        loading = true
          // 模拟1s的加载过程
        setTimeout(function () {
        loading = false
        pageindex++
         _this.params.pageindex = pageindex
        console.info(_this.params)
        _this.$store.dispatch('WO_GetHistoryOrder', _this.params)
//      $(e.target).find('.show-more-list').prepend(cardHTML)
   // 加载完毕需要重置
        $.refreshScroller()
        }, 1000)
      })
  },
//  //初始化
//  $.initPullToRefresh('.pull-to-refresh-content')
// // 添加'refresh'监听器
//  $(document).on('refresh', '.pull-to-refresh-content', function (e) {
// // 模拟2s的加载过程
//    setTimeout(function () {
//      var cardHTML = '<li @click="bcompleteorder()">' +
//  '<div class="item-content" style="padding-left: 10px; padding-right: 10px;">' +
//  '<div class="item-inner" style="padding-right: 0; padding-bottom: 0;">' +
//  '<div class="row" style="width: 100%;">' +
//  '<div class="col-20" style="padding-top: 9px;" >' +
//  '<img src="../../static/img/washcar.png" width="53px" height="48px"/>' + '</div>' +
//  '<div class="col-80" >' +
//  '<div class="row">' +
//  '<div class="col-70">' +
//  '<h4 style="margin: 9px 0px; color: dimgrey;">' + '订单号：123456' + '</h4>' +
//  '<div class="content-block-title"  style="margin: 0;">' + '时间：2016-5-8 13:39' +
//  '</div>' +
//  '</div>' + '<div class="col-30" >' + '已完成' +
//  '</div>' +
//  '</div>' +
//  '</div>' +
//  '</div>' +
//  '</div>' +
//  '</div>' +
//  '</li>'
// //        var cardHTML = '<li @click="bcompleteorder()" style="height:2rem; width:100%; background:#ccc;">' + '<li>'
//      $(e.target).find('.show-more-list').prepend(cardHTML)
// // 加载完毕需要重置
//      $.pullToRefreshDone('.pull-to-refresh-content')
//    }, 2000)
//  })
// },
  methods: {
    back () {
      this.$router.push({ name: 'usercenter' })
    },
//  godetail (info) {
//    console.log('-----------------detail--------------------', info)
//  },
    showOrderMsg (info) {
      this.showMoreIndex = info
    }
  },
  components: {
    Ordercontent
  }
}
</script>

<style>
.page{background: #FFF !important;}
.col-16{
	margin-left: 0;
	width: 15%;
	padding-top: 5px; 
}
.col-84{
	margin-left: 4%;
	width: 81%;
}
.col-70 {
	width: 72%;
	margin-left: 4%;
	
	
}
.col30 {
	width: 22%;
	margin-left: 2%;
	text-align: right; 
	line-height: 3.5rem;
	color: #0894ec;
	
}
.is-link-a{
	z-index: 800;
	display: block;
	width: 100%;
	height: 100%;
	position: absolute;
	background: transparent;
}
.popup-overlay{
	z-index: 0 !important;
}
.infinite-scroll-preloader {
        margin-top:-20px;
}
</style>

