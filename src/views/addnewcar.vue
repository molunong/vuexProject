<template>
	<div class="container">
    		<header class="bar bar-nav">
		  		<a class="button button-link button-nav pull-left back" @click="back()">
    			<span class="icon icon-left"></span>
  				</a>
		    	<h1 class="title">新增汽车</h1>
			</header>			
			<div class="content">
				<addcar :msg="urls"></addcar>		
			</div>			
    </div>
           
     <!--import '../assets/js/angular-upload'-->
        
</template>

<script>
import typePicker from '../assets/js/car'
import Addcar from '../components/Addcar'
export default {
  components: {
    typePicker,
    Addcar
  },
  data () {
    return {
      urls: 'carlist'
    }
  },
  methods: {
    back () {
      this.$router.push({ name: 'carlist' })
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
</style>
