<template>
  <div class="banner-wrap">
    <div class="carousel">
      <splide ref="splide" :options="slickOptions" @splide:active="handleAfterChange">
        <splide-slide v-for="(index) in 3" :key="index">
          <div class="slide">
            <div class="inner">
              <v-container>
                <v-row>
                  <v-col sm="7" lg="6" cols="12">
                    <div class="text">
                      <h4 class="use-text-title">
                        {{ $t('starter.banner_title') }}
                      </h4>
                      <h5 class="use-text-subtitle2">
                        {{ $t('starter.banner_subtitle') }}
                      </h5>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
              <div class="img">
                <img src="/images/starter/Illustration.png" alt="illustration">
              </div>
            </div>
          </div>
        </splide-slide>
      </splide>
    </div>
    <hidden point="mdDown">
      <v-container class="max-md">
        <nav class="slide-nav">
          <v-btn
            :class="{ active: currentSlide === 0 }"
            variant="text"
            @click="gotoSlide(0)"
          >
            <strong>First Slide</strong>
            Interdum et malesuada fames ac ante
          </v-btn>
          <v-divider class="divider" vertical inset />
          <v-btn
            :class="{ active: currentSlide === 1 }"
            variant="text"
            @click="gotoSlide(1)"
          >
            <strong>Second Slide</strong>
            Interdum et malesuada fames ac ante
          </v-btn>
          <v-divider class="divider" vertical inset />
          <v-btn
            :class="{ active: currentSlide === 2 }"
            variant="text"
            @click="gotoSlide(2)"
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
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Hidden from '../Hidden';

export default {
  components: {
    Splide,
    SplideSlide,
    Hidden,
  },
  data() {
    return {
      currentSlide: 0,
      slickOptions: {
        pagination: false,
        arrows: false,
        perPage: 1,
        type: 'loop',
        autoplay: false,
        interval: 10000,
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
          autoplay: true,
        },
        breakpoints: {
          800: {
            pagination: true,
          },
        },
      },
    };
  },
  methods: {
    handleAfterChange(slide) {
      this.currentSlide = slide.index;
    },
    gotoSlide(index) {
      this.$refs.splide.go(index);
    },
  },
};
</script>
