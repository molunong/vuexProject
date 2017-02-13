<template>
  <router-link class="tab-item" :to="{name: name, path: path, activeClass: 'active', replace: true}">
    <span class="icon" :class="iconClass"></span>
    <span class="tab-label" v-text="label"></span>
  </router-link>
</template>

<script>
export default {
  props: {
    name: '',
    path: '',
    icon: '',
    label: ''
  },
  computed: {
    iconClass () {
      return `icon-${this.icon}`
    }
  }
}
</script>
