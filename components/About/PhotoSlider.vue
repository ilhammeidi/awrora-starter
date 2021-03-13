<template>
  <fragment>
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
      <p>Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <div class="carousel" v-if="loaded">
        <v-btn
          icon
          class="nav prev"
          @click="slickPrev()"
        >
          <v-icon large>mdi-arrow-left</v-icon>
        </v-btn>
        <slick
          ref="slider"
          :options="slickOptions"
        >
          <div
            v-for="(index) in 6"
            :key="index"
            class="item px-3"
            @click="() => showImg(index)"
          >
            <media-card
              title="Sed lacinia velit, ut malesuada eros interdum a"
              orientation="portrait"
              type="photo"
              thumb="https://source.unsplash.com/random"
            />
          </div>
        </slick>
        <v-btn
          icon
          class="nav next"
          @click="slickNext()"
        >
          <v-icon large>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </v-container>
  </fragment>
</template>

<style scoped lang="scss">
@import './about-style.scss';
</style>

<script>
import MediaCard from '../Cards/MediaCard'

export default {
  components: {
    MediaCard,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      visible: false,
      index: 0,
      item: 0,
      loaded: false,
      imgs: [
        'https://source.unsplash.com/random',
        'https://source.unsplash.com/random',
        'https://source.unsplash.com/random',
        'https://source.unsplash.com/random',
        'https://source.unsplash.com/random',
        'https://source.unsplash.com/random'
      ],
      slickOptions: {
        dots: false,
        arrows: false,
        slidesToShow: 3,
        infinite: true,
        autoplay: false,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
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
    slickNext() {
      this.$refs.slider.next()
    },
    slickPrev() {
      this.$refs.slider.prev()
    },
    showImg(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  }
}
</script>
