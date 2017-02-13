<template>
		<div class="addcar">
				<div class="list-block">
					<ul>
						<li>
							<div class="item-content">
					            <div class="item-inner">
					              <div class="item-title label" style="text-align: right;">车牌号：</div>
					              <div class="item-input">
					                <input type="text" placeholder="车牌号" id="number-picker" v-model="createcarinfo.CarNumber" >
					              </div>
					            </div>
				          	</div>
						</li>
						<li>
							<div class="item-content">
				            	<div class="item-inner">
				                <div class="item-title label" style="text-align: right;">品牌：</div>
				                <div class="item-input">
				                <input type="text" placeholder="类型" id="model-picker"  ref="modelchoose">			                	
				                </div>
				            	</div>
				          </div>
						</li>
						<li>
							<div class="item-content">
					            <div class="item-inner">
					              <div class="item-title label" style="text-align: right;">颜色：</div>
					              <div class="item-input">
					                <input type="text" id='color-picker' placeholder="颜色" v-model="createcarinfo.CarColor" ref="colorchoose"/>
					              </div>
					            </div>
				          	</div>
						</li>
						<li>
							<div class="item-content">
					            <div class="item-inner">
					              <div class="item-title label" style="text-align: right;">上传相片：</div>					              
					              <div style="color:#0894EC; font-size:12px;">
								    <form id="uploadFormcaptex" method="post" action="/v1/wechatapi/uploadcarimage" enctype="multipart/form-data">
							            <input style="display:none;" accept="image/*"  capture="camera" id="jfile_captex"  type="file" name="fromfile" />
							            <input name="ajaxuploadbtn" @click="selectFile()" id="ajaxupload_captex" type="button" value="ajax upload" />
							            <input id="txtUploadUrl" type="hidden" />
        							</form>
           <input id="txtUploadUrl" type="button" value="testupload" @click="selectFile()" />
					              </div>					             
					            </div>
				          	</div>
						</li>
					</ul>
				</div>				
			    
			    <div class="content-block" style="margin-top: 10px;">
			      <div class="row">
			        <div class="col-100" >
			        	<a href="#" @click="submitAppointment()" style="background-color:blue; margin-left:50px;margin-right:50px;" class="button button-big button-fill button-success">
			        		新增
			        	</a>
			        </div>
			      </div>
			    </div>			    
			</div>
</template>

<script>
import $ from 'zepto'
import typePicker from '../assets/js/car'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      userInfo: 'USR_UserInfo',
      addnewcar: 'USR_AddNewCar'
    })
  },
  props: ['msg'],
  mounted () {
    $('#color-picker').picker({
      toolbarTemplate: '<header class="bar bar-nav"> <button class="button button-link pull-right close-picker">确定</button> <h1 class="title">请选择车辆颜色</h1> </header>',
      cols: [{
        textAlign: 'center',
        values: ['黑色', '红色', '白色', '灰色', '黄色', '橙色', '紫色', '蓝色', '绿色']
      }]
    })
    // 选择车辆的品牌 型号
    $('#model-picker').typePicker({
      toolbarTemplate: '<header class="bar bar-nav"> <button class="button button-link pull-right close-picker">确定</button> <h1 class="title">请选择车辆品牌</h1> </header>'
    })
  },
  methods: {
    submitAppointment () {
        this.createcarinfo.CarBrand = this.$refs.modelchoose.value.split(' ')[0]
        this.createcarinfo.CarModel = this.$refs.modelchoose.value.split(' ')[1] + ' ' + this.$refs.modelchoose.value.split(' ')[2]
        this.createcarinfo.CarColor = this.$refs.colorchoose.value
        this.createcarinfo.UserId = this.userInfo.Id
        this.createcarinfo.WechatMpOid = this.userInfo.WechatMpOid
        console.log('**************', this.createcarinfo)
        console.log('userId=', this.userInfo.Id)
        if (this.createcarinfo.CarBrand === '' || this.createcarinfo.CarColor === '' || this.createcarinfo.CarModel === '' || this.createcarinfo.CarNumber === '') {
            $.alert('请将信息输入完整')
        } else {
            // $.alert('发送请求成功')
            this.$store.dispatch('USR_GetUserAddNewCar', this.createcarinfo)
            // this.$router.push({ name: this.msg })
        }
    },
    selectFile() {
      this.$store.dispatch('WXSDK_SelectUploadImage')
    }
    },
  component: {
    typePicker
  },
  data () {
    return {
      createcarinfo: {
        'CarColor': '', // 颜色
        'CarImage': '', // 图片
        'CarBrand': '', // 品牌
        'CarModel': '', // 型号
        'CarNumber': '', // 车牌
        'Id': 0
        // 'UserId': this.Id,
        // 'WechatMpOid': this.WechatMpOid // openid
      },
      uploadname: ''
    }
  }
}
</script>
<style scoped>
.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.icon-camera{background-image:url("../../static/img/dudu-add.png");background-size:100%}
.LUploader{padding:5px;text-align:center;border-radius:4px;border:1px dashed #dedde2;background:#ffffff;height:70px;position:relative}.LUploader input[data-LUploader]{display:none}
.LUploader .icon{font-size:20px;margin:1.5rem auto 5px auto;width:1em;height:1em;display:block}
.LUploader p{padding:0 0 20px 0;font-size:13px;color:#afb1b4}
.LUploader .LUploader-container{height:100%}
.LUploader .LUploader-container+div{position:absolute;top:0;left:0;width:100%;height:100%}
.LUploader .LUploader-list{height:100%}
.LUploader .LUploader-list li{position:relative;display:inline-block;width:100%;height:100%;background:#fff no-repeat center;background-size:cover}
.LUploader .LUploader-progress{position:absolute;width:100%;height:20px;line-height:20px;bottom:0;left:0;background-color:rgba(100,149,198,0.5)}
.LUploader .LUploader-progress span{display:block;width:0;height:100%;background-color:#6495c6;text-align:center;color:#FFF;font-size:13px}
.LUploader .LUploader-size{position:absolute;width:100%;height:15px;line-height:15px;bottom:-18px;text-align:center;font-size:13px;color:#666}
</style>
