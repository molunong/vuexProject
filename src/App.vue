<template>
  <div class="page page-current">
      <bar v-if="isIndex">
        <bar-item name="appointment" path="/appointment" label="预约洗车" icon="home"></bar-item>
        <bar-item name="usercenter" path="/usercenter" label="会员中心" icon="me"></bar-item>
      </bar>
      <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>

<script>
import Bar from './components/Bar'
import BarItem from './components/BarItem'
import store from './vuex/store'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      isIndex: true
    }
  },
  computed: {
    ...mapGetters({
      //  获取最全局的订单信息
      washOrderInfo: 'WO_WashOrderInfo'
    })
  },
  methods: {
    pathWash () {
      alert('根据订单状态跳转不同页')
      let state = this.washOrderInfo.OrderState
      if (state === 'WAITPAY') {
        this.$router.push({ name: 'userpay' })
      } else if (state === 'WAITTING' || state === 'READY' || state === 'PROGRESS') {
        this.$router.push({ name: 'washcomplete' })
      } else {
        this.$router.push({ name: 'appointment' })
      }
    }
  },
  components: {
    Bar,
    BarItem
  },
  store
}
</script>

<style>
@import './assets/css/sm.css';
[v-cloak] {
  display: none;
}
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
.content-padded{
	padding-bottom: 4rem;
}
</style>
