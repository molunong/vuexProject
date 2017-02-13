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
		<p class="font-left">感谢您使用嘟嘟洗车服务！嘟嘟洗车服务是广西禧乐泰科技有限责任公司以“嘟嘟洗车”作为服务品牌，基于其运营和管理的汽车后服务市场移动互联网平台而提供的服务，包括但不限于洗车、汽车美容以及不时推出的其他汽车服务。</p>
    		<p class="font-left">本协议是您与广西禧乐泰科技有限责任公司在中华人民共和国（“中国”，为本协议之目的，不包括香港、澳门和台湾地区）南宁市西乡塘区签订的协议。“嘟嘟洗车”包括广西禧乐泰科技有限责任公司、广西禧乐泰科技有限责任公司的子公司、分公司或其他为该等主体提供服务的第三方。“您”是指登陆嘟嘟洗车应用程序（“APP”）并使用嘟嘟洗车服务的用户。为使用嘟嘟洗车服务，您应当首先阅读并遵守《服务协议》（“本协议”）。</p>
    		<p class="font-left">请您务必审慎阅读、充分理解本协议各条款，特别是免除或者限制嘟嘟洗车责任的条款。您登陆APP即视为您已阅读并同意本协议的约束。如果您不同意本协议，您应立即停止登陆APP或停止使用嘟嘟洗车服务。</p>
			<h3>
			<b>一、服务内容</b>
			</h3>
			<ol>
			<li>本协议项下的服务是指嘟嘟洗车向您提供上门洗车、汽车美容等汽车服务（“本服务”）。广西禧乐泰科技有限责任公司对本协议拥有最终的解释权。</li>
			<li>为避免歧义，广西禧乐泰科技有限责任公司与您在此确认，您在登陆APP并使用本服务时，您仅可在您使用的移动设备定位的城市使用本服务，本服务不得跨区域使用。</li>
			<li>洗车服务指对服务车辆的外侧漆面及门窗进行清洗，不包括轮毂及内饰等美容服务，如有需要请另行选择。</li>
			</ol>
			
			<h3>
			<b>二、服务资费</b>
			</h3>
			<ol>
			<li>嘟嘟洗车服务是收费服务，具体收费标准以广西禧乐泰科技有限责任公司在其APP服务页面公布的价格为准。</li>
			<li>广西禧乐泰科技有限责任公司有权不时根据其实际运营情况对收费标准、方式等进行修改和调整而不经另行通知您，具体以广西禧乐泰科技有限责任公司在APP服务页面公布的内容为准。一旦您使用本服务，即视为您已同意并接受上述调整后的收费标准及方式。</li>
			</ol>
			
			<h3>
			<b>三、APP</b>
			</h3>	
			<ol>
			<li>您在使用本服务时首先需要下载APP，对于该等APP，广西禧乐泰科技有限责任公司授予您一项个人的、不可转让及非排他性的许可。您仅可为访问或使用本服务的目的而使用该等APP。</li>
			<li>为了改善用户体验并保证服务的安全性，广西禧乐泰科技有限责任公司可能会不时对APP进行更新。您应该将APP更新到最新版本，否则广西禧乐泰科技有限责任公司不保证其正常使用性。</li>
			</ol>
			
			<h3>
			<b>四、知识产权</b></h3>
			<ol>
			<li>广西禧乐泰科技有限责任公司的任何软件、程序、内容，包括但不限于APP、嘟嘟洗车在本服务中所使用的“嘟嘟洗车”，广西禧乐泰科技有限责任公司在本服务中提供的文字、图片，其知识产权均归广西禧乐泰科技有限责任公司所有。</li>
			<li>上述及其他任何本服务包含的内容的知识产权均受到法律保护，未经广西禧乐泰科技有限责任公司事先书面许可，任何人不得以任何形式侵犯广西禧乐泰科技有限责任公司的合法权益。</li>
			</ol>
			
			<h3>
			<b>五、隐私保护</b>
			</h3>
			<ol>
			<li>嘟嘟洗车尊重并保护用户隐私。嘟嘟洗车在收集、使用、储存和分享的您的个人信息时将严格按照本协议及相关法律法规的规定执行。嘟嘟洗车将运用各种安全技术手段来保护您的个人信息，以免遭受未经授权的访问、使用或披露。</li>
			<li>除以下情形外，嘟嘟洗车不会将您的个人信息转移或披露给任何非关联的第三方：</li>
			<ol type="a">
			<li>相关法律法规或法院、政府机关要求；</li>
			<li>为完成合并、分立、收购或资产转让而转移；</li>
			<li>为提供您要求的服务所必需。</li></ol>
			</ol>
			
			<h3>
			<b>六、不可抗力及其他免责事由</b>
			</h3>
			<ol>
			<li>您理解并同意，在使用本服务的过程中，可能会遇到不可抗力使本服务发生中断。不可抗力是指不能预见、不能避免并且不能克服的客观事件，包括但不限于洪水、地震、海啸、瘟疫流行、风暴、战争、动乱、黑客攻击、政府行为。出现上述情况时，嘟嘟洗车将努力在第一时间与您配合，在不可抗力因素消除后尽快为您提供服务，但是由此给您造成的损失嘟嘟洗车在法律允许的范围内免责。</li>
			<li>在法律允许的范围内，嘟嘟洗车对以下情形导致的服务中断或受阻不承担责任：</li>
			<ol type="a">
			<li>受到计算机病毒、木马或其他恶意程序、黑客攻击的破坏；</li>
			<li>用户或嘟嘟洗车的网络、终端设备、系统或硬件出现故障；</li>
			<li>用户操作不当；</li>
			<li>其他嘟嘟洗车无法控制或合理预见的情形。</li>
			</ol>
			<li>广西禧乐泰科技有限责任公司需要定期或不定期地对APP或相关设备进行检修或者维护，如因此造成本服务在合理时间内中断，广西禧乐泰科技有限责任公司无需为此承担任何责任。广西禧乐泰科技有限责任公司保留不经事先通知为维修保养、升级或其它目的暂停全部或部分服务的权利。</li>
			<li>嘟嘟洗车在此声明，在任何情况下，嘟嘟洗车均不会向出租车公司、租车公司或专车公司提供任何服务。您已予以理解并同意。</li>
			</ol>
			
			<h3>
			<b>七、法律适用与争议解决</b>
			</h3>
			<ol>
			<li>本协议的订立、效力、解释、履行及争议解决均适用中国法律。</li>
			<li>凡因执行本协议所发生的或与本协议有关的一切争议，首先应友好协商解决；协商不成的，任何一方有权将争议提交广西禧乐泰科技有限责任公司住所地有管辖权的人民法院管辖。</li>
			</ol>
			<h3>
			<b>八、其他</b>
			</h3>
			<ol>
			<li>广西禧乐泰科技有限责任公司有权根据法律法规的变化及运营需要不时修改本协议而无需事先通知您，您可以随时在APP 相关服务页面查阅最新版本的服务协议。若您不同意本协议的修改，您应立即停止登陆、使用APP和/或本服务；否则，视为您同意并接受广西禧乐泰科技有限责任公司对本协议的任何修改。</li>
			<li>本协议所有条款的标题仅为阅读方便，本身并无实际涵义，不能作为本协议涵义解释的依据。</li>
			<li>本协议条款无论因何种原因部分无效或不可执行，其余条款仍有效，对双方具有约束力。</li>
			<li class="font-bottom">本协议的最终解释权归广西禧乐泰科技有限责任公司所有。</li>
			</ol>
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
