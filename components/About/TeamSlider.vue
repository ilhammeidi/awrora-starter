<template>
  <div class="bg-wrapper team-root">
    <v-container>
      <h4 class="use-text-title2 mb-3">
        {{ $t('common.about_team') }}
      </h4>
      <p class="use-text-subtitle2">
        Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </v-container>
    <div class="carousel mt-15">
      <splide
        ref="slick"
        :options="slickOptions"
      >
        <splide-slide
          v-for="(index) in 6"
          :key="index"
        >
          <div class="item px-3">
            <profile-card
              :connection="100"
              :favorites="10"
              :albums="12"
              cover="https://source.unsplash.com/random/?nice"
              name="John Dalton"
              title="Web Designer"
              type="full"
              orientation="landscape"
              avatar="/images/avatars/pp_girl3.svg"
            />
          </div>
        </splide-slide>
      </splide>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './about-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import ProfileCard from '../Cards/ProfileCard';

export default {
  components: {
    ProfileCard,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      slickOptions: {
        pagination: true,
        arrows: false,
        perPage: 2,
        perMove: 1,
        autoWidth: true,
        direction: 'ltr',
        reducedMotion: {
          autoplay: true,
          speed: 500,
          rewindSpeed: 1000,
        },
        breakpoints: {
          600: {
            perPage: 1,
          },
        },
      },
    };
  },
};
</script>
