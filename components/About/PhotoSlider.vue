<template>
  <vue-easy-lightbox
    v-if="loaded"
    :visible="visible"
    :imgs="imgs"
    :index="index"
    @hide="handleHide"
  />
  <v-container>
    <h4 class="use-text-title2 mb-3">
      {{ $t('common.about_gallery') }}
    </h4>
    <p class="use-text-subtitle2">
      Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <div v-if="loaded" class="carousel">
      <v-btn
        icon
        size="small"
        variant="text"
        class="nav prev"
        @click="slickPrev()"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <splide
        ref="slider"
        :options="slickOptions"
      >
        <splide-slide
          v-for="(index) in 6"
          :key="index"
        >
          <div
            class="item px-3"
            @click="() => showImg(index)"
            @keydown.enter="() => showImg(index)"
          >
            <media-card
              title="Sed lacinia velit, ut malesuada eros interdum a"
              orientation="portrait"
              type="photo"
              thumb="https://source.unsplash.com/random/?nice"
            />
          </div>
        </splide-slide>
      </splide>
      <v-btn
        icon
        variant="text"
        size="small"
        class="nav next"
        @click="slickNext()"
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
@import './about-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import MediaCard from '../Cards/MediaCard';

export default {
  components: {
    MediaCard,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      visible: false,
      index: 0,
      item: 0,
      loaded: false,
      imgs: [
        'https://source.unsplash.com/random/?nice',
        'https://source.unsplash.com/random/?nice',
        'https://source.unsplash.com/random/?nice',
        'https://source.unsplash.com/random/?nice',
        'https://source.unsplash.com/random/?nice',
        'https://source.unsplash.com/random/?nice',
      ],
      slickOptions: {
        pagination: false,
        arrows: false,
        perPage: 3,
        perMove: 1,
        type: 'loop',
        reducedMotion: {
          autoplay: true,
          speed: 500,
          rewindSpeed: 1000,
        },
        breakpoints: {
          800: {
            perPage: 2,
          },
          600: {
            perPage: 1,
          },
        },
      },
    };
  },
  mounted() {
    this.loaded = true;
  },
  methods: {
    slickNext() {
      this.$refs.slider.go('>');
    },
    slickPrev() {
      this.$refs.slider.go('<');
    },
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>
