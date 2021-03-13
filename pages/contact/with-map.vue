<template>
  <div>
    <main-header />
    <div class="space-top">
      <contact-map />
    </div>
    <main-footer />
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/pages';
</style>

<script>
import brand from '~/static/text/brand'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import ContactMap from '~/components/Forms/ContactMap'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    ContactMap
  },
  head() {
    return {
      title: brand.starter.name + ' - Contact with Map'
    }
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
