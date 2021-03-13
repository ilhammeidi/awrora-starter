<template>
  <div class="error-wrap">
    <v-container class="max-md">
      <v-row align="center">
        <v-col cols="12" md="5">
          <div class="flex">
            <div class="illustration">
              <img src="/images/starter/Illustration.png" alt="illustration" />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="7">
          <div class="text">
            <h3>
              {{ errCode }}
            </h3>
            <h4 class="display-1">{{ text }}</h4>
            <p>
              {{ $t('common.404_subtitle') }}
            </p>
            <v-btn
              :href="link.starter.home"
              outlined
              color="primary"
              large
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
import link from '~/static/text/link'

export default {
  data() {
    return {
      link: link
    }
  },
  props: {
    errCode: {
      type: Number,
      default: 404
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
