<template>
  <v-container class="fixed-width">
    <div class="root">
      <img
        v-for="(logo, index) in logos"
        :key="index"
        :src="logo"
        :alt="'logo' + index"
      >
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
@import './logo-style.scss';
</style>

<script>
export default {
  data() {
    return {
      logos: [
        '/images/logos/architect.png',
        '/images/logos/cloud.png',
        '/images/logos/coin.png',
        '/images/logos/mobile.png',
        '/images/logos/profile.png',
        '/images/logos/saas.png'
      ]
    }
  }
}
</script>
