<template>
   
  <div class="container"  >
  			<header class="bar bar-nav">
				     <a class="icon pull-right close-popup" style="font-size: 0.8rem;">关闭</a>
				      <h1 class="title">历史已完成订单</h1>
			</header>
			<div class="content" id="totop">
	                <div class="content-padded grid-demo">
	                <!--头部logo-->	
				   <div class="row clear-margin margin-auto">
						<div class="col-30 text-center">
							<img src="../../static/img/logo.png" style="width:70px;height: 70px;"/>
						</div>
						<div class="col-70 clear-margin" style="padding-left: 10px;">
								<h4 >vuex练习</h4>
						</div>
				    </div>
				    <!--头部logo-->
	               <!--信息-->
					   <order :index="msg"></order>
					<!-- 洗车前 -->
				    <div class="content-block-title" style="margin: 0.6rem !important;">洗前状态</div>
				    <div class="row">
				    	<div class="col-50">
				    		<div class="col-50 "><img class="show-pic"  src="../../static/img/cat.png" /></div>
				    	</div>
				    	<div class="col-50">
				    		<div class="col-50"><img class="show-pic" src="../../static/img/cat.png" /></div>
				    	</div>
				    </div>
				    <!-- 洗车后 -->
	                <div class="content-block-title" style="margin: 0.6rem !important;">洗后状态</div>
				    <div class="row">
				    	<div class="col-50">
				    		<div class="col-50 "><img class="show-pic"  src="../../static/img/cat.png" /></div>
				    	</div>
				    	<div class="col-50">
				    		<div class="col-50"><img class="show-pic" src="../../static/img/cat.png" /></div>
				    	</div>
				    </div>
				    <!--洗车服务-->
				    <div class="row" style="margin-top: 6px;">
				    	<div class="col-20">
				     		<div class="content-block-title clear-padding" style="margin: 0.3rem !important;">评价:</div>
				     	</div>
				     	<div class="col-80" id="span-group">
				     		<span class="icon icon-star color-yellow"></span>
				     		<span class="icon icon-star"></span>
				     		<span class="icon icon-star"></span>
				     		<span class="icon icon-star"></span>
				     		<span class="icon icon-star"></span>
				     	</div>
				    </div>
				  		<div class="list-block clear-margin-padding">
				  			<ul>
				  				 <li class="align-top clear-padding">
						        <div class="item-content clear-padding">
						          <div class="item-inner clear-padding">
						            <div class="item-input">
						              <textarea style="border: 1px solid #f3f3f3;"></textarea>
						            </div>
						          </div>
						        </div>
						      </li>
						    </ul>
				  		</div>
				  	
				</div>
				</div>
			
				    
	</div>
   
</template>
<script>
import Order from '../components/Order'
import $ from 'zepto'
export default {
  mounted () {
    $('.star span').click(function () {
      var getThisINdex = $(this).index()
      $('#is-value').val(getThisINdex)
      // 当星星状态为黄色时添加之后的星星为灰色
      if ($(this).hasClass('color-yellow')) {
        $(this).nextAll().removeClass('color-yellow')
        return
      } else {
        // 反之则切换为黄色
        $(this).addClass('color-yellow')
        $(this).prevAll().addClass('color-yellow')
        return
      }
    })
    //  这个方法极为重要,打开面板清楚上次残留位置
    $(document).on('open', '.popup', function() {
      document.getElementById('totop').scrollTop = 0
    })
  },
  data () {
    return {
      commen: {
        content: '',
        starnumber: 1
      },
      writerInfo: []
    }
  },
  components: {
    Order
  },
  props: ['msg']
}
</script>
<style>
	.page{background: #FFF !important;}
    .margin-auto{margin:0 auto !important;}
	.clear-margin-padding{margin: 0 !important;padding: 0 !important;}
	.clear-padding{padding: 0 !important;}
	.clear-margin{margin: 0 !important;}
	.user-logo{width: 5rem;height: 5rem;margin: 0 auto;}
	.margin-6{margin: 6px 0px !important;}
	.margin-10{margin: 10px 0px !important;}
	.width100{width:100%;}
	.width50{width: 50% !important;}
	.width33{width: 33.33333% !important;}
	.width22{width: 22%;display: inline-block;}
	.width-height-100{width:100%;height: 100%;}
	.width78{width: 73%;display: inline-block;}
	.color-write{color: #fff;}
	.font-bold{font-weight: bold;}
	.text-right{text-align: right;}
	.user-name{font-size: 0.7rem;font-weight: bold;text-align: center;margin: 6px 0px;}
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
</style>
