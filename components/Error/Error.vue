<template>
  <div class="error-wrap">
    <v-container class="max-md">
      <v-row align="center">
        <v-col cols="12" md="5">
          <div class="flex">
            <div class="illustration">
              <img src="/images/starter/Illustration.png" alt="illustration">
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="7">
          <div class="text">
            <h1 class="text-h1 font-weight-bold">
              {{ errCode }}
            </h1>
            <h4 class="use-text-title2">
              {{ text }}
            </h4>
            <p>
              {{ $t('common.404_subtitle') }}
            </p>
            <v-btn
              :href="link.starter.home"
              variant="outlined"
              color="primary"
              size="large"
              class="button"
            >
              {{ $t('common.back') }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './error-style.scss';
</style>

<script>
import link from '@/assets/text/link';

export default {
  props: {
    errCode: {
      type: Number,
      default: 404,
    },
    text: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      link,
    };
  },
};
</script>
