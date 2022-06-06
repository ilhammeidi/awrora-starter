<template>
  <div class="page-wrap">
    <v-container class="inner-wrap">
      <div class="auth-frame">
        <v-row>
          <v-col md="6" class="px-sm-6 px-2" cols="12">
            <v-card class="form-box fragment-fadeUp">
              <div class="form-wrap">
                <slot />
              </div>
            </v-card>
          </v-col>
          <v-col md="6" class="px-6" cols="12">
            <hidden point="smDown">
              <div class="greeting">
                <h4 class="use-text-title2 pb-2">
                  {{ title }}
                </h4>
                <h6 class="use-text-subtitle2">
                  {{ subtitle }}
                </h6>
                <div class="img">
                  <img v-if="type === 'login'" src="/images/starter/Illustration.png" alt="illustration" />
                  <img v-else src="/images/starter/Illustration.png" alt="illustration" />
                </div>
              </div>
            </hidden>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './form-style.scss';
</style>

<script>
import brand from '~/static/text/brand'
import routerLink from '~/static/text/link'
import Hidden from '../Hidden'

export default {
  components: {
    Hidden
  },
  data() {
    return {
      brand: brand,
      routerLink: routerLink
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  }
}
</script>
