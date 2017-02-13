<template>
	<div class="container">
  	 	
		    <header class="bar bar-nav">
		      <a class="icon icon-left pull-left back"  href="/docs-demos/router"></a>
		      <h1 class="title">已接单</h1>
		    </header>
   
   		<div class="content">
            <div class="content-padded grid-demo">
            	
            	<div class="row clear-margin margin-auto">
						<div class="col-30 text-center">
							<img src="static/img/logo.png" style="width:70px;height: 70px;"/>
						</div>
						<div class="col-70 clear-margin" style="padding-left: 10px;">
								<h4 class="margin-6" style="margin-top: 12px !important;">洗车</h4>
								<p class="down-p margin-6" >服务员已接单</p>
						</div>
				</div>
				    
		    	<order :orderInfo="orderInfo" :writerInfo="writerInfo" :state="state"></order>
			</div>
		</div>
    </div>
    
</template>
<script>
import Order from '../components/Order'
export default {
  mounted () {
    this.$http.get('order.json')
    .then(({data: {code, message, orderMessage, writerMessage}}) => {
      this.orderInfo = orderMessage
      this.writerInfo = writerMessage
    })
  },
  data () {
    return {
      test: [],
      orderInfo: [],
      writerInfo: []
    }
  },
  computed: {
    state: function () {
      // 更改订单状态为中文
      if (this.orderInfo.orderstate === 1) {
        return '已接单'
      } else if (this.orderInfo.orderstate === 2) {
        return '已开始服务'
      } else if (this.orderInfo.orderstate === 3) {
        return '已完成'
      } else {
        return '未知状态'
      }
    }
  },
  components: {
    Order
  }
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
