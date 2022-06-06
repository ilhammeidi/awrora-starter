<template>
  <div class="banner-wrap">
    <div class="carousel" v-if="loaded">
      <slick
        ref="slider"
        :options="slickOptions"
        @afterChange="handleAfterChange"
      >
        <div class="slide" v-for="(index) in 3" :key="index">
          <div class="inner">
            <v-container>
              <v-row>
                <v-col sm="7" lg="6" cols="12">
                  <div class="text">
                    <h4 class="text-h4">{{ $t('starter.banner_title') }}</h4>
                    <h5 class="text-h5">{{ $t('starter.banner_subtitle') }}</h5>
                  </div>
                </v-col>
              </v-row>
            </v-container>
            <div class="img">
              <img src="/images/starter/Illustration.png" alt="illustration" />
            </div>
          </div>
        </div>
      </slick>
    </div>
    <hidden point="mdDown">
      <v-container class="max-md">
        <nav class="slide-nav">
          <v-btn
            :class="{ active: currentSlide === 0 }"
            @click="gotoSlide(0)"
            text
          >
            <strong>First Slide</strong>
            Interdum et malesuada fames ac ante
          </v-btn>
          <v-divider class="divider" vertical inset />
          <v-btn
            :class="{ active: currentSlide === 1 }"
            @click="gotoSlide(1)"
            text
          >
            <strong>Second Slide</strong>
            Interdum et malesuada fames ac ante
          </v-btn>
          <v-divider class="divider" vertical inset />
          <v-btn
            :class="{ active: currentSlide === 2 }"
            @click="gotoSlide(2)"
            text
          >
            <strong>Third Slide</strong>
            Interdum et malesuada fames ac ante
          </v-btn>
        </nav>
      </v-container>
    </hidden>
  </div>
</template>

<style scoped lang="scss">
@import './slider-styles';
</style>

<script>
import Hidden from '../Hidden'

export default {
  components: {
    Hidden,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      currentSlide: 0,
      slickOptions: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 10000,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              dots: true
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleAfterChange(event, slick, currentSlide) {
      this.currentSlide = currentSlide
    },
    gotoSlide(index) {
      this.$refs.slider.goTo(index)
    }
  }
}
</script>
