<template>
  <span :class="type" class="logo">
    <img :src="logo" alt="logo" />
    {{ type !== 'only' ? brand.starter.name : '' }}
  </span>
</template>

<style scoped lang="scss">
@import './logo-style.scss';
</style>

<script>
import logo from '~/static/images/starter-logo.svg'
import brand from '~/static/text/brand'

export default {
  data() {
    return {
      brand: brand,
      logo: logo
    }
  },
  props: {
    type: {
      type: String,
      default: 'only'
    }
  }
}
</script>
