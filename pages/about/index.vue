<template>
  <div class="main-wrap">
    <main-header />
    <banner />
    <div class="space-top-short">
      <company-logo />
    </div>
    <counter />
    <div class="space-top-short">
      <v-container>
        <v-row>
          <v-col md="6" cols="12" class="px-md-12">
            <about-video />
          </v-col>
          <v-col md="6" cols="12" class="px-md-12">
            <about-progress />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="space-bottom-short">
      <team-slider />
    </div>
    <div class="space-bottom-short">
      <photo-slider />
    </div>
    <call-action />
    <div class="space-top-short">
      <contact-map full />
    </div>
    <div id="footer">
      <main-footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/pages';
</style>

<script>
import brand from '~/static/text/brand'
import Header from '~/components/Header'
import Banner from '~/components/About/Banner'
import CompanyLogo from '~/components/CompanyLogo'
import Counter from '~/components/Counter'
import Video from '~/components/About/Video'
import Progress from '~/components/About/Progress'
import TeamSlider from '~/components/About/TeamSlider'
import PhotoSlider from '~/components/About/PhotoSlider'
import CallAction from '~/components/CallAction'
import ContactMap from '~/components/Forms/ContactMap'
import Footer from '~/components/Footer'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Banner,
    CompanyLogo,
    Counter,
    'about-progress': Progress,
    'about-video': Video,
    TeamSlider,
    PhotoSlider,
    CallAction,
    ContactMap
  },
  head() {
    return {
      title: brand.starter.name + ' - About'
    }
  }
}
</script>
