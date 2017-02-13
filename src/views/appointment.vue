<template>
 <div class="container">
  <header class="bar bar-nav">
      <h1 class="title">现在开始预约洗车</h1>
  </header>
  
  <slider :banner="banner"></slider>
  <!--<mapcom :showmap="showmap" v-on:GetSelectLocation="getLocation"></mapcom>-->

  <div class="content" style='margin-top: 160px; padding-bottom: 1.5rem;'>

    <div class="list-block" style="margin-bottom: 10px; padding-bottom:10px;">
      <ul>
        <li style="position: relative;">
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-name"></i></div>
            <div class="item-inner">
              <div class="item-title label">尊称 :</div>
              <div class="item-input">
                <input type="text" maxlength="5" placeholder="姓名" v-model="info.CnName" ref="textname">
                <input type="text" id='picker-name' ref="textcall" style="position: absolute;top: 0.5rem;  right: 1.9rem; width: 2rem; height: 1.4rem;">
              </div>
            </div>
          </div>
        </li>
         <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-name"></i></div>
            <div class="item-inner">
              <div class="item-title label">手机 :</div>
              <div class="item-input">
                <input  maxlength="11" type="text" id='mobile' placeholder="请输入手机号" v-model="info.UserMobile">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-name"></i></div>
            <div class="item-inner">
              <div class="item-title label" >车辆 :</div>
              <div class="item-input">
                <input type="text" id='picker-car' v-model="getUserCasr[0]"  placeholder="请选择车辆"  ref="textcar" style="position: relative;">
                	<div class="show-adress confirm-ok-cancel" style="right:2.2rem">
                		<!-- 这个a用作跳转用,,,极为重要 -->
                		<a  href="#" class="open-popup is-link-a" data-popup=".popup-car"></a>
                		<img  src="/static/img/addcar.png"     style="height: 0.9rem; margin: 6px 0px 0px 12px;" >
                    </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-name"></i></div>
            <div class="item-inner">
              <div class="item-title label">时间 :</div>
              <div class="item-input">
                <input type="text" id='datetime-picker' class="textShowTime" placeholder="预约洗车时间" ref="texttime">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-name"></i></div>
            <div class="item-inner">
              <div class="item-title label">地点 :</div>
              <div class="item-input">
                <input type="text" disabled="disabled" id='address' placeholder="" v-model="nowAddress" style="position: relative;width: 8rem; background: #fff;">
                <div class="show-adress" @click="showAdress()" style="right:2.2rem;">
               		<a  href="#" class="open-popup is-link-a" data-popup=".popup-map"></a>
                   <img class="show-adress" src="../../static/img/adress.jpg"  style="width: 0.9rem; margin: -4px -13px 0px 0px;"/>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-media"><i class="icon icon-form-toggle"></i></div>
            <div class="item-inner">
              <div class="item-title label">保养 :</div>
              <div class="item-input">
                <label class="label-switch">
                  <input type="checkbox">
                  <div class="checkbox" @click="selectUpkeep"></div>
                </label>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
   <!--<input v-model="info.CnName" />-->
    <!--{{userInfo}}-->
    <div class="content-block" style="margin-top: 10px;">
      <div class="row">
        <div class="col-100" ><a href="#" @click="submitAppointment()" style="background-color:blue; margin-left:50px;margin-right:50px;" class="button button-big button-fill button-success">提交预约</a></div>
      </div>
      <div class="row" style="height: 1rem;">
      </div>
    </div>
  </div>

	<!-- About Popup -->
	<div class="popup popup-car">
	  <div class="content-block" >
	  	<header class="bar bar-nav">
		  		<a class="button button-link button-nav pull-right close-popup">关闭</a>
		    	<h1 class="title">新增汽车</h1>
		</header>
	  	<addcar></addcar>
	  </div>
	</div>
	
  <div class="popup popup-map">
    <a class="icon pull-left close-popup" style="position: absolute;top: 50px;left: 10px;">返回</a>
    <iframe id="mapPage" width="100%" height="100%" frameborder=0 
      src="http://apis.map.qq.com/tools/locpicker?search=1&type=1&key=MXABZ-FZECF-XONJW-JW67M-VYB26-ATB6F&referer=myapp">
    </iframe> 
  </div>
	<!-- About Popup stop-->
	<!-- 设置用于接受第一次登陆系统时间的隐藏input-->
    <input  type="text" v-show="false" v-model="timeFormate" id="timeFormate"/>
    <!-- 设置用于接受改变时间后的时间戳input-->
    <input  type="text"  v-show="false"  id="changeTime" ref="changeTime" v-model="info.SubscribeDt"/>
  </div>
</template>

<script>
import Slider from '../components/Slider'
// import mapcom from '../components/MapCom'
import Addcar from '../components/Addcar'
import $ from 'zepto'
import { mapGetters } from 'vuex'
import { deepCopy } from '../util/util'
const dateTime = new Date(new Date().getTime() + 2040000)
const timestamp = Date.parse(new Date()) / 1000 + 2040
var phonenumber = false
export default {
  data () {
    return {
      showmap: false,
      oDate: dateTime,
      timeFormate: '',
      month: '',
      day: '',
      hour: '',
      mini: '',
      banner: [],
      sex: ['先生', '女士'],
      info: {}
    }
  },
  computed: {
    // 获取用户信息
    ...mapGetters({
      nowLatitude: 'WXSDK_NowLatitude',
      nowLongitude: 'WXSDK_NowLongitude',
      nowAddress: 'WXSDK_NowAddress',
      userInfo: 'USR_UserInfo',
      userCarList: 'USR_CarList',
      washOrderInfo: 'WO_WashOrderInfo',
      getUserCasr: 'USR_CarNumber'
    })
  },
  watch: {
    // 监听数据变化跳转页面
    washOrderInfo: 'test', deep: true
  },
  methods: {
    test () {
      // 跳转支付页面
      this.$router.push({ name: 'userpay' })
      setTimeout(function () {
         $.hidePreloader()
      }, 500)
    },
    //  提交表单
    submitAppointment () {
      // 获取数据传递给info
      this.info.UserCarNumber = this.$refs.textcar.value
      this.info.SubscribeDt = Number(this.$refs.changeTime.value)
      if (this.$refs.textcall.value === '女士') {
        this.info.UserSex = 2
      } else {
        this.info.UserSex = 1
      }
      console.log('info=', JSON.stringify(this.info))
      //  报错数据
      let ER_MSG = {Address: "预约地址不完整", CnName: '请输用户姓名', SubscribeDt: '预约时间不完整', UserCarNumber: '预约车牌号不完整', UserSex: '用户性别不完整', UserMobile: '请输入电话号码', WechatMpOid: '微信ID缺失', UserId: '用户ID缺失', OrderFrom: '订单来源不明确', Longitude: '地址经度不完整', Latitude: '地址纬度不完整'}
      let flag = true
      // 循环判断
      for (let infokey in this.info) {
         if (this.info[infokey] === '' || this.info[infokey] === 0) {
           $.alert(ER_MSG[infokey])
           // 设置flag
           flag = false
           return
         }
      }
      if (flag && phonenumber) {
           // 验证成功开始动画
           $.showPreloader()
           // 验证成功后提交预约
           this.$store.dispatch('WO_CreateWashOrder', this.info)
           return
      } else {
           // 提示电话号码错误
           $.alert('请重新输入', '电话号码格式不正确')
           return
      }
    },
    //  更改车辆保养状态
    selectUpkeep () {
      if (this.info.OtherServiceId === 1) {
        this.info.OtherServiceId = 2
      } else {
        this.info.OtherServiceId = 1
      }
    },
    showAdress () {
      this.showmap = !this.showmap
    }
  },
  mounted () {
    // this.info = deepCopy(this.washOrderInfo)
    console.log('carlist=', this.userCarList)
   // 获取地图start
    window.addEventListener('message', function (event) {
      // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
      var loc = event.data
      // 防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
      if (loc && loc.module === 'locationPicker') {
        console.log('------------location------------', loc)
        var addressinfo = {}
        addressinfo.address = loc.poiname
        addressinfo.latitude = loc.latlng.lat
        addressinfo.longitude = loc.latlng.lng
        this.$store.dispatch('WXSDK_GetLocationFromMap', addressinfo)
        this.info.Address = loc.poiname
        this.info.Latitude = loc.latlng.lat
        this.info.Longitude = loc.latlng.lng
        document.getElementsByClassName('popup-map')[0].style.display = 'none'
      }
    }.bind(this), false)
    //  查询微信地址
    if (this.userInfo.Id !== 0 && this.nowLatitude === 0) {
      this.$store.dispatch('WXSDK_GetLocation')
    }
    //  查询车牌列表
   if (this.userInfo.Id !== 0 && this.getUserCasr.length === 0) {
     this.$store.dispatch('USR_GetUserCarList', this.userInfo.WechatMpOid)
    }
     // 调整月日时分
    if (this.oDate.getMonth() >= 10) { this.month = this.oDate.getMonth() + 1 } else { this.month = '0' + (this.oDate.getMonth() + 1) }
    if (this.oDate.getDate() >= 10) { this.day = this.oDate.getDate() } else { this.day = '0' + (this.oDate.getDate()) }
    if (this.oDate.getHours() >= 10) { this.hour = this.oDate.getHours() } else { this.hour = this.oDate.getHours() }
    if (this.oDate.getMinutes() >= 10) { this.mini = this.oDate.getMinutes() } else { this.mini = '0' + (this.oDate.getMinutes()) }
    // 第一次进入时间
    this.timeFormate = this.oDate.getFullYear() + '-' + this.month + '-' + this.day + ' ' + this.hour + ':' + this.mini
    // 从vuex 中拿到数据传递到info中
    if (this.info.Sex === 2) {
      this.$refs.textcall.value = '女士'
    } else {
      this.$refs.textcall.value = '先生'
    }
    if (this.info.UserMobile !== '') {
       phonenumber = true
    }
    var _this = this
    $('#datetime-picker').datetimePicker({
      // 嵌入jQuery代码操作时间改变的问题
      toolbarTemplate: '<header class="bar bar-nav"> <button class="button button-link pull-right close-picker" id="locktime">确定</button> <h1 class="title">请选择时间</h1> </header>' +
      '<' + 'script' + '>' +
      '$("#locktime").click(function () { ' +
      // 当前系统时间
      ' var dateTimeNow = new Date().getTime(); ' +
      // 修改后的时间
      ' var dateTimeText = $(".textShowTime").val(); ' +
      ' var timestamp2 = Date.parse(new Date(dateTimeText));' +
      ' if(timestamp2 - dateTimeNow < 1800000) { $.alert("预约时间不能小于当前时间半小时"); $(".textShowTime").val("' + _this.timeFormate + '");}' +
      ' else if(timestamp2 - dateTimeNow >86400000*10){$.alert("预约时间不能超过10天");$(".textShowTime").val("' + _this.timeFormate + '")} else {$("#changeTime").val(timestamp2/1000)}' +
      '})' +
      '<' + '/script>',
      // 设置初始化时间
      value: [this.oDate.getFullYear(), this.month, this.day, this.hour, this.mini]
    })
    // 验证移动手机号码
    $('#mobile').blur(function () {
      var isMobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|(14[0-9]{1}))+\d{8})$/
      var phone = $(this).val()
      if (phone !== '' && !isMobile.test(phone)) {
        $.alert('请重新输入', '电话号码格式不正确')
        phonenumber = false
        return
      } else {
        phonenumber = true
        return
      }
    })
    $('#picker-name').picker({
      toolbarTemplate: '<header class="bar bar-nav"> <button class="button button-link pull-right close-picker">确定</button> <h1 class="title">请选择称呼</h1> </header>',
      cols: [{
        textAlign: 'center',
        values: this.sex
      }]
    })
    $('#picker-car').picker({
      toolbarTemplate: '<header class="bar bar-nav"> ' +
      '<button class="button button-link pull-right close-picker" >确定</button> <h1 class="title">请选择您的爱车</h1> </header>',
      cols: [{
        textAlign: 'center',
        values: this.getUserCasr
      }]
    })
    $.init()
  },
  //  专门用于转存数据的updated生命周期
  beforeUpdate () {
    this.info.CnName = deepCopy(this.userInfo.CnName)
    this.info.UserId = deepCopy(this.userInfo.Id)
    this.info.WechatMpOid = deepCopy(this.userInfo.WechatMpOid)
    this.info.UserMobile = deepCopy(this.userInfo.MobilePhone)
    this.info.UserSex = deepCopy(this.userInfo.Sex)
    this.info.SubscribeDt = timestamp
    this.info.OrderFrom = 1
    this.info.OtherServiceId = 1
    this.info.Address = deepCopy(this.nowAddress)
    this.info.Latitude = deepCopy(this.nowLatitude)
    this.info.Longitude = deepCopy(this.nowLongitude)
  },
  components: {
    Slider,
    Addcar
  }
}
</script>

<style>
.show-adress{
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    right: 0.6rem;
    top: 0.4rem;
}
.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.home {
  top: -2.2rem !important;
}
.home-bar {
  background: #efeff4;
  height: 2.8rem;
  position: relative;
  box-shadow: 0 .01rem .05rem rgba(0,0,0,.3);
}
.home-bar .tab-item {
  height: 2.8rem;
  background-color: white;
}
.popup-overlay{
	z-index: 0 !important;
}
.is-link-a{
	z-index: 800;
	display: block;
	width: 100%;
	height: 100%;
	position: absolute;
	background: transparent;
}
</style>
