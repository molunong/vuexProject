<template>
  <div class="container">
  <header class="bar bar-nav">
      <h1 class="title">预约订单详情</h1>
  </header>
  </div>
</template>

<script>
import $ from 'zepto'

export default {
  mounted () {
    $.init()
  },
  data () {
    return {
      isIndex: false
    }
  }
}
</script>