<template>
  <div class="main-wrap">
    <v-container class="max-md">
      <div class="full-screen-container">
        <v-row align="center">
          <v-col md="12" class="text-center">
            <div class="logo d-flex justify-center align-center mb-10">
              <img
                :src="logo"
                alt="logo"
                width="64"
              >
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
                    <v-text-field
                      :label="$t('common.form_email')"
                      :elevation="0"
                      color="secondary"
                      filled
                      class="input-field"
                    >
                      <template v-if="isDesktop" #append-inner>
                        <v-btn variant="outlined">
                          {{ $t('common.util_notif') }}
                        </v-btn>
                      </template>
                    </v-text-field>
                    <v-btn v-if="!isDesktop" block variant="outlined" class="mb-2">
                      {{ $t('common.util_notif') }}
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
              <div class="socmed-btn mt-10">
                <v-btn variant="text" icon size="large" href="#">
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn variant="text" icon size="large" href="#">
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
                <v-btn variant="text" icon size="large" href="#">
                  <v-icon>mdi-instagram</v-icon>
                </v-btn>
                <v-btn variant="text" icon size="large" href="#">
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/pages.scss';
</style>

<script>
import logo from '@/assets/images/starter-logo.svg';
import brand from '@/assets/text/brand';

export default {
  data() {
    return {
      logo,
      brand,
    };
  },
  head() {
    return {
      title: brand.starter.name + ' - Coming Soon',
    };
  },
  computed: {
    isDesktop() {
      const smUp = this.$vuetify.display.smAndUp;
      return smUp;
    },
  },
};
</script>
