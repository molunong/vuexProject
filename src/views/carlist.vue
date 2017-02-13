<template>
    <div class="container">
    		<header class="bar bar-nav">
		  		<a class="button button-link button-nav pull-left back" @click="back()">
    			<span class="icon icon-left"></span>
  				</a>
		    	<h1 class="title">我的车辆</h1>
			</header>
			<div class="content" style="padding-bottom: 1.5rem;">
				<div v-for="item in userCarList" class="list-block" style="margin: 0.75rem 0;">
					<ul>
						<li>
							<div class="item-inner" style="padding: 0;border: 0.05rem solid #ddd !important;">
				              <div class="item-title label" style="margin: 0;padding: 0;border-right: 0.05rem solid #ccc;">
				              	<img src="/static/img/dudu-mycar.png" style="width: 100%;">
				              	<!--{{item.CarImage}}-->
				              </div>
				              <div class="item-input" style="margin: 0;height: 100%;display: block;">
				                <ul style="padding-left: 0.4rem;">
				                	<li>车牌号：{{item.CarNumber}}</li>
								          <li>品牌：{{item.CarBrand}}</li>
								          <li>型号：{{item.CarModel}}</li>
				                	<li>颜色：{{item.CarColor}}</li>
				                </ul>
				              </div>
				              <div style="margin-right: 0.3rem;">
				              	<p><a href="#" class="button" @click="delectcar(item.Id)">删除</a></p>
				              </div>
				            </div>
						</li>
					</ul>
					
				</div>
				
				<div class="content-block" style="margin-top: 10px;">
				  <div class="row">
				    <div class="col-100" ><a @click="submitAppointment()" style="background-color:blue; margin-left:50px;margin-right:50px;" class="button button-big button-fill button-success">新增车辆</a></div>
				    <div class="col-100" ><a @click="testModel()" style="background-color:blue; margin-left:50px;margin-right:50px;" class="button button-big button-fill button-success">测试一</a></div>
				  </div>
				</div>
			</div>
			
      <mapcom :showmap="showmap"></mapcom>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import mapcom from '../components/MapCom'
import $ from 'zepto'
export default {
  data () {
    return {
      carlist: [],
      showmap: false
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'USR_UserInfo',
      userCarList: 'USR_CarList'
    })
  },
  components: {
    mapcom
  },
  methods: {
    testModel () {
      this.showmap = !false
    },
    submitAppointment () {
      this.$router.push({ name: 'addnewcar' })
    },
    back () {
      console.log('submit appointment')
      this.$router.push({ name: 'usercenter' })
    },
    delectcar (carid) {
      this.$http.post('/v1/wechatapi/deletecarinfo?oid=' + this.userInfo.WechatMpOid + '&id=' + carid).then((data) => {
        $.alert('删除成功')
      })
      // this.$http.post('/v1/wechatapi/getusercarlist?oid=' + this.userInfo.WechatMpOid).then(({data}) => {
        // console.log(data)
        // this.carlist = data
        // console.log(this.carlist)
      // })
      // this.$store.dispatch('USR_GetUserCarList')
    }
  },
  mounted () {
    console.log('carlist=', this.userCarList)
    var oid = this.userInfo.WechatMpOid
    console.log('oid=', oid)
    if (this.userCarList || this.userCarList.lenght === 0) {
       this.$store.dispatch('USR_GetUserCarList', oid)
    }
  }
}
</script>
<style>
.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>
