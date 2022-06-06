<template>
  <fragment>
    <vue-easy-lightbox
      v-if="loaded"
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    />
    <v-row justify="center">
      <v-col lg="4" sm="5" cols="12" class="pa-md-6">
        <div class="carousel" v-if="loaded">
          <slick
            ref="slick"
            :options="slickOptions"
          >
            <div
              v-for="index in 6"
              :key="index"
              class="image"
              @click="() => showImg(index)"
            >
              <div class="figure">
                <v-img
                  :src="imgAPI.photo[0]"
                  class="image-detail"
                  height="200px"
                  v-ripple
                />
                <v-icon class="zoom-icon">mdi-magnify-plus-outline</v-icon>
              </div>
            </div>
          </slick>
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
            5.0<span class="divider"></span>213 Sales
          </div>
          <article class="desc">
            <h6 class="use-text-paragraph">
              Maecenas nisl libero, tincidunt id odio id, feugiat vulputate quam. Vestibulum feugiat rhoncus metus.
            </h6>
          </article>
          <div class="btn-area">
            <v-btn href="#" text class="text-btn" >
              {{ $t('common.list_whislist') }}
            </v-btn>
            <v-btn href="#" class="button primary">
              {{ $t('common.list_cart') }}
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </fragment>
</template>

<style lang="scss" scoped>
@import './list.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    Slick: () => import('vue-slick')
  },
  data: () => ({
    loaded: false,
    visible: false,
    index: 0,
    item: 0,
    imgAPI: imgAPI,
    imgs: [
      imgAPI.photo[0],
      imgAPI.photo[0],
      imgAPI.photo[0],
      imgAPI.photo[0],
      imgAPI.photo[0],
      imgAPI.photo[0]
    ],
    slickOptions: {
      dots: true,
      arrows: false,
      slidesToShow: 1,
      infinite: false,
      autoplay: false
    }
  }),
  mounted() {
    this.loaded = true
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  },
  methods: {
    showImg(index) {
      console.log('ancur2an')
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  }
}
</script>
