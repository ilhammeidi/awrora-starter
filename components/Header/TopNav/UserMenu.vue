<template>
  <nav class="user-menu">
    <v-btn
      :href="link.starter.login"
      v-if="isDesktop"
      text
    >
      {{ $t('common.login') }}
    </v-btn>
    <v-btn
      v-if="isDesktop"
      :href="link.starter.register"
      color="primary"
    >
      {{ $t('common.register') }}
    </v-btn>
    <v-spacer
      v-if="isDesktop"
      class="vertical-divider"
    />
    <setting-menu />
  </nav>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
import link from '~/static/text/link'
import Settings from './Settings'

export default {
  data() {
    return {
      link: link
    }
  },
  components: {
    'setting-menu': Settings
  },
  computed: {
    isDesktop() {
      const smUp = this.$store.state.breakpoints.smUp
      return smUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
