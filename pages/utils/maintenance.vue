<template>
  <v-container class="max-md">
    <div class="full-screen-container">
      <v-row align="center">
        <v-col md="12" class="text-center">
          <section>
            <v-icon :small="isMobile" class="maintenance-icon">mdi-wrench</v-icon>
            <v-icon :small="isMobile" class="maintenance-icon">mdi-cog</v-icon>
            <v-icon :small="isMobile" class="maintenance-icon">mdi-alert</v-icon>
          </section>
          <div class="text-center">
            <h3 class="use-text-title2">
              {{ $t('common.util_maintenance') }}
            </h3>
            <h5 class="use-text-subtitle2">
              {{ $t('common.util_maintenance_dec') }}
            </h5>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
@import '~/assets/pages.scss';
</style>

<script>
import brand from '~/static/text/brand'

export default {
  head() {
    return {
      title: brand.starter.name + ' - Maintenance'
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
