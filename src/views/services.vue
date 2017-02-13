<template>
 <div class="container">
     
  	 		 <header class="bar bar-nav">
		  		<a class="button button-link button-nav pull-left back" href="#" @click="submitAppointment('usercenter')">
    			<span class="icon icon-left"></span>
  				</a>
		    	<h1 class="title">客服中心</h1>
			</header>
  			
  <div class="content native-scroll" style="background: #FFFFFF;border: none;margin-bottom: 2rem;">
       <div class="content-block-title" style="font-size: 1rem;color: #000000;margin-top: 20px;">常见问题:</div>  
       
    <div class="list-block "> 	
      	<ul >
        <li class="item-content">
          <div class="item-inner"  @click="showText('state1')" style="padding-top:0rem; padding-bottom: 0rem;">
            <div class="item-title" style="float: left;width: 90%;padding-left: 0.8rem;white-space: normal;"><a class="line" >1、下订单成功后洗车员什么时候能来洗车？</a>
            	<div class="line2" id="state1" style="display: none;">
            		答：在地图页面拖拽至停车地点时，系统会根据当前区域的订单数量显示洗车员预计到达的时间，在下单页面根据您选择的服务计算预计完成的时间，请注意这两个时间.
            	</div>
            </div>
            <span class="icon icon-down" style="float: right;color: #CDC9C9;"></span>
          </div>
        </li>
        
        <li class="item-content ">
          <div class="item-inner" @click="showText('state2')">
            <div class="item-title" style="float: left;width: 90%;padding-left: 0.8rem;white-space: normal;"><a class="line">2、车辆等待服务需要注意哪些事项？</a >
            	<div class="line2" id="state2" style="display: none;">
            		答：请将车辆停放在指定的下单位置，四周保持能有足够的空间进行工作，如果需要进行内饰清洗、发动机清洗等需要车主到场的服务，请车主提前安排好行程以免出现耽搁。</div>
            </div>
             <span class="icon icon-down" style="float: right;color: #CDC9C9;"></span>
          </div>
        </li>
        
        <li class="item-content" >
          <div class="item-inner" @click="showText('state3')">
            <div class="item-title"  style="float: left;width: 90%;padding-left: 0.8rem;white-space: normal;"><a class="line">3、可以到地下车库清洗吗？</a>
            	<div class="line2" id="state3" style="display: none;">答：视不同小区和写字楼地下车库的限制条件而定，建议车主下单前预先咨询地库停车的物业管理人员。</div>
            </div>
            <span class="icon icon-down" style="float: right;color: #CDC9C9;"></span>
          </div>
        </li>
        
        <li class="item-content " >
          <div class="item-inner " @click="showText('state4')">
            <div class="item-title" style="float: left;width: 90%;padding-left: 0.8rem;white-space: normal;" ><a class="line">4、为什么我的手机长时间不能准确定位？</a>
            	<div class="line2" id="state4" style="display: none;">
            		答：由于不同型号手机性能和网络质量的缘故，定位时间可能有所不同。请您耐心多试几次，直到定位稳定为止。</div>
            </div>
            <span class="icon icon-down" style="float: right;color: #CDC9C9;"></span>
          </div>
        </li>
        
        <li class="item-content ">
          <div class="item-inner" @click="showText('state5')">
            <div class="item-title" style="float: left;width: 90%;padding-left: 0.8rem;white-space: normal;"><a class="line">5、嘟嘟除了洗车还有什么服务？</a>
            	<div class="line2" id="state5" style="display: none;">
            		答：包含打蜡、加玻璃水，玻璃镀膜、去虫胶柏油、发动机清洗、精品内饰深清（预约）、至尊全车美容（预约），具体支持城市请参见APP。</div>
            </div>
            <span class="icon icon-down" style="float: right;color: #CDC9C9;"></span>
          </div>
        </li>
        
        <li class="item-content ">
          <div class="item-inner" @click="showText('state6')">
            <div class="item-title" style="float: left;width: 90%;padding-left: 0.8rem;white-space: normal;"><a class="line">6、出现问题应该如何联系客服？</a>
            	<div class="line2" id="state6" style="display: none;">
            		 答：因为订单较多，电话客服坐席繁忙，您可以选择在线客服，同样可以解决您的问题。
            	</div>
            </div>
            <span class="icon icon-down" style="float: right;color: #CDC9C9;"></span>
          </div>
        </li>
        
        <li class="item-content ">
          <div class="item-inner" @click="showText('state7')">
            <div class="item-title" style="float: left;width: 90%;padding-left: 0.8rem;white-space: normal;"><a class="line" >7、如何检查洗车的效果？</a>
            	<div class="line2" id="state7" style="display: none;">
            		答：首先检查漆面的脏东西是否清洗干净，是否有残留污垢；其次进入车内，对着阳光观察玻璃，是否存在大块的水痕水渍的情况。
            	</div>
            </div>
            <span class="icon icon-down" style="float: right;color: #CDC9C9;"></span>
          </div>
        </li>
        
         <li class="item-content " >
          <div class="item-inner" @click="showText('state8')" style="padding-top:0rem; padding-bottom: 0rem;">
            <div class="item-title" style="float: left;width: 90%;padding-left: 0.8rem;white-space: normal;"><a class="line" >8、嘟嘟可以清洁车内吗？</a>
            	<div class="line2" id="state8" style="display: none;">
            		答：请在下单时勾选“内饰清洗”服务，洗车技师到达后就会清洗车辆内饰，但请注意，此服务需要车主到达服务位置打开车门，请务必安排好时间。
            	</div>
            </div>
            <span class="icon icon-down" style="float: right; color: #CDC9C9;"></span>
          </div>
        </li>
        
      </ul><!--ul  endding-->
      
    </div><!--list-block  endding-->
    
    
     <!--客服热线-->
    <div class="card-container" >
    	<div class="col-xs-12">   
                <h4 style="color:#0d0d0d;font-size:1.1rem; position:relative; border-top:#666 solid 1px;">
                	<p style="margin-top: 15px;padding-left: 1rem;">客服热线：<span style="color: #d7270f; font-size: 1.1rem;">400-090-1166</span> 	 </p>
                </h4>
               
                <h6 style=" color:#01a1ff;font-size:0.7rem; position:relative;border-bottom:#666 solid 1px;font-family:'宋体'">
                	<p style="padding-left: 3rem;text-align: left;">您也可以在公众号直接回复问题</p>
                		<p style="padding-left: 3rem;text-align:left;">我们将会尽快为您解答！</p>
                </h6>
        </div>
    
    </div> <!--card-container   endding-->
  
  </div> <!--content native-scroll   endding-->

  </div><!--container end-->
  </template>

<script>
import $ from 'zepto'
var oldclickState = ' '
export default {
  account () {
    $.init()
  },
  methods: {
    submitAppointment (name) {
      // console.log('submit appointment')
      this.$router.push({ name: name })
    },
    showText (state) {
//    alert(document.getElementById(state).style.display)
      if (document.getElementById(state).style.display !== 'none') {
        document.getElementById(state).style.display = 'none'
      } else {
        document.getElementById(state).style.display = 'block'
      }
      if (oldclickState !== state) {
        if (oldclickState !== ' ') {
          document.getElementById(oldclickState).style.display = 'none'
        }
//      $.alert(oldclickState) 测试
        oldclickState = state
      }
    }
  }
}
</script>

<style type="text/css">
.line {
  font-size: 0.8rem;
  color:#17a9ff;
 
  }
  .line2{
  	display: none;
  	color: #3d4145; 
  	font-size: 0.8rem;
  	padding-left:0.7rem;
  	vertical-align:middle;
  }
</style>


