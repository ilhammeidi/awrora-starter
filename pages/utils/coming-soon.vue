<template>
  <v-container class="max-md">
    <div class="full-screen-container">
      <v-row align="center">
        <v-col md="12" class="text-center">
          <div class="logo d-flex justify-center align-center mb-10">
            <img
              :src="logo"
              alt="logo"
              width="64"
            />
            <h2 class="ps-3 use-text-subtitle">
              {{ brand.starter.name }}
            </h2>
          </div>
          <div class="text-center">
            <h3 class="use-text-title">
              {{ $t('common.util_soon') }}
            </h3>
            <h5 class="use-text-subtitle2" :class="{ 'mb-10': isDesktop}">
              {{ $t('common.util_soon_desc') }}
            </h5>
            <div class="form" :class="{ 'mb-15': isDesktop}">
              <v-row justify="center">
                <v-col sm="8" cols="12">
                  <v-text-field :label="$t('common.form_email')">
                    <template v-if="isDesktop" #append>
                      <v-btn outlined class="mb-2">
                        {{ $t('common.util_notif') }}
                      </v-btn>
                    </template>
                  </v-text-field>
                  <v-btn v-if="!isDesktop" outlined class="mb-2">
                    {{ $t('common.util_notif') }}
                  </v-btn>
                </v-col>
              </v-row>
            </div>
            <div class="socmed-btn mt-10">
              <v-btn icon large href="#">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon large href="#">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon large href="#">
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
              <v-btn icon large href="#">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </div>
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
import logo from '~/static/images/starter-logo.svg'
import brand from '~/static/text/brand'

export default {
  data() {
    return {
      logo: logo,
      brand: brand
    }
  },
  head() {
    return {
      title: brand.starter.name + ' - Coming Soon'
    }
  },
  computed: {
    isDesktop() {
      const smUp = this.$store.state.breakpoints.smUp
      return smUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
