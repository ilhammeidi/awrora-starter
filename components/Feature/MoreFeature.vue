<template>
  <div class="feature-more">
    <v-container>
      <v-row id="feature1" class="feature-item">
        <v-col
          md="6"
          class="px-6"
          cols="12"
        >
          <div
            data-aos="fade-left"
            data-aos-duration="600"
          >
            <h3 class="text-center text-md-start use-text-title mb-6">
              Lorem ipsum dolor
            </h3>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="600"
          >
            <p class="text-center text-md-start">
              Quos blanditiis tenetur unde suscipit,
              quam beatae rerum inventore consectetur,
              neque doloribus.
            </p>
          </div>
        </v-col>
        <v-col
          md="6"
          class="px-6"
          cols="12"
        >
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="600"
          >
            <div class="deco1" />
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="600"
          >
            <figure class="img">
              <img
                :src="imgAPI.photo[5]"
                alt="img"
              >
            </figure>
          </div>
        </v-col>
      </v-row>
      <v-row class="feature-item">
        <v-col
          :order="isTablet ? 'last' : 'first'"
          md="6"
          class="px-6"
          cols="12"
        >
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="600"
          >
            <div class="deco1" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="600"
          >
            <figure class="img">
              <img
                :src="imgAPI.photo[0]"
                alt="img"
              >
            </figure>
          </div>
        </v-col>
        <v-col
          :order="isTablet ? 'first' : 'last'"
          md="6"
          class="px-6"
          cols="12"
        >
          <div
            data-aos="fade-left"
            data-aos-duration="600"
          >
            <h3 class="text-center text-md-start use-text-title mb-6 display-2">
              Lorem ipsum dolor
            </h3>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="600"
          >
            <p class="text-center text-md-start text">
              Quos blanditiis tenetur unde suscipit,
              quam beatae rerum inventore consectetur,
              neque doloribus.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          md="12"
          class="px-6"
          cols="12"
        >
          <div class="last text-center">
            <div
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <h3 class="use-text-title mb-6 display-2">
                Lorem ipsum dolor
              </h3>
            </div>
            <div
              data-aos="fade-up"
              duration="0.6s"
              delay="0.3s"
            >
              <p class="text">
                Quos blanditiis tenetur unde suscipit,
                quam beatae rerum inventore consectetur,
                neque doloribus.
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              <div class="deco2" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="500"
            >
              <figure class="img-full">
                <img
                  :src="imgAPI.photo[1]"
                  alt="img"
                >
              </figure>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import './feature-styles';
</style>

<script>
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';

export default {
  data() {
    return {
      imgAPI,
    };
  },
  computed: {
    isTablet() {
      const mdDown = this.$vuetify.display.smAndDown;
      return mdDown;
    },
  },
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
