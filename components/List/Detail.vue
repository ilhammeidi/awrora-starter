<template>
  <vue-easy-lightbox
    v-if="loaded"
    :visible="visible"
    :imgs="imgs"
    :index="index"
    @hide="handleHide"
  />
  <v-row justify="center">
    <v-col lg="4" sm="5" cols="12" class="pa-md-6">
      <div class="carousel">
        <splide
          ref="slick"
          :options="slickOptions"
        >
          <splide-slide
            v-for="index in 6"
            :key="index"
          >
            <div
              class="image"
              @click="() => showImg(index)"
              @keydown.enter="() => showImg(index)"
            >
              <div class="figure">
                <v-img
                  v-ripple
                  cover
                  :src="imgAPI.photo[0]"
                  class="image-detail"
                  height="200px"
                />
                <v-icon class="zoom-icon">
                  mdi-magnify-plus-outline
                </v-icon>
              </div>
            </div>
          </splide-slide>
        </splide>
      </div>
    </v-col>
    <v-col lg="6" sm="7" cols="12" class="pa-6 px-md-10">
      <div class="text">
        <h4 class="use-text-title2">
          <span class="use-text-subtitle2">Vivamus sit amet</span>
          The Lorem Ipsum Dolor Sit Amet
        </h4>
        <div class="property">
          <div class="star">
            <v-icon
              v-for="index in 5"
              :key="index"
              class="star-icon"
            >
              mdi-star
            </v-icon>
          </div>
          5.0<span class="divider" />213 Sales
        </div>
        <article class="desc">
          <h6 class="use-text-paragraph">
            Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus.
          </h6>
        </article>
        <div class="btn-area">
          <v-btn href="#" size="large" variant="text" class="text-btn">
            {{ $t('common.list_whislist') }}
          </v-btn>
          <v-btn href="#" size="large" class="button" color="primary">
            {{ $t('common.list_cart') }}
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
@import './list.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data: () => ({
    loaded: false,
    visible: false,
    index: 0,
    item: 0,
    imgAPI,
    imgs: [
      imgAPI.photo[0],
      imgAPI.photo[0],
      imgAPI.photo[0],
      imgAPI.photo[0],
      imgAPI.photo[0],
      imgAPI.photo[0],
    ],
    slickOptions: {
      pagination: true,
      arrows: false,
      perPage: 1,
      direction: 'rtl',
      reducedMotion: {
        autoplay: true,
        speed: 500,
        rewindSpeed: 1000,
      },
    },
  }),
  computed: {
    isMobile() {
      const xsDown = this.$vuetify.display.xs;
      return xsDown;
    },
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
    showImg(index) {
      console.log('ancur2an');
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>
