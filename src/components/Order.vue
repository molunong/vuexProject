<template>
		<div id="order">
			 <div class="list-block clear-margin">
					    <ul v-for="(show,sindex)  in historyOrder" v-if="index == sindex">
					    	<li class="item-content">
					        <div class="item-inner">
					          <div class="item-title">订单状态:</div>
					          <div class="item-after color-lan" >{{show.OrderState | statefilter}}</div>
					        </div>
					      </li>
					      <li class="item-content">
					        <div class="item-inner">
					          <div class="item-title">订单号:</div>
					          <div class="item-after"> {{show.OrderNumber}}</div>
					        </div>
					      </li>
					      <li class="item-content">
					        <div class="item-inner">
					          <div class="item-title">手机号码:</div>
					          <div class="item-after">{{show.UserMobile}}</div>
					        </div>
					      </li>
					      <li class="item-content">
					        <div class="item-inner">
					          <div class="item-title">车牌号:</div>
					          <div class="item-after">{{show.UserCarNumber}}</div>
					        </div>
					      </li>
					       <li class="item-content">
					        <div class="item-inner">
					          <div class="item-title">联系地址:</div>
					          <div class="item-after"> {{show.Address}}</div>
					        </div>
					      </li>
					      <li class="item-content">
					        <div class="item-inner">
					          <div class="item-title">预约时间:</div>
					          <div class="item-after"> {{show.SubscribeDt | date(3)}}</div>
					        </div>
					      </li>
					    </ul>
					  </div>
					<!--洗车服务-->
				   <div class="row clear-margin margin-auto">
						<div class="col-30 text-center">
							<img src="static/img/user.png" style="width:70px;height: 70px;"/>
						</div>
						<div class="col-70 clear-margin" style="padding-left: 10px;">
							<h4 class="" >洗车服务员</h4>
						</div>
				    </div>
				    <div class="list-block clear-margin">
					    <ul>
					      <li class="item-content">
					        <div class="item-inner">
					          <div class="item-title">综合评分: </div>
					          <div class="item-after"></div>
					        </div>
					      </li>
					      <li class="item-content">
					        <div class="item-inner">
					          <div class="item-title">联系电话: </div>
					          <div class="item-after"></div>
					        </div>
					      </li>
					    </ul>
					  </div>
		</div>
</template>

<script>
import { mapGetters } from 'vuex'
// import $ from 'zepto'
// import { deepCopy } from '../util/util'
export default {
  data () {
    return {
     getindex: false,
     showOrderInfo: []
   }
  },
  computed: {
    ...mapGetters({
      historyOrder: 'WO_historyorder'
    })
  },
  mounted () {
    //  深入拷贝
    // this.showOrderInfo = deepCopy(this.historyOrder)
    //   this.showOrderInfo = eval(this.historyOrder[0])
    // var aa = eval(this.showOrderInfo)
    // this.showOrderInfo = aa
  },
  props: ["index"]
}
</script>
