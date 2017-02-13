	<template>
    <div class="container">
    	  
        <header class="bar bar-nav">
		  		<a class="button button-link button-nav pull-left back" href="#" @click="back()">
    			<span class="icon icon-left"></span>
  				</a>
		    	<h1 class="title">服务协议</h1>
		</header>
		<div class="content font-padding">
	       <form id="uploadFormcaptex" method="post" action="/v1/wechatapi/uploadcarimage" enctype="multipart/form-data" s>
           <input style="display:none;" accept="image/*"  capture="camera" id="jfile_captex"  type="file" name="fromfile" />
           <input name="ajaxuploadbtn" id="ajaxupload_captex" type="button" value="ajax upload" accept="image/*" @click="selectFile()"/>
        </form>
          
           <input id="txtUploadUrl" type="button" value="testupload" @click="selectFile()" />
          <!-- <input type="file" name="file"  capture="camera" id="tt">
           -->
		</div>          
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import $ from 'zepto'
import wx from 'wx'
export default {
  data () {
    return {
      appid: '',
      timestamp: '',
      nonceStr: '',
      signature: ''
    }
  },
   computed: {
    // 获取用户信息
    ...mapGetters({
      userInfo: 'USR_UserInfo',
      config: 'WXSDK_Config'
    })
    // 设置初始化先生小姐尊称
  },
   methods: {
    back () {
      console.log('submit appointment')
      this.$router.push({ name: 'usercenter' })
    },
    selectFile() {
      this.$store.dispatch('WXSDK_SelectUploadImage')
    }
  },
  mounted () {
    // 测试
    this.appid = this.config.AppId
    this.timestamp = this.config.Timestamp
    this.nonceStr = this.config.NonceStr
    this.signature = this.config.Signature
    // console.log('appid= ' + this.appid + ' ' + 'timestamp= ' + this.timestamp + ' ' + 'nonceStr= ' + this.nonceStr + ' ' + 'signature= ' + this.signature)
    $('#txtUploadUrl').on('click', function () {
        wx.config({
            debug: true,
            appId: 'wxe4a99ca44cd05338',
            timestamp: 1486715944,
            nonceStr: '563b90e8ade61dbfd7615c55176920c8',
            signature: '06816df975a7173acdd09a6aadfa43213118e861',
            jsApiList: [
                'checkJsApi',
                'chooseImage',
                'previewImage',
                'uploadImage',
                'downloadImage'
                ]
        })
        wx.ready(function () {
            wx.checkJsApi({
            jsApiList: ['chooseImage'],
            success: function (res) {
                wx.chooseImage({
                count: 1,
                sourceType: ['album', 'camera'],
                sizeType: ['compressed'],
                success: function (res) {
                    alert('success *******' + JSON.stringify(res))
                },
                fail: function (res) {
                    alert('fail****' + JSON.stringify(res))
                }
                })
            }
        })
        })
    })
  }
}
</script>
<style>
.page{background: #FFF !important;}
.container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.font-padding{
	padding: 1em;
	font-size: 0.75rem;
}
.font-bottom{
	padding-bottom: 2em;
}
.font-left{
	text-indent: 2em;
	margin-top: 0;
}

</style>
